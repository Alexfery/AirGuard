import {
  AuthService
} from "./chunk-NO2UJ33T.js";
import {
  Router,
  RouterLink
} from "./chunk-O4DNW7G5.js";
import {
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3IGAVHNX.js";
import {
  MatSnackBar
} from "./chunk-2RKWMWWY.js";
import "./chunk-B5F2KBDB.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-NXPKSDTG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  __async,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMUIUAEW.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function LoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email-ul este obligatoriu");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Introduce\u021Bi un email valid");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Parola este obligatorie");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Autentificare...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Intr\u0103 \xEEn cont");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router, snackBar) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.snackBar = snackBar;
    this.isLoading = signal(false);
    this.showPassword = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
  toggleShowPassword() {
    this.showPassword.update((v) => !v);
  }
  submit() {
    return __async(this, null, function* () {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.isLoading.set(true);
      this.errorMessage.set("");
      try {
        const { email, password } = this.form.value;
        yield this.auth.login(email, password);
        this.router.navigate(["/dashboard"]);
      } catch (e) {
        this.errorMessage.set("Autentificare e\u0219uat\u0103. Verifica\u021Bi creden\u021Bialele.");
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 9, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "particle", "p1"], [1, "particle", "p2"], [1, "particle", "p3"], [1, "particle", "p4"], [1, "auth-card", "fade-in"], [1, "auth-logo"], [1, "auth-logo-icon"], [1, "tagline"], [1, "form-title"], [1, "error-banner"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "exemplu@email.com", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-btn", 3, "disabled"], [1, "auth-link"], ["routerLink", "/register"], [1, "demo-hint"], ["diameter", "20"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-card", 6)(7, "div", 7)(8, "mat-icon", 8);
        \u0275\u0275text(9, "air");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1");
        \u0275\u0275text(11, "AirGuard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13, "Monitorizare inteligent\u0103 a calit\u0103\u021Bii aerului");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-card-content")(15, "h2", 10);
        \u0275\u0275text(16, "Intr\u0103 \xEEn cont");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, LoginComponent_Conditional_17_Template, 4, 1, "div", 11);
        \u0275\u0275elementStart(18, "form", 12);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(19, "mat-form-field", 13)(20, "mat-label");
        \u0275\u0275text(21, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-icon", 14);
        \u0275\u0275text(23, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 15);
        \u0275\u0275template(25, LoginComponent_Conditional_25_Template, 2, 0, "mat-error")(26, LoginComponent_Conditional_26_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 13)(28, "mat-label");
        \u0275\u0275text(29, "Parol\u0103");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-icon", 14);
        \u0275\u0275text(31, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 16);
        \u0275\u0275elementStart(33, "button", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_33_listener() {
          return ctx.toggleShowPassword();
        });
        \u0275\u0275elementStart(34, "mat-icon");
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, LoginComponent_Conditional_36_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 18);
        \u0275\u0275template(38, LoginComponent_Conditional_38_Template, 3, 0)(39, LoginComponent_Conditional_39_Template, 4, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "p", 19);
        \u0275\u0275text(41, " Nu ai cont? ");
        \u0275\u0275elementStart(42, "a", 20);
        \u0275\u0275text(43, "\xCEnregistreaz\u0103-te");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 21)(45, "mat-icon");
        \u0275\u0275text(46, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48, "Mod demo: orice email \u0219i parol\u0103 sunt acceptate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_6_0;
        \u0275\u0275advance(17);
        \u0275\u0275conditional(17, ctx.errorMessage() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(25, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("email")) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched) ? 26 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(36, ((tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.touched) ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.isLoading() ? 38 : 39);
      }
    }, dependencies: [RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary);\n  position: relative;\n  overflow: hidden;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-bg[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(38, 198, 218, 0.15),\n      transparent);\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .p1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  top: -100px;\n  left: -100px;\n  animation-delay: 0s;\n}\n.auth-bg[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: 100px;\n  right: -50px;\n  animation-delay: -3s;\n}\n.auth-bg[_ngcontent-%COMP%]   .p3[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  top: 40%;\n  left: 60%;\n  animation-delay: -5s;\n}\n.auth-bg[_ngcontent-%COMP%]   .p4[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  bottom: -200px;\n  left: 30%;\n  animation-delay: -7s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    opacity: 0.6;\n  }\n  50% {\n    transform: translateY(-20px) scale(1.05);\n    opacity: 1;\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: 16px;\n  background: var(--bg-card) !important;\n  border: 1px solid var(--border) !important;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5) !important;\n  border-radius: 16px !important;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 24px 16px;\n}\n.auth-logo[_ngcontent-%COMP%]   .auth-logo-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--accent);\n}\n.auth-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 1px;\n}\n.auth-logo[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0 8px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  text-decoration: none;\n  font-weight: 500;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(244, 67, 54, 0.12);\n  border: 1px solid rgba(244, 67, 54, 0.3);\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: var(--accent-red);\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.demo-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(38, 198, 218, 0.08);\n  border: 1px solid rgba(38, 198, 218, 0.2);\n  border-radius: 8px;\n  padding: 8px 12px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  margin-top: 12px;\n}\n.demo-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--accent);\n  flex-shrink: 0;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px !important;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 24 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-CZ6CDLK7.js.map
