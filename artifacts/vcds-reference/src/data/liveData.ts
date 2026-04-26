export interface LiveDataChannel {
  channel: string;
  description: string;
  unit: string;
  normalValues: string;
  module: string;
}
export const liveDataChannels: LiveDataChannel[] = [
  // Module 01
  { module: "01", channel: "IDE00001", description: "Engine speed (RPM)", unit: "/min", normalValues: "Idle warm: 620–720 | Cold idle: 900–1100 | WOT: up to 6500" },
  { module: "01", channel: "IDE00005", description: "Coolant temperature", unit: "°C", normalValues: "Normal: 87–100°C | Cold start: 10–30°C | Warning: >110°C" },
  { module: "01", channel: "IDE00007", description: "Intake air temperature (pre-throttle)", unit: "°C", normalValues: "Ambient +5–15°C when engine hot" },
  { module: "01", channel: "IDE00012", description: "Engine oil temperature", unit: "°C", normalValues: "Normal: 100–115°C | High load: up to 130°C" },
  { module: "01", channel: "IDE00014", description: "Engine load (calculated)", unit: "%", normalValues: "Idle: 5–15 | Cruise: 25–55 | WOT: 80–100" },
  { module: "01", channel: "IDE00028", description: "Short-term fuel trim bank 1", unit: "%", normalValues: "Normal: -5% to +5% | Acceptable: ±10% | Problem: >±10%" },
  { module: "01", channel: "IDE00029", description: "Long-term fuel trim bank 1", unit: "%", normalValues: "Normal: -10% to +10% | Problem: >±25%" },
  { module: "01", channel: "IDE00045", description: "Cam timing: intake actual", unit: "°", normalValues: "Varies with load. Tracks target closely. Deviation >5° = VVT issue" },
  { module: "01", channel: "IDE00182", description: "Cam-crank adaptation (chain wear indicator)", unit: "°", normalValues: "New chain: near 0° | Warning: ±4° | Critical: ±6°" },
  { module: "01", channel: "IDE00200", description: "High fuel pressure: actual (GDI)", unit: "bar", normalValues: "Idle: 40–60 | Cruise: 70–100 | WOT: 120–180" },
  { module: "01", channel: "IDE00201", description: "High fuel pressure: specified (GDI)", unit: "bar", normalValues: "Should track actual. Gap >15 bar = HPFP issue" },
  { module: "01", channel: "IDE00202", description: "Low fuel pressure: specified (MPI)", unit: "bar", normalValues: "4.5–5.5 bar constant. Below 4 bar = pump fault" },
  { module: "01", channel: "IDE00349", description: "Throttle valve position", unit: "%", normalValues: "Idle: 0–2 | Light throttle: 5–20 | WOT: 90–100" },
  { module: "01", channel: "IDE00348", description: "Intake air temp (post-intercooler)", unit: "°C", normalValues: "Should be close to ambient. Hot: 40–70°C" },
  { module: "01", channel: "IDE00392", description: "Accelerator pedal sensor 1", unit: "V", normalValues: "Rest: ~0.75V | Full: ~3.8V" },
  { module: "01", channel: "IDE01644", description: "Downstream O2 sensor (post-cat)", unit: "V", normalValues: "Stable 0.6–0.9V = good catalyst. Oscillating = poor catalyst" },
  // Module 02
  { module: "02", channel: "Clutch K1 slip", description: "Odd-gear clutch pack slip speed", unit: "RPM", normalValues: "0 RPM in steady state. Persistent slip = worn clutch or low fluid" },
  { module: "02", channel: "Clutch K2 slip", description: "Even-gear clutch pack slip speed", unit: "RPM", normalValues: "Same as K1. K2 runs warmer in city driving" },
  { module: "02", channel: "K1 temperature", description: "Odd-gear clutch temperature", unit: "°C", normalValues: "Normal: 60–100°C | High load: up to 130°C | Warning: >150°C" },
  { module: "02", channel: "K2 temperature", description: "Even-gear clutch temperature", unit: "°C", normalValues: "Same reference as K1" },
  { module: "02", channel: "ATF temperature", description: "Transmission fluid temperature", unit: "°C", normalValues: "Cold: ambient | Normal: 60–90°C | Fluid check window: 35–45°C" },
  { module: "02", channel: "System pressure", description: "Main hydraulic line pressure", unit: "bar", normalValues: "Idle: 4–6 bar | Load: 8–15 bar" },
  { module: "02", channel: "Current gear", description: "Currently engaged gear", unit: "gear", normalValues: "1–7 forward, R, N, P" },
  // Module 03
  { module: "03", channel: "Wheel speed FL", description: "Front left wheel speed", unit: "km/h", normalValues: "Should match others ±1–2 mph at constant speed" },
  { module: "03", channel: "Wheel speed FR", description: "Front right wheel speed", unit: "km/h", normalValues: "Same reference" },
  { module: "03", channel: "Wheel speed RL", description: "Rear left wheel speed", unit: "km/h", normalValues: "Same reference" },
  { module: "03", channel: "Wheel speed RR", description: "Rear right wheel speed", unit: "km/h", normalValues: "Same reference" },
  { module: "03", channel: "Brake pressure 1", description: "Master cylinder pressure", unit: "bar", normalValues: "No brake: 0–2 | Light: 10–30 | Hard: 80–150 | Emergency: 150–250" },
  { module: "03", channel: "Lateral acceleration", description: "Side-to-side G force", unit: "m/s²", normalValues: "0 straight | Increases with cornering" },
  { module: "03", channel: "Yaw rate", description: "Vehicle rotation rate", unit: "°/s", normalValues: "0 straight | ESP compares this to steering input" },
  // Module 13
  { module: "13", channel: "ACC calibration status", description: "Radar sensor calibration state", unit: "—", normalValues: "Must show 'Calibrated' for normal operation" },
  { module: "13", channel: "Target distance", description: "Distance to tracked vehicle ahead", unit: "m", normalValues: "0–150m. ACC begins following ~100m" },
  { module: "13", channel: "Target relative velocity", description: "Speed difference to target", unit: "km/h", normalValues: "Positive = target pulling away | Negative = approaching (ACC brakes)" },
  { module: "13", channel: "Horizontal alignment offset", description: "Radar beam horizontal offset", unit: "°", normalValues: "Calibrated: within ±1.5° | Fault sets: beyond ±2°" },
  { module: "13", channel: "Misalignment fault active", description: "Hard misalignment lock state", unit: "—", normalValues: "Must be 'Not active'. If active: run 12-step unlock sequence" },
  // Module 17
  { module: "17", channel: "Oil change days remaining", description: "Days until next oil service", unit: "days", normalValues: "Counts down from 365. Negative = overdue" },
  { module: "17", channel: "Oil change distance remaining", description: "Distance until oil service", unit: "km/mi", normalValues: "Typically 10,000 km / 5,000 miles interval" },
  { module: "17", channel: "TPMS FL pressure", description: "Front left tire pressure", unit: "PSI", normalValues: "Correct: 36–38 PSI (verify door jamb label)" },
  { module: "17", channel: "TPMS FR pressure", description: "Front right tire pressure", unit: "PSI", normalValues: "Same as FL" },
  { module: "17", channel: "TPMS RL pressure", description: "Rear left tire pressure", unit: "PSI", normalValues: "Check door label — may differ from front" },
  { module: "17", channel: "TPMS RR pressure", description: "Rear right tire pressure", unit: "PSI", normalValues: "Same as RL" },

  // Module 08 - Comfort / BCM
  { module: "08", channel: "Door FL status", description: "Front left door open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Door FR status", description: "Front right door open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Door RL status", description: "Rear left door open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Door RR status", description: "Rear right door open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Trunk status", description: "Trunk open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Hood status", description: "Hood open/closed", unit: "—", normalValues: "Closed = 0 | Open = 1" },
  { module: "08", channel: "Window FL position", description: "Front left window position", unit: "%", normalValues: "0% = fully closed | 100% = fully open" },
  { module: "08", channel: "Window FR position", description: "Front right window position", unit: "%", normalValues: "0% = fully closed | 100% = fully open" },
  { module: "08", channel: "Window RL position", description: "Rear left window position", unit: "%", normalValues: "0% = fully closed | 100% = fully open" },
  { module: "08", channel: "Window RR position", description: "Rear right window position", unit: "%", normalValues: "0% = fully closed | 100% = fully open" },
  { module: "08", channel: "Sunroof position", description: "Sunroof tilt/slide position", unit: "%", normalValues: "0% = closed | 100% = fully open" },
  { module: "08", channel: "Lock status: doors", description: "All door locks engaged state", unit: "—", normalValues: "Locked = 1 | Unlocked = 0" },
  { module: "08", channel: "Rain sensor level", description: "Windshield water sensor sensitivity", unit: "—", normalValues: "No rain = 0 | Light rain = 1 | Heavy rain = 2" },

  // Module 09 - Central Electronics / Lighting
  { module: "09", channel: "DRL brightness", description: "Daytime running light intensity", unit: "%", normalValues: "Typically 70–100%. Depends on adaptation." },
  { module: "09", channel: "Headlight switch position", description: "Manual headlight switch state", unit: "—", normalValues: "Off / Parking / Dipped / Main beam" },
  { module: "09", channel: "Auto-light sensor level", description: "Ambient light sensor reading", unit: "lux", normalValues: "Day: >10,000 lux | Dusk: 100–10,000 | Night: <100" },
  { module: "09", channel: "Wiper switch state", description: "Wiper control switch position", unit: "—", normalValues: "Off / Intermittent / Slow / Fast" },
  { module: "09", channel: "Brake light relay", description: "Brake lights active (rear lights)", unit: "—", normalValues: "Not active = 0 | Active = 1" },
  { module: "09", channel: "Hazard warning state", description: "Hazard lights active", unit: "—", normalValues: "Off = 0 | Flashing = 1" },

  // Module 15 - Airbag / SRS
  { module: "15", channel: "Driver airbag status", description: "Driver front airbag ready", unit: "—", normalValues: "Ready = 0 | Fault = 1 | Deployed = 2" },
  { module: "15", channel: "Passenger airbag status", description: "Passenger front airbag ready", unit: "—", normalValues: "Ready = 0 | Fault = 1 | Deployed = 2 | Disabled = 3" },
  { module: "15", channel: "Driver seatbelt status", description: "Driver seatbelt fastened", unit: "—", normalValues: "Fastened = 1 | Unfastened = 0" },
  { module: "15", channel: "Passenger seatbelt status", description: "Passenger seatbelt fastened", unit: "—", normalValues: "Fastened = 1 | Unfastened = 0" },
  { module: "15", channel: "Occupant detection: passenger", description: "Passenger seat occupancy sensor", unit: "—", normalValues: "Occupied = 1 | Empty = 0" },
  { module: "15", channel: "Crash event counter", description: "Number of recorded crash events", unit: "count", normalValues: "Should be 0. > 0 means post-crash state." },

  // Module 16 - Steering Column / KESSY
  { module: "16", channel: "Key fob battery", description: "Remote key battery voltage", unit: "V", normalValues: "Normal: 2.8–3.1V | Low: <2.7V (replace battery)" },
  { module: "16", channel: "KESSY approach: key distance", description: "Distance from vehicle to key", unit: "m", normalValues: "Approach unlock trigger: ~1.5m | Standard range: 0–3m" },
  { module: "16", channel: "Steering wheel position: tilt", description: "Steering column tilt position", unit: "%", normalValues: "0% = fully down | 100% = fully tilted up" },
  { module: "16", channel: "Steering wheel position: reach", description: "Steering column reach position", unit: "%", normalValues: "0% = closest | 100% = furthest away" },

  // Module 44 - Steering / EPS / Lane Assist
  { module: "44", channel: "Steering angle actual", description: "Current steering wheel angle", unit: "°", normalValues: "0° = straight | ±540° max depending on config" },
  { module: "44", channel: "Steering angle target", description: "Target steering angle (after calibration)", unit: "°", normalValues: "Should match actual when wheels straight" },
  { module: "44", channel: "EPS motor current", description: "Power steering motor current draw", unit: "A", normalValues: "Idle: <0.5A | Light assist: 1–5A | Full assist: 10–25A" },
  { module: "44", channel: "EPS temperature", description: "Power steering system temperature", unit: "°C", normalValues: "Normal: 20–60°C | Hot: up to 80°C | Warning: >85°C" },
  { module: "44", channel: "Lane assist: camera status", description: "Forward camera operational state", unit: "—", normalValues: "Ready = 0 | Not calibrated = 1 | Fault = 2" },
  { module: "44", channel: "Lane assist: lane detected", description: "Lane markings detected by camera", unit: "—", normalValues: "Not detected = 0 | Detected = 1" },

  // Module 5F - Infotainment / MMI
  { module: "5F", channel: "Bluetooth: connected device count", description: "Number of paired Bluetooth devices", unit: "count", normalValues: "Typical: 0–3 devices paired" },
  { module: "5F", channel: "Navigation: GPS signal strength", description: "GPS satellite signal quality", unit: "%", normalValues: "No signal = 0% | Good = >80%" },
  { module: "5F", channel: "Head unit temperature", description: "MMI unit internal temperature", unit: "°C", normalValues: "Normal: 20–60°C. Avoid extended >70°C." },

  // Module 61 - Battery Management
  { module: "61", channel: "Battery voltage", description: "Main battery voltage", unit: "V", normalValues: "Engine off: 12.6–13.5V | Cranking: >9.5V | Charging: 13.2–14.8V" },
  { module: "61", channel: "Battery current", description: "Battery charging/discharge current", unit: "A", normalValues: "Charging: +5 to +15A | Discharging: -0 to -5A | Heavy load: >-20A" },
  { module: "61", channel: "Battery state of health", description: "Battery aging state", unit: "%", normalValues: ">80% = excellent | 70–80% = good | <70% = aging" },
  { module: "61", channel: "Battery temperature", description: "Internal battery temperature", unit: "°C", normalValues: "Normal: 20–40°C | Hot: 40–60°C (start-stop disabled >60°C)" },
  { module: "61", channel: "Start-stop cycles", description: "Total engine start-stop cycles since last battery registration", unit: "count", normalValues: "Increases throughout battery lifetime" },

  // Module 76 - Parking Aid / PDC
  { module: "76", channel: "Front sensor FL distance", description: "Front left parking sensor distance", unit: "cm", normalValues: "Far: 150cm | Close: 30cm | Alert: <15cm" },
  { module: "76", channel: "Front sensor FR distance", description: "Front right parking sensor distance", unit: "cm", normalValues: "Same as FL" },
  { module: "76", channel: "Rear sensor RL distance", description: "Rear left parking sensor distance", unit: "cm", normalValues: "Same as FL" },
  { module: "76", channel: "Rear sensor RR distance", description: "Rear right parking sensor distance", unit: "cm", normalValues: "Same as FL" },

  // Module 13 - Additional ACC
  { module: "13", channel: "Radar field of view", description: "Radar sensor operational range", unit: "m", normalValues: "Typical: 0–160m ahead of vehicle" },
  { module: "13", channel: "Target speed", description: "Speed of target vehicle being followed", unit: "km/h", normalValues: "0–160 km/h (varies by region)" },
  { module: "13", channel: "ACC status", description: "ACC system operational state", unit: "—", normalValues: "Off / Standby / Active / Paused (no target)" },

  // Module 01 - Engine - Additional channels
  { module: "01", channel: "IDE00002", description: "Engine load (pedal position)", unit: "%", normalValues: "Idle: 0–5 | Part throttle: 10–50 | WOT: 80–100" },
  { module: "01", channel: "IDE00003", description: "Fuel pressure (low-side pump)", unit: "bar", normalValues: "4.5–5.5 bar constant. Below 4 = pump fault" },
  { module: "01", channel: "IDE00006", description: "Intake manifold pressure (boost)", unit: "bar", normalValues: "Idle: 0.0–0.3 | Part throttle: 0.5–1.5 | Full boost: 1.5–2.0" },
  { module: "01", channel: "IDE00008", description: "Absolute manifold pressure (MAP)", unit: "mbar", normalValues: "Depends on throttle and boost" },
  { module: "01", channel: "IDE00015", description: "Lambda (air/fuel ratio)", unit: "—", normalValues: "1.0 = stoichiometric (ideal). 0.8–1.2 normal" },
  { module: "01", channel: "IDE00020", description: "Ignition angle / spark timing", unit: "°", normalValues: "Varies by load. Retarded at high knock: 8–25°" },
  { module: "01", channel: "IDE00030", description: "Long-term fuel trim bank 2", unit: "%", normalValues: "Normal: -10 to +10 | Problem: >±25%" },
  { module: "01", channel: "IDE00040", description: "Cam position actual (exhaust)", unit: "°", normalValues: "Tracks target. Deviation >5° = VVT issue" },
  { module: "01", channel: "IDE00046", description: "Cam timing: exhaust actual", unit: "°", normalValues: "Mirror of intake cam" },
  { module: "01", channel: "IDE00180", description: "Cam timing: intake correction (adaptation)", unit: "°", normalValues: "±2° normal | ±4° warning | ±6° critical" },
  { module: "01", channel: "IDE00183", description: "Cam-crank adaptation (exhaust)", unit: "°", normalValues: "New chain: near 0° | Wear: ±4–6°" },
  { module: "01", channel: "IDE00184", description: "Cam-crank difference (timing chain wear)", unit: "°", normalValues: "Should be <2°. >4° = chain stretch evident" },
  { module: "01", channel: "IDE00260", description: "Intake valve lift (continuous variable)", unit: "mm", normalValues: "Varies 0–10mm depending on load and RPM" },
  { module: "01", channel: "IDE00340", description: "Fuel pressure demanded (GDI target)", unit: "bar", normalValues: "Idle: 40–60 | Cruise: 70–100 | WOT: 120–180" },
  { module: "01", channel: "IDE00350", description: "Injection duration / pulse width", unit: "ms", normalValues: "Idle: 2–4ms | Cruise: 5–10ms | WOT: 15–30ms" },
  { module: "01", channel: "IDE00395", description: "Accelerator pedal sensor 2", unit: "V", normalValues: "Rest: ~0.5V | Full: ~3.5V (redundancy check)" },
  { module: "01", channel: "IDE00400", description: "Target torque (calculated by ECM)", unit: "Nm", normalValues: "Idle: 0 | Cruise: 100–150 | WOT: 200–260" },
  { module: "01", channel: "IDE00401", description: "Delivered torque (actual)", unit: "Nm", normalValues: "Should match target within 10%" },

  // Module 02 - Transmission - Additional channels
  { module: "02", channel: "Shift pressure", description: "Hydraulic shift pressure", unit: "bar", normalValues: "Idle: 2–4 | Load: 8–15 | Shift: up to 25" },
  { module: "02", channel: "Accelerator demand torque", description: "Transmission's requested engine torque", unit: "Nm", normalValues: "0–260 Nm range" },
  { module: "02", channel: "Transmission oil viscosity", description: "Calculated ATF viscosity vs. temperature", unit: "cSt", normalValues: "Cold: 100+ | Warm: 5–10 cSt" },
  { module: "02", channel: "Transmission efficiency", description: "Power transfer efficiency", unit: "%", normalValues: "Normal: 94–98% | Poor: <90%" },
  { module: "02", channel: "Shift quality number", description: "Recorded shift smoothness metric", unit: "—", normalValues: "0–100 scale. Monitor for shift quality degradation" },

  // Module 03 - Brakes - Additional channels
  { module: "03", channel: "Brake pedal force", description: "Force applied to brake pedal", unit: "N", normalValues: "Light: 50–100 | Hard: 300–500 | Emergency: >600" },
  { module: "03", channel: "Brake temperature: front left", description: "Front left brake rotor/caliper temperature", unit: "°C", normalValues: "Normal: 20–100 | Hot: 100–200 | Excessive: >250" },
  { module: "03", channel: "Brake temperature: front right", description: "Front right brake temperature", unit: "°C", normalValues: "Same as FL" },
  { module: "03", channel: "Brake temperature: rear left", description: "Rear left brake temperature", unit: "°C", normalValues: "Usually cooler than front, 20–150°C" },
  { module: "03", channel: "Brake temperature: rear right", description: "Rear right brake temperature", unit: "°C", normalValues: "Same as RL" },
  { module: "03", channel: "ABS system pressure", description: "ABS hydraulic system pressure", unit: "bar", normalValues: "At rest: 0–2 | During ABS event: 100–250" },
  { module: "03", channel: "Brake fluid pressure", description: "Master cylinder pressure reading", unit: "bar", normalValues: "No brake: 0 | Light: 10–50 | Hard: 150–250" },
  { module: "03", channel: "ESP intervention counter", description: "Number of ESP activations recorded", unit: "count", normalValues: "Increases during slippery driving" },
  { module: "03", channel: "TCS activation status", description: "Traction control active state", unit: "—", normalValues: "Not active = 0 | Active = 1" },
  { module: "03", channel: "Steering wheel torque sensor", description: "Driver steering input force", unit: "Nm", normalValues: "Varies from 0 to ±15 Nm" },

  // Module 09 - Lighting - Additional
  { module: "09", channel: "Headlight relay status", description: "Main headlight power relay state", unit: "—", normalValues: "Off = 0 | On = 1" },
  { module: "09", channel: "Turn signal duty cycle", description: "Turn signal blink pattern", unit: "%", normalValues: "European: ~50% duty cycle. Check if asymmetrical." },

  // Module 19 - Gateway - Additional
  { module: "19", channel: "CAN bus load", description: "CAN bus traffic utilization", unit: "%", normalValues: "Normal: <60% | High: 60–80% | Critical: >80%" },
  { module: "19", channel: "Module count detected", description: "Number of modules detected on CAN", unit: "count", normalValues: "Typical A3 8V: 18–22 modules" },
  { module: "19", channel: "CAN data error counter", description: "CAN protocol errors recorded", unit: "count", normalValues: "Should be 0. >10 = wiring/connection issue" },

  // Module 36 - Seats - Additional
  { module: "36", channel: "Seat heater: driver temperature", description: "Driver seat heater setting temperature", unit: "°C", normalValues: "Off / 35 / 40 / 45°C (if heated seats)" },
  { module: "36", channel: "Seat heater: passenger temperature", description: "Passenger seat heater setting", unit: "°C", normalValues: "Same as driver" },
  { module: "36", channel: "Seat position: height", description: "Seat cushion height position", unit: "mm", normalValues: "0–200mm range (if power seat)" },
  { module: "36", channel: "Seat position: lumbar", description: "Lumbar support position", unit: "mm", normalValues: "0–100mm range (if adjustable lumbar)" },

  // Module 5F - Infotainment - Additional
  { module: "5F", channel: "Screen brightness", description: "Display brightness level", unit: "%", normalValues: "Manual: 0–100% | Auto: adjusts per ambient light" },
  { module: "5F", channel: "Bluetooth: signal strength", description: "Connected Bluetooth device signal strength", unit: "dBm", normalValues: "Strong: >-50 | Good: -50–-70 | Weak: <-70" },

  // Module 0E - Camera - Additional
  { module: "0E", channel: "Camera image quality", description: "Video feed quality assessment", unit: "—", normalValues: "Good = 0 | Degraded = 1 | Failed = 2" },
  { module: "0E", channel: "Camera temperature", description: "Camera module temperature", unit: "°C", normalValues: "Normal: 20–60°C | Hot: >80°C (may shutdown)" },
  { module: "0E", channel: "Lane markings: left confidence", description: "Left lane marker detection confidence", unit: "%", normalValues: "High: >80% | Low: <50% (need calibration)" },
  { module: "0E", channel: "Lane markings: right confidence", description: "Right lane marker detection confidence", unit: "%", normalValues: "Same as left" },
];
