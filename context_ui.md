# AirGuard — Context UI pentru Generare Backend NestJS

> Fișier generat automat prin analiză statică a proiectului Angular.
> Folosit de agentul AI pentru a construi backend-ul complet și integrat.

---

## 1. Prezentare Generală

- **Nume aplicație:** AirGuard
- **Scop:** Monitorizare calitate aer în timp real pentru dispozitive IoT (senzori ESP32). Aplicația permite vizualizarea datelor de la senzori (CO₂, PM2.5, temperatură, umiditate), controlul ferestrelor, gestionarea dispozitivelor și analiza istoricului de măsurători.
- **Angular versiune:** 17.3.0
- **Data analizei:** 2026-04-29

---

## 2. Stack Tehnic Frontend

| Tehnologie | Pachet | Versiune |
|------------|--------|---------|
| Framework | @angular/core | ^17.3.0 |
| UI Library | @angular/material + @angular/cdk | ^17.3.0 |
| HTTP | @angular/common/http | built-in |
| WebSocket | socket.io-client | ^4.7.4 |
| Auth | custom JWT (fără librărie externă) | - |
| Charts | chart.js | ^4.4.2 |
| Routing | @angular/router | ^17.3.0 |
| Forms | @angular/forms | ^17.3.0 |
| Reactive | rxjs | ~7.8.0 |

---

## 3. Configurare API

```typescript
// Din environment.ts (development)
apiUrl: 'http://localhost:3000'
wsUrl: 'http://localhost:3000'
useMockData: true   // ← FLAG CRITIC: toate apelurile HTTP și WS sunt bypass-ate în dev

// Din environment.prod.ts (production)
apiUrl: 'https://api.airguard.io'
wsUrl: 'wss://api.airguard.io'
useMockData: false
```

---

## 4. Autentificare

- **Tip:** JWT custom (fără @auth0/angular-jwt sau Passport pe frontend)
- **Storage:** `localStorage`
- **Cheie storage:** `'airguard_user'` — stochează obiectul `User` complet serializat ca JSON: `{ id, name, email, token }`
- **Token extras din:** `JSON.parse(localStorage.getItem('airguard_user')).token`
- **Header HTTP trimis:** `Authorization: Bearer <token>` (adăugat automat de `jwtInterceptor` pe toate request-urile)
- **Interceptor:** `jwt.interceptor.ts` — `HttpInterceptorFn`, injectat în `appConfig` prin `withInterceptors([jwtInterceptor])`
- **Refresh token:** Nu există — nu este implementat niciun mecanism de refresh
- **Rute protejate (din `authGuard`):** toate rutele din `ShellComponent` (copii):
  - `/dashboard`
  - `/devices`
  - `/devices/:id`
  - `/history`
- **Redirect neautentificat:** `/login`
- **Logout:** șterge `airguard_user` din `localStorage`, navighează la `/login`

---

## 5. Toate Endpoint-urile HTTP Necesare

> **IMPORTANT:** În prezent `environment.useMockData = true`, deci niciun apel HTTP real nu este executat. Backend-ul trebuie să implementeze **exact** aceste endpoint-uri pentru ca frontend-ul să funcționeze în producție (`useMockData: false`).

### 5.1 Auth
> Logica de autentificare este în `auth.service.ts`. În modul mock se generează un token fictiv. Backend-ul trebuie să returneze structura `User` cu câmpul `token` (JWT).

| Metodă | Endpoint | Request Body | Response | Note |
|--------|----------|-------------|----------|------|
| POST | `/auth/login` | `{ email: string, password: string }` | `{ id: string, name: string, email: string, token: string }` | Public — token-ul este stocat direct în câmpul `user.token` |
| POST | `/auth/register` | `{ name: string, email: string, password: string }` | `{ id: string, name: string, email: string, token: string }` | Public |

> **Notă critică:** Frontend-ul salvează răspunsul complet (obiectul `User`) în `localStorage['airguard_user']`. Nu există separare `access_token` / `user` — backend-ul trebuie să returneze un singur obiect plat cu câmpul `token`.

