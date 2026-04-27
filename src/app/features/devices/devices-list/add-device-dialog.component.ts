import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-device-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatIconModule, MatSelectModule,
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>add_circle</mat-icon>
      Adaugă dispozitiv
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nume dispozitiv</mat-label>
          <mat-icon matPrefix>sensors</mat-icon>
          <input matInput formControlName="name" placeholder="ex: Senzor Bucătărie">
          @if (form.get('name')?.hasError('required') && form.get('name')?.touched) {
            <mat-error>Numele este obligatoriu</mat-error>
          }
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Locație</mat-label>
          <mat-icon matPrefix>place</mat-icon>
          <input matInput formControlName="location" placeholder="ex: Bucătărie">
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Mod inițial</mat-label>
          <mat-select formControlName="windowMode">
            <mat-option value="auto">Automat</mat-option>
            <mat-option value="manual">Manual</mat-option>
          </mat-select>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Anulare</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="form.invalid">
        <mat-icon>add</mat-icon>
        Adaugă
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    h2[mat-dialog-title] {
      display: flex; align-items: center; gap: 8px;
      color: var(--text-primary);
      mat-icon { color: var(--accent); }
    }
    .dialog-form { display: flex; flex-direction: column; gap: 8px; padding-top: 8px; }
    .full-width { width: 100%; }
  `]
})
export class AddDeviceDialogComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    location: [''],
    windowMode: ['auto'],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDeviceDialogComponent>,
  ) {}

  submit() {
    if (this.form.valid) {
      this.dialogRef.close({
        ...this.form.value,
        status: 'online',
        windowOpen: false,
        co2Threshold: 1000,
        pm25Threshold: 25,
      });
    }
  }
}
