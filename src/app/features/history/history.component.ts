import {
  Component, OnInit, AfterViewInit, OnDestroy,
  ViewChild, ElementRef, signal
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Chart, LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Legend, Tooltip, Filler
} from 'chart.js';

import { ApiService } from '../../core/services/api.service';
import { HistoryEntry } from '../../core/services/mock-data.service';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip, Filler);

const DEVICE_OPTIONS = [
  { id: 'device-1', name: 'Senzor Living' },
  { id: 'device-2', name: 'Senzor Dormitor' },
  { id: 'device-3', name: 'Senzor Birou' },
];

const METRICS = [
  { key: 'co2', label: 'CO₂ (ppm)', color: '#26c6da' },
  { key: 'pm25', label: 'PM2.5 (μg/m³)', color: '#ff9800' },
  { key: 'temperature', label: 'Temperatură (°C)', color: '#4caf50' },
  { key: 'humidity', label: 'Umiditate (%)', color: '#ab47bc' },
];

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule, DatePipe, ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule,
    MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatTooltipModule,
  ],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('historyCanvas') historyCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  deviceOptions = DEVICE_OPTIONS;
  metricOptions = METRICS;
  displayedColumns = ['timestamp', 'co2', 'pm25', 'temperature', 'humidity'];

  filterForm = this.fb.group({
    deviceId: ['device-1'],
    startDate: [new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)],
    endDate: [new Date()],
    metrics: [['co2', 'pm25', 'temperature']],
  });

  isLoading = signal(false);
  historyData = signal<HistoryEntry[]>([]);
  pagedData = signal<HistoryEntry[]>([]);

  private chart: Chart | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.search();
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => this.updatePage());
  }

  search() {
    const { deviceId, startDate, endDate } = this.filterForm.value;
    if (!deviceId || !startDate || !endDate) return;

    this.isLoading.set(true);
    this.apiService.getHistory(deviceId, startDate as Date, endDate as Date).subscribe(data => {
      this.historyData.set(data);
      this.isLoading.set(false);
      this.updatePage();
      setTimeout(() => this.updateChart(), 50);
    });
  }

  private updatePage() {
    const page = this.paginator?.pageIndex ?? 0;
    const size = this.paginator?.pageSize ?? 15;
    const start = page * size;
    this.pagedData.set(this.historyData().slice(start, start + size));
  }

  private updateChart() {
    const data = this.historyData();
    const activeMetrics = (this.filterForm.value.metrics as string[]) || [];
    const sample = data.filter((_, i) => i % Math.max(1, Math.floor(data.length / 40)) === 0).slice(0, 40);
    const labels = sample.map(e => new Date(e.timestamp).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));

    const datasets = METRICS.filter(m => activeMetrics.includes(m.key)).map(m => ({
      label: m.label,
      data: sample.map(e => (e as unknown as Record<string, number>)[m.key]),
      borderColor: m.color,
      backgroundColor: m.color + '15',
      tension: 0.4,
      fill: false,
      pointRadius: 2,
      borderWidth: 2,
    }));

    if (this.chart) {
      this.chart.data.labels = labels;
      this.chart.data.datasets = datasets;
      this.chart.update();
    } else if (this.historyCanvasRef) {
      const ctx = this.historyCanvasRef.nativeElement.getContext('2d');
      if (!ctx) return;
      this.chart = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
          responsive: true, maintainAspectRatio: false,
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', maxTicksLimit: 8, font: { size: 10 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#90a4ae', font: { size: 10 } } }
          },
          plugins: {
            legend: { labels: { color: '#e8eaf6', font: { size: 11 } } },
            tooltip: { backgroundColor: 'rgba(26,35,50,0.95)', titleColor: '#26c6da', bodyColor: '#e8eaf6' }
          }
        }
      });
    }
  }

  exportCsv() {
    const data = this.historyData();
    if (!data.length) return;
    const headers = ['Timestamp', 'Device ID', 'CO2 (ppm)', 'PM2.5 (ug/m3)', 'Temperatura (C)', 'Umiditate (%)'];
    const rows = data.map(e => [e.timestamp, e.deviceId, e.co2, e.pm25, e.temperature, e.humidity]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `airguard-history-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.snackBar.open(`${data.length} înregistrări exportate`, 'OK', { duration: 3000 });
  }

  isMetricActive(key: string): boolean {
    return ((this.filterForm.value.metrics as string[]) || []).includes(key);
  }

  toggleMetric(key: string) {
    const current = (this.filterForm.value.metrics as string[]) || [];
    const updated = current.includes(key) ? current.filter(k => k !== key) : [...current, key];
    this.filterForm.patchValue({ metrics: updated });
  }

  getCo2Class(val: number): string {
    return val > 1200 ? 'danger' : val > 800 ? 'warning' : 'ok';
  }

  getPm25Class(val: number): string {
    return val > 35 ? 'danger' : val > 12 ? 'warning' : 'ok';
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
