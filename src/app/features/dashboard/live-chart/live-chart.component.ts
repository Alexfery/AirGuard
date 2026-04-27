import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ViewChild, ElementRef, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  Chart,
  LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Legend, Tooltip, Filler
} from 'chart.js';
import { Subscription } from 'rxjs';
import { SocketService, SensorData } from '../../../core/services/socket.service';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip, Filler);

interface ChartDataset {
  key: 'co2' | 'pm25' | 'temperature';
  label: string;
  color: string;
}

const DATASETS: ChartDataset[] = [
  { key: 'co2', label: 'CO₂ (ppm)', color: '#26c6da' },
  { key: 'pm25', label: 'PM2.5 (μg/m³)', color: '#ff9800' },
  { key: 'temperature', label: 'Temperatură (°C)', color: '#4caf50' },
];

@Component({
  selector: 'app-live-chart',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss']
})
export class LiveChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvasRef!: ElementRef<HTMLCanvasElement>;

  activeMetrics = signal<Set<string>>(new Set(['co2', 'pm25', 'temperature']));
  datasetDefs = DATASETS;

  private chart: Chart | null = null;
  private sub: Subscription | null = null;
  private readonly MAX_POINTS = 20;

  private labels: string[] = [];
  private dataBuffers: Record<string, number[]> = { co2: [], pm25: [], temperature: [] };

  constructor(private socketService: SocketService) {}

  ngAfterViewInit() {
    this.initChart();
    this.sub = this.socketService.sensorData$.subscribe(data => this.addPoint(data));
  }

  private initChart() {
    const ctx = this.chartCanvasRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: DATASETS.map(ds => ({
          label: ds.label,
          data: this.dataBuffers[ds.key],
          borderColor: ds.color,
          backgroundColor: ds.color + '18',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true,
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 200 },
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: '#90a4ae', maxTicksLimit: 8, font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: '#90a4ae', font: { size: 11 } }
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(26,35,50,0.95)',
            titleColor: '#26c6da',
            bodyColor: '#e8eaf6',
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
            padding: 10,
          }
        }
      }
    });
  }

  private addPoint(data: SensorData) {
    const time = new Date(data.timestamp).toLocaleTimeString('ro-RO', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    this.labels.push(time);
    this.dataBuffers['co2'].push(data.co2);
    this.dataBuffers['pm25'].push(data.pm25);
    this.dataBuffers['temperature'].push(data.temperature);

    if (this.labels.length > this.MAX_POINTS) {
      this.labels.shift();
      Object.values(this.dataBuffers).forEach(buf => buf.shift());
    }

    this.chart?.update('none');
  }

  toggleMetric(key: string) {
    const current = new Set(this.activeMetrics());
    current.has(key) ? current.delete(key) : current.add(key);
    this.activeMetrics.set(current);

    const idx = DATASETS.findIndex(d => d.key === key);
    if (idx !== -1 && this.chart) {
      this.chart.getDatasetMeta(idx).hidden = !current.has(key);
      this.chart.update();
    }
  }

  isActive(key: string): boolean {
    return this.activeMetrics().has(key);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.chart?.destroy();
  }
}
