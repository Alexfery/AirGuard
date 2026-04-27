import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ShellComponent } from './shared/components/shell/shell.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'devices',
        loadComponent: () => import('./features/devices/devices-list/devices-list.component').then(m => m.DevicesListComponent)
      },
      {
        path: 'devices/:id',
        loadComponent: () => import('./features/devices/device-detail/device-detail.component').then(m => m.DeviceDetailComponent)
      },
      {
        path: 'history',
        loadComponent: () => import('./features/history/history.component').then(m => m.HistoryComponent)
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
