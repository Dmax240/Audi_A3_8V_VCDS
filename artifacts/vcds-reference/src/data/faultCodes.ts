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
  { code: "P0013", module: "01", description: "Cam timing over-retarded (exhaust)", cause: "Exhaust VVT issue. Check oil level, VVT solenoid, timing chain.", severity: "warning" },
  { code: "P0014", module: "01", description: "Cam timing over-advanced (exhaust)", cause: "Exhaust cam advanced too much. Check IDE00045 channel.", severity: "warning" },
  { code: "P0016", module: "01", description: "Crankshaft/camshaft correlation", cause: "Timing chain stretch. Check IDE00182 cam offset value. Critical — do not drive if advanced.", severity: "critical" },
  { code: "P0017", module: "01", description: "Cam timing correlation bank 2", cause: "Dual-bank cam sync issue. Timing chain stretched.", severity: "critical" },
  { code: "P0031", module: "01", description: "O2 sensor heater circuit bank 1 sensor 1", cause: "Check O2 sensor connector, wiring. Heater element failure.", severity: "warning" },
  { code: "P0051", module: "01", description: "O2 sensor heater circuit bank 2 sensor 1", cause: "Same as P0031 for bank 2.", severity: "warning" },
  { code: "P0087", module: "01", description: "Fuel rail pressure too low", cause: "Monitor IDE00200 vs IDE00201 at WOT. HPFP weakness or low-pressure pump fault.", severity: "warning" },
  { code: "P0088", module: "01", description: "Fuel rail pressure too high", cause: "Check fuel pressure regulator, HPFP over-pressurizing. Pressure >180 bar at WOT is abnormal.", severity: "warning" },
  { code: "P0101", module: "01", description: "MAF range/performance", cause: "Clean MAF with MAF cleaner. Check intake hoses for cracks.", severity: "warning" },
  { code: "P0102", module: "01", description: "MAF too low", cause: "Vacuum leak, MAF clogged, MAF sensor failure.", severity: "warning" },
  { code: "P0103", module: "01", description: "MAF too high", cause: "MAF sensor contaminated. Boost pressure too high. Intake obstruction.", severity: "warning" },
  { code: "P0106", module: "01", description: "MAP range/performance", cause: "Check intake manifold for debris/carbon. Inspect boost hoses.", severity: "warning" },
  { code: "P0115", module: "01", description: "Coolant temp circuit range", cause: "Check ECT sensor connector, wiring. Faulty sensor.", severity: "warning" },
  { code: "P0128", module: "01", description: "Coolant temp below thermostat range", cause: "Replace thermostat assembly (includes water pump — do both on EA888 Gen3).", severity: "warning" },
  { code: "P0130", module: "01", description: "O2 sensor circuit", cause: "Check both O2 sensor banks. Wiring, sensor failure, or exhaust leak.", severity: "warning" },
  { code: "P0137", module: "01", description: "Downstream O2 sensor circuit bank 1 sensor 2", cause: "Post-cat O2 sensor fault. Check IDE01644.", severity: "warning" },
  { code: "P0171", module: "01", description: "Fuel system too lean bank 1", cause: "Check fuel pressure (low-pressure first). Listen for vacuum leaks. Check MAF. Check GDI injectors for carbon.", severity: "warning" },
  { code: "P0172", module: "01", description: "Fuel system too rich bank 1", cause: "High fuel pressure, faulty O2 sensor, leaking injectors. Check fuel pressure — should not exceed 80 bar at idle.", severity: "warning" },
  { code: "P0174", module: "01", description: "Fuel system too lean bank 2", cause: "Same as P0171 for bank 2 (single-cam TSI = single bank).", severity: "warning" },
  { code: "P0175", module: "01", description: "Fuel system too rich bank 2", cause: "Same as P0172 for bank 2.", severity: "warning" },
  { code: "P0200", module: "01", description: "Injector circuit malfunction", cause: "Check all 4 injector connectors, wiring. Test injector pulse widths.", severity: "warning" },
  { code: "P0201", module: "01", description: "Cylinder 1 injector circuit", cause: "Faulty injector, wiring fault, or ECM coil drive failure.", severity: "warning" },
  { code: "P0202", module: "01", description: "Cylinder 2 injector circuit", cause: "Same as P0201 for cylinder 2.", severity: "warning" },
  { code: "P0203", module: "01", description: "Cylinder 3 injector circuit", cause: "Same as P0201 for cylinder 3.", severity: "warning" },
  { code: "P0204", module: "01", description: "Cylinder 4 injector circuit", cause: "Same as P0201 for cylinder 4.", severity: "warning" },
  { code: "P0300", module: "01", description: "Random/multiple cylinder misfire", cause: "Replace spark plugs first. Check fuel quality. Check coil packs.", severity: "warning" },
  { code: "P0301", module: "01", description: "Cylinder 1 misfire", cause: "Swap coil to different cylinder — if code follows coil, coil is bad. If code stays, injector or compression issue.", severity: "warning" },
  { code: "P0302", module: "01", description: "Cylinder 2 misfire", cause: "Same as P0301 for cylinder 2.", severity: "warning" },
  { code: "P0303", module: "01", description: "Cylinder 3 misfire", cause: "Same as P0301 for cylinder 3.", severity: "warning" },
  { code: "P0304", module: "01", description: "Cylinder 4 misfire", cause: "Same as P0301 for cylinder 4.", severity: "warning" },
  { code: "P0328", module: "01", description: "Knock sensor range/performance", cause: "Check knock sensor wiring. Engine detonation possible.", severity: "warning" },
  { code: "P0335", module: "01", description: "Crankshaft position sensor fault", cause: "Replace CKP sensor. Check connector for corrosion. Check reluctor ring on crank.", severity: "warning" },
  { code: "P0340", module: "01", description: "Camshaft position sensor circuit", cause: "Faulty CMP sensor. Check wiring. Check timing chain stretch (IDE00182).", severity: "warning" },
  { code: "P0365", module: "01", description: "Camshaft position sensor bank 2", cause: "Same as P0340 for exhaust cam.", severity: "warning" },
  { code: "P0400", module: "01", description: "EGR flow fault", cause: "Check EGR valve, carbon buildup, EGR cooler. EA888 has integrated EGR.", severity: "warning" },
  { code: "P0420", module: "01", description: "Catalyst efficiency below threshold", cause: "Check downstream O2 sensor (IDE01644) first. Evaluate catalyst condition.", severity: "warning" },
  { code: "P0507", module: "01", description: "Idle speed too high", cause: "Check for vacuum leaks, stuck open idle valve, PCV issues.", severity: "info" },
  { code: "P0508", module: "01", description: "Idle speed too low", cause: "Run idle speed adaptation. Check for intake vacuum leaks.", severity: "warning" },
  { code: "P1088", module: "01", description: "Intake valve lift actuator stuck", cause: "IMRC solenoid or intake manifold runner control. Run IMRC Basic Setting.", severity: "warning" },
  { code: "P2015", module: "01", description: "IMRC position sensor range", cause: "Run IMRC Basic Settings first. Check IMRC flap mechanism for sticking.", severity: "warning" },
  { code: "P2101", module: "01", description: "Throttle body performance", cause: "Run throttle adaptation. Check for intake carbon, vacuum leaks.", severity: "warning" },
  { code: "P2128", module: "01", description: "Throttle actuator range low", cause: "Throttle sticking closed. Carbon buildup common. Clean throttle body.", severity: "warning" },
  { code: "P2129", module: "01", description: "Throttle actuator range high", cause: "Throttle stuck open or sensor error. Run throttle adaptation.", severity: "warning" },

  // Module 02 - Transmission
  { code: "P0700", module: "02", description: "Transmission control system malfunction", cause: "Check Module 02 for more specific codes.", severity: "warning" },
  { code: "P0705", module: "02", description: "Transmission range sensor malfunction", cause: "Check selector position sensor. Test P/R/N/D positions.", severity: "warning" },
  { code: "P0730", module: "02", description: "Incorrect gear ratio", cause: "Clutch slip — check K1/K2 slip in live data. Fluid service often resolves.", severity: "warning" },
  { code: "P0750", module: "02", description: "Shift solenoid A fault", cause: "Faulty solenoid, wiring fault, or TCM issue. Mechatronic unit may need replacement.", severity: "warning" },
  { code: "P0751", module: "02", description: "Shift solenoid A range/performance", cause: "Similar to P0750. Check fluid condition first.", severity: "warning" },
  { code: "P0755", module: "02", description: "Shift solenoid B fault", cause: "Faulty solenoid, wiring fault. Mechatronic replacement often needed.", severity: "warning" },
  { code: "P0760", module: "02", description: "Shift solenoid C fault", cause: "Faulty solenoid or wiring. Check connector at mechatronic unit.", severity: "warning" },
  { code: "P0845", module: "02", description: "Transmission fluid pressure high", cause: "Hydraulic pressure fault. Check fluid level and condition.", severity: "warning" },
  { code: "P0846", module: "02", description: "Transmission fluid pressure low", cause: "Low ATF level, worn pump, or pressure regulator fault.", severity: "critical" },
  { code: "P0847", module: "02", description: "ATF pressure sensor circuit", cause: "Faulty pressure sensor or wiring. Check mechatronic connectors.", severity: "warning" },
  { code: "P0890", module: "02", description: "Transmission relay malfunction", cause: "Check TCM power relay. Check wiring.", severity: "warning" },

  // Module 03 - ABS / Brakes
  { code: "C0035", module: "03", description: "Wheel speed sensor front right", cause: "Faulty sensor, wiring fault, or tone ring damage.", severity: "warning" },
  { code: "C0036", module: "03", description: "Wheel speed sensor rear right", cause: "Same as C0035 for rear right.", severity: "warning" },
  { code: "C0040", module: "03", description: "Wheel speed sensor front left", cause: "Same as C0035 for front left.", severity: "warning" },
  { code: "C0041", module: "03", description: "Wheel speed sensor rear left", cause: "Same as C0035 for rear left.", severity: "warning" },
  { code: "C0096", module: "03", description: "Wheel speed mismatch", cause: "Tire size mismatch or sensor fault. Check all four wheel speed values.", severity: "warning" },
  { code: "C1001", module: "03", description: "ABS control module fault", cause: "MK100 IPB hardware issue. Module likely needs replacement.", severity: "critical" },
  { code: "C1008", module: "03", description: "ABS pressure valve malfunction", cause: "Check solenoid wiring, fluid condition. Mechatronic failure possible.", severity: "warning" },

  // Module 13 - ACC / Radar
  { code: "01316", module: "13", description: "Radar sensor misalignment", cause: "Run 12-step misalignment fault resolution. Set sensor state to 0, clear codes, recalibrate.", severity: "warning" },
  { code: "01566", module: "13", description: "Radar sensor not calibrated", cause: "Run ACC calibration Basic Settings on flat surface with 10m clear ahead.", severity: "warning" },
  { code: "01565", module: "13", description: "Radar sensor data missing", cause: "Sensor failure or wiring. Check front bumper radar connector.", severity: "critical" },

  // Module 15 - Airbag
  { code: "B1001", module: "15", description: "Airbag control module internal fault", cause: "Module hardware failure or post-crash event. Module MUST be replaced after any airbag deployment.", severity: "critical" },
  { code: "B1010", module: "15", description: "Driver airbag circuit fault", cause: "Clockspring failure is most common. Check spiral cable in steering column.", severity: "critical" },
  { code: "B1011", module: "15", description: "Passenger airbag circuit fault", cause: "Faulty airbag or wiring. Check passenger airbag connector under dashboard.", severity: "critical" },
  { code: "B1013", module: "15", description: "Seatbelt pretensioner driver circuit", cause: "Pretensioner fault. Check connector, wiring.", severity: "critical" },

  // Module 17 - Cluster
  { code: "B1050", module: "17", description: "Instrument cluster internal fault", cause: "Power cycle first. If persists, module replacement may be needed.", severity: "warning" },
  { code: "B1001", module: "17", description: "Cluster control module fault", cause: "Hardware issue or reboot. Clear code and monitor.", severity: "info" },

  // Module 44 - Steering / EPS
  { code: "B2214", module: "44", description: "Steering angle sensor (SAS) range", cause: "Run SAS calibration. Check steering column connector.", severity: "warning" },
  { code: "B2222", module: "44", description: "EPS fault", cause: "Power steering may be stiff. Check for low voltage, connector issues.", severity: "warning" },
];
