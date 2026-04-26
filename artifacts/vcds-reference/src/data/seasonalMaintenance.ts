export interface MaintenanceTask {
  season: "Spring" | "Summer" | "Fall" | "Winter";
  task: string;
  modules: string[];
  procedure: string;
  criticalItems: string[];
}

export const seasonalMaintenance: MaintenanceTask[] = [
  // SPRING MAINTENANCE
  {
    season: "Spring",
    task: "Post-Winter Battery and Electrical Check",
    modules: ["61 (Battery)", "09 (Lighting)", "01 (Engine)"],
    procedure: "Module 61: Check battery health (SoH). If <70%, battery has aged during winter. Module 09: Test all lights (coming home, DRL, headlights). Module 01: Check for any cold-start codes accumulated over winter.",
    criticalItems: ["Battery SoH <70% = replacement needed", "Corroded battery terminals = clean or replace", "Damp electrical connectors = dry and protect"]
  },
  {
    season: "Spring",
    task: "Fuel System Spring Refresh",
    modules: ["01 (Engine)"],
    procedure: "If stored over winter: perform fuel system cleaning. Module 01 - check for P0101 (MAF range), P0171/P0172 (fuel trim codes). Run Fuel Trim Reset if codes present. Add fuel system cleaner to tank.",
    criticalItems: ["Stale fuel may cause starting issues", "MAF sensor may be clogged after winter", "Fuel injectors benefit from cleaning after storage"]
  },
  {
    season: "Spring",
    task: "Spring Tire and Suspension Check",
    modules: ["03 (Brakes)", "17 (Cluster)", "44 (Steering)"],
    procedure: "Module 17: Run TPMS calibration with correct cold pressures (recalibrate after cold winter). Module 03: Inspect brake pads visually. Module 44: Run SAS calibration after winter (suspension may have settled). Drive test for pulling or drift.",
    criticalItems: ["Winter tire wear check - may be uneven", "TPMS needs recalibration for warm weather", "Suspension components may need reset after freeze-thaw cycles"]
  },
  {
    season: "Spring",
    task: "Spring Engine Performance Check",
    modules: ["01 (Engine)", "02 (Transmission)"],
    procedure: "Module 01: Check IDE00182 (cam timing) - may have changed if cold soaking occurred. Module 02: Monitor transmission for delayed engagement after cold start (normal if <5 seconds). Clear any stored DTC codes from winter startup attempts.",
    criticalItems: ["Timing chain may show movement after cold storage", "Engine may run rough first 30 seconds - normal", "Transmission slow to engage when very cold - normal"]
  },

  // SUMMER MAINTENANCE
  {
    season: "Summer",
    task: "Summer High-Heat Fluid Checks",
    modules: ["01 (Engine)", "02 (Transmission)", "44 (Steering)"],
    procedure: "Module 01: Check coolant level and condition. Monitor IDE00005 (coolant temp) - should not exceed 100°C in normal driving. Module 02: Check ATF temperature - should stay <90°C. Power steering fluid check (physical inspection). Ensure radiator fan is working.",
    criticalItems: ["Coolant >110°C = thermostat may be stuck", "ATF >100°C = transmission overheating (shade, reduce load)", "Power steering fluid discolored = needs service"]
  },
  {
    season: "Summer",
    task: "Air Conditioning Performance Verification",
    modules: ["08 (Comfort/BCM)", "61 (Battery)"],
    procedure: "Module 08: Climatronic adjustment verification. Run AC at full cold with engine running. Monitor Module 61 battery voltage - AC causes 1-2V drop (normal). Check refrigerant pressures if AC weak. Listen for compressor engagement click.",
    criticalItems: ["AC weak = may need refrigerant charge", "Compressor not engaging = clutch or relay fault", "Battery voltage drops >2V = alternator may be weak"]
  },
  {
    season: "Summer",
    task: "Summer Lighting and Visibility Check",
    modules: ["09 (Lighting)", "0E (Camera)"],
    procedure: "Module 09: Test all exterior lights (headlights, DRL, turn signals, brake lights). Test coming/leaving home lights. Module 0E: If equipped, run camera calibration (windshield film or wear may affect vision). Test headlight leveling motor.",
    criticalItems: ["Headlight haze reduces visibility - clean or replace headlights", "Turn signals should blink at ~50% duty cycle", "Camera condensation inside lens = headlight replacement needed"]
  },
  {
    season: "Summer",
    task: "Summer Performance Driving Preparation",
    modules: ["01 (Engine)", "03 (Brakes)", "17 (Cluster)"],
    procedure: "Module 01: If planning spirited driving, monitor IDE00201 (fuel pressure) and IDE00028 (fuel trim). Ensure turbo boost (IDE00006) responds properly. Module 03: Brake fluid may need bleeding if soft pedal develops. Check brake pad wear.",
    criticalItems: ["High-performance driving increases brake/fluid temps", "Fuel quality matters - use 95+ RON minimum", "Brake fluid may absorb moisture during summer - consider service"]
  },

  // FALL MAINTENANCE
  {
    season: "Fall",
    task: "Pre-Winter Battery Preparation",
    modules: ["61 (Battery)", "01 (Engine)"],
    procedure: "Module 61: Check battery health (SoH) - if <80%, plan replacement before winter. Check voltage on cold start. Module 01: Check glow plugs (if diesel - N/A for TSI). Ensure block heater is available in extreme cold climates.",
    criticalItems: ["Battery <50% SoH will fail in winter", "Cold cranking amps (CCA) critical - check battery spec", "Old battery may show fine voltage but fails under load"]
  },
  {
    season: "Fall",
    task: "Brake System Pre-Winter Flush",
    modules: ["03 (Brakes)"],
    procedure: "Module 03: Inspect brake pads - if <3mm thickness remaining, replace now. Check rotor thickness. Brake fluid has absorbed moisture during summer - consider DOT 4 fresh fluid change. Run VCDS brake bleeding after service.",
    criticalItems: ["Wet brake fluid reduces stopping power in winter", "Brake pad wear is critical before icy conditions", "ABS may not work if brake fluid is degraded"]
  },
  {
    season: "Fall",
    task: "Fall Tire and Suspension Preparation",
    modules: ["17 (Cluster)", "03 (Brakes)", "44 (Steering)"],
    procedure: "Module 17: TPMS calibration with winter tire pressures (lower than summer). Suspension inspection - check for worn bushings or play. Module 44: Run SAS calibration before winter (ensures ESP works correctly). Test brakes on empty lot.",
    criticalItems: ["Winter tires MUST be used in winter climates", "TPMS needs recalibration for winter pressures", "Low tire pressure increases wet braking distance"]
  },
  {
    season: "Fall",
    task: "Fall Fluid Change and Service",
    modules: ["01 (Engine)", "02 (Transmission)"],
    procedure: "Module 01: Engine oil change (switch to 5W-30 or 0W-30 winter grade if extreme cold). Coolant top-up to proper concentration (50/50 for -30°C protection). Module 02: Transmission fluid visual check - summer heat may have degraded it.",
    criticalItems: ["Oil viscosity matters - too thick = poor cold start", "Coolant concentration critical - 50/50 freeze protection to -30°C", "Transmission fluid darkens in summer - may need service"]
  },
  {
    season: "Fall",
    task: "Fall Wiper and Washer Fluid Preparation",
    modules: ["08 (Comfort/BCM)"],
    procedure: "Module 08: Check wiper blade condition - replace if streaking. Switch washer fluid to winter formula (antifreeze to -20°C minimum). Test washer spray pattern. Check for wiper motor grinding noise (sign of blade wear).",
    criticalItems: ["Winter washer fluid prevents nozzle freeze", "Wiper blades wear faster in winter - replace proactively", "Poor visibility in winter = safety hazard"]
  },

  // WINTER MAINTENANCE
  {
    season: "Winter",
    task: "Winter Cold-Start Performance Monitoring",
    modules: ["01 (Engine)", "61 (Battery)"],
    procedure: "Module 61: Monitor battery voltage on cold mornings - <11V indicates failing battery. Module 01: Engine should start promptly (<3 seconds). Check IDE00005 (coolant temp) - glow time should be brief. Listen for rough idle on cold start (normal <30 seconds).",
    criticalItems: ["Dead battery most common winter failure", "Cracked battery case from freeze-thaw", "Cold-start rough idle is normal, not a fault"]
  },
  {
    season: "Winter",
    task: "Winter Road Salt and Corrosion Prevention",
    modules: ["03 (Brakes)", "44 (Steering)", "19 (Gateway)"],
    procedure: "Physical inspection (not VCDS): Check undercarriage for salt spray. Inspect brake lines for rust. Check CAN bus wiring connectors for corrosion (water ingress). Module 19: Gateway may lose communication if connectors are corroded. Rinse undercarriage weekly.",
    criticalItems: ["Road salt causes rapid corrosion", "Corroded connectors cause intermittent faults", "CAN bus disruption from water/salt on connectors"]
  },
  {
    season: "Winter",
    task: "Winter Traction and Stability Testing",
    modules: ["03 (Brakes)", "44 (Steering)", "13 (ACC)"],
    procedure: "Module 03: Test ABS/ESP on empty snowy lot at ~20 mph - both should engage smoothly. Module 44: Steering response should be consistent despite cold. Module 13: ACC may have reduced range in snow. Verify SAS is calibrated (ESP depends on it).",
    criticalItems: ["ABS/ESP essential in winter - test monthly", "Steering response slows in extreme cold", "ACC range reduced in snow/sleet - trust human control"]
  },
  {
    season: "Winter",
    task: "Winter Cabin Humidity and Defogging",
    modules: ["08 (Comfort/BCM)"],
    procedure: "Module 08: Climatronic should have dehumidify function - use A/C even in winter to prevent window fogging. Test recirculate mode - helps warm cabin faster. Monitor blower motor noise - shouldn't be loud. Check for water leaks in footwells.",
    criticalItems: ["Window fogging reduces safety", "Water in cabin indicates door/window seal leak", "AC running in winter dries cabin interior"]
  },
  {
    season: "Winter",
    task: "Winter Battery and Electrical Load Management",
    modules: ["61 (Battery)", "09 (Lighting)"],
    procedure: "Module 61: Monitor battery voltage closely - cold weather reduces capacity by 50%. Disable unnecessary electrical loads (heated seats, rear defrost when not needed). Module 09: High-beam operation increases alternator demand significantly.",
    criticalItems: ["Cold weather halves battery effective capacity", "Multiple high-power loads (heat + headlights + rear defrost) = stress", "Idle discharge critical - battery lost charge faster in winter"]
  }
];
