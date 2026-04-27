import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  delay,
  environment,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CUZ7VDK2.js";

// src/app/core/services/mock-data.service.ts
var BASE_DEVICES = [
  {
    id: "device-1",
    name: "Senzor Living",
    location: "Camera de zi",
    status: "online",
    windowOpen: false,
    windowMode: "auto",
    firmware: "v2.1.3",
    lastSync: (/* @__PURE__ */ new Date()).toISOString(),
    co2Threshold: 1e3,
    pm25Threshold: 25
  },
  {
    id: "device-2",
    name: "Senzor Dormitor",
    location: "Dormitor",
    status: "online",
    windowOpen: true,
    windowMode: "manual",
    firmware: "v2.1.3",
    lastSync: (/* @__PURE__ */ new Date()).toISOString(),
    co2Threshold: 800,
    pm25Threshold: 12
  },
  {
    id: "device-3",
    name: "Senzor Birou",
    location: "Birou",
    status: "offline",
    windowOpen: false,
    windowMode: "auto",
    firmware: "v2.0.1",
    lastSync: new Date(Date.now() - 36e5).toISOString(),
    co2Threshold: 1e3,
    pm25Threshold: 25
  }
];
var MockDataService = class _MockDataService {
  constructor() {
    this.devices = BASE_DEVICES.map((d) => __spreadValues({}, d));
  }
  randomSensorValues() {
    return {
      co2: Math.floor(400 + Math.random() * 700),
      pm25: Math.round(Math.random() * 50 * 10) / 10,
      temperature: Math.round((18 + Math.random() * 12) * 10) / 10,
      humidity: Math.floor(35 + Math.random() * 45)
    };
  }
  getDevices() {
    return of(this.devices.map((d) => __spreadValues(__spreadValues({}, d), this.randomSensorValues()))).pipe(delay(300));
  }
  getDevice(id) {
    const device = this.devices.find((d) => d.id === id);
    if (!device)
      return of(void 0).pipe(delay(300));
    return of(__spreadValues(__spreadValues({}, device), this.randomSensorValues())).pipe(delay(300));
  }
  updateDevice(id, updates) {
    const idx = this.devices.findIndex((d) => d.id === id);
    if (idx !== -1) {
      this.devices[idx] = __spreadValues(__spreadValues({}, this.devices[idx]), updates);
    }
    return of(__spreadValues(__spreadValues({}, this.devices[idx]), this.randomSensorValues())).pipe(delay(250));
  }
  addDevice(device) {
    const newDevice = __spreadProps(__spreadValues({}, device), {
      id: "device-" + Date.now(),
      firmware: "v2.1.3",
      lastSync: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.devices.push(newDevice);
    return of(newDevice).pipe(delay(400));
  }
  getHistory(deviceId, from, to) {
    const entries = [];
    const cursor = new Date(from);
    while (cursor <= to) {
      entries.push({
        deviceId,
        co2: Math.floor(400 + Math.random() * 700),
        pm25: Math.round(Math.random() * 50 * 10) / 10,
        temperature: Math.round((18 + Math.random() * 12) * 10) / 10,
        humidity: Math.floor(35 + Math.random() * 45),
        timestamp: cursor.toISOString()
      });
      cursor.setMinutes(cursor.getMinutes() + 15);
    }
    return of(entries).pipe(delay(500));
  }
  generateAlerts(devices) {
    const alerts = [];
    devices.forEach((device) => {
      if (!device.co2 || !device.pm25)
        return;
      if (device.co2 > 1200) {
        alerts.push({
          id: device.id + "-co2-danger",
          deviceId: device.id,
          deviceName: device.name,
          metric: "CO2",
          value: device.co2,
          severity: "danger",
          message: `CO2 a dep\u0103\u0219it 1200 ppm \xEEn ${device.name}`,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else if (device.co2 > 800) {
        alerts.push({
          id: device.id + "-co2-warn",
          deviceId: device.id,
          deviceName: device.name,
          metric: "CO2",
          value: device.co2,
          severity: "warning",
          message: `CO2 ridicat (${device.co2} ppm) \xEEn ${device.name}`,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      if (device.pm25 > 35) {
        alerts.push({
          id: device.id + "-pm25-danger",
          deviceId: device.id,
          deviceName: device.name,
          metric: "PM2.5",
          value: device.pm25,
          severity: "danger",
          message: `PM2.5 periculos (${device.pm25} \u03BCg/m\xB3) \xEEn ${device.name}`,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else if (device.pm25 > 12) {
        alerts.push({
          id: device.id + "-pm25-warn",
          deviceId: device.id,
          deviceName: device.name,
          metric: "PM2.5",
          value: device.pm25,
          severity: "warning",
          message: `PM2.5 ridicat (${device.pm25} \u03BCg/m\xB3) \xEEn ${device.name}`,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    });
    return alerts.slice(0, 5);
  }
  static {
    this.\u0275fac = function MockDataService_Factory(t) {
      return new (t || _MockDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockDataService, factory: _MockDataService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http, mock) {
    this.http = http;
    this.mock = mock;
  }
  getDevices() {
    if (environment.useMockData)
      return this.mock.getDevices();
    return this.http.get(`${environment.apiUrl}/devices`);
  }
  getDevice(id) {
    if (environment.useMockData)
      return this.mock.getDevice(id);
    return this.http.get(`${environment.apiUrl}/devices/${id}`);
  }
  updateDevice(id, updates) {
    if (environment.useMockData)
      return this.mock.updateDevice(id, updates);
    return this.http.patch(`${environment.apiUrl}/devices/${id}`, updates);
  }
  addDevice(device) {
    if (environment.useMockData)
      return this.mock.addDevice(device);
    return this.http.post(`${environment.apiUrl}/devices`, device);
  }
  getHistory(deviceId, from, to) {
    if (environment.useMockData)
      return this.mock.getHistory(deviceId, from, to);
    return this.http.get(`${environment.apiUrl}/history/${deviceId}?from=${from.toISOString()}&to=${to.toISOString()}`);
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(MockDataService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  MockDataService,
  ApiService
};
//# sourceMappingURL=chunk-YIY5OKNA.js.map
