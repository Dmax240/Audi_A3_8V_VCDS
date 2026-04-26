export interface FaultCode {
  code: string;
  module: string;
  description: string;
  cause: string;
  severity: "critical" | "warning" | "info";
}

export const faultCodes: FaultCode[] = [
  // Module 01 - Engine
  { code: "P0011", module: "01", description: "Cam timing over-advanced (intake)", cause: "Check oil level first. VVT solenoid or chain stretch. Check IDE00182.", severity: "warning" },
  { code: "P0087", module: "01", description: "Fuel rail pressure too low", cause: "Monitor IDE00200 vs IDE00201 at WOT. HPFP weakness or low-pressure pump fault.", severity: "warning" },
  { code: "P0101", module: "01", description: "MAF range/performance", cause: "Clean MAF with MAF cleaner. Check intake hoses for cracks.", severity: "warning" },
  { code: "P0128", module: "01", description: "Coolant temp below thermostat range", cause: "Replace thermostat assembly (includes water pump — do both on EA888 Gen3).", severity: "warning" },
  { code: "P0171", module: "01", description: "Fuel system too lean bank 1", cause: "Check fuel pressure (low-pressure first). Listen for vacuum leaks. Check MAF. Check GDI injectors for carbon.", severity: "warning" },
  { code: "P0172", module: "01", description: "Fuel system too rich bank 1", cause: "High fuel pressure, faulty O2 sensor, leaking injectors. Check fuel pressure — should not exceed 80 bar at idle.", severity: "warning" },
  { code: "P0300", module: "01", description: "Random/multiple cylinder misfire", cause: "Replace spark plugs first. Check fuel quality. Check coil packs.", severity: "warning" },
  { code: "P0301", module: "01", description: "Cylinder 1 misfire", cause: "Swap coil to different cylinder — if code follows coil, coil is bad. If code stays, injector or compression issue.", severity: "warning" },
  { code: "P0302", module: "01", description: "Cylinder 2 misfire", cause: "Same as P0301 for cylinder 2.", severity: "warning" },
  { code: "P0303", module: "01", description: "Cylinder 3 misfire", cause: "Same as P0301 for cylinder 3.", severity: "warning" },
  { code: "P0304", module: "01", description: "Cylinder 4 misfire", cause: "Same as P0301 for cylinder 4.", severity: "warning" },
  { code: "P0335", module: "01", description: "Crankshaft position sensor fault", cause: "Replace CKP sensor. Check connector for corrosion. Check reluctor ring on crank.", severity: "warning" },
  { code: "P0420", module: "01", description: "Catalyst efficiency below threshold", cause: "Check downstream O2 sensor (IDE01644) first. Evaluate catalyst condition.", severity: "warning" },
  { code: "P2015", module: "01", description: "IMRC position sensor range", cause: "Run IMRC Basic Settings first. Check IMRC flap mechanism for sticking.", severity: "warning" },
  { code: "P0340", module: "01", description: "Camshaft position sensor circuit", cause: "Faulty CMP sensor. Check wiring. Check timing chain stretch (IDE00182).", severity: "warning" },
  { code: "P0016", module: "01", description: "Crankshaft/camshaft correlation", cause: "Timing chain stretch. Check IDE00182 cam offset value. Critical — do not drive if advanced.", severity: "critical" },
  // Module 02 - Transmission
  { code: "P0750", module: "02", description: "Shift solenoid A fault", cause: "Faulty solenoid, wiring fault, or TCM issue. Mechatronic unit may need replacement.", severity: "warning" },
  { code: "P0751", module: "02", description: "Shift solenoid A range/performance", cause: "Similar to P0750. Check fluid condition first.", severity: "warning" },
  { code: "P0845", module: "02", description: "Transmission fluid pressure high", cause: "Hydraulic pressure fault. Check fluid level and condition.", severity: "warning" },
  { code: "P0846", module: "02", description: "Transmission fluid pressure low", cause: "Low ATF level, worn pump, or pressure regulator fault.", severity: "critical" },
  { code: "P0730", module: "02", description: "Incorrect gear ratio", cause: "Clutch slip — check K1/K2 slip in live data. Fluid service often resolves.", severity: "warning" },
  // Module 03 - ABS
  { code: "C0035", module: "03", description: "Wheel speed sensor front right", cause: "Faulty sensor, wiring fault, or tone ring damage.", severity: "warning" },
  { code: "C0036", module: "03", description: "Wheel speed sensor rear right", cause: "Same as C0035 for rear right.", severity: "warning" },
  { code: "C0040", module: "03", description: "Wheel speed sensor front left", cause: "Same as C0035 for front left.", severity: "warning" },
  { code: "C0041", module: "03", description: "Wheel speed sensor rear left", cause: "Same as C0035 for rear left.", severity: "warning" },
  // Module 13 - ACC
  { code: "01316", module: "13", description: "Radar sensor misalignment", cause: "Run 12-step misalignment fault resolution. Set sensor state to 0, clear codes, recalibrate.", severity: "warning" },
  { code: "01566", module: "13", description: "Radar sensor not calibrated", cause: "Run ACC calibration Basic Settings on flat surface with 10m clear ahead.", severity: "warning" },
  // Module 15 - Airbag
  { code: "B1001", module: "15", description: "Airbag control module internal fault", cause: "Module hardware failure or post-crash event. Module MUST be replaced after any airbag deployment.", severity: "critical" },
  { code: "B1010", module: "15", description: "Driver airbag circuit fault", cause: "Clockspring failure is most common. Check spiral cable in steering column.", severity: "critical" },
  // Module 17 - Cluster
  { code: "B1050", module: "17", description: "Instrument cluster internal fault", cause: "Power cycle first. If persists, module replacement may be needed.", severity: "warning" },
];
