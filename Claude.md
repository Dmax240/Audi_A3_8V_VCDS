# Audi A3 8V VCDS Reference Documentation

## Project Overview

**Audi A3 8V VCDS Reference** is a comprehensive, searchable reference application for Audi A3 8V (2013-2020) vehicle control system diagnostics and customization using VCDS (VAG Diagnostic System). This is a monorepo built with TypeScript, React, Express, PostgreSQL, and Drizzle ORM.

### Purpose

- **Technicians & DIYers**: Quickly look up VCDS modules, fault codes, live data channels, basic settings, and adaptations
- **Customization Guide**: Reference for enabling/disabling comfort features (windows, lights, locks, mirrors, etc.)
- **Diagnostics**: Real-time interpretation of fault codes, normal operating values, and troubleshooting procedures
- **Database**: Complete 6-speed manual and S-Tronic DSG information for both engines (CZPB 2.0 TSI 220hp and others)

### Vehicle Scope

- **Model**: Audi A3 8V (2013-2020, all generations)
- **Engine**: Primarily CZPB 2.0 TSI 220hp (EA888 Gen3), support for other engines
- **Transmission**: 6-speed manual (0D9) or 7-speed S-Tronic DSG (DQ381)
- **Reference Year**: 2015-2017 (peak feature coverage)

---

## Architecture & Tech Stack

### Monorepo Structure

```
/
├── /lib                           # Shared libraries
│   ├── /api-spec                  # OpenAPI spec (Zod schemas, type generation)
│   ├── /api-zod                   # Zod validators and schemas
│   ├── /api-client-react          # Auto-generated React hooks from OpenAPI
│   └── /db                        # Drizzle ORM schema, migrations, seed data
│
├── /artifacts                     # Applications
│   ├── /vcds-reference            # Main React SPA (Vite + shadcn/ui)
│   ├── /api-server                # Express backend (REST API)
│   ├── /mockup-sandbox            # UI mockup testing
│   └── /...other artifacts
│
├── /scripts                       # Build & utility scripts
├── package.json                   # Workspace root (pnpm)
├── tsconfig.base.json             # Base TypeScript config
└── replit.md                      # Replit/workspace setup guide

```

### Tech Stack Details

- **Monorepo**: pnpm workspaces
- **Runtime**: Node.js 24
- **Language**: TypeScript 5.9
- **Frontend**: React 18 + Vite 5 + shadcn/ui (Radix UI)
- **Backend**: Express 5 + Drizzle ORM
- **Database**: PostgreSQL (Drizzle schema + migrations)
- **Validation**: Zod v4
- **API Codegen**: Orval (generates React hooks from OpenAPI spec)
- **Build**: esbuild (CJS bundles)
- **Dev**: Prettier 3.8.1

---

## Key Files & Their Purposes

### Frontend Data Files (`/artifacts/vcds-reference/src/data/`)

These JSON/TypeScript files are the heart of the reference application:

1. **`modules.ts`**
   - List of all 18 VCDS modules (01, 02, 03, 08, 09, 13, 15, 16, 17, 19, 36, 44, 5F, 61, 76, etc.)
   - For each: ID, name, subtitle, security code, description
   - **Data included**: Engine (01), Transmission (02), ABS (03), Comfort (08), Lights (09), ACC (13), Airbag (15), KESSY (16), Cluster (17), Gateway (19), Seats (36), Steering (44), Infotainment (5F), Battery (61), PDC (76)

2. **`basicSettings.ts`**
   - Critical procedures that require "Do It" button in VCDS
   - Organized by module and category (Engine Calibration, Transmission, Brakes, Cluster, Battery, ACC)
   - Each entry: module, name, prerequisites, procedure, category
   - **Data included**: Throttle adaptation, idle speed, fuel trim reset, IMRC, cam timing, cylinder contribution test, transmission reset, clutch calibration, brake bleeding, SAS calibration, ACC calibration, oil service reset, TPMS calibration, battery registration

3. **`adaptations.ts`**
   - Comfort/customization settings: windows, locks, mirrors, wipers, lights, navigation
   - For each: module, channel, default value, options, effect description
   - **Data included**: Comfort window/sunroof open/close, auto-lock, selective unlock, mirror fold, passenger mirror dip, wiper behavior, DRL settings, coming/leaving home lights, automatic lights, VIM, parking guidelines, battery registration, oil service reset, TPMS, transmission shift feel, creep function

