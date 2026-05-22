import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Device {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  windowOpen: boolean;
  windowMode: 'auto' | 'manual';
  fanOn: boolean;
  fanMode: 'auto' | 'manual';
  humidifierOn: boolean;
  humidifierMode: 'auto' | 'manual';
  firmware: string;
  lastSync: string;
  co2Threshold: number;
  tvocThreshold: number;
  pm25Threshold: number;
  tempThresholdMin: number;
  tempThresholdMax: number;
  humidityThresholdMin: number;
  humidityThresholdMax: number;
  // Citiri live opționale (furnizate de socket/mock)
  co2Ppm?: number;
  tvocPpb?: number;
  pm25Ugm3?: number;
  temperatureC?: number;
  humidityPct?: number;
  pressureAtm?: number;
}

export interface HistoryEntry {
  deviceId: string;
  co2Ppm: number;
  tvocPpb: number;
  pm25Ugm3: number;
  temperatureC: number;
  humidityPct: number;
  pressureAtm: number;
  fanOn: boolean;
  humidifierOn: boolean;
  timestamp: string;
}

export interface Prediction {
  deviceId: string;
  timestamp: string;
  predCo2: number;
  predTvoc: number;
  predPm25: number;
  predTemperature: number;
  predHumidity: number;
  predPressure: number;
}

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  metric: string;
  value: number;
  severity: 'warning' | 'danger';
  message: string;
  isRead: boolean;
  timestamp: string;
}

