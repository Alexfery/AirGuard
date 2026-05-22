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
import { Device, Prediction } from '../../../core/services/mock-data.service';
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
  @ViewChild('predictionsCanvas') predictionsCanvasRef!: ElementRef<HTMLCanvasElement>;

  deviceId = '';
  device = signal<Device | undefined>(undefined);
  isLoading = signal(true);
  latestReading = signal<SensorData | null>(null);
  previousReading = signal<SensorData | null>(null);
  predictions = signal<Prediction[]>([]);

  settingsForm = this.fb.group({
    co2Threshold: [1000],
    tvocThreshold: [500],
    pm25Threshold: [25],
    tempThresholdMin: [16],
    tempThresholdMax: [30],
    humidityThresholdMin: [30],
    humidityThresholdMax: [70],
    windowMode: ['auto'],
    fanMode: ['manual'],
    humidifierMode: ['manual'],
  });

  private historyChart: Chart | null = null;
  private predictionsChart: Chart | null = null;
  private sub: Subscription | null = null;
  private historyLabels: string[] = [];
  private historyValues: Record<string, number[]> = {
    co2Ppm: [], pm25Ugm3: [], temperatureC: [],
  };

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
    this.loadPredictions();
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
            tvocThreshold: device.tvocThreshold,
            pm25Threshold: device.pm25Threshold,
            tempThresholdMin: device.tempThresholdMin,
            tempThresholdMax: device.tempThresholdMax,
            humidityThresholdMin: device.humidityThresholdMin,
            humidityThresholdMax: device.humidityThresholdMax,
            windowMode: device.windowMode,
            fanMode: device.fanMode,
            humidifierMode: device.humidifierMode,
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
        this.historyValues['co2Ppm'].push(e.co2Ppm);
        this.historyValues['pm25Ugm3'].push(e.pm25Ugm3);
        this.historyValues['temperatureC'].push(e.temperatureC);
      });
      this.initHistoryChart();
    });
  }

  private loadPredictions() {
    this.apiService.getPredictions(this.deviceId).subscribe(preds => {
      this.predictions.set(preds);
      if (preds.length) this.initPredictionsChart(preds);
    });
  }

  private initHistoryChart() {
    if (!this.historyCanvasRef) return;
    const ctx = this.historyCanvasRef.nativeElement.getContext('2d');
    if (!ctx) return;
    this.historyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.historyLabels,
        datasets: [
          { label: 'CO₂ (ppm)', data: this.historyValues['co2Ppm'], borderColor: '#26c6da', backgroundColor: 'rgba(38,198,218,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: 'PM2.5 (μg/m³)', data: this.historyValues['pm25Ugm3'], borderColor: '#ff9800', backgroundColor: 'rgba(255,152,0,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: 'Temp (°C)', data: this.historyValues['temperatureC'], borderColor: '#4caf50', backgroundColor: 'rgba(76,175,80,0.1)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
        ]
      },
      options: this.chartOptions(),
    });
  }

  private initPredictionsChart(preds: Prediction[]) {
    if (!this.predictionsCanvasRef) return;
    const ctx = this.predictionsCanvasRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const sorted = [...preds].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    const labels = sorted.map(p => new Date(p.timestamp).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' }));

    if (this.predictionsChart) {
      this.predictionsChart.data.labels = labels;
      this.predictionsChart.data.datasets[0].data = sorted.map(p => p.predCo2);
      this.predictionsChart.data.datasets[1].data = sorted.map(p => p.predPm25);
      this.predictionsChart.data.datasets[2].data = sorted.map(p => p.predTemperature);
      this.predictionsChart.update();
    } else {
      this.predictionsChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'CO₂ pred (ppm)', data: sorted.map(p => p.predCo2), borderColor: '#26c6da', backgroundColor: 'rgba(38,198,218,0.07)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2, borderDash: [5, 3] },
            { label: 'PM2.5 pred (μg/m³)', data: sorted.map(p => p.predPm25), borderColor: '#ff9800', backgroundColor: 'rgba(255,152,0,0.07)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2, borderDash: [5, 3] },
            { label: 'Temp pred (°C)', data: sorted.map(p => p.predTemperature), borderColor: '#4caf50', backgroundColor: 'rgba(76,175,80,0.07)', tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2, borderDash: [5, 3] },
          ]
        },
        options: this.chartOptions(),
      });
    }
  }

  private chartOptions() {
    return {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', maxTicksLimit: 10, font: { size: 10 } } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', font: { size: 10 } } }
      },
      plugins: {
        legend: { labels: { color: '#e8eaf6', font: { size: 11 } } },
        tooltip: { backgroundColor: 'rgba(26,35,50,0.95)', titleColor: '#26c6da', bodyColor: '#e8eaf6' }
      }
    };
  }

  private addHistoryPoint(data: SensorData) {
    const label = new Date(data.timestamp).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.historyLabels.push(label);
    this.historyValues['co2Ppm'].push(data.co2Ppm);
    this.historyValues['pm25Ugm3'].push(data.pm25Ugm3);
    this.historyValues['temperatureC'].push(data.temperatureC);
    if (this.historyLabels.length > 50) {
      this.historyLabels.shift();
      Object.values(this.historyValues).forEach(d => d.shift());
    }
    this.historyChart?.update('none');
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

  toggleFan() {
    const device = this.device();
    if (!device) return;
    const newState = !device.fanOn;
    this.apiService.setFan(device.id, newState).subscribe(() => {
      this.device.update(d => d ? { ...d, fanOn: newState } : d);
      this.snackBar.open(`Ventilator ${newState ? 'pornit' : 'oprit'}`, 'OK', { duration: 3000 });
    });
  }

  toggleHumidifier() {
    const device = this.device();
    if (!device) return;
    const newState = !device.humidifierOn;
    this.apiService.setHumidifier(device.id, newState).subscribe(() => {
      this.device.update(d => d ? { ...d, humidifierOn: newState } : d);
      this.snackBar.open(`Umidificator ${newState ? 'pornit' : 'oprit'}`, 'OK', { duration: 3000 });
    });
  }

  saveSettings() {
    const device = this.device();
    if (!device) return;
    const v = this.settingsForm.value;
    this.apiService.updateDevice(device.id, {
      co2Threshold: v.co2Threshold ?? device.co2Threshold,
      tvocThreshold: v.tvocThreshold ?? device.tvocThreshold,
      pm25Threshold: v.pm25Threshold ?? device.pm25Threshold,
      tempThresholdMin: v.tempThresholdMin ?? device.tempThresholdMin,
      tempThresholdMax: v.tempThresholdMax ?? device.tempThresholdMax,
      humidityThresholdMin: v.humidityThresholdMin ?? device.humidityThresholdMin,
      humidityThresholdMax: v.humidityThresholdMax ?? device.humidityThresholdMax,
      windowMode: (v.windowMode as 'auto' | 'manual') ?? device.windowMode,
      fanMode: (v.fanMode as 'auto' | 'manual') ?? device.fanMode,
      humidifierMode: (v.humidifierMode as 'auto' | 'manual') ?? device.humidifierMode,
    }).subscribe(() => {
      this.snackBar.open('Setări salvate', 'OK', { duration: 3000 });
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.historyChart?.destroy();
    this.predictionsChart?.destroy();
  }
}
