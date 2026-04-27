import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface SensorData {
  deviceId: string;
  co2: number;
  pm25: number;
  temperature: number;
  humidity: number;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  private dataSubject = new Subject<SensorData>();
  sensorData$: Observable<SensorData> = this.dataSubject.asObservable().pipe(share());

  private mockInterval: ReturnType<typeof setInterval> | null = null;
  private deviceCycle = ['device-1', 'device-2', 'device-3'];
  private cycleIndex = 0;

  constructor() {
    if (environment.useMockData) {
      this.startMock();
    } else {
      this.connectSocket();
    }
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
      co2: Math.floor(400 + Math.random() * 700),
      pm25: Math.round(Math.random() * 50 * 10) / 10,
      temperature: Math.round((18 + Math.random() * 12) * 10) / 10,
      humidity: Math.floor(35 + Math.random() * 45),
      timestamp: new Date().toISOString(),
    });
  }

  private connectSocket() {
    // In production, connect to real socket.io server
    // import { io } from 'socket.io-client';
    // const socket = io(environment.wsUrl);
    // socket.on('sensor-data', (data) => this.dataSubject.next(data));
  }

  ngOnDestroy() {
    if (this.mockInterval) clearInterval(this.mockInterval);
    this.dataSubject.complete();
  }
}