### 5.2 Devices
> Sursă: `api.service.ts`

| Metodă | Endpoint | Request Body | Response | Note |
|--------|----------|-------------|----------|------|
| GET | `/devices` | - | `Device[]` | JWT required — listează toate dispozitivele utilizatorului |
| GET | `/devices/:id` | - | `Device` | JWT required — detalii dispozitiv |
| PATCH | `/devices/:id` | `Partial<Device>` | `Device` | JWT required — actualizare câmpuri (windowOpen, windowMode, co2Threshold, pm25Threshold) |
| POST | `/devices` | `{ name: string, location: string, windowMode: 'auto'\|'manual', status: 'online'\|'offline', windowOpen: boolean, co2Threshold: number, pm25Threshold: number }` | `Device` | JWT required — creare dispozitiv nou |

> **Câmpuri PATCH folosite efectiv în cod:**
> - `{ windowOpen: boolean }` — din `toggleWindow()` în DashboardComponent și DevicesListComponent
> - `{ windowOpen: boolean }` — din `toggleWindow()` în DeviceDetailComponent
> - `{ co2Threshold: number, pm25Threshold: number, windowMode: 'auto'|'manual' }` — din `saveSettings()` în DeviceDetailComponent

### 5.3 History (Sensor Readings)
> Sursă: `api.service.ts`

| Metodă | Endpoint | Request Body | Response | Note |
|--------|----------|-------------|----------|------|
| GET | `/history/:deviceId?from=ISO&to=ISO` | - | `HistoryEntry[]` | JWT required — istoric înregistrări senzori pentru un dispozitiv, filtrat pe interval de timp |

> **Query params:**
> - `from` — ISO 8601 string (ex: `2026-04-22T10:00:00.000Z`)
> - `to` — ISO 8601 string (ex: `2026-04-29T10:00:00.000Z`)
>
> **Utilizare în DeviceDetailComponent:** ultimele 24 de ore, eșantionare la fiecare 4 înregistrări, maxim 30 puncte afișate
> **Utilizare în HistoryComponent:** ultimele 7 zile implicit, paginator cu 15 înregistrări/pagină, export CSV

---

## 6. Evenimente WebSocket

> Sursă: `socket.service.ts`
> Librărie: `socket.io-client ^4.7.4`
> URL conectare: `environment.wsUrl` (ex: `http://localhost:3000` sau `wss://api.airguard.io`)

```typescript
// Cod de conectare (din comentariul din socket.service.ts):
import { io } from 'socket.io-client';
const socket = io(environment.wsUrl);
socket.on('sensor-data', (data) => this.dataSubject.next(data));
```

| Eveniment | Direcție | Payload | Descriere |
|-----------|----------|---------|-----------|
| `sensor-data` | Server→Client | `{ deviceId: string, co2: number, pm25: number, temperature: number, humidity: number, timestamp: string }` | Date live de la senzori, emise periodic (la fiecare citire ESP32). Frontend-ul actualizează dashboard-ul și graficele în timp real. |

> **Notă:** Nu există evenimente Client→Server definite în cod. Comenzile de fereastră sunt trimise via REST (`PATCH /devices/:id`), nu via WebSocket.
>
> **Frecvență mock:** la fiecare 3 secunde, ciclând prin device-1, device-2, device-3.
>
> **Utilizare în componente:**
> - `DashboardComponent` — subscrie la `socketService.sensorData$`, actualizează `latestReadings` și `alerts`
> - `DeviceDetailComponent` — filtrează după `data.deviceId === this.deviceId`, actualizează graficul live

---

## 7. Modele de Date (Interfaces TypeScript)

