import {
  AirQualityCardComponent,
  SocketService
} from "./chunk-DOU2KZWP.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-H7P4TWSV.js";
import {
  MatChip,
  MatChipsModule,
  MatSlideToggleModule
} from "./chunk-3PCLPFYS.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-FX7RJNGN.js";
import {
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  index,
  plugin_legend,
  plugin_tooltip
} from "./chunk-NYWKDNUV.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-4DZXEHM2.js";
import {
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-PBJT2FMZ.js";
import {
  ApiService
} from "./chunk-YIY5OKNA.js";
import {
  MatTooltipModule
} from "./chunk-ZPASEQEY.js";
import {
  MatSnackBar
} from "./chunk-KLJMTQGD.js";
import "./chunk-UETAL3Z3.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-XTUMZNXX.js";
import {
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CUZ7VDK2.js";

// src/app/features/devices/device-detail/device-detail.component.ts
var _c0 = ["historyCanvas"];
var _c1 = () => ({ warningMin: 800, dangerMin: 1200 });
var _c2 = () => ({ warningMin: 12, dangerMin: 35 });
var _c3 = () => ({ warningMin: 26, dangerMin: 30 });
var _c4 = () => ({ warningMin: 60, dangerMin: 70 });
function DeviceDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Se \xEEncarc\u0103 dispozitivul...");
    \u0275\u0275elementEnd()();
  }
}
function DeviceDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 5)(1, "mat-icon");
    \u0275\u0275text(2, "device_unknown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Dispozitiv neg\u0103sit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "\xCEnapoi la lista");
    \u0275\u0275elementEnd()();
  }
}
function DeviceDetailComponent_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 12);
    \u0275\u0275text(1, "Mod Automat");
    \u0275\u0275elementEnd();
  }
}
function DeviceDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h1", 9)(3, "mat-icon");
    \u0275\u0275text(4, "sensors");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11)(8, "mat-icon");
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-chip");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DeviceDetailComponent_Conditional_7_Conditional_13_Template, 2, 0, "mat-chip", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function DeviceDetailComponent_Conditional_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleWindow());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "section", 14);
    \u0275\u0275element(19, "app-air-quality-card", 15)(20, "app-air-quality-card", 16)(21, "app-air-quality-card", 17)(22, "app-air-quality-card", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-card", 19)(24, "mat-card-header")(25, "mat-card-title")(26, "mat-icon");
    \u0275\u0275text(27, "show_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Istoric 24h ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-card-content")(30, "div", 20);
    \u0275\u0275element(31, "canvas", null, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 21)(34, "mat-card", 22)(35, "mat-card-header")(36, "mat-card-title")(37, "mat-icon");
    \u0275\u0275text(38, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Set\u0103ri ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-card-content")(41, "form", 23)(42, "mat-form-field", 24)(43, "mat-label");
    \u0275\u0275text(44, "Prag CO\u2082 (ppm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-icon", 25);
    \u0275\u0275text(46, "air");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-form-field", 24)(49, "mat-label");
    \u0275\u0275text(50, "Prag PM2.5 (\u03BCg/m\xB3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-icon", 25);
    \u0275\u0275text(52, "grain");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 24)(55, "mat-label");
    \u0275\u0275text(56, "Mod fereastr\u0103");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-icon", 25);
    \u0275\u0275text(58, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-select", 28)(60, "mat-option", 29);
    \u0275\u0275text(61, "Automat (bazat pe praguri)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-option", 30);
    \u0275\u0275text(63, "Manual");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "button", 31);
    \u0275\u0275listener("click", function DeviceDetailComponent_Conditional_7_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSettings());
    });
    \u0275\u0275elementStart(65, "mat-icon");
    \u0275\u0275text(66, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Salveaz\u0103 set\u0103rile ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "mat-card", 32)(69, "mat-card-header")(70, "mat-card-title")(71, "mat-icon");
    \u0275\u0275text(72, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Informa\u021Bii dispozitiv ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "mat-card-content")(75, "div", 33)(76, "div", 34)(77, "span", 35);
    \u0275\u0275text(78, "ID Dispozitiv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 36);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(81, "mat-divider");
    \u0275\u0275elementStart(82, "div", 34)(83, "span", 35);
    \u0275\u0275text(84, "Firmware");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 37);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(87, "mat-divider");
    \u0275\u0275elementStart(88, "div", 34)(89, "span", 35);
    \u0275\u0275text(90, "Ultima sincronizare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 37);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(94, "mat-divider");
    \u0275\u0275elementStart(95, "div", 34)(96, "span", 35);
    \u0275\u0275text(97, "Mod fereastr\u0103");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 37);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(100, "mat-divider");
    \u0275\u0275elementStart(101, "div", 34)(102, "span", 35);
    \u0275\u0275text(103, "Stare fereastr\u0103");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 37);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_23_0;
    let tmp_24_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.device().name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.device().location, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.device().status === "online" ? "chip-online" : "chip-offline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.device().status === "online" ? "Online" : "Offline", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.device().windowMode === "auto" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.device().windowOpen ? "warn" : "primary")("disabled", ctx_r1.device().status === "offline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.device().windowOpen ? "window" : "sensor_window");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Fereastr\u0103 ", ctx_r1.device().windowOpen ? "DESCHIS\u0102" : "\xCENCHIS\u0102", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_11_0 = (tmp_11_0 = ctx_r1.latestReading()) == null ? null : tmp_11_0.co2) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : null)("previousValue", (tmp_12_0 = (tmp_12_0 = ctx_r1.previousReading()) == null ? null : tmp_12_0.co2) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : null)("thresholds", \u0275\u0275pureFunction0(37, _c1))("isLoading", !ctx_r1.latestReading());
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_15_0 = (tmp_15_0 = ctx_r1.latestReading()) == null ? null : tmp_15_0.pm25) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : null)("previousValue", (tmp_16_0 = (tmp_16_0 = ctx_r1.previousReading()) == null ? null : tmp_16_0.pm25) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : null)("thresholds", \u0275\u0275pureFunction0(38, _c2))("isLoading", !ctx_r1.latestReading());
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_19_0 = (tmp_19_0 = ctx_r1.latestReading()) == null ? null : tmp_19_0.temperature) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : null)("previousValue", (tmp_20_0 = (tmp_20_0 = ctx_r1.previousReading()) == null ? null : tmp_20_0.temperature) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : null)("thresholds", \u0275\u0275pureFunction0(39, _c3))("isLoading", !ctx_r1.latestReading());
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_23_0 = (tmp_23_0 = ctx_r1.latestReading()) == null ? null : tmp_23_0.humidity) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : null)("previousValue", (tmp_24_0 = (tmp_24_0 = ctx_r1.previousReading()) == null ? null : tmp_24_0.humidity) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : null)("thresholds", \u0275\u0275pureFunction0(40, _c4))("isLoading", !ctx_r1.latestReading());
    \u0275\u0275advance(19);
    \u0275\u0275property("formGroup", ctx_r1.settingsForm);
    \u0275\u0275advance(39);
    \u0275\u0275textInterpolate(ctx_r1.device().id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.device().firmware);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 34, ctx_r1.device().lastSync, "dd MMM, HH:mm"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.device().windowMode === "auto" ? "Automat" : "Manual");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.device().windowOpen ? "status-ok" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.device().windowOpen ? "Deschis\u0103" : "\xCEnchis\u0103", " ");
  }
}
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, plugin_legend, plugin_tooltip, index);
var DeviceDetailComponent = class _DeviceDetailComponent {
  constructor(route, apiService, socketService, snackBar, fb) {
    this.route = route;
    this.apiService = apiService;
    this.socketService = socketService;
    this.snackBar = snackBar;
    this.fb = fb;
    this.deviceId = "";
    this.device = signal(void 0);
    this.isLoading = signal(true);
    this.latestReading = signal(null);
    this.previousReading = signal(null);
    this.settingsForm = this.fb.group({
      co2Threshold: [1e3],
      pm25Threshold: [25],
      windowMode: ["auto"]
    });
    this.chart = null;
    this.sub = null;
    this.historyLabels = [];
    this.historyData = { co2: [], pm25: [], temperature: [], humidity: [] };
  }
  ngOnInit() {
    this.deviceId = this.route.snapshot.paramMap.get("id") || "";
    this.loadDevice();
    this.sub = this.socketService.sensorData$.subscribe((data) => {
      if (data.deviceId === this.deviceId) {
        this.previousReading.set(this.latestReading());
        this.latestReading.set(data);
        this.addHistoryPoint(data);
      }
    });
  }
  ngAfterViewInit() {
    this.loadHistory();
  }
  loadDevice() {
    this.apiService.getDevice(this.deviceId).subscribe({
      next: (device) => {
        this.device.set(device);
        if (device) {
          this.settingsForm.patchValue({
            co2Threshold: device.co2Threshold,
            pm25Threshold: device.pm25Threshold,
            windowMode: device.windowMode
          });
        }
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  loadHistory() {
    const to = /* @__PURE__ */ new Date();
    const from = new Date(to.getTime() - 24 * 60 * 60 * 1e3);
    this.apiService.getHistory(this.deviceId, from, to).subscribe((entries) => {
      const sample = entries.filter((_, i) => i % 4 === 0).slice(-30);
      sample.forEach((e) => {
        this.historyLabels.push(new Date(e.timestamp).toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" }));
        this.historyData["co2"].push(e.co2);
        this.historyData["pm25"].push(e.pm25);
        this.historyData["temperature"].push(e.temperature);
        this.historyData["humidity"].push(e.humidity);
      });
      this.initChart();
    });
  }
  initChart() {
    if (!this.historyCanvasRef)
      return;
    const ctx = this.historyCanvasRef.nativeElement.getContext("2d");
    if (!ctx)
      return;
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.historyLabels,
        datasets: [
          { label: "CO\u2082 (ppm)", data: this.historyData["co2"], borderColor: "#26c6da", backgroundColor: "rgba(38,198,218,0.1)", tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: "PM2.5", data: this.historyData["pm25"], borderColor: "#ff9800", backgroundColor: "rgba(255,152,0,0.1)", tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 },
          { label: "Temp (\xB0C)", data: this.historyData["temperature"], borderColor: "#4caf50", backgroundColor: "rgba(76,175,80,0.1)", tension: 0.4, fill: true, pointRadius: 2, borderWidth: 2 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#90a4ae", maxTicksLimit: 10, font: { size: 10 } } },
          y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#90a4ae", font: { size: 10 } } }
        },
        plugins: {
          legend: { labels: { color: "#e8eaf6", font: { size: 11 } } },
          tooltip: { backgroundColor: "rgba(26,35,50,0.95)", titleColor: "#26c6da", bodyColor: "#e8eaf6" }
        }
      }
    });
  }
  addHistoryPoint(data) {
    const label = new Date(data.timestamp).toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    this.historyLabels.push(label);
    this.historyData["co2"].push(data.co2);
    this.historyData["pm25"].push(data.pm25);
    this.historyData["temperature"].push(data.temperature);
    this.historyData["humidity"].push(data.humidity);
    if (this.historyLabels.length > 50) {
      this.historyLabels.shift();
      Object.values(this.historyData).forEach((d) => d.shift());
    }
    this.chart?.update("none");
  }
  toggleWindow() {
    const device = this.device();
    if (!device)
      return;
    const newState = !device.windowOpen;
    this.apiService.updateDevice(device.id, { windowOpen: newState }).subscribe((updated) => {
      this.device.set(updated);
      this.snackBar.open(`Fereastra ${newState ? "deschis\u0103" : "\xEEnchis\u0103"}`, "OK", { duration: 3e3 });
    });
  }
  saveSettings() {
    const device = this.device();
    if (!device)
      return;
    const values = this.settingsForm.value;
    this.apiService.updateDevice(device.id, {
      co2Threshold: values.co2Threshold ?? device.co2Threshold,
      pm25Threshold: values.pm25Threshold ?? device.pm25Threshold,
      windowMode: values.windowMode ?? device.windowMode
    }).subscribe(() => {
      this.snackBar.open("Set\u0103ri salvate", "OK", { duration: 3e3 });
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.chart?.destroy();
  }
  static {
    this.\u0275fac = function DeviceDetailComponent_Factory(t) {
      return new (t || _DeviceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(SocketService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceDetailComponent, selectors: [["app-device-detail"]], viewQuery: function DeviceDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.historyCanvasRef = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [["historyCanvas", ""], [1, "page-container", "fade-in"], ["mat-button", "", "routerLink", "/devices", 1, "back-btn"], [1, "loading-state"], ["diameter", "40"], [1, "not-found-card"], ["mat-raised-button", "", "routerLink", "/devices"], [1, "device-header"], [1, "device-title-block"], [1, "device-title"], [1, "device-meta"], [1, "location"], [1, "chip-warning"], ["mat-raised-button", "", 1, "window-btn", 3, "click", "color", "disabled"], [1, "metrics-grid"], ["title", "CO\u2082", "icon", "air", "unit", "ppm", 3, "value", "previousValue", "thresholds", "isLoading"], ["title", "PM2.5", "icon", "grain", "unit", "\u03BCg/m\xB3", 3, "value", "previousValue", "thresholds", "isLoading"], ["title", "Temperatur\u0103", "icon", "thermostat", "unit", "\xB0C", 3, "value", "previousValue", "thresholds", "isLoading"], ["title", "Umiditate", "icon", "water_drop", "unit", "%", 3, "value", "previousValue", "thresholds", "isLoading"], [1, "chart-card"], [1, "chart-wrapper"], [1, "bottom-row"], [1, "settings-card"], [1, "settings-form", 3, "formGroup"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "type", "number", "formControlName", "co2Threshold"], ["matInput", "", "type", "number", "formControlName", "pm25Threshold"], ["formControlName", "windowMode"], ["value", "auto"], ["value", "manual"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [1, "info-card"], [1, "info-list"], [1, "info-row"], [1, "info-label"], [1, "info-value", "monospace"], [1, "info-value"]], template: function DeviceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "mat-icon");
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " \xCEnapoi la dispozitive ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeviceDetailComponent_Conditional_5_Template, 4, 0, "div", 3)(6, DeviceDetailComponent_Conditional_6_Template, 7, 0)(7, DeviceDetailComponent_Conditional_7_Template, 106, 41);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.isLoading() ? 5 : !ctx.device() ? 6 : 7);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatAnchor, MatButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSlideToggleModule, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule, MatChip, MatDividerModule, MatDivider, MatTooltipModule, MatSelectModule, MatSelect, MatOption, AirQualityCardComponent], styles: ["\n\n.back-btn[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.loading-state[_ngcontent-%COMP%], .not-found-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  gap: 16px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .not-found-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: var(--text-secondary);\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .not-found-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .not-found-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.device-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.device-header[_ngcontent-%COMP%]   .device-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.device-header[_ngcontent-%COMP%]   .device-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 26px;\n}\n.device-header[_ngcontent-%COMP%]   .device-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.device-header[_ngcontent-%COMP%]   .device-meta[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.device-header[_ngcontent-%COMP%]   .device-meta[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.device-header[_ngcontent-%COMP%]   .window-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chart-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 16px 20px 8px;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  margin: 0;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px 20px 20px !important;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%] {\n  height: 260px;\n  position: relative;\n}\n.bottom-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 800px) {\n  .bottom-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.settings-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .info-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 16px 20px 8px;\n}\n.settings-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], .info-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  margin: 0;\n}\n.settings-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .info-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.settings-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .info-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px 20px 20px !important;\n}\n.settings-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.settings-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.settings-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n}\n.info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-value.monospace[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n/*# sourceMappingURL=device-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceDetailComponent, { className: "DeviceDetailComponent", filePath: "src/app/features/devices/device-detail/device-detail.component.ts", lineNumber: 46 });
})();
export {
  DeviceDetailComponent
};
//# sourceMappingURL=chunk-FIUEK2VO.js.map
