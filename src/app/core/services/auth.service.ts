import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
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

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
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

  login(email: string, password: string): Promise<void> {
    return firstValueFrom(
      this.http.post<User>(`${environment.apiUrl}/auth/login`, { email, password }),
    ).then(user => {
      this.saveUser(user);
    });

    // MOCK: setTimeout fallback (useMockData: true)
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const user: User = { id: 'user-1', name: email.split('@')[0], email, token: 'mock-jwt-' + Date.now() };
    //     this.saveUser(user); resolve();
    //   }, 900);
    // });
  }

  register(name: string, email: string, password: string): Promise<void> {
    return firstValueFrom(
      this.http.post<User>(`${environment.apiUrl}/auth/register`, { name, email, password }),
    ).then(user => {
      this.saveUser(user);
    });

    // MOCK: setTimeout fallback (useMockData: true)
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const user: User = { id: 'user-' + Date.now(), name, email, token: 'mock-jwt-' + Date.now() };
    //     this.saveUser(user); resolve();
    //   }, 900);
    // });
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