```typescript
// ─── auth.service.ts ───────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;   // JWT token — stocat împreună cu user-ul în localStorage
}

// ─── mock-data.service.ts ──────────────────────────────────────────────────

export interface Device {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  windowOpen: boolean;
  windowMode: 'auto' | 'manual';
  firmware: string;        // ex: 'v2.1.3'
  lastSync: string;        // ISO 8601 timestamp
  co2Threshold: number;    // prag alertă CO2 per dispozitiv (default: 1000)
  pm25Threshold: number;   // prag alertă PM2.5 per dispozitiv (default: 25)
  // Câmpuri senzori — opționale, incluse în răspuns dacă există citire curentă:
  co2?: number;
  pm25?: number;
  temperature?: number;
  humidity?: number;
}

export interface HistoryEntry {
  deviceId: string;
  co2: number;
  pm25: number;
  temperature: number;
  humidity: number;
  timestamp: string;   // ISO 8601
}

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  metric: string;              // ex: 'CO2', 'PM2.5'
  value: number;
  severity: 'warning' | 'danger';
  message: string;
  timestamp: string;           // ISO 8601
}

// ─── socket.service.ts ─────────────────────────────────────────────────────

export interface SensorData {
  deviceId: string;
  co2: number;
  pm25: number;
  temperature: number;
  humidity: number;
  timestamp: string;   // ISO 8601
}

// ─── air-quality-card.component.ts ─────────────────────────────────────────

export type MetricStatus = 'ok' | 'warning' | 'danger' | 'loading';

export interface MetricThresholds {
  warningMin?: number;
  warningMax?: number;
  dangerMin?: number;
  dangerMax?: number;
}
```

---

## 8. Structura Rutelor Frontend

```
/                    → redirect → /dashboard
/login               → LoginComponent                    [PUBLIC]
/register            → RegisterComponent                 [PUBLIC]

/dashboard           → DashboardComponent                [PROTECTED — authGuard]
/devices             → DevicesListComponent              [PROTECTED — authGuard]
/devices/:id         → DeviceDetailComponent             [PROTECTED — authGuard]
/history             → HistoryComponent                  [PROTECTED — authGuard]

/**                  → redirect → /dashboard
```

> Toate rutele protejate sunt copii ale `ShellComponent` (navbar + layout), cu `canActivate: [authGuard]`.
> La acces neautorizat, `authGuard` face redirect la `/login` via `router.createUrlTree(['/login'])`.

---

## 9. Logica de Business Identificată

### 9.1 Control Ferestre

Fiecare dispozitiv are o fereastră asociată care poate fi controlată manual sau automat:

- **windowOpen: boolean** — starea curentă a ferestrei (deschisă/închisă)
- **windowMode: 'auto' | 'manual'** — modul de operare
  - `manual`: utilizatorul controlează manual prin toggle din UI (DashboardComponent, DevicesListComponent, DeviceDetailComponent)
  - `auto`: backend-ul/ESP32 controlează automat bazat pe pragurile de CO2/PM2.5

Acțiunea de toggle din frontend:
```
PATCH /devices/:id  body: { windowOpen: !device.windowOpen }
```

Comenzile spre ESP32 se trimit via MQTT din backend (nu din frontend direct).

### 9.2 Alerte și Praguri

**Praguri globale fixe** (hardcodate în `DashboardComponent` și `MockDataService`):

| Metric | Warning | Danger |
|--------|---------|--------|
| CO₂ | > 800 ppm | > 1200 ppm |
| PM2.5 | > 12 μg/m³ | > 35 μg/m³ |
| Temperatură | > 26°C | > 30°C |
| Umiditate | > 60% | > 70% |

**Praguri per-dispozitiv** (configurabile din DeviceDetailComponent):
- `co2Threshold` — default: 1000 ppm
- `pm25Threshold` — default: 25 μg/m³

Alertele sunt generate de `MockDataService.generateAlerts()` și afișate în `AlertsPanelComponent` pe dashboard. Maxim 5 alerte afișate simultan.

Backend-ul trebuie să genereze alerte automat când valorile senzorilor depășesc pragurile per-dispozitiv și să le returneze via API (`GET /alerts` sau incluse în răspunsul `/devices`).

### 9.3 Date Live (Real-time)

Frontend-ul se conectează la backend via **Socket.IO** și ascultă evenimentul `sensor-data`.

