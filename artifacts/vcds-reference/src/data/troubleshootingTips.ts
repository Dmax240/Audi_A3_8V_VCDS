export interface TroubleshootingTip {
  issue: string;
  module: string;
  quickFix: string;
  diagnosis: string;
  prevention: string;
  costEstimate: string;
}

export const troubleshootingTips: TroubleshootingTip[] = [
  {
    issue: "Car Won't Start (No Crank)",
    module: "61 (Battery)",
    quickFix: "Jump start from another vehicle (positive to positive, negative to negative). If car starts: battery is dead. If won't start: starter issue.",
    diagnosis: "Module 61: Check battery voltage. <10V = dead battery. 11-12V = weak battery. If voltage is good but no crank: starter motor or solenoid fault. Listen for solenoid click when turning key.",
    prevention: "Replace battery every 5-7 years (or when SoH <50%). Keep battery terminals clean and dry. Don't leave lights on overnight.",
    costEstimate: "Battery: €80-150 | Starter: €200-400 | Battery replacement must include registration (free if done with VCDS)"
  },
  {
    issue: "Check Engine Light (MIL) - No Performance Issues",
    module: "01, 19 (Gateway)",
    quickFix: "Read fault codes with VCDS. If pending/historical code only: clear codes and drive 50+ miles. If code doesn't return: false alarm or rare fault.",
    diagnosis: "Module 01 first. If no faults: check Module 19 (Gateway) for CAN communication errors. If U-codes: wiring/connector corrosion issue.",
    prevention: "Keep fuel filler cap tight (prevents P0455 vapor evaporation code). Fix small issues immediately (O2 sensor, spark plugs) before they cascade.",
    costEstimate: "Varies: €0 (false alarm) to €500+ (sensor replacement)"
  },
  {
    issue: "Rough Idle at Stoplights",
    module: "01 (Engine), 08 (BCM)",
    quickFix: "Immediate: check fuel quality (fill up with premium fuel). Check for vacuum leaks (hissing sound under hood). Run Idle Speed Adaptation.",
    diagnosis: "Module 01: Check IDE00028 (fuel trim) - if >±15%, fuel system issue. Check IDE00182 (cam timing) - if >4°, timing chain stretched. Visual inspection: check PCV hoses and intake hoses for tears.",
    prevention: "Use premium fuel (95+ RON) consistently. Replace spark plugs every 60,000 km. Service fuel injectors every 80,000 km. Keep fuel filter clean.",
    costEstimate: "Spark plugs: €80 | Fuel injector cleaning: €100-200 | PCV hose replacement: €50-100"
  },
  {
    issue: "Spongy Brake Pedal After Brake Service",
    module: "03 (Brakes)",
    quickFix: "DO NOT DRIVE. Must use VCDS brake bleeding (gravity bleeding left air in ABS). Call VCDS technician. Taking shortcuts here causes brake failure.",
    diagnosis: "Air trapped in ABS unit (MK100 IPB). Only VCDS brake bleeding removes air. Gravity bleeding cannot reach ABS solenoids.",
    prevention: "ALWAYS use VCDS brake bleeding after any brake work. Never use gravity bleeding alone on Audi with ABS. This is non-negotiable.",
    costEstimate: "Brake bleeding service: €150-250. Brake failure (if ignored): €5000+ (new ABS module + legal liability)"
  },
  {
    issue: "TPMS Light Won't Go Away After Tire Rotation",
    module: "17 (Cluster)",
    quickFix: "Inflate all four tires to correct cold pressure (door jamb label). Run TPMS calibration in Module 17. Drive 10+ miles at varied speeds.",
    diagnosis: "TPMS sensors calibrated to tire positions during last service. After rotation, old pressures still stored. Recalibration fixes this.",
    prevention: "After every tire rotation or replacement: run TPMS calibration. Always use COLD tire pressures for calibration (car parked 3+ hours).",
    costEstimate: "TPMS calibration: Free (DIY with VCDS) | TPMS sensor replacement: €80-150 per sensor"
  },
  {
    issue: "Battery Dying After Replacement",
    module: "61 (Battery)",
    quickFix: "Module 61: Register new battery (enter capacity Ah, type AGM/EFB, voltage). Without this, alternator undercharges new battery.",
    diagnosis: "Battery registration missing. ECM thinks new battery is old, reduces charging voltage to 12.5V. Proper registration enables 13.8V charging.",
    prevention: "ALWAYS register battery immediately after replacement. This is absolutely critical. Skipping this costs you €150+ in premature battery failure.",
    costEstimate: "Battery registration: Free (DIY with VCDS) | Lost battery replacement: €150-300 (unnecessary cost if registered correctly)"
  },
  {
    issue: "ESP Light On - Vehicle Pulls to One Side",
    module: "03, 44 (Steering/SAS)",
    quickFix: "Vehicle feels unstable: STOP safely. Run SAS calibration when parked on level surface. This is critical for safety.",
    diagnosis: "SAS (Steering Angle Sensor) misaligned. ESP compares steering input to actual vehicle yaw. Misalignment confuses ESP, causing malfunction.",
    prevention: "After wheel alignment or suspension work: ALWAYS run SAS calibration. This prevents ESP from malfunctioning.",
    costEstimate: "SAS calibration: Free (DIY with VCDS) | Collision damage (if ESP fails): Infinite (safety risk)"
  },
  {
    issue: "Transmission Slipping After Fluid Service",
    module: "02 (Transmission)",
    quickFix: "After fluid change: run Transmission Adaptation Reset. Normal harsh shifting for 200-500 miles while TCM relearns.",
    diagnosis: "New fluid has different viscosity/friction properties. TCM needs to relearn shift feel with new fluid.",
    prevention: "After every fluid change: always run Transmission Adaptation Reset. Allow 200-500 miles of normal driving for relearning.",
    costEstimate: "Transmission adaptation reset: Free (DIY with VCDS) | Transmission slipping (if ignored): €2000-5000 (major repair)"
  },
  {
    issue: "ACC / Front Assist Not Working After Front-End Collision",
    module: "13 (ACC)",
    quickFix: "After collision repair: run 12-step ACC misalignment resolution. Must be done even if bumper looks fine.",
    diagnosis: "Radar sensor mounting shifted by 0.1-0.5°. Humans can't see this, but ACC system is blind. 12-step procedure realigns and recalibrates.",
    prevention: "After any front-end collision or bumper repair: MANDATORY 12-step ACC procedure. Do this before driving (safety critical).",
    costEstimate: "ACC recalibration: Free (DIY with VCDS) | Undetected misalignment: €1000+ (potential accident from ACC failure)"
  },
  {
    issue: "Door Locks Don't Work - Only Passenger Side",
    module: "08 (Comfort/BCM)",
    quickFix: "Module 08: Test door lock solenoid for affected door. If no click: solenoid dead. Others working means BCM is fine.",
    diagnosis: "Single door solenoid failure (common after 100,000+ km). Test individual solenoids to identify which one failed.",
    prevention: "Solenoid failure is wear item. At 100,000+ km, expect occasional failures. Keep spare solenoids available.",
    costEstimate: "Door lock solenoid: €30-60 | Installation labor: €50-100 per door"
  },
  {
    issue: "Steering Too Heavy / Power Steering Not Helping",
    module: "44 (EPS)",
    quickFix: "Module 44 Live Data: Check EPS motor current. >30A = motor overloaded (binding). Check power steering fluid level (physical inspection).",
    diagnosis: "Low power steering fluid (most common) OR EPS motor stalled/binding. Fluid leak or stuck rack.",
    prevention: "Power steering fluid lasts indefinitely if sealed. Leaks are only concern. Inspect for drips under car monthly.",
    costEstimate: "Power steering fluid top-up: €20-50 | Steering rack leak: €500-1500"
  },
  {
    issue: "Airbag Light Stays On",
    module: "15 (Airbag)",
    quickFix: "DO NOT attempt DIY repair. Airbag system is safety-critical. Must go to dealership.",
    diagnosis: "Most common: clockspring failure in steering column (symptom: horn doesn't work, steering wheel buttons fail). Post-crash state.",
    prevention: "Clockspring wears over time. Replace proactively before failure (shows as intermittent horn/button issues first).",
    costEstimate: "Clockspring: €200-400 | Airbag module replacement: €800-1200 | Professional diagnosis: €100-150"
  },
  {
    issue: "Windows Won't Go Up / Down",
    module: "08 (Comfort/BCM)",
    quickFix: "Module 08: Test window motor for target window. Listen for motor sound. If silent: wiring fault. If motor runs but window won't move: regulator off track (mechanical).",
    diagnosis: "Stuck window: motor stalled (jam detected). Off-track regulator: mechanical failure (debris or wear).",
    prevention: "Keep window tracks clean and lubricated. Don't force windows if resistance felt. Regulator failure is inevitable (wear item).",
    costEstimate: "Window motor: €100-200 | Window regulator: €150-300 | Installation labor: €100-200 per window"
  },
  {
    issue: "Transmission Won't Engage / Delays Going Into Gear",
    module: "02 (Transmission)",
    quickFix: "Module 02 Live Data: Check 'Clutch K1 slip' and 'K2 slip'. >100 RPM = clutch slipping. Check ATF temperature.",
    diagnosis: "Low ATF level (check physically), degraded fluid (check quality counter), or worn clutch packs.",
    prevention: "Transmission fluid is lifeblood. Service every 60,000-80,000 km. Monitor fluid quality counter in live data.",
    costEstimate: "ATF service: €200-400 | Mechatronic replacement: €2500-4500"
  },
  {
    issue: "Fuel Smell in Engine Compartment",
    module: "01 (Engine)",
    quickFix: "Check fuel lines visually (under hood). Fuel leaks are dangerous. STOP driving and get towed.",
    diagnosis: "Fuel line/hose cracking, loose connector, or fuel pressure regulator leak.",
    prevention: "Fuel lines are rubber, age and crack. Replace fuel hoses every 15 years preventively.",
    costEstimate: "Fuel line replacement: €100-300 | Fuel pump seal replacement: €200-500"
  },
  {
    issue: "Check Engine Light + Lack of Power (Limp Mode)",
    module: "01, 13 (ACC)",
    quickFix: "Immediately read fault codes. Don't ignore limp mode - it's ECM protecting engine from damage.",
    diagnosis: "Critical fault (usually fuel/ignition/emissions). Or Module 13 misalignment (code 01316) causing power cut.",
    prevention: "Don't drive with warning lights on. Fix issues immediately before they cause limp mode (power loss).",
    costEstimate: "Varies hugely: €0 (software reset) to €2000+ (major component replacement)"
  },
  {
    issue: "No Signal from Key Fob - Car Won't Unlock",
    module: "16 (KESSY)",
    quickFix: "Replace key fob battery (CR2032, €5). If still no signal: fob is broken. Use spare key.",
    diagnosis: "Fob battery dead (most common, 99% of cases). Fob internal circuit failure (rare). Receiver module failure (rarer still).",
    prevention: "Replace fob battery annually preventively. Buy spare fob batteries (CR2032) and keep in car.",
    costEstimate: "Fob battery: €3-5 | New key fob: €150-300 (usually cheaper to use mechanical key)"
  },
  {
    issue: "Brake Fluid Leak - Pedal Goes to Floor Gradually",
    module: "03 (Brakes)",
    quickFix: "DO NOT DRIVE. Brake failure imminent. Tow the car. Brake fluid is leaking somewhere.",
    diagnosis: "Brake line, hose, caliper piston seal, or master cylinder leaking. Visual inspection shows fluid under car.",
    prevention: "Brake system should never leak. Inspect regularly for drips. Seals age and fail at 150,000+ km.",
    costEstimate: "Brake hose: €50-150 | Caliper seal: €200-400 | Master cylinder: €300-600"
  },
  {
    issue: "Oil Pressure Light On - Engine Running",
    module: "01 (Engine)",
    quickFix: "STOP ENGINE IMMEDIATELY. Oil pressure is critical. Don't restart until oil is checked.",
    diagnosis: "Low oil level (most common), bad oil sensor, or actual oil pump failure.",
    prevention: "Check oil level every month. Use correct oil grade. Engine needs oil pressure to survive (no oil = seized engine).",
    costEstimate: "Oil sensor: €100-200 | Oil pump: €400-800 | Engine seizure (if ignored): €5000+ (engine replacement)"
  },
  {
    issue: "Radio / Infotainment System Frozen",
    module: "5F (Infotainment)",
    quickFix: "Module 5F: Reboot head unit (hold power button 10+ seconds or Module 5F → Special Functions → 'Restart'). Takes 2-5 minutes.",
    diagnosis: "Software freeze (common after hot days or heavy use). Reboot fixes 95% of issues.",
    prevention: "Head units overheat in direct sun. Park in shade or cover windshield. Reboot periodically if issues develop.",
    costEstimate: "Reboot: Free | Software update: €200-400 | Module replacement: €600-1200"
  }
];
