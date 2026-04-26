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
];
