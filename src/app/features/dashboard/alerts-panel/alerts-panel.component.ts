import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Alert } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-alerts-panel',
  standalone: true,
  imports: [CommonModule, DatePipe, MatCardModule, MatIconModule, MatListModule, MatChipsModule, MatButtonModule],
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent {
  @Input() alerts: Alert[] = [];
  @Input() isLoading = false;

  relativeTime(isoString: string): string {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'acum';
    if (mins < 60) return `acum ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `acum ${hours}h`;
    return `acum ${Math.floor(hours / 24)}z`;
  }
}
