import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export type MetricStatus = 'ok' | 'warning' | 'danger' | 'loading';

export interface MetricThresholds {
  warningMin?: number;
  warningMax?: number;
  dangerMin?: number;
  dangerMax?: number;
}

@Component({
  selector: 'app-air-quality-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule],
  templateUrl: './air-quality-card.component.html',
  styleUrls: ['./air-quality-card.component.scss']
})
export class AirQualityCardComponent implements OnChanges {
  @Input() title = '';
  @Input() value: number | null = null;
  @Input() unit = '';
  @Input() icon = 'air';
  @Input() previousValue: number | null = null;
  @Input() thresholds: MetricThresholds = {};
  @Input() isLoading = false;

  status: MetricStatus = 'loading';
  statusLabel = '';
  trend: 'up' | 'down' | 'stable' = 'stable';

  ngOnChanges() {
    this.computeStatus();
    this.computeTrend();
  }

  private computeStatus() {
    if (this.isLoading || this.value === null) {
      this.status = 'loading';
      this.statusLabel = 'Se încarcă...';
      return;
    }
    const { dangerMin, dangerMax, warningMin, warningMax } = this.thresholds;
    const v = this.value;
    const inDanger =
      (dangerMin !== undefined && v > dangerMin) ||
      (dangerMax !== undefined && v < dangerMax);
    const inWarning =
      (warningMin !== undefined && v > warningMin) ||
      (warningMax !== undefined && v < warningMax);

    if (inDanger) {
      this.status = 'danger';
      this.statusLabel = 'Pericol';
    } else if (inWarning) {
      this.status = 'warning';
      this.statusLabel = 'Atenție';
    } else {
      this.status = 'ok';
      this.statusLabel = 'Optim';
    }
  }

  private computeTrend() {
    if (this.value === null || this.previousValue === null) {
      this.trend = 'stable';
      return;
    }
    const diff = this.value - this.previousValue;
    this.trend = Math.abs(diff) < 0.5 ? 'stable' : diff > 0 ? 'up' : 'down';
  }

  get statusIcon(): string {
    return this.status === 'ok' ? 'check_circle' : this.status === 'warning' ? 'warning' : 'dangerous';
  }

  get trendIcon(): string {
    return this.trend === 'up' ? 'trending_up' : this.trend === 'down' ? 'trending_down' : 'trending_flat';
  }

  get formattedValue(): string {
    if (this.value === null) return '--';
    return Number.isInteger(this.value) ? this.value.toString() : this.value.toFixed(1);
  }
}
