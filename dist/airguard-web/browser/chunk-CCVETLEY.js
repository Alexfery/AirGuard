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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
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
function RegisterComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Numele este obligatoriu");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minim 2 caractere");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email-ul este obligatoriu");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Introduce\u021Bi un email valid");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Parola este obligatorie");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minim 8 caractere");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Parolele nu se potrivesc");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Creare cont...");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Creeaz\u0103 cont");
    \u0275\u0275elementEnd();
  }
}
function passwordMatchValidator(control) {
  const password = control.get("password")?.value;
  const confirm = control.get("confirmPassword")?.value;
  return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.isLoading = signal(false);
    this.showPassword = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: passwordMatchValidator });
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
        const { name, email, password } = this.form.value;
        yield this.auth.register(name, email, password);
        this.router.navigate(["/dashboard"]);
      } catch (e) {
        this.errorMessage.set("\xCEnregistrarea a e\u0219uat. \xCEncerca\u021Bi din nou.");
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 14, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "particle", "p1"], [1, "particle", "p2"], [1, "particle", "p3"], [1, "auth-card", "fade-in"], [1, "auth-logo"], [1, "auth-logo-icon"], [1, "tagline"], [1, "error-banner"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "formControlName", "name", "placeholder", "Ion Popescu", "autocomplete", "name"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "exemplu@email.com", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "autocomplete", "new-password", 3, "type"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-btn", 3, "disabled"], [1, "auth-link"], ["routerLink", "/login"], ["diameter", "20"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-card", 5)(6, "div", 6)(7, "mat-icon", 7);
        \u0275\u0275text(8, "air");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275text(10, "AirGuard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 8);
        \u0275\u0275text(12, "Creeaz\u0103 un cont nou");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-card-content");
        \u0275\u0275template(14, RegisterComponent_Conditional_14_Template, 4, 1, "div", 9);
        \u0275\u0275elementStart(15, "form", 10);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_15_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(16, "mat-form-field", 11)(17, "mat-label");
        \u0275\u0275text(18, "Nume complet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-icon", 12);
        \u0275\u0275text(20, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 13);
        \u0275\u0275template(22, RegisterComponent_Conditional_22_Template, 2, 0, "mat-error")(23, RegisterComponent_Conditional_23_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-form-field", 11)(25, "mat-label");
        \u0275\u0275text(26, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-icon", 12);
        \u0275\u0275text(28, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 14);
        \u0275\u0275template(30, RegisterComponent_Conditional_30_Template, 2, 0, "mat-error")(31, RegisterComponent_Conditional_31_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 11)(33, "mat-label");
        \u0275\u0275text(34, "Parol\u0103");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-icon", 12);
        \u0275\u0275text(36, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 15);
        \u0275\u0275elementStart(38, "button", 16);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_38_listener() {
          return ctx.toggleShowPassword();
        });
        \u0275\u0275elementStart(39, "mat-icon");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, RegisterComponent_Conditional_41_Template, 2, 0, "mat-error")(42, RegisterComponent_Conditional_42_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-form-field", 11)(44, "mat-label");
        \u0275\u0275text(45, "Confirm\u0103 parola");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-icon", 12);
        \u0275\u0275text(47, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 17);
        \u0275\u0275template(49, RegisterComponent_Conditional_49_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 18);
        \u0275\u0275template(51, RegisterComponent_Conditional_51_Template, 3, 0)(52, RegisterComponent_Conditional_52_Template, 4, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "p", 19);
        \u0275\u0275text(54, " Ai deja cont? ");
        \u0275\u0275elementStart(55, "a", 20);
        \u0275\u0275text(56, "Intr\u0103 \xEEn cont");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_11_0;
        \u0275\u0275advance(14);
        \u0275\u0275conditional(14, ctx.errorMessage() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(22, ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.hasError("minlength")) && ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.touched) ? 23 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(30, ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.touched) ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ((tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.hasError("email")) && ((tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.touched) ? 31 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(41, ((tmp_8_0 = ctx.form.get("password")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.form.get("password")) == null ? null : tmp_8_0.touched) ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ((tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.hasError("minlength")) && ((tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.touched) ? 42 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance();
        \u0275\u0275conditional(49, ctx.form.hasError("passwordMismatch") && ((tmp_11_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_11_0.touched) ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275conditional(51, ctx.isLoading() ? 51 : 52);
      }
    }, dependencies: [RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary);\n  position: relative;\n  overflow: hidden;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-bg[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(38, 198, 218, 0.12),\n      transparent);\n  animation: _ngcontent-%COMP%_float 9s ease-in-out infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .p1[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  top: -150px;\n  right: -100px;\n  animation-delay: -2s;\n}\n.auth-bg[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: 50px;\n  left: -50px;\n  animation-delay: -4s;\n}\n.auth-bg[_ngcontent-%COMP%]   .p3[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  top: 50%;\n  right: 20%;\n  animation-delay: -6s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translateY(-18px) scale(1.04);\n    opacity: 0.9;\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  margin: 16px;\n  background: var(--bg-card) !important;\n  border: 1px solid var(--border) !important;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5) !important;\n  border-radius: 16px !important;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 24px 12px;\n}\n.auth-logo[_ngcontent-%COMP%]   .auth-logo-icon[_ngcontent-%COMP%] {\n  font-size: 44px;\n  width: 44px;\n  height: 44px;\n  color: var(--accent);\n}\n.auth-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 6px 0 4px;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 1px;\n}\n.auth-logo[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px 0 0;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  text-decoration: none;\n  font-weight: 500;\n}\n.auth-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(244, 67, 54, 0.12);\n  border: 1px solid rgba(244, 67, 54, 0.3);\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: var(--accent-red);\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px !important;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 29 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-CCVETLEY.js.map
