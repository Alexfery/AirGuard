import { Component, signal, computed, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    MatSidenavModule, MatListModule, MatIconModule,
    MatButtonModule, MatTooltipModule, MatDividerModule,
    NavbarComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  isMobile = signal(window.innerWidth < 768);
  sidenavOpen = signal(!this.isMobile());

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Dispozitive', icon: 'device_hub', route: '/devices' },
    { label: 'Istoric', icon: 'history', route: '/history' },
  ];

  constructor(public auth: AuthService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    const mobile = window.innerWidth < 768;
    this.isMobile.set(mobile);
    if (mobile) this.sidenavOpen.set(false);
  }

  toggleSidenav() {
    this.sidenavOpen.update(v => !v);
  }
}
