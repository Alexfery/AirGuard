import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MockDataService, Device, HistoryEntry } from './mock-data.service';

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

  addDevice(device: Omit<Device, 'id' | 'firmware' | 'lastSync'>): Observable<Device> {
    if (environment.useMockData) return this.mock.addDevice(device);
    return this.http.post<Device>(`${environment.apiUrl}/devices`, device);
  }

  getHistory(deviceId: string, from: Date, to: Date): Observable<HistoryEntry[]> {
    if (environment.useMockData) return this.mock.getHistory(deviceId, from, to);
    return this.http.get<HistoryEntry[]>(
      `${environment.apiUrl}/history/${deviceId}?from=${from.toISOString()}&to=${to.toISOString()}`
    );
  }
}
