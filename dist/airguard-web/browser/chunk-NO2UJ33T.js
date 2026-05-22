import {
  Router
} from "./chunk-O4DNW7G5.js";
import {
  HttpClient,
  computed,
  environment,
  firstValueFrom,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IMUIUAEW.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.userSignal = signal(null);
    this.currentUser = this.userSignal.asReadonly();
    this.isAuthenticated = computed(() => !!this.userSignal());
    this.restoreSession();
  }
  restoreSession() {
    try {
      const stored = localStorage.getItem("airguard_user");
      if (stored) {
        this.userSignal.set(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem("airguard_user");
    }
  }
  login(email, password) {
    return firstValueFrom(this.http.post(`${environment.apiUrl}/auth/login`, { email, password })).then((user) => {
      this.saveUser(user);
    });
  }
  register(name, email, password) {
    return firstValueFrom(this.http.post(`${environment.apiUrl}/auth/register`, { name, email, password })).then((user) => {
      this.saveUser(user);
    });
  }
  logout() {
    localStorage.removeItem("airguard_user");
    this.userSignal.set(null);
    this.router.navigate(["/login"]);
  }
  getToken() {
    return this.userSignal()?.token ?? null;
  }
  saveUser(user) {
    localStorage.setItem("airguard_user", JSON.stringify(user));
    this.userSignal.set(user);
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-NO2UJ33T.js.map
