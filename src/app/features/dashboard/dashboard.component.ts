import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Subscription, forkJoin } from 'rxjs';

import { SocketService, SensorData } from '../../core/services/socket.service';
import { ApiService } from '../../core/services/api.service';
import { Device, Alert } from '../../core/services/mock-data.service';
import { AirQualityCardComponent, MetricThresholds } from './air-quality-card/air-quality-card.component';
import { LiveChartComponent } from './live-chart/live-chart.component';
import { AlertsPanelComponent } from './alerts-panel/alerts-panel.component';

interface MetricCard {
  title: string;
  icon: string;
  unit: string;
  key: keyof Pick<SensorData, 'co2Ppm' | 'tvocPpb' | 'pm25Ugm3' | 'temperatureC' | 'humidityPct' | 'pressureAtm'>;
  thresholds: MetricThresholds;
}

const METRIC_CARDS: MetricCard[] = [
  {
    title: 'CO₂',
    icon: 'air',
    unit: 'ppm',
    key: 'co2Ppm',
    thresholds: { warningMin: 800, dangerMin: 1000 },
  },
  {
    title: 'TVOC',
    icon: 'science',
    unit: 'ppb',
    key: 'tvocPpb',
    thresholds: { warningMin: 300, dangerMin: 500 },
  },
  {
    title: 'PM2.5',
    icon: 'grain',
    unit: 'μg/m³',
    key: 'pm25Ugm3',
    thresholds: { warningMin: 15, dangerMin: 25 },
  },
  {
    title: 'Temperatură',
    icon: 'thermostat',
    unit: '°C',
    key: 'temperatureC',
    thresholds: { warningMin: 26, dangerMin: 30 },
  },
  {
    title: 'Umiditate',
    icon: 'water_drop',
    unit: '%',
    key: 'humidityPct',
    thresholds: { warningMin: 60, dangerMin: 70 },
  },
  {
    title: 'Presiune',
    icon: 'speed',
    unit: 'atm',
    key: 'pressureAtm',
    thresholds: {},
  },
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    MatCardModule, MatButtonModule, MatIconModule,
    MatChipsModule, MatTooltipModule, MatDividerModule, MatSlideToggleModule,
    AirQualityCardComponent, LiveChartComponent, AlertsPanelComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  metricCards = METRIC_CARDS;

  isLoadingMetrics = signal(true);
  isLoadingDevices = signal(true);

  latestReadings = signal<Record<string, SensorData>>({});
  previousReadings = signal<Record<string, SensorData>>({});
  devices = signal<Device[]>([]);
  alerts = signal<Alert[]>([]);

  aggregatedLatest = computed<SensorData | null>(() => {
    const readings = Object.values(this.latestReadings());
    if (!readings.length) return null;
    return readings.reduce((acc, cur) =>
      new Date(cur.timestamp) > new Date(acc.timestamp) ? cur : acc
    );
  });

  aggregatedPrevious = computed<SensorData | null>(() => {
    const readings = Object.values(this.previousReadings());
    if (!readings.length) return null;
    return readings.reduce((acc, cur) =>
      new Date(cur.timestamp) > new Date(acc.timestamp) ? cur : acc
    );
  });

  private sub: Subscription | null = null;

  constructor(
    private socketService: SocketService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.loadDevices();
    this.sub = this.socketService.sensorData$.subscribe(data => {
      const prev = this.latestReadings()[data.deviceId];
      if (prev) {
        this.previousReadings.update(r => ({ ...r, [data.deviceId]: prev }));
      }
      this.latestReadings.update(r => ({ ...r, [data.deviceId]: data }));
      this.isLoadingMetrics.set(false);
      this.updateAlerts();
    });
  }

  private loadDevices() {
    this.apiService.getDevices().subscribe({
      next: devices => {
        this.devices.set(devices);
        this.isLoadingDevices.set(false);
        this.updateAlerts();
      },
      error: () => {
        this.isLoadingDevices.set(false);
      }
    });
  }

  private updateAlerts() {
    const devices = this.devices();
    if (!devices.length) return;

    forkJoin(devices.map(d => this.apiService.getAlerts(d.id))).subscribe({
      next: (results) => {
        const all = results.flat().sort((a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        );
        this.alerts.set(all.slice(0, 20));
      },
      error: () => {},
    });
  }

  getLatestValue(key: keyof SensorData): number | null {
    const data = this.aggregatedLatest();
    if (!data) return null;
    return data[key] as number;
  }

  getPreviousValue(key: keyof SensorData): number | null {
    const data = this.aggregatedPrevious();
    if (!data) return null;
    return data[key] as number;
  }

  toggleWindow(device: Device) {
    const newState = !device.windowOpen;
    this.apiService.updateDevice(device.id, { windowOpen: newState }).subscribe(() => {
      this.devices.update(list =>
        list.map(d => d.id === device.id ? { ...d, windowOpen: newState } : d)
      );
      const label = newState ? 'deschisă' : 'închisă';
      this.snackBar.open(`Fereastra ${device.name} a fost ${label}`, 'OK', { duration: 3000 });
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
