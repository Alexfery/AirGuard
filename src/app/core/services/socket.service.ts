import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';

export interface SensorData {
  deviceId: string;
  timestamp: string;
  co2Ppm: number;
  tvocPpb: number;
  pm25Ugm3: number;
  temperatureC: number;
  humidityPct: number;
  pressureAtm: number;
  fanOn: boolean;
  humidifierOn: boolean;
}

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  private socket: Socket | null = null;
  private dataSubject = new Subject<SensorData>();
  sensorData$: Observable<SensorData> = this.dataSubject.asObservable().pipe(share());

  private mockInterval: ReturnType<typeof setInterval> | null = null;
  private deviceCycle = ['airguard_01', 'airguard_02'];
  private cycleIndex = 0;

  constructor() {
    if (environment.useMockData) {
      this.startMock();
    }
  }

  connect(): void {
    if (environment.useMockData) return;
    if (this.socket?.connected) return;

    this.socket = io(environment.wsUrl, {
      transports: ['websocket'],
      autoConnect: true,
    });

    this.socket.on('connect', () => {
      console.log('[AirGuard] Socket.IO conectat la backend');
    });

    this.socket.on('sensor-data', (data: SensorData) => {
      this.dataSubject.next(data);
    });

    this.socket.on('disconnect', () => {
      console.log('[AirGuard] Socket.IO deconectat');
    });

    this.socket.on('connect_error', (err: Error) => {
      console.error('[AirGuard] Eroare conectare Socket.IO:', err.message);
    });
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }

  ngOnDestroy() {
    this.disconnect();
    if (this.mockInterval) clearInterval(this.mockInterval);
    this.dataSubject.complete();
  }

  private startMock() {
    this.emitNext();
    this.mockInterval = setInterval(() => this.emitNext(), 3000);
  }

  private emitNext() {
    const deviceId = this.deviceCycle[this.cycleIndex];
    this.cycleIndex = (this.cycleIndex + 1) % this.deviceCycle.length;
    this.dataSubject.next({
      deviceId,
      timestamp: new Date().toISOString(),
      co2Ppm: Math.floor(400 + Math.random() * 700),
      tvocPpb: Math.floor(50 + Math.random() * 300),
      pm25Ugm3: Math.round(Math.random() * 50 * 10) / 10,
      temperatureC: Math.round((18 + Math.random() * 12) * 10) / 10,
      humidityPct: Math.floor(35 + Math.random() * 45),
      pressureAtm: Math.round((1.000 + Math.random() * 0.04) * 1000) / 1000,
      fanOn: false,
      humidifierOn: false,
    });
  }
}
