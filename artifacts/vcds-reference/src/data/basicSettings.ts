export interface BasicSettingsProcedure {
  module: string;
  name: string;
  prerequisites: string;
  procedure: string;
  category?: string;
}

export const basicSettings: BasicSettingsProcedure[] = [

  // ── MODULE 01 – Engine Control ──────────────────────────────────────────────
  {
    module: "01", category: "Engine Calibration",
    name: "Throttle Body Adaptation (TBA)",
    prerequisites: "Engine MUST be OFF. Ignition ON only. Engine fully warm (coolant ≥87°C). No active fault codes in Module 01. Battery voltage above 12.0V.",
    procedure: "Navigate to Module 01 → Basic Settings → 'Throttle body adaptation'. Click Do It. Throttle plate will cycle audibly open and closed. Wait for 'ADP OK' or 'Function completed'. Duration: 10–30 seconds. Do NOT start engine during procedure. Run after: throttle body cleaning, throttle body replacement, or if idle is rough/unstable after throttle work."
  },
  {
    module: "01", category: "Engine Calibration",
    name: "Idle Speed Adaptation",
    prerequisites: "Engine RUNNING. Fully warm (coolant ≥87°C, oil ≥80°C). All electrical loads OFF (AC, rear defrost, blower). Vehicle stationary. No active fault codes. Neutral gear (or Park for DSG).",
    procedure: "Module 01 → Basic Settings → 'Idle speed adaptation'. Click Do It. Engine runs at idle. RPM may fluctuate ±50 RPM during learning. ADP OK when complete (30–90 seconds). Result: stable warm idle at 620–720 RPM. Run after: any intake work, throttle cleaning, or if idle quality has degraded."
  },
  {
    module: "01", category: "Engine Calibration",
    name: "Fuel Trim Reset (Learned Values Reset)",
    prerequisites: "Engine can be cold or warm. Run after: injector replacement, HPFP replacement, MAF replacement, O2 sensor replacement, or fuel system work.",
    procedure: "Module 01 → Basic Settings → 'Fuel trim reset' or 'Learned values reset'. Click Do It. Completes in 2–5 seconds. IDE00028 (STFT) resets to ~0%, IDE00029 (LTFT) resets to ~0%. Post-reset: drive 50–100 miles with mixed city/highway conditions for full relearn. Engine may feel slightly different for 10–30 miles — normal as ECU re-adapts."
  },
  {
    module: "01", category: "Engine Calibration",
    name: "IMRC (Intake Manifold Runner Control) Adaptation",
    prerequisites: "Engine RUNNING and warm (≥87°C). After: IMRC sensor replacement, intake manifold replacement, or when P2015 is active (runner sensor range fault).",
    procedure: "Module 01 → Basic Settings → 'IMRC adaptation' or 'Intake manifold runner adaptation'. Click Do It. Runner flaps cycle through full range (fully closed to fully open). Duration: 15–30 seconds. ADP OK when complete. Post-check: monitor IDE00400 (actual) vs IDE00401 (specified) — should match across load range. P2015 should clear after successful adaptation."
  },
  {
    module: "01", category: "Engine Calibration",
    name: "Camshaft / Timing Chain Adaptation",
    prerequisites: "Engine RUNNING. Fully warm. After any timing chain work, cam sensor replacement, or if IDE00182 shows unusual values.",
    procedure: "Module 01 → Basic Settings → 'Camshaft adaptation' or 'Timing chain adaptation'. Click Do It. ECM samples cam-crank timing relationship over 30–120 seconds at idle. After completion: IDE00182 (intake cam-crank offset) and IDE00183 (exhaust side) should read near 0° on a fresh chain. Values significantly non-zero on a new chain indicate installation error — recheck timing marks."
  },
  {
    module: "01", category: "Diagnostics",
    name: "Cylinder Contribution Test",
    prerequisites: "Engine warm and at idle. No active misfire fault codes at the start. All four cylinders firing. Battery voltage stable above 12.5V.",
    procedure: "Module 01 → Basic Settings → 'Cylinder contribution test'. Click Do It. ECU cuts fuel to each cylinder individually in sequence and measures resulting RPM drop. Healthy cylinder: 80–150 RPM drop. Marginal cylinder: 40–80 RPM drop. Weak cylinder: <40 RPM drop. Failed cylinder: almost no drop. Low-drop cylinder = suspect injector, low compression, or bad coil. Compare to compression test to distinguish mechanical vs fuel delivery cause."
  },
  {
    module: "01", category: "Diagnostics",
    name: "Relative Compression Test",
    prerequisites: "Engine warm. Battery FULLY CHARGED (above 12.6V rested — poor battery will skew results significantly). Ignition ON, engine OFF. All injectors operating or disable command accepted.",
    procedure: "Module 01 → Basic Settings → 'Relative compression test'. Click Do It. ECU disables fuel injection and commands starter motor to crank engine for 3–5 seconds. VCDS analyzes variation in crankshaft acceleration speed between cylinders. Results shown as relative percentage per cylinder. Equal percentages = balanced compression. A cylinder significantly lower (>10% deviation) = low compression. Full mechanical compression test needed to confirm and measure absolute values."
  },
  {
    module: "01", category: "Diagnostics",
    name: "Injector Test (individual injector activation)",
    prerequisites: "Engine running and warm. Use in conjuction with cylinder contribution data.",
    procedure: "Module 01 → Basic Settings → 'Injector test' (label varies by SW version). Activates each injector individually at a test pulse width. Listen for each injector click — audible from engine bay. A silent injector = failed injector or wiring fault. Cross-reference with IMA correction values (IDE01288–01291) and STFT data."
  },
  {
    module: "01", category: "Diagnostics",
    name: "Ignition Coil Test (individual coil activation)",
    prerequisites: "Engine running and warm. Safe to run with hood open.",
    procedure: "Module 01 → Basic Settings → 'Coil test' or 'Ignition coil activation'. Fires each coil individually. Listen for misfire on deactivated cylinder. If no change in engine character = possible coil fault on that cylinder. Cross-reference with misfire counter channels IDE00052–00055."
  },
  {
    module: "01", category: "Emissions",
    name: "O2 Sensor Heater Test",
    prerequisites: "Ignition ON. Engine does NOT need to be running (heater test only).",
    procedure: "Module 01 → Basic Settings → 'O2 sensor heater test'. Activates upstream and downstream O2 sensor heaters. Monitor sensor voltage rise — should heat to operating temperature within 30 seconds. Failed heater = sensor takes >60 seconds or shows no activity. Confirms P0135/P0141 type heater circuit faults."
  },
  {
    module: "01", category: "Emissions",
    name: "EVAP System Leak Test",
    prerequisites: "Engine warm. Fuel tank between 15–85% full. Cold soak of at least 6 hours since last run preferred for natural vacuum test.",
    procedure: "Module 01 → Basic Settings → 'EVAP leak detection' or 'Fuel system leak test'. ECU seals and pressurizes EVAP system, measures pressure decay over time. Pass = system holds pressure. Fail = P0442 (small leak) or P0455 (large leak). Check fuel cap first — most common cause. Then inspect vapor canister lines and purge valve."
  },

  // ── MODULE 02 – DQ381 Transmission ────────────────────────────────────────
  {
    module: "02", category: "Transmission",
    name: "Transmission Adaptation Reset",
    prerequisites: "Security Access 01138. Engine RUNNING. Selector in Park or Neutral. Transmission at operating temperature (ATF ≥60°C). No active fault codes.",
    procedure: "Module 02 → Basic Settings → 'Transmission adaptation reset'. Click Do It. Clears ALL learned shift data including clutch touch points, shift timing, and torque transfer maps. After reset: transmission will shift harshly for 200–500 miles while ECU re-learns. Drive in varied conditions — do not baby it. Run after: clutch pack replacement, mechatronic unit replacement, fluid service when fluid quality was severely degraded."
  },
  {
    module: "02", category: "Transmission",
    name: "Clutch K1 Touch Point Calibration",
    prerequisites: "Security Access 01138. Engine RUNNING. Selector in PARK. ATF at operating temp. Must run AFTER mechatronic replacement before driving.",
    procedure: "Module 02 → Basic Settings → 'K1 clutch kiss point adaptation' or 'Clutch touch point learning K1'. Click Do It. System engages and releases K1 (odd gears) clutch pack multiple times at precisely controlled pressures to map the engagement curve. Takes 60–120 seconds. ADP OK when complete. Do not interrupt — incomplete calibration causes harsh engagement."
  },
  {
    module: "02", category: "Transmission",
    name: "Clutch K2 Touch Point Calibration",
    prerequisites: "Security Access 01138. Engine RUNNING. Selector in PARK. Run immediately after K1 calibration.",
    procedure: "Module 02 → Basic Settings → 'K2 clutch kiss point adaptation'. Same procedure as K1 but for even-gear clutch pack. Takes 60–120 seconds. ADP OK. BOTH K1 and K2 calibrations are MANDATORY after mechatronic replacement before any driving."
  },
  {
    module: "02", category: "Transmission",
    name: "Selector Lever Position Learning",
    prerequisites: "Security Access 01138. Engine RUNNING. Follow VCDS prompts to move selector through each position.",
    procedure: "Module 02 → Basic Settings → 'Selector lever position learning'. VCDS prompts: move selector to P — confirm. Move to R — confirm. Move to N — confirm. Move to D — confirm. Move to S — confirm (if equipped). Move back to P. ADP OK. Required after mechatronic replacement — learns exact electrical positions for each selector detent."
  },
  {
    module: "02", category: "Transmission",
    name: "ATF Fluid Service Reset",
    prerequisites: "After ATF fluid change. Engine warm.",
    procedure: "Module 02 → Basic Settings → 'ATF service reset' or 'Fluid service'. Click Do It. Resets the ATF quality/degradation km counter to 0. ALWAYS run after transmission fluid service. Failure to reset means TCM treats new fluid as old fluid and may alter shift behavior unnecessarily."
  },
  {
    module: "02", category: "Transmission",
    name: "Neutral Safety Switch Calibration",
    prerequisites: "Engine RUNNING. Security Access 01138.",
    procedure: "Module 02 → Basic Settings → 'Neutral switch calibration'. Move selector through all positions as prompted. Ensures neutral detection is correctly calibrated for safe engine start interlock. Required if false neutrals or start problems occur after selector work."
  },

  // ── MODULE 03 – ABS / ESP / EPB ───────────────────────────────────────────
  {
    module: "03", category: "Brakes",
    name: "VCDS-Assisted Brake Bleeding (CRITICAL — ABS pump purge)",
    prerequisites: "Fresh DOT 4+ brake fluid (VAG spec TL766). Pressure bleeder connected. VCDS HEX-V2 connected and communicating. Engine RUNNING. All four bleed nipples accessible. Helper or pressure bleeder required.",
    procedure: "MK100 IPB has internal ABS pump passages that cannot be bled by gravity or pressure bleeding alone — VCDS activation is MANDATORY. Bleeding sequence: 1. Right Rear, 2. Left Rear, 3. Right Front, 4. Left Front. For each wheel: open bleed nipple, have helper pump pedal or apply pressure bleeder. In Module 03 → Basic Settings → 'Brake system bleeding'. VCDS opens ABS solenoid valves and runs pump to flush trapped air from the modulator. You will hear clicking from the ABS unit — this is normal. Bleed each nipple until no air bubbles appear. Close nipple. Move to next wheel. After all four: check fluid level and pedal feel. Firm pedal at full travel = success."
  },
  {
    module: "03", category: "Calibration",
    name: "SAS (Steering Angle Sensor) Zero-Point Calibration",
    prerequisites: "Vehicle on PERFECTLY FLAT, LEVEL surface. Wheels pointing DEAD STRAIGHT (verify with ruler against kerb or alignment rack). Ignition ON. No movement during procedure.",
    procedure: "Module 03 → Basic Settings → 'Steering angle sensor calibration' or 'SAS calibration'. Click Do It. VCDS reads current steering angle and stores this position as 0°. Duration: 5–15 seconds. ADP OK. REQUIRED after: any wheel alignment, corner weight adjustment, suspension component replacement (control arms, tie rods, struts), steering component replacement, or when ESP seems to activate on a straight flat road. Wrong calibration causes ESP to think you are turning when going straight."
  },
  {
    module: "03", category: "Calibration",
    name: "G-Sensor (Lateral / Longitudinal Accelerometer) Calibration",
    prerequisites: "Vehicle on PERFECTLY LEVEL surface (use spirit level on sill). Engine OFF. Ignition ON. Vehicle COMPLETELY STATIONARY. No passengers, doors all closed.",
    procedure: "Module 03 → Basic Settings → 'G-sensor calibration' or 'Yaw sensor calibration'. Click Do It. ECU samples all inertial sensors and stores current reading as the 0g reference (level ground). Takes 15–30 seconds. Required after: module replacement, or if ESP/ABS activates intermittently on a flat straight road (false G reading)."
  },
  {
    module: "03", category: "Brakes",
    name: "EPB Service Mode — Open (Retract Rear Pads)",
    prerequisites: "Engine RUNNING (EPB motors require power). Vehicle on level ground. Gear in Park. Confirm safety — vehicle must not roll.",
    procedure: "Module 03 → Basic Settings → 'Rear brake pad replacement (open)' or 'EPB caliper retraction'. Click Do It. Both rear EPB motors retract the caliper pistons fully rearward. You will hear motors operating for 5–15 seconds. Pads can now be removed and new pads + rotors serviced. CRITICAL: Do NOT try to wind pistons with conventional piston tool — EPB calipers retract electrically only. Manual forcing damages the motor."
  },
  {
    module: "03", category: "Brakes",
    name: "EPB Service Mode — Close (Re-engage After Pad Replacement)",
    prerequisites: "New brake pads correctly fitted. All brake hardware torqued. Calipers re-assembled. Engine RUNNING.",
    procedure: "Module 03 → Basic Settings → 'Rear brake pad replacement (close)' or 'EPB caliper initialization'. Click Do It. Motors drive pistons to make contact with pads and auto-set the correct running clearance. Apply handbrake at end of procedure to confirm full engagement. WARNING: If this step is skipped after opening, parking brake will NOT function correctly and may damage pads."
  },
  {
    module: "03", category: "Diagnostics",
    name: "ABS Pump Function Test",
    prerequisites: "Vehicle stationary. Engine RUNNING. Brake fluid at correct level.",
    procedure: "Module 03 → Basic Settings → 'ABS pump function test'. VCDS briefly activates ABS pump and modulator solenoids. Listen for pump running (like a small motor whirring). Confirms pump is operational and solenoids are moving. Useful when diagnosing ABS warning light with no obvious sensor faults."
  },
  {
    module: "03", category: "Diagnostics",
    name: "Wheel Speed Sensor Plausibility Check",
    prerequisites: "Vehicle being driven at ≥30 km/h on a straight road.",
    procedure: "Module 03 → Basic Settings → 'Wheel speed sensor test' (drive mode). All four wheel speed channels display simultaneously. At constant speed, all four should read within ±2 km/h. Any outlier sensor = faulty sensor, damaged tone ring, or intermittent wiring. Compare against Module 01 vehicle speed channel for cross-reference."
  },

  // ── MODULE 08 – Comfort System / BCM ──────────────────────────────────────
  {
    module: "08", category: "Windows",
    name: "Window Basic Position Reset",
    prerequisites: "All windows fully closed manually first. Key in ignition ON position.",
    procedure: "Module 08 → Basic Settings → 'Window basic position reset'. Click Do It for each window channel individually. Each motor learns its fully-closed reference position. Duration: ~10 seconds per window. Required after: window motor replacement, regulator replacement, or if one-touch close stops working (window won't fully close in one motion)."
  },
  {
    module: "08", category: "Comfort Features",
    name: "Rain Sensor Calibration",
    prerequisites: "Clean, dry windscreen. Ignition ON. Rain sensor area must be unobstructed.",
    procedure: "Module 08 → Basic Settings → 'Rain sensor calibration'. Click Do It. Sensor learns the baseline light transmission value through the clean glass. Required after windscreen replacement. Incorrect calibration = random wiper activation on dry glass or no response to light rain."
  },

  // ── MODULE 13 – ACC / Distance Regulation ─────────────────────────────────
  {
    module: "13", category: "ACC / Radar",
    name: "Radar Sensor Factory Reset",
    prerequisites: "Vehicle stationary. Engine running. All Module 13 fault codes cleared. Run as Step 8 in the 12-step misalignment fault sequence.",
    procedure: "Module 13 → Basic Settings → 'Sensor factory reset' or 'Reset to factory defaults'. Click Do It. Clears all sensor-internal calibration data and learned offsets. Takes 5–15 seconds. After this step: sensor considers itself uncalibrated. Must run 'Sensor initialization' and 'Radar calibration' immediately after."
  },
  {
    module: "13", category: "ACC / Radar",
    name: "Radar Sensor Initialization",
    prerequisites: "Immediately after factory reset. Vehicle stationary on flat surface. Engine running.",
    procedure: "Module 13 → Basic Settings → 'Sensor initialization'. Click Do It. Sensor runs internal diagnostics and prepares for calibration. Takes 5–30 seconds. ADP OK. Required before final calibration basic setting. Do NOT skip — calibrating without initialization can result in incomplete calibration."
  },
  {
    module: "13", category: "ACC / Radar",
    name: "Radar Calibration (Full Alignment Check)",
    prerequisites: "Flat level surface. At least 10 metres of clear open space ahead with NO objects (walls, cars, bollards). Wheels pointing straight ahead. Engine running.",
    procedure: "Module 13 → Basic Settings → 'Radar calibration' or 'ACC alignment calibration'. Click Do It. Sensor sweeps field of view and checks horizontal aim angle. Takes 30–60 seconds. Result: 'Calibrated' = success. If misalignment offset is within tolerance, status becomes calibrated. If offset is too large (sensor physically misaligned), physical bracket adjustment required. After calibration: drive briefly at 30+ km/h, then return and verify 'Calibrated' status remains."
  },
  {
    module: "13", category: "ACC / Radar",
    name: "ACC Misalignment Fault Resolution — Full 12-Step Sequence",
    prerequisites: "All Module 13 faults logged and noted. Flat level surface. 10m clear ahead. Engine running.",
    procedure: "Full sequence: (1) Read and record all Module 13 fault codes. (2) Clear ALL Module 13 faults. (3) Open Adaptations → set 'sensor operational state' to 0 → Save. (4) Clear faults again. (5) Close Module 13 completely. (6) Re-open Module 13. (7) Verify misalignment fault code is gone. (8) Run 'Sensor factory reset' Basic Setting. (9) Run 'Sensor initialization' Basic Setting. (10) Drive vehicle briefly at 30+ km/h on straight road. (11) Return to flat level surface, wheels straight. (12) Run 'Radar calibration' Basic Setting. Verify status shows 'Calibrated'. If misalignment fault returns immediately after this sequence, the radar module may have physically shifted on its mount — inspect mounting bracket."
  },

  // ── MODULE 15 – Airbag / SRS ──────────────────────────────────────────────
  {
    module: "15", category: "SRS",
    name: "Airbag Module Initialization (After Replacement)",
    prerequisites: "New airbag control module fitted. Ignition ON. No deployed components connected. CRITICAL: Remove all ignition sources, keep battery connected, disable supplemental restraints where possible before working near airbag components.",
    procedure: "Module 15 → Basic Settings → 'Module initialization' or 'Component adaptation'. New ACM may require coding to match vehicle. Use long coding or coding assistant in VCDS to configure for this vehicle's airbag complement (driver, passenger, side, curtain, knee). Incorrect coding causes the airbag warning lamp to remain on. After coding, clear all faults and confirm lamp is off."
  },
  {
    module: "15", category: "SRS",
    name: "Occupant Classification System (OCS) Reset",
    prerequisites: "No passenger in seat. Ignition ON.",
    procedure: "Module 15 → Basic Settings → 'OCS reset' or 'Occupant classification calibration'. Resets the seat occupancy sensor baseline for empty seat. Run after seat replacement or if passenger airbag indicator is behaving incorrectly (showing suppressed when occupied, or active when empty)."
  },

  // ── MODULE 16 – Steering Column / KESSY ───────────────────────────────────
  {
    module: "16", category: "Key Programming",
    name: "Key Fob Programming / Pairing",
    prerequisites: "Security Access 17956. All existing working keys present (some procedures require all keys to complete channel). New key fob (uncut or cut blank). VCDS HEX-V2 connected.",
    procedure: "Module 16 → Basic Settings → 'Key fob adaptation' or 'Remote control programming'. Follow VCDS prompts: enter number of keys to program, present each fob when prompted by pressing buttons or inserting into ignition slot. Process takes 1–5 minutes per key. All programmed keys should be presented in the same session — module re-learns the authorized key set. Old unprogrammed keys are removed from the authorized list. WARNING: Program ALL keys you intend to keep in one session — orphaned keys will no longer work."
  },
  {
    module: "16", category: "KESSY",
    name: "KESSY Antenna Range Calibration",
    prerequisites: "Security Access 17956. All KESSY antennas connected. Key fob battery fresh.",
    procedure: "Module 16 → Basic Settings → 'KESSY antenna calibration'. VCDS verifies signal strength of each antenna. Walk-away lock functionality depends on accurate antenna range detection. Run if walk-away lock activates too early or not at all. Adjust sensitivity via Adaptations after calibration."
  },

  // ── MODULE 17 – Instrument Cluster ────────────────────────────────────────
  {
    module: "17", category: "Service Resets",
    name: "Oil Service Reset (Time + Distance)",
    prerequisites: "Security Access 11046. Oil and filter changed. Fresh oil level confirmed on dipstick.",
    procedure: "Module 17 → Basic Settings → 'Oil service reset'. Click Do It. Resets BOTH time counter (back to 365 days) AND distance counter (back to 10,000 km). Alternatively: Adaptation → 'Time since last oil change' → set to 0, and 'Distance since last oil change' → set to 0. Confirm cluster shows oil service indicator extinguished. ALWAYS run after every engine oil and filter change."
  },
  {
    module: "17", category: "Service Resets",
    name: "Annual Inspection Reset",
    prerequisites: "Security Access 11046. Service/inspection completed.",
    procedure: "Module 17 → Basic Settings → 'Inspection service reset'. Resets inspection time and distance counters. Run after full annual service. Cluster inspection indicator will extinguish."
  },
  {
    module: "17", category: "TPMS",
    name: "TPMS Calibration",
    prerequisites: "ALL four tires inflated to correct COLD pressure per door jamb label (typically 36 PSI front, 38 PSI rear for A3 8V — verify label). Pressures checked with quality gauge, not pump gauge.",
    procedure: "Module 17 → Basic Settings → 'TPMS calibration' or 'Tire pressure store'. Click Do It. Stores current pressure values as reference baseline. Takes 5 seconds. CRITICAL: Inflate first, calibrate second — not the other way around. After calibration: drive 10+ miles at varied speeds (minimum 30 mph segment) for sensors to transmit and cluster to confirm readings. TPMS warning should extinguish within 10–15 minutes of driving. If warning persists after driving: check individual sensor readings in Module 17 live data."
  },
  {
    module: "17", category: "Cluster",
    name: "Gauge (Needle) Sweep Test",
    prerequisites: "Ignition cycle or via Basic Settings command.",
    procedure: "Module 17 → Basic Settings → 'Gauge needle sweep' or 'Instrument cluster test'. All cluster needles sweep from minimum to maximum and return. Confirms stepper motor health in each gauge. A needle that sticks or sweeps partially = faulty stepper motor in cluster requiring cluster repair or replacement."
  },
  {
    module: "17", category: "Cluster",
    name: "Indicator / Warning Lamp Test",
    prerequisites: "Ignition ON.",
    procedure: "Module 17 → Basic Settings → 'Warning lamp test'. All warning indicator lamps illuminate simultaneously. Confirms all lamp circuits are functional. Any lamp that does not illuminate during test = failed bulb or LED (on non-matrix clusters), or driver circuit fault."
  },

  // ── MODULE 19 – CAN Gateway ────────────────────────────────────────────────
  {
    module: "19", category: "Network",
    name: "Network Component List Update",
    prerequisites: "After adding or removing any electronic module. Ignition ON.",
    procedure: "Module 19 → Basic Settings → 'Network component list update' or 'Bus component list'. Click Do It. Gateway queries all CAN buses and updates its internal list of expected modules. Run after: installing a new module (e.g., adding PDC, ACC), or removing a module (to prevent false U-codes). After update, clear all fault codes in Module 19 and perform a full VCDS auto-scan to confirm."
  },

  // ── MODULE 36 – Electric Seat / Memory ────────────────────────────────────
  {
    module: "36", category: "Seat",
    name: "Seat Initialization / Basic Position Reset",
    prerequisites: "All seat motor connectors securely connected. Ignition ON. Seat unoccupied.",
    procedure: "Module 36 → Basic Settings → 'Seat initialization'. Click Do It for each motor axis (fore/aft, height, recline). Each motor drives to its end stop and learns the full travel range. Takes 30–60 seconds total. Required after: seat motor replacement, seat harness replacement, or if memory recall doesn't move seat to correct position. After initialization, reprogram memory positions."
  },

  // ── MODULE 44 – Steering / EPS ────────────────────────────────────────────
  {
    module: "44", category: "Steering",
    name: "EPS (Electric Power Steering) Initialization",
    prerequisites: "Ignition ON. Engine NOT running (EPS in static mode). Vehicle stationary.",
    procedure: "Module 44 → Basic Settings → 'EPS initialization' or 'Steering sensor initialization'. Click Do It. EPS motor and torque sensor initialize and run self-check. Takes 5–15 seconds. Run after: EPS module replacement, steering column replacement, or if power steering warning light illuminates after service work."
  },
  {
    module: "44", category: "Calibration",
    name: "Steering Angle Sensor (SAS) Zero-Point via Module 44",
    prerequisites: "Vehicle on flat level surface. Wheels straight ahead. Ignition ON. Also run Module 03 SAS calibration — both modules must agree.",
    procedure: "Module 44 → Basic Settings → 'SAS calibration' or 'Steering angle zero point'. Click Do It. EPS module stores straight-ahead position. Cross-reference with Module 03 SAS calibration — run BOTH for correct ESP/LKA behavior. Disagreement between modules causes false LKA interventions."
  },
  {
    module: "44", category: "Calibration",
    name: "Lane Keeping Assist (LKA) Calibration",
    prerequisites: "SAS calibrated (Module 03 and Module 44). Camera module (0E) calibrated. Vehicle on straight road.",
    procedure: "Module 44 → Basic Settings → 'LKA calibration'. Click Do It. System runs diagnostic check of LKA torque output and verifies camera input. Takes 15–30 seconds. Run after: windscreen replacement (camera re-aim), suspension work, or if LKA pulls to one side."
  },

  // ── MODULE 61 – Battery Management System ────────────────────────────────
  {
    module: "61", category: "Battery",
    name: "Battery Registration (MANDATORY After Replacement)",
    prerequisites: "New battery FULLY INSTALLED and clamped. Know the new battery: capacity (Ah) and type (AGM or Standard EFB). Ignition ON.",
    procedure: "Module 61 → Adaptation → search 'battery'. Three fields to update: (1) Battery capacity — enter Ah rating stamped on new battery (e.g., 60, 68, 70). (2) Battery type — select AGM (standard for A3 8V) or EFB/Standard. (3) Nominal voltage — 12V. Save each field. Then run Module 61 → Basic Settings → 'Battery registration' and click Do It if available. CRITICAL: Without registration, the smart charging system treats the new battery as old and degraded. It will undercharge, accelerating premature failure. Start-stop will also be disabled or unreliable. This MUST be done every battery replacement."
  },
  {
    module: "61", category: "Battery",
    name: "Start-Stop System Reset",
    prerequisites: "After battery registration completed. Ignition cycling complete.",
    procedure: "Module 61 → Basic Settings → 'Start-stop reset' or 'BMS adaptation reset'. Resets the start-stop learning values. BMS recalculates SoC and SoH with new battery parameters. Start-stop may remain inactive for the first 1–2 drive cycles while BMS evaluates new battery health."
  },

  // ── MODULE 76 – Parking Aid / PDC ─────────────────────────────────────────
  {
    module: "76", category: "PDC",
    name: "PDC Sensor Test (Individual Sensor Activation)",
    prerequisites: "Vehicle stationary. Ignition ON.",
    procedure: "Module 76 → Basic Settings → 'PDC sensor test'. VCDS activates each ultrasonic sensor individually and reports response. A sensor that shows 'No signal' or 'Fault' during test = failed sensor, damaged wiring, or sensor face packed with dirt/ice. Remove any obstructions first and retest before replacing sensors."
  },
  {
    module: "76", category: "PDC",
    name: "PDC Sensor Range Calibration",
    prerequisites: "All sensors clean and undamaged. Vehicle stationary in open space.",
    procedure: "Module 76 → Basic Settings → 'Range calibration'. Click Do It. System measures baseline sensor ranges in clear conditions and stores reference. Run after sensor replacement to ensure consistent range detection across all sensors. Mismatched range calibrations cause uneven warnings (one sensor triggers much earlier or later than others)."
  },
  {
    module: "76", category: "PDC",
    name: "Front PDC Enable / Disable",
    prerequisites: "Front sensors must be physically installed for enable to function. Ignition ON.",
    procedure: "Module 76 → Adaptation → 'Front PDC: enable' → set to Active. Then run Module 76 → Basic Settings → 'System initialization'. Registers front sensors in system. Without this Basic Setting, front sensor adaptation alone may not activate the system. Confirm by checking live data — all 8 sensor channels should show valid readings."
  },
];