const BASE_DEVICES: Device[] = [
  {
    id: 'airguard_01',
    name: 'Senzor Living',
    location: 'Camera de zi',
    status: 'online',
    windowOpen: false,
    windowMode: 'auto',
    fanOn: false,
    fanMode: 'manual',
    humidifierOn: false,
    humidifierMode: 'manual',
    firmware: 'v2.1.3',
    lastSync: new Date().toISOString(),
    co2Threshold: 1000,
    tvocThreshold: 500,
    pm25Threshold: 25,
    tempThresholdMin: 16,
    tempThresholdMax: 30,
    humidityThresholdMin: 30,
    humidityThresholdMax: 70,
  },
  {
    id: 'airguard_02',
    name: 'Senzor Dormitor',
    location: 'Dormitor',
    status: 'online',
    windowOpen: true,
    windowMode: 'manual',
    fanOn: false,
    fanMode: 'manual',
    humidifierOn: true,
    humidifierMode: 'auto',
    firmware: 'v2.1.3',
    lastSync: new Date().toISOString(),
    co2Threshold: 800,
    tvocThreshold: 400,
    pm25Threshold: 12,
    tempThresholdMin: 18,
    tempThresholdMax: 26,
    humidityThresholdMin: 40,
    humidityThresholdMax: 65,
  },
  {
    id: 'airguard_03',
    name: 'Senzor Birou',
    location: 'Birou',
    status: 'offline',
    windowOpen: false,
    windowMode: 'auto',
    fanOn: false,
    fanMode: 'manual',
    humidifierOn: false,
    humidifierMode: 'manual',
    firmware: 'v2.0.1',
    lastSync: new Date(Date.now() - 3_600_000).toISOString(),
    co2Threshold: 1000,
    tvocThreshold: 500,
    pm25Threshold: 25,
    tempThresholdMin: 16,
    tempThresholdMax: 30,
    humidityThresholdMin: 30,
    humidityThresholdMax: 70,
  },
];

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private devices: Device[] = BASE_DEVICES.map(d => ({ ...d }));

  private randomSensorValues(): Pick<Device, 'co2Ppm' | 'tvocPpb' | 'pm25Ugm3' | 'temperatureC' | 'humidityPct' | 'pressureAtm'> {
    return {
      co2Ppm: Math.floor(400 + Math.random() * 700),
      tvocPpb: Math.floor(50 + Math.random() * 300),
      pm25Ugm3: Math.round(Math.random() * 50 * 10) / 10,
      temperatureC: Math.round((18 + Math.random() * 12) * 10) / 10,
      humidityPct: Math.floor(35 + Math.random() * 45),
      pressureAtm: Math.round((1.000 + Math.random() * 0.04) * 1000) / 1000,
    };
  }

  getDevices(): Observable<Device[]> {
    return of(this.devices.map(d => ({ ...d, ...this.randomSensorValues() }))).pipe(delay(300));
  }

  getDevice(id: string): Observable<Device | undefined> {
    const device = this.devices.find(d => d.id === id);
    if (!device) return of(undefined).pipe(delay(300));
    return of({ ...device, ...this.randomSensorValues() }).pipe(delay(300));
  }

  updateDevice(id: string, updates: Partial<Device>): Observable<Device> {
    const idx = this.devices.findIndex(d => d.id === id);
    if (idx !== -1) {
      this.devices[idx] = { ...this.devices[idx], ...updates };
    }
    return of({ ...this.devices[idx], ...this.randomSensorValues() }).pipe(delay(250));
  }

  addDevice(device: Omit<Device, 'firmware' | 'lastSync'>): Observable<Device> {
    const newDevice: Device = {
      ...device,
      firmware: 'v2.1.3',
      lastSync: new Date().toISOString(),
    };
    this.devices.push(newDevice);
    return of(newDevice).pipe(delay(400));
  }

  getHistory(deviceId: string, from: Date, to: Date): Observable<HistoryEntry[]> {
    const entries: HistoryEntry[] = [];
    const cursor = new Date(from);
    while (cursor <= to) {
      entries.push({
        deviceId,
        co2Ppm: Math.floor(400 + Math.random() * 700),
        tvocPpb: Math.floor(50 + Math.random() * 300),
        pm25Ugm3: Math.round(Math.random() * 50 * 10) / 10,
        temperatureC: Math.round((18 + Math.random() * 12) * 10) / 10,
        humidityPct: Math.floor(35 + Math.random() * 45),
        pressureAtm: Math.round((1.000 + Math.random() * 0.04) * 1000) / 1000,
        fanOn: false,
        humidifierOn: false,
        timestamp: cursor.toISOString(),
      });
      cursor.setMinutes(cursor.getMinutes() + 15);
    }
    return of(entries).pipe(delay(500));
  }

  generateAlerts(devices: Device[]): Alert[] {
    const alerts: Alert[] = [];
    devices.forEach(device => {
      if (!device.co2Ppm || !device.pm25Ugm3) return;
      if (device.co2Ppm > 1200) {
        alerts.push({
          id: device.id + '-co2-danger',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'CO2',
          value: device.co2Ppm,
          severity: 'danger',
          message: `CO2 a depășit 1200 ppm în ${device.name}`,
          isRead: false,
          timestamp: new Date().toISOString(),
        });
      } else if (device.co2Ppm > 800) {
        alerts.push({
          id: device.id + '-co2-warn',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'CO2',
          value: device.co2Ppm,
          severity: 'warning',
          message: `CO2 ridicat (${device.co2Ppm} ppm) în ${device.name}`,
          isRead: false,
          timestamp: new Date().toISOString(),
        });
      }
      if (device.pm25Ugm3 > 35) {
        alerts.push({
          id: device.id + '-pm25-danger',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'PM2.5',
          value: device.pm25Ugm3,
          severity: 'danger',
          message: `PM2.5 periculos (${device.pm25Ugm3} μg/m³) în ${device.name}`,
          isRead: false,
          timestamp: new Date().toISOString(),
        });
      } else if (device.pm25Ugm3 > 12) {
        alerts.push({
          id: device.id + '-pm25-warn',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'PM2.5',
          value: device.pm25Ugm3,
          severity: 'warning',
          message: `PM2.5 ridicat (${device.pm25Ugm3} μg/m³) în ${device.name}`,
          isRead: false,
          timestamp: new Date().toISOString(),
        });
      }
    });
    return alerts.slice(0, 5);
  }
}
