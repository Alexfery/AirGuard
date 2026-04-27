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
import { Subscription } from 'rxjs';

import { SocketService, SensorData } from '../../core/services/socket.service';
import { ApiService } from '../../core/services/api.service';
import { MockDataService, Device, Alert } from '../../core/services/mock-data.service';
import { AirQualityCardComponent, MetricThresholds } from './air-quality-card/air-quality-card.component';
import { LiveChartComponent } from './live-chart/live-chart.component';
import { AlertsPanelComponent } from './alerts-panel/alerts-panel.component';

interface MetricCard {
  title: string;
  icon: string;
  unit: string;
  key: keyof Pick<SensorData, 'co2' | 'pm25' | 'temperature' | 'humidity'>;
  thresholds: MetricThresholds;
}

const METRIC_CARDS: MetricCard[] = [
  {
    title: 'CO₂',
    icon: 'air',
    unit: 'ppm',
    key: 'co2',
    thresholds: { warningMin: 800, dangerMin: 1200 },
  },
  {
    title: 'PM2.5',
    icon: 'grain',
    unit: 'μg/m³',
    key: 'pm25',
    thresholds: { warningMin: 12, dangerMin: 35 },
  },
  {
    title: 'Temperatură',
    icon: 'thermostat',
    unit: '°C',
    key: 'temperature',
    thresholds: { warningMin: 26, dangerMin: 30 },
  },
  {
    title: 'Umiditate',
    icon: 'water_drop',
    unit: '%',
    key: 'humidity',
    thresholds: { warningMin: 60, dangerMin: 70 },
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
    private mockDataService: MockDataService,
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
    const devicesWithReadings = this.devices().map(d => {
      const r = this.latestReadings()[d.id];
      return r ? { ...d, ...r } : d;
    });
    this.alerts.set(this.mockDataService.generateAlerts(devicesWithReadings));
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
