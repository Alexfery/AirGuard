import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Device } from '../../../core/services/mock-data.service';
import { AddDeviceDialogComponent } from './add-device-dialog.component';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [
    CommonModule, RouterLink, FormsModule, ReactiveFormsModule,
    MatCardModule, MatTableModule, MatButtonModule, MatIconModule,
    MatChipsModule, MatSlideToggleModule, MatTooltipModule,
    MatProgressSpinnerModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
  ],
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {
  isLoading = signal(true);
  devices = signal<Device[]>([]);
  displayedColumns = ['name', 'location', 'status', 'co2', 'pm25', 'temperature', 'humidity', 'window', 'actions'];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices() {
    this.isLoading.set(true);
    this.apiService.getDevices().subscribe({
      next: devices => {
        this.devices.set(devices);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  toggleWindow(device: Device) {
    const newState = !device.windowOpen;
    this.apiService.updateDevice(device.id, { windowOpen: newState }).subscribe(() => {
      this.devices.update(list =>
        list.map(d => d.id === device.id ? { ...d, windowOpen: newState } : d)
      );
      this.snackBar.open(
        `Fereastra ${device.name} a fost ${newState ? 'deschisă' : 'închisă'}`,
        'OK', { duration: 3000 }
      );
    });
  }

  openAddDialog() {
    const ref = this.dialog.open(AddDeviceDialogComponent, {
      width: '460px',
      panelClass: 'dark-dialog',
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.addDevice(result).subscribe(newDevice => {
          this.devices.update(list => [...list, newDevice]);
          this.snackBar.open(`Dispozitiv "${newDevice.name}" adăugat`, 'OK', { duration: 3000 });
        });
      }
    });
  }

  getCo2Class(val?: number): string {
    if (!val) return '';
    return val > 1200 ? 'status-danger' : val > 800 ? 'status-warning' : 'status-ok';
  }

  getPm25Class(val?: number): string {
    if (!val) return '';
    return val > 35 ? 'status-danger' : val > 12 ? 'status-warning' : 'status-ok';
  }
}
