import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-IWIRSLAF.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-NXPKSDTG.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMUIUAEW.js";

// src/app/features/dashboard/air-quality-card/air-quality-card.component.ts
function AirQualityCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function AirQualityCardComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trend === "up" ? "trend-up" : "trend-down");
    \u0275\u0275property("matTooltip", ctx_r0.trend === "up" ? "\xCEn cre\u0219tere" : "\xCEn sc\u0103dere");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.trendIcon, " ");
  }
}
function AirQualityCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "mat-icon", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AirQualityCardComponent_Conditional_2_Conditional_15_Template, 2, 4, "mat-icon", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15);
    \u0275\u0275element(19, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ctx_r0.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.icon);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + ctx_r0.status);
    \u0275\u0275property("matTooltip", ctx_r0.statusLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusIcon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formattedValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.unit);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r0.trend !== "stable" ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bar-" + ctx_r0.status);
  }
}
var AirQualityCardComponent = class _AirQualityCardComponent {
  constructor() {
    this.title = "";
    this.value = null;
    this.unit = "";
    this.icon = "air";
    this.previousValue = null;
    this.thresholds = {};
    this.isLoading = false;
    this.status = "loading";
    this.statusLabel = "";
    this.trend = "stable";
  }
  ngOnChanges() {
    this.computeStatus();
    this.computeTrend();
  }
  computeStatus() {
    if (this.isLoading || this.value === null) {
      this.status = "loading";
      this.statusLabel = "Se \xEEncarc\u0103...";
      return;
    }
    const { dangerMin, dangerMax, warningMin, warningMax } = this.thresholds;
    const v = this.value;
    const inDanger = dangerMin !== void 0 && v > dangerMin || dangerMax !== void 0 && v < dangerMax;
    const inWarning = warningMin !== void 0 && v > warningMin || warningMax !== void 0 && v < warningMax;
    if (inDanger) {
      this.status = "danger";
      this.statusLabel = "Pericol";
    } else if (inWarning) {
      this.status = "warning";
      this.statusLabel = "Aten\u021Bie";
    } else {
      this.status = "ok";
      this.statusLabel = "Optim";
    }
  }
  computeTrend() {
    if (this.value === null || this.previousValue === null) {
      this.trend = "stable";
      return;
    }
    const diff = this.value - this.previousValue;
    this.trend = Math.abs(diff) < 0.5 ? "stable" : diff > 0 ? "up" : "down";
  }
  get statusIcon() {
    return this.status === "ok" ? "check_circle" : this.status === "warning" ? "warning" : "dangerous";
  }
  get trendIcon() {
    return this.trend === "up" ? "trending_up" : this.trend === "down" ? "trending_down" : "trending_flat";
  }
  get formattedValue() {
    if (this.value === null)
      return "--";
    return Number.isInteger(this.value) ? this.value.toString() : this.value.toFixed(1);
  }
  static {
    this.\u0275fac = function AirQualityCardComponent_Factory(t) {
      return new (t || _AirQualityCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AirQualityCardComponent, selectors: [["app-air-quality-card"]], inputs: { title: "title", value: "value", unit: "unit", icon: "icon", previousValue: "previousValue", thresholds: "thresholds", isLoading: "isLoading" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[1, "metric-card"], [1, "skeleton-content"], [1, "skeleton", "skeleton-icon"], [1, "skeleton", "skeleton-value"], [1, "skeleton", "skeleton-label"], [1, "card-header"], [1, "icon-wrapper"], [1, "status-badge", 3, "matTooltip"], [1, "status-icon"], [1, "card-body"], [1, "value-row"], [1, "value"], [1, "unit"], [1, "trend-icon", 3, "class", "matTooltip"], [1, "metric-title"], [1, "card-footer"], [1, "status-bar"], [1, "trend-icon", 3, "matTooltip"]], template: function AirQualityCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 0);
        \u0275\u0275template(1, AirQualityCardComponent_Conditional_1_Template, 4, 0, "div", 1)(2, AirQualityCardComponent_Conditional_2_Template, 20, 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap("status-" + ctx.status);
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.isLoading ? 1 : 2);
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatIconModule, MatIcon, MatTooltipModule, MatTooltip], styles: ["\n\n.metric-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 160px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: default;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;\n}\n.metric-card.status-ok[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-green) !important;\n}\n.metric-card.status-warning[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-orange) !important;\n}\n.metric-card.status-danger[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-red) !important;\n}\n.metric-card.status-loading[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--border) !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.icon-wrapper.status-ok[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.15);\n}\n.icon-wrapper.status-ok[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-green);\n}\n.icon-wrapper.status-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.15);\n}\n.icon-wrapper.status-warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-orange);\n}\n.icon-wrapper.status-danger[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.15);\n}\n.icon-wrapper.status-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-red);\n}\n.icon-wrapper.status-loading[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n}\n.icon-wrapper.status-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.status-badge.badge-ok[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.15);\n  color: var(--accent-green);\n}\n.status-badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.15);\n  color: var(--accent-orange);\n}\n.status-badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.15);\n  color: var(--accent-red);\n  animation: pulse 2s infinite;\n}\n.status-badge.badge-loading[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-secondary);\n}\n.value-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.unit[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.trend-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-left: 4px;\n}\n.trend-icon.trend-up[_ngcontent-%COMP%] {\n  color: var(--accent-red);\n}\n.trend-icon.trend-down[_ngcontent-%COMP%] {\n  color: var(--accent-green);\n}\n.metric-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 400;\n}\n.card-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.status-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  border-radius: 0 0 8px 8px;\n}\n.status-bar.bar-ok[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--accent-green));\n}\n.status-bar.bar-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--accent-orange));\n}\n.status-bar.bar-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--accent-red));\n}\n.status-bar.bar-loading[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--border));\n}\n.skeleton-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 4px;\n}\n.skeleton-content[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n}\n.skeleton-content[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 36px;\n  border-radius: 6px;\n}\n.skeleton-content[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 14px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=air-quality-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirQualityCardComponent, { className: "AirQualityCardComponent", filePath: "src/app/features/dashboard/air-quality-card/air-quality-card.component.ts", lineNumber: 23 });
})();

export {
  AirQualityCardComponent
};
//# sourceMappingURL=chunk-OOJGAFFM.js.map
