import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MockDataService, Device, HistoryEntry, Alert, Prediction } from './mock-data.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private mock: MockDataService,
  ) {}

  getDevices(): Observable<Device[]> {
    if (environment.useMockData) return this.mock.getDevices();
    return this.http.get<Device[]>(`${environment.apiUrl}/devices`);
  }

  getDevice(id: string): Observable<Device | undefined> {
    if (environment.useMockData) return this.mock.getDevice(id);
    return this.http.get<Device>(`${environment.apiUrl}/devices/${id}`);
  }

  updateDevice(id: string, updates: Partial<Device>): Observable<Device> {
    if (environment.useMockData) return this.mock.updateDevice(id, updates);
    return this.http.patch<Device>(`${environment.apiUrl}/devices/${id}`, updates);
  }

  addDevice(device: Omit<Device, 'firmware' | 'lastSync'>): Observable<Device> {
    if (environment.useMockData) return this.mock.addDevice(device);
    return this.http.post<Device>(`${environment.apiUrl}/devices`, device);
  }

  getHistory(deviceId: string, from: Date, to: Date): Observable<HistoryEntry[]> {
    if (environment.useMockData) return this.mock.getHistory(deviceId, from, to);
    return this.http.get<HistoryEntry[]>(
      `${environment.apiUrl}/sensors/${deviceId}/history`,
      { params: { from: from.toISOString(), to: to.toISOString() } },
    );
  }

  getAlerts(deviceId: string, limit = 20): Observable<Alert[]> {
    if (environment.useMockData) {
      return this.mock.getDevice(deviceId).pipe(
        map(device => (device ? this.mock.generateAlerts([device]).slice(0, limit) : [])),
      );
    }
    return this.http.get<Alert[]>(`${environment.apiUrl}/alerts/${deviceId}`, {
      params: { limit: String(limit) },
    });
  }

  getPredictions(deviceId: string, limit = 20): Observable<Prediction[]> {
    if (environment.useMockData) return of([]);
    return this.http.get<Prediction[]>(`${environment.apiUrl}/sensors/${deviceId}/predictions`, {
      params: { limit: String(limit) },
    });
  }

  setFan(deviceId: string, on: boolean): Observable<void> {
    if (environment.useMockData) {
      return this.mock.updateDevice(deviceId, { fanOn: on }).pipe(map(() => void 0));
    }
    return this.http.patch<void>(`${environment.apiUrl}/devices/${deviceId}/fan`, { on });
  }

  setHumidifier(deviceId: string, on: boolean): Observable<void> {
    if (environment.useMockData) {
      return this.mock.updateDevice(deviceId, { humidifierOn: on }).pipe(map(() => void 0));
    }
    return this.http.patch<void>(`${environment.apiUrl}/devices/${deviceId}/humidifier`, { on });
  }
}
