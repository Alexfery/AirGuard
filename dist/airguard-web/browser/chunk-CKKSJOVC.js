import {
  Router
} from "./chunk-FX7RJNGN.js";
import {
  computed,
  environment,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CUZ7VDK2.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(router) {
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
  login(email, _password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (environment.useMockData) {
          const user = {
            id: "user-1",
            name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
            email,
            token: "mock-jwt-" + btoa(email) + "-" + Date.now()
          };
          this.saveUser(user);
          resolve();
        } else {
          reject(new Error("Backend indisponibil"));
        }
      }, 900);
    });
  }
  register(name, email, _password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (environment.useMockData) {
          const user = {
            id: "user-" + Date.now(),
            name,
            email,
            token: "mock-jwt-" + btoa(email) + "-" + Date.now()
          };
          this.saveUser(user);
          resolve();
        } else {
          reject(new Error("Backend indisponibil"));
        }
      }, 900);
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
      return new (t || _AuthService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-CKKSJOVC.js.map
