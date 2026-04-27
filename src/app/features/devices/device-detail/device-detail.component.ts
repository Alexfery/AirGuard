import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ViewChild, ElementRef, signal
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {
  Chart, LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Legend, Tooltip, Filler
} from 'chart.js';
import { Subscription } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';
import { SocketService, SensorData } from '../../../core/services/socket.service';
import { Device } from '../../../core/services/mock-data.service';
import { AirQualityCardComponent } from '../../dashboard/air-quality-card/air-quality-card.component';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip, Filler);

@Component({
  selector: 'app-device-detail',
  standalone: true,
  imports: [
    CommonModule, DatePipe, RouterLink, ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule,
    MatChipsModule, MatDividerModule, MatTooltipModule, MatSelectModule,
    AirQualityCardComponent,
  ],
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('historyCanvas') historyCanvasRef!: ElementRef<HTMLCanvasElement>;

  deviceId = '';
  device = signal<Device | undefined>(undefined);
  isLoading = signal(true);
  latestReading = signal<SensorData | null>(null);
  previousReading = signal<SensorData | null>(null);

  settingsForm = this.fb.group({
    co2Threshold: [1000],
    pm25Threshold: [25],
    windowMode: ['auto'],
  });

  private chart: Chart | null = null;
  private sub: Subscription | null = null;
  private historyLabels: string[] = [];
  private historyData: Record<string, number[]> = { co2: [], pm25: [], temperature: [], humidity: [] };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private socketService: SocketService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.deviceId = this.route.snapshot.paramMap.get('id') || '';
    this.loadDevice();
    this.sub = this.socketService.sensorData$.subscribe(data => {
      if (data.deviceId === this.deviceId) {
        this.previousReading.set(this.latestReading());
        this.latestReading.set(data);
        this.addHistoryPoint(data);
      }
    });
  }

  ngAfterViewInit() {
    this.loadHistory();
  }

  private loadDevice() {
    this.apiService.getDevice(this.deviceId).subscribe({
      next: device => {
        this.device.set(device);
        if (device) {
          this.settingsForm.patchValue({
            co2Threshold: device.co2Threshold,
            pm25Threshold: device.pm25Threshold,
            windowMode: device.windowMode,
          });
        }
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  private loadHistory() {
    const to = new Date();
    const from = new Date(to.getTime() - 24 * 60 * 60 * 1000);
    this.apiService.getHistory(this.deviceId, from, to).subscribe(entries => {
      const sample = entries.filter((_, i) => i % 4 === 0).slice(-30);
      sample.forEach(e => {
        this.historyLabels.push(new Date(e.timestamp).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' }));
        this.historyData['co2'].push(e.co2);
        this.historyData['pm25'].push(e.pm25);
        this.historyData['temperature'].push(e.temperature);
        this.historyData['humidity'].push(e.humidity);
      });
      this.initChart();
    });
  }

  private initChart() {
    if (!this.historyCanvasRef) return;
    const ctx = this.historyCanvasRef.nativeElement.getContext('2d');
    if (!ctx) return;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.historyLabels,
        datasets: [
          { label: 'CO₂ (ppm)', data: this.historyData['co2'], borderColor: '#26c6da', backgroundColor: 'rgba(38,198,218,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: 'PM2.5', data: this.historyData['pm25'], borderColor: '#ff9800', backgroundColor: 'rgba(255,152,0,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: 'Temp (°C)', data: this.historyData['temperature'], borderColor: '#4caf50', backgroundColor: 'rgba(76,175,80,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', maxTicksLimit: 10, font: { size: 10 } } },
          y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', font: { size: 10 } } }
        },
        plugins: {
          legend: { labels: { color: '#e8eaf6', font: { size: 11 } } },
          tooltip: { backgroundColor: 'rgba(26,35,50,0.95)', titleColor: '#26c6da', bodyColor: '#e8eaf6' }
        }
      }
    });
  }

  private addHistoryPoint(data: SensorData) {
    const label = new Date(data.timestamp).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.historyLabels.push(label);
    this.historyData['co2'].push(data.co2);
    this.historyData['pm25'].push(data.pm25);
    this.historyData['temperature'].push(data.temperature);
    this.historyData['humidity'].push(data.humidity);
    if (this.historyLabels.length > 50) {
      this.historyLabels.shift();
      Object.values(this.historyData).forEach(d => d.shift());
    }
    this.chart?.update('none');
  }

  toggleWindow() {
    const device = this.device();
    if (!device) return;
    const newState = !device.windowOpen;
    this.apiService.updateDevice(device.id, { windowOpen: newState }).subscribe(updated => {
      this.device.set(updated);
      this.snackBar.open(`Fereastra ${newState ? 'deschisă' : 'închisă'}`, 'OK', { duration: 3000 });
    });
  }

  saveSettings() {
    const device = this.device();
    if (!device) return;
    const values = this.settingsForm.value;
    this.apiService.updateDevice(device.id, {
      co2Threshold: values.co2Threshold ?? device.co2Threshold,
      pm25Threshold: values.pm25Threshold ?? device.pm25Threshold,
      windowMode: (values.windowMode as 'auto' | 'manual') ?? device.windowMode,
    }).subscribe(() => {
      this.snackBar.open('Setări salvate', 'OK', { duration: 3000 });
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.chart?.destroy();
  }
}
