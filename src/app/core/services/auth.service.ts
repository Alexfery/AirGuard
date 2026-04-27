import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null>(null);
  currentUser = this.userSignal.asReadonly();
  isAuthenticated = computed(() => !!this.userSignal());

  constructor(private router: Router) {
    this.restoreSession();
  }

  private restoreSession() {
    try {
      const stored = localStorage.getItem('airguard_user');
      if (stored) {
        this.userSignal.set(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem('airguard_user');
    }
  }

  login(email: string, _password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (environment.useMockData) {
          const user: User = {
            id: 'user-1',
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email,
            token: 'mock-jwt-' + btoa(email) + '-' + Date.now()
          };
          this.saveUser(user);
          resolve();
        } else {
          reject(new Error('Backend indisponibil'));
        }
      }, 900);
    });
  }

  register(name: string, email: string, _password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (environment.useMockData) {
          const user: User = {
            id: 'user-' + Date.now(),
            name,
            email,
            token: 'mock-jwt-' + btoa(email) + '-' + Date.now()
          };
          this.saveUser(user);
          resolve();
        } else {
          reject(new Error('Backend indisponibil'));
        }
      }, 900);
    });
  }

  logout() {
    localStorage.removeItem('airguard_user');
    this.userSignal.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.userSignal()?.token ?? null;
  }

  private saveUser(user: User) {
    localStorage.setItem('airguard_user', JSON.stringify(user));
    this.userSignal.set(user);
  }
}