4. **`liveData.ts`**
   - Real-time OBD data channels and their normal ranges
   - For each: module, channel ID (IDE00001, etc.), description, unit, normal values
   - **Data included**: Engine speed, temps (coolant, oil, intake), load, fuel trim, cam timing, fuel pressure, throttle position, O2 sensors, transmission temps/pressures/slip, wheel speeds, brake pressure, acceleration, yaw rate, ACC status, radar calibration, tire pressures, service reminders

5. **`faultCodes.ts`**
   - Diagnostic trouble codes (P0xxx, C0xxx, B1xxx)
   - For each: code, module, description, cause, severity
   - **Data included**: Engine (P0011–P0420, P2015, etc.), Transmission (P0750–P0846), ABS (C0035–C0041), ACC (01316, 01566), Airbag (B1001, B1010), Cluster (B1050)

6. **`warningLights.ts`**
   - Dashboard warning light meanings
   - Check/reference this file for light definitions

7. **`securityCodes.ts`**
   - Security codes for each module requiring authentication
   - Reference for unlocking modules in VCDS

---

## Core Data Entities & Structure

### Module Interface
```typescript
interface Module {
  id: string;           // "01", "02", "08", etc.
  name: string;         // "Engine Control"
  subtitle: string;     // "Simos 18.1 / EA888 Gen3"
  securityCode: string; // "27971" or "None required"
  description: string;  // Multi-line description of what module controls
}
```

### BasicSettings Procedure Interface
```typescript
interface BasicSettingsProcedure {
  module: string;       // "01", "02", "03", etc.
  name: string;         // "Throttle Body Adaptation (TBA)"
  prerequisites: string;
  procedure: string;    // Detailed step-by-step
  category?: string;    // "Engine Calibration", "Transmission", etc.
}
```

### Adaptation Interface
```typescript
interface Adaptation {
  module: string;       // "08", "09", "5F", etc.
  channel: string;      // "Comfort closing: windows"
  default: string;      // "Inactive"
  options: string;      // "Active / Inactive"
  effect: string;       // Description of what enabling does
  category?: string;    // "Windows", "Locks", "DRL", etc.
}
```

### Live Data Channel Interface
```typescript
interface LiveDataChannel {
  channel: string;      // "IDE00001", "IDE00005", etc.
  description: string;
  unit: string;         // "RPM", "°C", "%", etc.
  normalValues: string; // "Idle: 620–720 | Cold: 900–1100"
  module: string;       // "01", "02", "03", etc.
}
```

### Fault Code Interface
```typescript
interface FaultCode {
  code: string;         // "P0011", "C0035", "B1001"
  module: string;
  description: string;
  cause: string;        // Diagnostic reasoning
  severity: "critical" | "warning" | "info";
}
```

---

## VCDS Module Reference Guide

### 01 - Engine Control (Simos 18.1 / EA888 Gen3)
- **Security Code**: 27971
- **Functions**: Fuel injection, ignition timing, turbo boost, cam timing, emissions
- **Vehicle**: CZPB 2.0 TSI 220hp
- **Key Basic Settings**: Throttle adaptation, idle speed, fuel trim, IMRC, cam timing, cylinder contribution test
- **Key Adaptations**: N/A (engine is read-only mostly)
- **Key Live Data**: RPM, coolant temp, fuel pressure, fuel trim, throttle position, O2 sensors

### 02 - Transmission Control (DQ381 S-Tronic / 0D9 Manual)
- **Security Code**: 01138
- **Functions**: Shift solenoids, clutch pressure, fluid temp, ATF quality
- **Variants**: 7-speed DSG or 6-speed manual
- **Key Basic Settings**: Transmission adaptation reset, clutch K1/K2 calibration, selector learning, fluid reset
- **Key Adaptations**: Shift comfort (smooth/aggressive), paddle response, sport mode aggressiveness, creep function
- **Key Live Data**: Clutch slip, ATF temp, system pressure, current gear

### 03 - ABS / Stability Control (Continental Teves MK100 IPB)
- **Security Code**: 40168
- **Functions**: ABS, ESP, traction control, electronic parking brake service
- **Key Basic Settings**: Brake bleeding (CRITICAL — MUST use VCDS), SAS calibration, G-sensor calibration, EPB service mode
- **Key Adaptations**: N/A (system settings are module-wide)
- **Key Live Data**: Wheel speeds, brake pressure, lateral/yaw rates

