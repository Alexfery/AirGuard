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
  firmware: string;
  lastSync: string;
  co2Threshold: number;
  pm25Threshold: number;
  co2?: number;
  pm25?: number;
  temperature?: number;
  humidity?: number;
}

export interface HistoryEntry {
  deviceId: string;
  co2: number;
  pm25: number;
  temperature: number;
  humidity: number;
  timestamp: string;
}

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  metric: string;
  value: number;
  severity: 'warning' | 'danger';
  message: string;
  timestamp: string;
}

const BASE_DEVICES: Device[] = [
  {
    id: 'device-1',
    name: 'Senzor Living',
    location: 'Camera de zi',
    status: 'online',
    windowOpen: false,
    windowMode: 'auto',
    firmware: 'v2.1.3',
    lastSync: new Date().toISOString(),
    co2Threshold: 1000,
    pm25Threshold: 25,
  },
  {
    id: 'device-2',
    name: 'Senzor Dormitor',
    location: 'Dormitor',
    status: 'online',
    windowOpen: true,
    windowMode: 'manual',
    firmware: 'v2.1.3',
    lastSync: new Date().toISOString(),
    co2Threshold: 800,
    pm25Threshold: 12,
  },
  {
    id: 'device-3',
    name: 'Senzor Birou',
    location: 'Birou',
    status: 'offline',
    windowOpen: false,
    windowMode: 'auto',
    firmware: 'v2.0.1',
    lastSync: new Date(Date.now() - 3_600_000).toISOString(),
    co2Threshold: 1000,
    pm25Threshold: 25,
  },
];

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private devices: Device[] = BASE_DEVICES.map(d => ({ ...d }));

  private randomSensorValues(): Pick<Device, 'co2' | 'pm25' | 'temperature' | 'humidity'> {
    return {
      co2: Math.floor(400 + Math.random() * 700),
      pm25: Math.round(Math.random() * 50 * 10) / 10,
      temperature: Math.round((18 + Math.random() * 12) * 10) / 10,
      humidity: Math.floor(35 + Math.random() * 45),
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

  addDevice(device: Omit<Device, 'id' | 'firmware' | 'lastSync'>): Observable<Device> {
    const newDevice: Device = {
      ...device,
      id: 'device-' + Date.now(),
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
        co2: Math.floor(400 + Math.random() * 700),
        pm25: Math.round(Math.random() * 50 * 10) / 10,
        temperature: Math.round((18 + Math.random() * 12) * 10) / 10,
        humidity: Math.floor(35 + Math.random() * 45),
        timestamp: cursor.toISOString(),
      });
      cursor.setMinutes(cursor.getMinutes() + 15);
    }
    return of(entries).pipe(delay(500));
  }

  generateAlerts(devices: Device[]): Alert[] {
    const alerts: Alert[] = [];
    devices.forEach(device => {
      if (!device.co2 || !device.pm25) return;
      if (device.co2 > 1200) {
        alerts.push({
          id: device.id + '-co2-danger',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'CO2',
          value: device.co2,
          severity: 'danger',
          message: `CO2 a depășit 1200 ppm în ${device.name}`,
          timestamp: new Date().toISOString(),
        });
      } else if (device.co2 > 800) {
        alerts.push({
          id: device.id + '-co2-warn',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'CO2',
          value: device.co2,
          severity: 'warning',
          message: `CO2 ridicat (${device.co2} ppm) în ${device.name}`,
          timestamp: new Date().toISOString(),
        });
      }
      if (device.pm25 > 35) {
        alerts.push({
          id: device.id + '-pm25-danger',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'PM2.5',
          value: device.pm25,
          severity: 'danger',
          message: `PM2.5 periculos (${device.pm25} μg/m³) în ${device.name}`,
          timestamp: new Date().toISOString(),
        });
      } else if (device.pm25 > 12) {
        alerts.push({
          id: device.id + '-pm25-warn',
          deviceId: device.id,
          deviceName: device.name,
          metric: 'PM2.5',
          value: device.pm25,
          severity: 'warning',
          message: `PM2.5 ridicat (${device.pm25} μg/m³) în ${device.name}`,
          timestamp: new Date().toISOString(),
        });
      }
    });
    return alerts.slice(0, 5);
  }
}