Fluxul de date așteptat:
1. ESP32 publică date pe MQTT (`airguard/{deviceId}/sensors`)
2. Backend NestJS subscrie la topic MQTT
3. Backend emite evenimentul `sensor-data` via Socket.IO spre toți clienții conectați (sau pe un room per user)
4. Angular primește `SensorData`, actualizează semnalele reactive și redesenează graficele

**Frecvența de actualizare:** la fiecare citire a senzorilor ESP32 (recomandat: 3–10 secunde).

DeviceDetailComponent menține un buffer de maxim **50 de puncte** în graficul live (shift la depășire).

### 9.4 Istoricul Datelor

- HistoryComponent permite filtrare pe: dispozitiv, interval date, metrici vizibile
- Graficul eșantionează maxim 40 de puncte din întregul set
- Tabelul este paginat (15 înregistrări/pagină)
- Export CSV disponibil cu toate înregistrările din intervalul selectat
- DeviceDetailComponent încarcă ultimele 24h și eșantionează 1 din 4 înregistrări, maxim 30 puncte

---

## 10. Cerințe Backend NestJS

Pe baza analizei, backend-ul trebuie să implementeze:

### Module necesare (în ordine de implementare):

1. **DatabaseModule** — conectare Supabase PostgreSQL (TypeORM sau Supabase JS client)
2. **AuthModule** — JWT auth cu Passport.js; `login` și `register` returnează obiect `User` cu câmpul `token`
3. **UsersModule** — CRUD utilizatori
4. **DevicesModule** — management dispozitive IoT (CRUD + filtrare per user)
5. **MqttModule** — conectare HiveMQ, subscribe/publish topicuri `airguard/#`
6. **SensorsModule** — salvare date senzori din MQTT și interogare istoric cu filtru date
7. **AlertsModule** — detecție depășire praguri per-dispozitiv, generare și persistare alerte
8. **WebSocketGateway** — emitere eveniment `sensor-data` spre clienții Socket.IO la fiecare citire MQTT

### Variabile de mediu necesare (.env):

```env
# Server
PORT=3000
CORS_ORIGIN=http://localhost:4200

# JWT
JWT_SECRET=
JWT_EXPIRES_IN=7d
# Refresh token NU este implementat în frontend — poate fi omis în V1

# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_KEY=

# HiveMQ
MQTT_HOST=
MQTT_PORT=8883
MQTT_USERNAME=
MQTT_PASSWORD=
MQTT_CLIENT_ID=airguard-backend
```

### Tabelele Supabase necesare:

```sql
-- users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- devices
CREATE TABLE devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  location TEXT,
  status TEXT DEFAULT 'offline',           -- 'online' | 'offline'
  window_open BOOLEAN DEFAULT false,
  window_mode TEXT DEFAULT 'manual',       -- 'auto' | 'manual'
  firmware TEXT DEFAULT 'v2.1.3',
  last_sync TIMESTAMPTZ,
  co2_threshold FLOAT DEFAULT 1000,
  pm25_threshold FLOAT DEFAULT 25,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- sensor_readings
CREATE TABLE sensor_readings (
  id BIGSERIAL PRIMARY KEY,
  device_id UUID REFERENCES devices(id) ON DELETE CASCADE,
  co2 FLOAT,
  pm25 FLOAT,
  temperature FLOAT,
  humidity FLOAT,
  created_at TIMESTAMPTZ DEFAULT NOW()    -- folosit ca 'timestamp' în HistoryEntry
);

-- alerts
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id UUID REFERENCES devices(id) ON DELETE CASCADE,
  metric TEXT NOT NULL,                    -- 'CO2' | 'PM2.5' | 'temperature' | 'humidity'
  value FLOAT NOT NULL,
  severity TEXT DEFAULT 'warning',        -- 'warning' | 'danger'
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

> **Notă:** `thresholds` sunt stocate direct pe dispozitiv (`co2_threshold`, `pm25_threshold`). Nu este necesară o tabelă separată.

---

## 11. Topicuri MQTT

| Topic | Direcție | Payload | Descriere |
|-------|----------|---------|-----------|
| `airguard/{deviceId}/sensors` | ESP32→Backend | `{ co2: number, pm25: number, temperature: number, humidity: number }` | Date senzori publicate periodic de ESP32 |
| `airguard/{deviceId}/status` | ESP32→Backend | `{ online: boolean }` | Status conexiune ESP32 (LWT sau heartbeat) |
| `airguard/{deviceId}/window/cmd` | Backend→ESP32 | `{ open: boolean }` | Comandă deschidere/închidere fereastră (trimisă la PATCH device) |
| `airguard/{deviceId}/window/state` | ESP32→Backend | `{ open: boolean }` | Confirmare stare fereastră după execuție comandă |

---

## 12. Note de Integrare

### 12.1 Flag `useMockData` — Ce trebuie înlocuit

Întregul flux de date este mockat în `environment.useMockData = true`. La setarea `useMockData: false`:

| Serviciu | Comportament mock | Ce trebuie implementat în backend |
|----------|-------------------|----------------------------------|
| `AuthService.login()` | `setTimeout` + token fictiv | `POST /auth/login` returnând `{ id, name, email, token }` |
| `AuthService.register()` | `setTimeout` + token fictiv | `POST /auth/register` returnând `{ id, name, email, token }` |
| `ApiService.getDevices()` | `MockDataService.getDevices()` | `GET /devices` cu JWT |
| `ApiService.getDevice(id)` | `MockDataService.getDevice(id)` | `GET /devices/:id` cu JWT |
| `ApiService.updateDevice(id, body)` | `MockDataService.updateDevice()` | `PATCH /devices/:id` cu JWT |
| `ApiService.addDevice(device)` | `MockDataService.addDevice()` | `POST /devices` cu JWT |
| `ApiService.getHistory(...)` | `MockDataService.getHistory()` | `GET /history/:deviceId?from=ISO&to=ISO` cu JWT |
| `SocketService` | `setInterval` la 3s cu date random | `socket.io` server emitând `sensor-data` la fiecare citire MQTT |

### 12.2 Structura răspuns Auth

Frontend-ul salvează **răspunsul complet** de la login/register direct în `localStorage['airguard_user']` și îl parsează ca `User`:

```typescript
// Frontend salvează și accesează astfel:
localStorage.setItem('airguard_user', JSON.stringify(user));
const token = JSON.parse(localStorage.getItem('airguard_user')).token;
```

Backend-ul TREBUIE să returneze exact:
```json
{
  "id": "uuid",
  "name": "Nume Utilizator",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 12.3 Mapping câmpuri snake_case ↔ camelCase

Frontend-ul folosește **camelCase** (`windowOpen`, `windowMode`, `lastSync`, `co2Threshold`, `pm25Threshold`). Backend-ul Supabase stochează în **snake_case**. NestJS trebuie să facă mapping în DTOs/entities.

### 12.4 Alerte generate frontend vs backend

În prezent, alertele sunt generate **pe frontend** de `MockDataService.generateAlerts()` pe baza datelor locale. În producție, backend-ul trebuie să:
1. Detecteze depășirea pragurilor la fiecare citire MQTT
2. Persiste alertele în baza de date
3. Le returneze via WebSocket sau API dedicat

Frontend-ul nu are un endpoint `GET /alerts` definit — alertele sunt incluse în logica de dashboard. Se recomandă adăugarea unui endpoint `GET /alerts` pentru a putea persista și recupera alertele istorice.

### 12.5 CORS

Backend-ul trebuie să permită origin-ul frontend Angular:
- Development: `http://localhost:4200`
- Production: domeniul frontend-ului

### 12.6 Socket.IO vs WebSocket nativ

Frontend-ul folosește **`socket.io-client`** (nu WebSocket nativ). Backend-ul NestJS trebuie să folosească `@nestjs/websockets` cu adapter **socket.io** (`@nestjs/platform-socket.io`), nu adapter `ws`.