### 08 - Comfort System / BCM (Body Control Module)
- **Security Code**: 31347
- **Functions**: Windows, locks, mirrors, wipers, rain sensor
- **Key Adaptations**: Comfort close/open windows, comfort sunroof, auto-lock at speed, selective unlock, mirror fold on lock, passenger mirror dip in reverse, wiper activation in reverse, rain sensor sensitivity
- **Key Live Data**: Door lock state, window position, wiper state

### 09 - Central Electronics / Lighting
- **Security Code**: 20103
- **Functions**: Exterior lighting, DRL, headlights, turn signals, fog lights
- **Key Adaptations**: DRL brightness (daytime/night), DRL turn signal dim, coming/leaving home lights duration, automatic lights with rain
- **Key Live Data**: Light switch state, DRL brightness level, sensor states

### 13 - Distance Regulation / ACC (J428 Radar Sensor)
- **Security Code**: None required
- **Functions**: Adaptive cruise control, Front Assist collision warning, radar calibration
- **Key Basic Settings**: ACC misalignment fault resolution (12-step sequence), sensor calibration
- **Key Live Data**: ACC calibration status, target distance, target relative velocity, misalignment fault state
- **Critical Note**: Misalignment faults are common after collision repair; refer to 12-step unlock sequence

### 15 - Airbag / SRS (Restraint Systems)
- **Security Code**: Varies
- **Functions**: Airbag deployment circuits, seatbelt pretensioners, occupant detection
- **Key Note**: Module MUST be replaced after any airbag deployment

### 16 - Steering Column / KESSY (Key & Entry System)
- **Security Code**: 17956
- **Functions**: Key fob programming, walk-away lock, approach unlock, KESSY sensitivity

### 17 - Instrument Cluster / MFA
- **Security Code**: 11046
- **Functions**: Service reminders, TPMS, Virtual Cockpit settings, fuel economy display
- **Key Basic Settings**: Oil service reset, TPMS calibration
- **Key Adaptations**: Oil service reset, inspection service reset, TPMS calibration
- **Key Live Data**: Oil change days/distance remaining, TPMS pressures (all 4 tires)

### 19 - CAN Gateway (Network Configuration)
- **Security Code**: 31347
- **Functions**: Module installation list, network configuration, CAN diagnostics
- **Key Use**: Verify which modules are installed; useful after module swaps

### 36 - Electric Seat / Memory (Memory Seat Module)
- **Security Code**: None required
- **Functions**: Easy entry setup, key fob linked memory recall, seat initialization

### 44 - Steering / EPS / Lane Assist (Power Steering)
- **Security Code**: Varies
- **Functions**: Steering angle sensor (SAS) calibration, EPS weight settings, lane assist sensitivity
- **Key Basic Settings**: SAS calibration (after wheel alignment or suspension work)

### 5F - Infotainment / MMI (MIB2 Head Unit)
- **Security Code**: 1804
- **Functions**: VIM (video in motion), CarPlay, Bluetooth, navigation
- **Key Adaptations**: VIM enable/disable, dynamic parking guidelines, navigation settings

### 61 - Battery Management (BMS System)
- **Security Code**: None required
- **Functions**: Battery registration (MANDATORY), charging strategy, start-stop management
- **Key Note**: **MANDATORY** battery registration after replacement. Must enter: capacity (Ah), type (AGM/EFB), nominal voltage
- **Impact**: Without registration, charging system undercharges; start-stop malfunctions

### 76 - Parking Aid / PDC (Park Distance Control)
- **Security Code**: None required
- **Functions**: Front/rear parking sensors, activation modes, display settings
- **Key Settings**: Front PDC enable, display modes

---

## When to Use VCDS vs. OBD2 Scanners

| Task | VCDS | Basic OBD2 |
|------|------|-----------|
| Read fault codes | ✓ (full details) | ✓ (basic) |
| Clear codes | ✓ | ✓ |
| Live data channels (100+) | ✓ | ✗ (limited) |
| Basic Settings ("Do It" procedures) | ✓ ONLY | ✗ |
| Adaptations (customization) | ✓ ONLY | ✗ |
| Coding/module programming | ✓ | ✗ |
| Brake bleeding (ABS-assisted) | ✓ | ✗ |
| SAS/G-sensor calibration | ✓ | ✗ |
| Security code access | ✓ | ✗ |
| Component testing | ✓ (advanced) | Limited |

