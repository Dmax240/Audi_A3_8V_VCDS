export interface DiagnosticGuide {
  symptom: string;
  affectedModules: string[];
  possibleCauses: string[];
  diagnosticSteps: string[];
  commonCodes: string[];
}

export const diagnosticGuides: DiagnosticGuide[] = [
  {
    symptom: "Rough Idle",
    affectedModules: ["01 (Engine)", "03 (Brakes)", "16 (KESSY)"],
    possibleCauses: ["Vacuum leak", "Dirty fuel injectors", "Worn spark plugs", "Faulty O2 sensor", "Carbon buildup on intake valves", "Timing chain stretch", "Compression loss"],
    diagnosticSteps: [
      "1. Read Module 01 faults. Check for P0171/P0172 (fuel trim codes), P0335 (CKP), P0340 (CMP).",
      "2. Live Data: Check IDE00001 (RPM) fluctuation - healthy: ±50 RPM. Check IDE00028 (fuel trim) - normal: ±5-10%.",
      "3. Check IDE00182 (cam timing) - should be near 0°. If >4°: timing chain stretched.",
      "4. Run Cylinder Contribution Test - identify weak cylinder if misfire present.",
      "5. Check vacuum hoses visually for cracks or leaks.",
      "6. Run Idle Speed Adaptation if no codes found."
    ],
    commonCodes: ["P0171", "P0172", "P0300", "P0335", "P0340", "P0507", "P0508", "P0128"]
  },
  {
    symptom: "Check Engine Light (MIL) Illuminated",
    affectedModules: ["01 (Engine)", "19 (Gateway)"],
    possibleCauses: ["Any module fault", "Fuel system issue", "Emissions system failure", "Sensor malfunction", "Wiring/connector issue"],
    diagnosticSteps: [
      "1. Connect VCDS. Read Module 01 faults first (most common).",
      "2. Note freeze frame data: RPM, load, temp at fault time.",
      "3. If no faults in 01: check Modules 02, 03, 08, 09, 13, 15, 16, 17 for pending codes.",
      "4. Module 19 Gateway: Check for U-codes (CAN communication faults).",
      "5. Clear codes and drive 50+ miles to see if code returns (hard fault vs intermittent).",
      "6. If intermittent: check wiring, connectors, ground straps for corrosion."
    ],
    commonCodes: ["P0011", "P0016", "P0101", "P0171", "P0172", "P0300-P0304", "P0335", "P0340", "P0420"]
  },
  {
    symptom: "Loss of Power / Limp Mode",
    affectedModules: ["01 (Engine)", "02 (Transmission)", "13 (ACC)"],
    possibleCauses: ["Fuel system fault (HPFP, injectors)", "Turbo/boost issue", "Ignition timing retarded", "Transmission slipping", "ACC sensor misalignment", "EGR or IMRC fault"],
    diagnosticSteps: [
      "1. Read Module 01. Check for fuel pressure codes (P0087/P0088), IMRC codes (P2015), turbo codes.",
      "2. Live Data Module 01: Check IDE00200/IDE00201 (GDI fuel pressure) - should match target.",
      "3. Check IDE00040 (cam timing) and IDE00020 (ignition angle) - timing may be retarded.",
      "4. Read Module 02: Check for P0730 (incorrect gear ratio) or transmission slipping.",
      "5. Read Module 13: Check for ACC misalignment (01316) - if active, ACC cuts power.",
      "6. Check for active DTC in Module 01 - limp mode often triggered by single fault."
    ],
    commonCodes: ["P0087", "P0088", "P0300", "P2015", "P0730", "01316", "P0420"]
  },
  {
    symptom: "Transmission Slipping or Not Engaging",
    affectedModules: ["02 (Transmission)", "03 (Brakes)", "61 (Battery)"],
    possibleCauses: ["Low transmission fluid", "Degraded ATF fluid", "Worn clutch packs (K1/K2)", "Mechatronic solenoid failure", "TCM/TCU software issue", "Battery voltage too low"],
    diagnosticSteps: [
      "1. Read Module 02. Check for P0750/P0751 (solenoid faults), P0846 (low pressure).",
      "2. Live Data: Check 'Clutch K1 slip' and 'K2 slip' - should be 0 RPM in steady state. >100 RPM = slipping.",
      "3. Check ATF temperature: normal 60-90°C. Check ATF fluid quality counter in live data.",
      "4. Perform Transmission Adaptation Reset if K1/K2 slip is high.",
      "5. Check Module 61 battery voltage - <11V can cause TCM malfunction.",
      "6. If persistent: mechatronic unit may need replacement."
    ],
    commonCodes: ["P0750", "P0751", "P0730", "P0846", "P0847"]
  },
  {
    symptom: "ESP / ABS Light Always On",
    affectedModules: ["03 (Brakes)", "44 (Steering)", "61 (Battery)"],
    possibleCauses: ["SAS misalignment", "Wheel speed sensor fault", "G-sensor not calibrated", "Low battery voltage", "ABS module malfunction", "Brake fluid low"],
    diagnosticSteps: [
      "1. Read Module 03. Check for C-codes (wheel speed sensors), SAS codes, G-sensor codes.",
      "2. Module 44: Check SAS calibration status - if needed, run SAS calibration.",
      "3. Live Data Module 03: Check all four wheel speeds - should be within 2 km/h of each other.",
      "4. Check brake fluid level in master cylinder - low fluid triggers ABS light.",
      "5. Module 61: Check battery voltage - <11.5V can cause ABS malfunction.",
      "6. If all checks pass: Module 03 may have internal fault, requires replacement."
    ],
    commonCodes: ["C0035", "C0036", "C0040", "C0041", "C0096", "C1001", "B2214"]
  },
  {
    symptom: "Battery Dying / Draining",
    affectedModules: ["61 (Battery)", "01 (Engine)", "09 (Lighting)"],
    possibleCauses: ["Alternator not charging", "Parasitic drain (module left powered)", "Bad battery", "Faulty battery registration", "High-power component fault"],
    diagnosticSteps: [
      "1. Module 61: Live Data - battery voltage. Engine OFF: 12.6-13.5V. Engine ON: 13.2-14.8V.",
      "2. If <13V with engine running: alternator not charging. Check Module 01 live data for alternator output.",
      "3. Module 61: Check battery registration - if incorrect type/capacity registered, charging reduced.",
      "4. Check for parasitic drain: disconnect negative terminal, leave VCDS connected. Measure current draw.",
      "5. Module 09: Check if lighting is stuck on (coming home lights, DRL).",
      "6. If battery is old (>5 years) and voltage drops: battery near end of life."
    ],
    commonCodes: ["U0100", "U0101", "U0102"]
  },
  {
    symptom: "Steering Too Stiff or Heavy",
    affectedModules: ["44 (Steering/EPS)", "61 (Battery)"],
    possibleCauses: ["Low battery voltage", "EPS motor overload", "Power steering fluid low", "EPS calibration needed", "Steering rack binding"],
    diagnosticSteps: [
      "1. Module 61: Check battery voltage - EPS disabled if <10.5V.",
      "2. Module 44 Live Data: Check 'EPS motor current' - should be <0.5A at rest, 5-25A during steering.",
      "3. If current >30A: motor overload or binding.",
      "4. Check power steering fluid level in reservoir - low fluid causes stiff steering.",
      "5. Module 44: Run SAS calibration if steering feels off-center.",
      "6. If stiffness is speed-dependent: progressive steering adaptation may need reset."
    ],
    commonCodes: ["B2214", "B2500", "B2501"]
  },
  {
    symptom: "TPMS Light Won't Go Away",
    affectedModules: ["17 (Cluster)", "76 (PDC)", "61 (Battery)"],
    possibleCauses: ["Tire pressures incorrect", "TPMS not calibrated", "TPMS sensor faulty", "Low battery voltage affecting sensors", "Slow leak in tire"],
    diagnosticSteps: [
      "1. Physically check all four tire pressures (cold tires). Compare to door jamb label.",
      "2. If pressures correct: Module 17 - run TPMS calibration.",
      "3. Module 17 Live Data: Check TPMS FL/FR/RL/RR pressures - should match physical check.",
      "4. If one sensor reads wrong: sensor may be faulty or low battery.",
      "5. Drive 10+ miles at varied speeds after calibration - TPMS light should extinguish.",
      "6. If persists: individual TPMS sensor may need replacement."
    ],
    commonCodes: []
  },
  {
    symptom: "ACC / Front Assist Not Working",
    affectedModules: ["13 (ACC)", "0E (Camera)"],
    possibleCauses: ["Radar sensor misalignment", "Sensor not calibrated", "Front bumper damage", "Sensor wiring fault", "Module 13 software fault"],
    diagnosticSteps: [
      "1. Read Module 13. Check for code 01316 (misalignment) or 01566 (not calibrated).",
      "2. Visually inspect front bumper for damage affecting radar position.",
      "3. If 01316 present: run 12-step misalignment resolution procedure.",
      "4. If 01566: run radar calibration on flat surface with 10m clear ahead.",
      "5. Module 13 Live Data: Check 'Calibration status' - must show 'Calibrated'.",
      "6. Test Front Assist: on empty road, slow vehicle ahead 50+ meters - should display on cluster."
    ],
    commonCodes: ["01316", "01566", "01565", "01567", "01568"]
  },
  {
    symptom: "Limp Home Mode / Reduced Power",
    affectedModules: ["01 (Engine)", "02 (Transmission)", "03 (Brakes)"],
    possibleCauses: ["Critical fault detected (safety override)", "Overheating engine", "Transmission overheating", "ABS fault", "Fuel/ignition system failure"],
    diagnosticSteps: [
      "1. Immediately read all fault codes - especially critical (severity: critical).",
      "2. Check coolant temperature (IDE00005) - if >110°C, allow cooling before driving.",
      "3. Check transmission fluid temperature (Module 02) - if >100°C, transmission overheating.",
      "4. Module 01: Check fuel pressure and ignition timing - both may be reduced.",
      "5. Note which module set limp mode - critical faults force reduced power.",
      "6. Address root cause (fix fault), clear codes, test. Limp mode clears when system is healthy."
    ],
    commonCodes: ["P0016", "P0420", "P0846", "P0128", "P2010"]
  },
  {
    symptom: "Brake Pedal Soft / Goes to Floor",
    affectedModules: ["03 (Brakes)", "61 (Battery)"],
    possibleCauses: ["Air in brake lines (ABS unit)", "Master cylinder leak", "Brake fluid low", "ABS pump failure", "Brake line rupture"],
    diagnosticSteps: [
      "1. Check brake fluid level in master cylinder - should be between MIN/MAX marks.",
      "2. Look under car for brake fluid leaks at lines, calipers, wheel cylinders.",
      "3. Read Module 03 for fault codes - if no codes: gravity bleeding left air in ABS.",
      "4. Module 61: Check battery voltage - <11V can cause ABS pump failure.",
      "5. If fluid level is dropping: system has leak - identify and repair before driving.",
      "6. After repair/rebleed: must use VCDS brake bleeding (not gravity bleeding)."
    ],
    commonCodes: ["C0096", "C1001"]
  },
  {
    symptom: "Airbag / SRS Warning Light On",
    affectedModules: ["15 (Airbag)", "16 (KESSY)"],
    possibleCauses: ["Clockspring failure (most common)", "Occupant detection sensor fault", "Seatbelt pretensioner issue", "Airbag circuit wiring fault", "Post-crash event"],
    diagnosticSteps: [
      "1. Read Module 15 - check for B-codes.",
      "2. If B1010: clockspring failure - located in steering column behind wheel.",
      "3. If B1001: airbag control module internal fault or post-crash - check crash event counter.",
      "4. Check steering wheel horn pad - any damage may indicate crash sensor activation.",
      "5. NEVER disable airbag system without professional diagnosis.",
      "6. Most airbag faults require module replacement - DO NOT attempt to clear without fixing."
    ],
    commonCodes: ["B1001", "B1003", "B1010", "B1011", "B1012", "B1013", "B1015"]
  },
  {
    symptom: "Door Locks Not Working",
    affectedModules: ["08 (Comfort/BCM)", "16 (KESSY)"],
    possibleCauses: ["Door lock actuator solenoid failure", "Wiring/connector fault", "BCM module fault", "Key fob battery dead", "Central lock relay fault"],
    diagnosticSteps: [
      "1. Test with key fob - if no response: fob battery dead or BCM issue.",
      "2. Module 08: Special Functions - test door locks. Listen for solenoid click.",
      "3. If no click: solenoid failed or wiring fault. Check connector at door actuator.",
      "4. Module 16: Check key fob battery voltage - should be 2.8-3.1V.",
      "5. If only one door won't lock: that door's solenoid failed. Others fine means BCM is OK.",
      "6. If all doors won't lock: BCM relay or power supply issue."
    ],
    commonCodes: ["B1100", "B1101", "C0201", "C0202", "C0203", "C0204"]
  },
  {
    symptom: "Transmission Harsh / Jerky Shifting",
    affectedModules: ["02 (Transmission)", "03 (Brakes)", "61 (Battery)"],
    possibleCauses: ["Low ATF level", "Degraded ATF fluid", "Transmission adaptation needs reset", "Solenoid fault", "Engine misfire causing jerk"],
    diagnosticSteps: [
      "1. Module 02 Live Data: Check ATF temperature and fluid quality counter.",
      "2. If fluid quality is red/orange: perform ATF service immediately.",
      "3. After ATF service: run Transmission Adaptation Reset (normal harsh shifting for 200-500 miles).",
      "4. Module 02: Check K1/K2 slip - if >50 RPM: clutch pack wear evident.",
      "5. Module 61: Check battery voltage - low voltage can affect TCM calibration.",
      "6. If harsh only on specific shift (e.g., 1-2): that solenoid may be weak."
    ],
    commonCodes: ["P0730", "P0750", "P0751", "P0845", "P0846"]
  },
  {
    symptom: "Windows Won't Open / Close",
    affectedModules: ["08 (Comfort/BCM)"],
    possibleCauses: ["Window motor dead", "Window regulator off track", "Wiring fault", "BCM module fault", "Debris in window track"],
    diagnosticSteps: [
      "1. Module 08: Live Data - check 'Window position' for stuck window.",
      "2. Module 08: Special Functions - test window motors. Listen for motor sound.",
      "3. If motor is silent: wiring or power issue. Check connector at door module.",
      "4. If motor runs but window won't move: regulator off track (mechanical).",
      "5. Run Comfort Window Calibration - may initialize stuck window.",
      "6. If motor runs but stalls: jam detected (debris in track). Clean window channels."
    ],
    commonCodes: ["C0201", "C0202", "C0203", "C0204"]
  }
];
