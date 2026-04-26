export interface SpecialFunction {
  name: string;
  module: string;
  category: string;
  access: string;
  procedure: string;
  effect: string;
  riskLevel: "Safe" | "Medium" | "High" | "Critical";
}

export const specialFunctions: SpecialFunction[] = [
  // Module 01 - Engine Special Functions
  {
    name: "Service Reset - Oil Service Interval",
    module: "01",
    category: "Service",
    access: "No code required",
    procedure: "Module 01 → Special Functions → 'Service Reset' or Adaptations → search 'oil service'. Select 'Reset to 0'. Also available in Module 17.",
    effect: "Resets oil change countdown to 10,000 km / 365 days. Run after every engine oil change.",
    riskLevel: "Safe"
  },
  {
    name: "Fuel Injector Cleaning Service Reset",
    module: "01",
    category: "Service",
    access: "27971",
    procedure: "Module 01 → Special Functions → 'Injector Cleaning'. VCDS activates a cleaning cycle (increased fuel injection pressure, timing changes). Takes 2-5 minutes. Engine must be warm and running.",
    effect: "Cleans fuel injectors of carbon deposits. Improves cold start, idle quality, and fuel economy. Regular procedure every 80,000 km recommended.",
    riskLevel: "Safe"
  },
  {
    name: "Oxygen Sensor Heater Activation Test",
    module: "01",
    category: "Testing",
    access: "27971",
    procedure: "Module 01 → Component Test → 'O2 Sensor Heater'. Select Bank 1 Sensor 1 or 2. VCDS activates heater for 10 seconds. Feel connector for heat (careful - HOT!).",
    effect: "Verifies O2 sensor heater element is functional. Heater must reach operating temp in <10 seconds. Slow or no heat = sensor replacement needed.",
    riskLevel: "Medium"
  },
  {
    name: "HPFP (High-Pressure Fuel Pump) Pressure Relief Valve Activation",
    module: "01",
    category: "Testing",
    access: "27971",
    procedure: "Module 01 → Component Test → 'HPFP Relief Valve' (if available). Engine must be warm and running. Activates relief valve. Can help clear stuck valve.",
    effect: "Tests high-pressure fuel pump relief valve. If stuck: causes high pressure fault and P0088. Activation may help dislodge stuck valve.",
    riskLevel: "High"
  },
  {
    name: "Knock Sensor Self-Healing Function",
    module: "01",
    category: "Calibration",
    access: "27971",
    procedure: "Module 01 → Special Functions → 'Knock Sensor Calibration' (if available). Engine warm, idle. VCDS analyzes knock sensor signals at idle and light load.",
    effect: "Recalibrates knock sensor sensitivity after sensor replacement or if misfire codes appear. Helps distinguish detonation from misfire.",
    riskLevel: "Safe"
  },

  // Module 02 - Transmission Special Functions
  {
    name: "Transmission Shift Pattern Adaptation - Sport Mode Aggressiveness",
    module: "02",
    category: "Tuning",
    access: "01138",
    procedure: "Module 02 → Adaptations → search 'sport' or 'shift aggressiveness'. Options: Standard / Aggressive. Change value and save. Take test drive to feel difference.",
    effect: "In Aggressive mode: transmission holds gears longer, shifts at higher RPM. Makes Sport mode more spirited. Default Standard is more fuel-efficient.",
    riskLevel: "Safe"
  },
  {
    name: "Transmission Launch Control Activation",
    module: "02",
    category: "Performance",
    access: "01138",
    procedure: "Module 02 → Adaptations → search 'launch control'. Enable. In Sport mode: floor accelerator from standstill. TCM controls clutch slip for optimal launch. Feel the bite.",
    effect: "Optimized off-line acceleration in Sport mode. Reduces wheel spin, maximizes power transfer. Only active in Sport mode with launch control enabled.",
    riskLevel: "Medium"
  },
  {
    name: "Transmission Creep Function Toggle",
    module: "02",
    category: "Comfort",
    access: "01138",
    procedure: "Module 02 → Adaptations → 'Creep function: enable/disable'. Active (default) = car creeps forward in Drive with no throttle. Inactive = car stays put (manual mode feel).",
    effect: "Creep enabled: easier city driving (car moves in traffic without touching pedal). Disabled: more control in tight parking, prevents accidental creep.",
    riskLevel: "Safe"
  },
  {
    name: "Transmission Fluid Quality Counter Forensic Read",
    module: "02",
    category: "Diagnostics",
    access: "01138",
    procedure: "Module 02 → Live Data → search 'fluid quality' or 'oxidation level'. Read numerical value. Color code: 0-33 (Green-excellent) / 34-66 (Yellow-monitor) / 67-100 (Red-service immediately).",
    effect: "Predicts when ATF service is needed BEFORE symptoms appear. Red = fluid has oxidized, transmission life reduced. Plan service immediately.",
    riskLevel: "Safe"
  },

  // Module 03 - Brakes Special Functions
  {
    name: "ABS Self-Test / Buildup Test",
    module: "03",
    category: "Testing",
    access: "40168",
    procedure: "Module 03 → Component Test → 'ABS System Test' or 'Buildup Test'. Engine running, no movement. VCDS cycles ABS pump and solenoids. You'll hear clicking.",
    effect: "Verifies ABS pump and solenoid operation without emergency braking. Validates system readiness. Clicking sound is normal and expected.",
    riskLevel: "Medium"
  },
  {
    name: "Electronic Parking Brake (EPB) Full Retract",
    module: "03",
    category: "Service",
    access: "40168",
    procedure: "Module 03 → Component Test → 'EPB Full Retract' or 'Open Rear Brakes'. Engine running. EPB motors fully retract. Allows maximum brake pad compression for service.",
    effect: "Retracts EPB caliper pistons fully for pad replacement. MUST re-close/initialize EPB after pad service to function properly.",
    riskLevel: "High"
  },
  {
    name: "Electronic Parking Brake (EPB) Full Lock / Force Close",
    module: "03",
    category: "Service",
    access: "40168",
    procedure: "Module 03 → Component Test → 'EPB Full Lock' or 'Close/Initialize'. Vehicle parked on level ground. Motors lock rear brakes. EPB is now functional.",
    effect: "Resets EPB after service. MANDATORY after pad replacement or motor service. Without this: EPB won't lock or will warn constantly.",
    riskLevel: "Critical"
  },
  {
    name: "Brake Booster Integrity Check",
    module: "03",
    category: "Diagnostics",
    access: "No code",
    procedure: "Engine OFF: press brake pedal 5-6 times to deplete booster vacuum. Then turn ignition ON (don't start). Pedal should drop (booster pressurizes). Repeat 3x.",
    effect: "Manual check for brake booster functionality. Booster must hold vacuum. Failure = brake assist lost (very stiff pedal when driving).",
    riskLevel: "Medium"
  },

  // Module 08 - Comfort Special Functions
  {
    name: "Window Safety Function - Obstacle Detection Reset",
    module: "08",
    category: "Safety",
    access: "31347",
    procedure: "Module 08 → Component Test → 'Window Obstacle Detection'. Slowly insert fingers into window track while window is closing (safe at low speed). Window should stop when it detects obstruction.",
    effect: "Verifies pinch protection is functional. Safety feature to prevent child injuries. If doesn't stop: may need recalibration or motor adjustment.",
    riskLevel: "Medium"
  },
  {
    name: "Comfort Window Auto-Close Sequence Test",
    module: "08",
    category: "Functionality",
    access: "31347",
    procedure: "Module 08 → Component Test → 'Comfort Close: Windows' or 'Comfort Open: Windows'. All windows cycle simultaneously. Verifies synchronization and motor function.",
    effect: "Tests comfort window feature. All four windows should move in unison. Any lag or uneven speed = synchronization issue.",
    riskLevel: "Safe"
  },

  // Module 09 - Lighting Special Functions
  {
    name: "Headlight Leveling Motor Full Range Test",
    module: "09",
    category: "Testing",
    access: "20103",
    procedure: "Module 09 → Component Test → 'Headlight Leveling Motor'. Ignition ON (engine OFF). Motor cycles through full range. Headlights dip and rise.",
    effect: "Verifies AFS (Adaptive Front Lighting) motor moves freely. If stalls or jerks: mechanical jam or solenoid issue. Check for water/corrosion.",
    riskLevel: "Medium"
  },
  {
    name: "DRL Brightness Maximum Override",
    module: "09",
    category: "Tuning",
    access: "20103",
    procedure: "Module 09 → Adaptations → 'DRL: brightness when headlights off'. Change to 100% (maximum). Visual test in daylight. Very bright signature effect.",
    effect: "DRL at maximum intensity. Good for visibility/aesthetic. Some find too aggressive. Default 100%, can reduce to 70-80%.",
    riskLevel: "Safe"
  },

  // Module 13 - ACC Special Functions
  {
    name: "Radar Sensor Field of View Verification",
    module: "13",
    category: "Testing",
    access: "None",
    procedure: "Module 13 → Component Test → 'Sensor Field of View Test' (if available). Flat surface, 10+ meters clear. VCDS tests detection range and angle.",
    effect: "Ensures radar can detect vehicles ahead. Tests ±20° detection angle. Narrow FOV = misalignment (usually from collision).",
    riskLevel: "Safe"
  },
  {
    name: "Front Assist Sensitivity Adjustment - Distance Threshold",
    module: "13",
    category: "Tuning",
    access: "None",
    procedure: "Module 13 → Adaptations → 'Collision Warning Distance' (if available). Adjust threshold for earlier/later warning. Range: 50-120 meters typical.",
    effect: "Earlier warning = more reaction time. Later = less intrusive if traffic. Preference-based setting with no safety impact.",
    riskLevel: "Safe"
  },

  // Module 16 - KESSY Special Functions
  {
    name: "Key Fob Remote Testing and Battery Voltage Check",
    module: "16",
    category: "Diagnostics",
    access: "17956",
    procedure: "Module 16 → Live Data → 'Key Fob Signal Strength' or 'Remote Battery'. Get near vehicle. Press fob buttons. VCDS displays signal strength and battery voltage.",
    effect: "Diagnostic tool for fob problems. Voltage <2.7V = replace fob battery. Signal <-60 dBm = fob may be too far or damaged.",
    riskLevel: "Safe"
  },
  {
    name: "KESSY Receiver Sensitivity Tuning",
    module: "16",
    category: "Tuning",
    access: "17956",
    procedure: "Module 16 → Adaptations → 'KESSY Receiver Sensitivity' (if available). Adjust for better/worse range. Higher = more sensitive (longer range).",
    effect: "Increase if car won't unlock from far away. Decrease if fob triggers inadvertently at distance. Factory default usually optimal.",
    riskLevel: "Safe"
  },

  // Module 17 - Cluster Special Functions
  {
    name: "Odometer Display Verification (Anti-Fraud Check)",
    module: "17",
    category: "Diagnostics",
    access: "11046",
    procedure: "Module 17 → Live Data → 'Odometer' or 'Total Mileage'. Verify reading matches dashboard display. Any discrepancy >1 km = potential EEPROM fault.",
    effect: "Confirms odometer integrity. Mileage tampering would show discrepancies. Used in used car inspection/fraud detection.",
    riskLevel: "Safe"
  },
  {
    name: "Instrument Cluster Segment/Needle Self-Test",
    module: "17",
    category: "Testing",
    access: "11046",
    procedure: "Module 17 → Component Test → 'Display Test' or 'Self-Test'. All cluster segments illuminate, all needles move to min/center/max positions. Should see every pixel.",
    effect: "Verifies cluster hardware functionality. Dark pixels = display failure. Stuck needles = motor/stepper failure. Cluster needs replacement if faults found.",
    riskLevel: "Safe"
  },

  // Module 44 - Steering Special Functions
  {
    name: "Steering Angle Sensor (SAS) Offset Adjustment",
    module: "44",
    category: "Calibration",
    access: "Varies",
    procedure: "Module 44 → Basic Settings → 'SAS Calibration'. Wheels perfectly straight. VCDS stores 0° reference. Critical: vehicle must be on level surface, wheels not turned.",
    effect: "Synchronizes ECM steering angle with actual wheel position. Errors here cause ESP malfunction and lane assist confusion. Mandatory after alignment.",
    riskLevel: "High"
  },
  {
    name: "Progressive Steering Ratio Adaptation",
    module: "44",
    category: "Tuning",
    access: "Varies",
    procedure: "Module 44 → Adaptations → 'Progressive Steering'. Options: Off / Standard / Aggressive. Changes steering ratio sensitivity at different speeds.",
    effect: "Standard: ratio changes smoothly at highway speeds (less turning needed). Aggressive: ratio changes more drastically (sportier feel). Off: fixed ratio (very slow at highway).",
    riskLevel: "Safe"
  },

  // Module 5F - Infotainment Special Functions
  {
    name: "Head Unit Forced Software Update Check",
    module: "5F",
    category: "Software",
    access: "1804",
    procedure: "Module 5F → Special Functions → 'Check Software Updates' or 'System Update'. VCDS queries available updates. If found, update procedure begins (takes 5-10 minutes).",
    effect: "Checks for and applies head unit firmware updates. Updates improve navigation, Bluetooth stability, and fix known bugs. Requires USB stick with update files.",
    riskLevel: "Medium"
  },
  {
    name: "Video-in-Motion (VIM) Unlock / Removal",
    module: "5F",
    category: "Customization",
    access: "1804",
    procedure: "Module 5F → Adaptations → 'VIM (Video in Motion)'. Enable to allow navigation/video operation while driving (not just parked). Security Access 1804 required.",
    effect: "Disabled (default) for safety: navigation disabled while moving. Enabled: full navigation/video control while driving (distraction hazard). EU regulation: typically disabled.",
    riskLevel: "Critical"
  },
  {
    name: "Head Unit Boot Logo / Splash Screen Replacement",
    module: "5F",
    category: "Customization",
    access: "1804",
    procedure: "Module 5F → Special Functions → 'Boot Logo Update' (if available). VCDS allows custom logo file upload. Replaces Audi logo with custom image on startup.",
    effect: "Cosmetic change. Audi logo replaced with custom image (brand, personal logo, etc.) on head unit boot sequence. Purely aesthetic modification.",
    riskLevel: "Safe"
  },

  // Module 61 - Battery Special Functions
  {
    name: "Battery State of Health Trending",
    module: "61",
    category: "Diagnostics",
    access: "None",
    procedure: "Module 61 → Live Data → 'Battery State of Health'. Record SoH percentage monthly over several months. Plot trend to predict failure date.",
    effect: "Tracks battery aging. <50% SoH = battery failing soon. <30% SoH = imminent failure risk. Trending predicts replacement need 2-3 months in advance.",
    riskLevel: "Safe"
  },
  {
    name: "Start-Stop System Enable / Disable (Module 16 Interaction)",
    module: "61",
    category: "Customization",
    access: "None",
    procedure: "Module 61 → Adaptations → 'Start-Stop: Enable' / Disable. Also requires Module 16 enabling. Temperature thresholds can be set (-7°C typical minimum).",
    effect: "Enabled: engine auto-stops at red lights (saves fuel). Disabled: engine always runs (useful if start-stop is annoying or battery is weak).",
    riskLevel: "Safe"
  },

  // Module 76 - PDC Special Functions
  {
    name: "Parking Sensor Sonar Range Adjustment",
    module: "76",
    category: "Tuning",
    access: "None",
    procedure: "Module 76 → Adaptations → 'PDC Sensitivity' or 'Detection Range'. Adjust from Low/Medium/High. Tests with object at known distances.",
    effect: "High: beeping begins 1.5m from object. Medium: 1m. Low: 0.5m. Preference-based. High = more intrusive but earlier warning.",
    riskLevel: "Safe"
  },
  {
    name: "Parking Sensor Mute / Audio Control",
    module: "76",
    category: "Customization",
    access: "None",
    procedure: "Module 76 → Adaptations → 'PDC Audio Volume'. Options: Off / Low / Medium / High / Tone Only. Mute silences beeping entirely.",
    effect: "Muted: no beeping (silent mode). Tone only: single tone instead of rapid beeping. Low/Medium/High: beeping intensity. Some prefer silent with visual display.",
    riskLevel: "Safe"
  },

  // Module 0E - Camera Special Functions
  {
    name: "Camera Image Quality Auto-Adjustment Tuning",
    module: "0E",
    category: "Tuning",
    access: "None",
    procedure: "Module 0E → Adaptations → 'Camera Auto-Brightness'. Options: Auto / Manual. Auto: adjusts for lighting conditions. Manual: locked brightness.",
    effect: "Auto: adapts to sun glare, night driving. May oversaturate image. Manual: consistent brightness but may be too dark/bright in some conditions.",
    riskLevel: "Safe"
  },
  {
    name: "Rear Camera Display Delay Adjustment",
    module: "0E",
    category: "Customization",
    access: "None",
    procedure: "Module 0E → Adaptations → 'Rear Camera Display Delay'. Options: 0 / 1 / 2 / 5 seconds. Delay before camera activates when in Reverse.",
    effect: "0 seconds: instant display (fast reaction). 2 seconds: slight delay (verify in Reverse). 5 seconds: very delayed (not recommended). Preference-based.",
    riskLevel: "Safe"
  }
];