---

## Development & Contribution

### Commands

```bash
# Install dependencies (pnpm required)
pnpm install

# Full typecheck
pnpm run typecheck

# Build all packages
pnpm run build

# Regenerate API types from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Push database schema changes (dev only)
pnpm --filter @workspace/db run push

# Run API server locally
pnpm --filter @workspace/api-server run dev

# Run frontend dev server
cd artifacts/vcds-reference && pnpm run dev
```

### Key Files for Adding/Editing Data

All data lives in `/artifacts/vcds-reference/src/data/`:

1. **Adding a new module**: Edit `modules.ts`, add to modules array
2. **Adding a basic setting procedure**: Edit `basicSettings.ts`, add to basicSettings array
3. **Adding an adaptation**: Edit `adaptations.ts`, add to adaptations array
4. **Adding live data channels**: Edit `liveData.ts`, add to liveDataChannels array
5. **Adding a fault code**: Edit `faultCodes.ts`, add to faultCodes array
6. **Adding warning lights**: Edit `warningLights.ts`
7. **Adding security codes**: Edit `securityCodes.ts`

### Data Structure Notes

- **Security Codes**: Store in a dedicated `securityCodes.ts` for reference
- **Module IDs**: Use hex format ("01", "02", "08", "5F", etc.)
- **Channel IDs**: Use IDE format for engine ("IDE00001", "IDE00028", etc.) or descriptive names for other modules
- **Procedures**: Include prerequisites, step-by-step instructions, and expected outcomes
- **Severity**: Use "critical" (safety/drivability), "warning" (function loss), "info" (informational)

### Frontend Pages

Pages are organized in `/artifacts/vcds-reference/src/pages/`:

- **`home.tsx`**: Welcome/intro page
- **`setup.tsx`**: Getting started with VCDS
- **`module.tsx`**: Module detail view (fault codes, basic settings, adaptations, live data)
- **`fault-codes.tsx`**: Fault code search and filtering
- **`basic-settings.tsx`**: Procedure reference (if exists)
- **`adaptations.tsx`**: Customization reference (if exists)
- **`warning-lights.tsx`**: Warning light meanings
- **`security-codes.tsx`**: Security codes reference
- **`live-data.tsx`**: Live data channels (if exists)

---

## Data Completeness Summary

### Comprehensive Coverage (✓ Complete)

- **Fault Codes**: 130+ entries covering all modules (P-codes, C-codes, U-codes, B-codes)
- **Adaptations**: 70+ customization channels across 12+ modules
- **Live Data Channels**: 140+ real-time data parameters with normal value ranges
- **Basic Settings**: 30+ essential calibration and service procedures
- **Warning Lights**: 35+ dashboard warning light meanings with diagnostic guidance
- **Security Codes**: 25+ unlock codes including alternates and variants

### Additional Features

- Module-by-module diagnostic guides
- When-to-use VCDS vs. OBD2 comparison matrix
- Critical procedures (brake bleeding, ACC calibration, battery registration)
- Component testing procedures (motors, solenoids, sensors)
- Live data monitoring techniques
- Service interval tracking

## Known Gaps & Future Enhancements

- [ ] Diagnostic decision trees (fault code → probable cause flowcharts)
- [ ] Integration tests for data integrity (module IDs, security codes match, etc.)
- [ ] Backend API with database persistence (currently frontend-only reference app)
- [ ] DTC lookup by keyword search
- [ ] Wiring diagrams and connector pinouts (reference external resources)
- [ ] Module compatibility matrix for part swaps
- [ ] Regional variations (Europe vs. North America coding differences)
- [ ] Specific coding examples for common customizations

---

## Resources & References

- **VCDS Software**: Ross-Tech (https://www.ross-tech.com)
- **Audi A3 8V Forums**: AudiWorld, AudiZine
- **Community Resources**: DIY guides, technical wikis
- **OEM Documentation**: VW/Audi service manuals (where available)

---

## License

MIT

---

## Support & Questions

For questions or contributions, refer to the repository issues or discussions.
