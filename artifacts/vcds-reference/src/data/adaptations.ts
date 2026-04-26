export interface Adaptation {
  module: string;
  channel: string;
  default: string;
  options: string;
  effect: string;
  category?: string;
}
export const adaptations: Adaptation[] = [
  // Module 08 - Comfort customizations
  { module: "08", category: "Windows", channel: "Comfort closing: windows", default: "Inactive", options: "Active / Inactive", effect: "Hold lock button 2+ sec to close all windows remotely." },
  { module: "08", category: "Windows", channel: "Comfort opening: windows", default: "Inactive", options: "Active / Inactive", effect: "Hold unlock button to open all windows. Vents car before entry." },
  { module: "08", category: "Windows", channel: "Comfort closing: sunroof", default: "Inactive", options: "Active / Inactive", effect: "Also closes sunroof/tilt panel when lock held." },
  { module: "08", category: "Windows", channel: "Comfort opening: sunroof", default: "Inactive", options: "Active / Inactive", effect: "Also opens sunroof when unlock held." },
  { module: "08", category: "Windows", channel: "Window closing on rain sensor", default: "Inactive", options: "Active / Inactive", effect: "Windows auto-close when rain sensor detects rain." },
  { module: "08", category: "Locks", channel: "Auto-lock when driving: speed threshold", default: "Inactive", options: "Inactive / 10 / 15 / 20 km/h", effect: "Locks all doors automatically when vehicle reaches set speed." },
  { module: "08", category: "Locks", channel: "Auto-unlock when ignition off", default: "Active", options: "Active / Inactive", effect: "All doors unlock when ignition is turned off." },
  { module: "08", category: "Locks", channel: "Selective unlock: first press unlocks driver only", default: "Inactive", options: "Active / Inactive", effect: "First fob press = driver door only. Second press = all doors." },
  { module: "08", category: "Locks", channel: "Locking confirmation: visual (hazards flash)", default: "Active", options: "Active / Inactive", effect: "Hazard lights flash once on lock, twice on unlock." },
  { module: "08", category: "Locks", channel: "Locking confirmation: acoustic (horn beep)", default: "Inactive", options: "Active / Inactive", effect: "Brief horn beep confirms lock. Noisy — consider interior sounder instead." },
  { module: "08", category: "Mirrors", channel: "Mirror fold on lock", default: "Inactive", options: "Active / Inactive", effect: "Both mirrors fold when car is locked. Unfold on unlock. Protects in tight spaces." },
  { module: "08", category: "Mirrors", channel: "Passenger mirror dip in reverse", default: "Inactive", options: "Active / Inactive", effect: "Right mirror tilts down in Reverse to see curb. Returns when leaving Reverse." },
  { module: "08", category: "Wipers", channel: "Wiper activation in reverse", default: "Inactive", options: "Active / Inactive", effect: "Rear wiper activates in Reverse when front wipers are running." },
  { module: "08", category: "Wipers", channel: "Rain sensor sensitivity: base level", default: "Medium", options: "1 (low) through 5 (high)", effect: "How aggressively rain sensor activates wipers." },
  // Module 09 - Lighting
  { module: "09", category: "DRL", channel: "DRL: brightness when headlights off", default: "100%", options: "10% to 100%", effect: "DRL intensity daytime. Many prefer 70–80% for less aggressive look." },
  { module: "09", category: "DRL", channel: "DRL: brightness when headlights on (reduced)", default: "30%", options: "0% to 50%", effect: "DRL intensity when headlights active. 0% = DRLs completely off with headlights on." },
  { module: "09", category: "DRL", channel: "DRL: switch off with turn signal", default: "Active", options: "Active / Inactive", effect: "DRL on turning side dims/off during turn signal (European regulation behavior)." },
  { module: "09", category: "Headlights", channel: "Coming home lights: duration", default: "30 seconds", options: "0 / 10 / 20 / 30 / 60 seconds", effect: "How long headlights stay on after engine off and door opened. 0 = disabled." },
  { module: "09", category: "Headlights", channel: "Leaving home lights: duration", default: "30 seconds", options: "0 / 10 / 20 / 30 / 60 seconds", effect: "How long headlights illuminate when unlocking at night." },
  { module: "09", category: "Headlights", channel: "Automatic headlights: rain activation", default: "Inactive", options: "Active / Inactive", effect: "Headlights activate automatically when rain sensor detects rain." },
  // Module 5F - Infotainment
  { module: "5F", category: "Video", channel: "VIM (video in motion)", default: "Inactive", options: "Active / Inactive", effect: "Allows navigation screen operation while moving. Security Access 1804 required." },
  { module: "5F", category: "Navigation", channel: "Parking guidelines: dynamic", default: "Active", options: "Active / Inactive", effect: "Dynamic steering guidelines on rear camera. Active = lines move with steering." },
  // Module 61 - Battery
  { module: "61", category: "Battery", channel: "Battery registration (MANDATORY)", default: "Read current", options: "Enter new battery specs", effect: "MUST register after battery replacement. Affects charging strategy and start-stop." },
  // Module 17 - Cluster
  { module: "17", category: "Service", channel: "Oil service reset", default: "Countdown active", options: "Reset to 0", effect: "Resets oil change countdown after service. Run after every oil change." },
  { module: "17", category: "Service", channel: "Inspection service reset", default: "Countdown active", options: "Reset to 0", effect: "Resets annual inspection reminder. Run after full service." },
  { module: "17", category: "TPMS", channel: "TPMS calibration", default: "Stored pressures", options: "Reset to current", effect: "Store current tire pressures as new reference. Drive 10+ miles after calibration." },
  // Module 02 - Transmission
  { module: "02", category: "Shift Feel", channel: "Shift comfort: aggressive vs smooth", default: "Standard", options: "Smooth / Standard / Aggressive", effect: "Smooth = softer clutch engagement. Aggressive = crisper sportier shifts." },
  { module: "02", category: "Shift Feel", channel: "Paddle shift: response time", default: "Standard", options: "Fast / Standard / Slow", effect: "How quickly transmission responds to paddle input." },
  { module: "02", category: "Shift Feel", channel: "Sport mode: shift points", default: "Standard", options: "Standard / Aggressive", effect: "Aggressive holds gears longer and shifts at higher RPM in Sport mode." },
  { module: "02", category: "Creep", channel: "Creep function: enable", default: "Active", options: "Active / Inactive", effect: "Disable if you prefer no vehicle creep in D with no throttle." },

  // Module 09 - Additional Lighting
  { module: "09", category: "Turn Signals", channel: "Dynamic turn signals: animation speed", default: "Medium", options: "Slow / Medium / Fast", effect: "LED turn signal chase animation speed if dynamic LEDs installed." },
  { module: "09", category: "Fog Lights", channel: "Fog light auto-disable: in rain", default: "Inactive", options: "Active / Inactive", effect: "Fog lights disable when wipers activated (European regulation)." },

  // Module 16 - Steering Column / KESSY
  { module: "16", category: "Key Fob", channel: "Key fob lock repeat: double press sensitivity", default: "Standard", options: "Sensitive / Standard / Insensitive", effect: "How quickly two presses lock vehicle. Sensitive = faster lock after second press." },
  { module: "16", category: "Key Fob", channel: "Walk-away lock: enable", default: "Active", options: "Active / Inactive", effect: "Vehicle locks automatically when key is 1.5+ meters away for 30+ seconds." },
  { module: "16", category: "Key Fob", channel: "Walk-away lock: delay", default: "30 seconds", options: "15 / 30 / 60 seconds", effect: "How long vehicle waits after key departs before auto-locking." },
  { module: "16", category: "Key Fob", channel: "Approach unlock: enable", default: "Active", options: "Active / Inactive", effect: "Vehicle unlocks when key approaches (if parked for >3 minutes)." },
  { module: "16", category: "Key Fob", channel: "Approach unlock: distance", default: "1.5 meters", options: "1 / 1.5 / 2.5 meters", effect: "Distance key must be from car to trigger approach unlock." },
  { module: "16", category: "Key Fob", channel: "Comfort close/open: single button", default: "Inactive", options: "Active / Inactive", effect: "Single key press closes/opens windows and sunroof (Module 08 must also be enabled)." },
  { module: "16", category: "Steering Column", channel: "Steering wheel memory: save positions", default: "Inactive", options: "Active / Inactive", effect: "Save/recall steering column tilt/reach position. Recall on unlock." },
  { module: "16", category: "Start-Stop", channel: "Start-stop system: enable", default: "Active", options: "Active / Inactive", effect: "Engine auto-off at traffic lights. Requires battery registration (Module 61)." },

  // Module 36 - Electric Seat / Memory
  { module: "36", category: "Seat Memory", channel: "Seat memory: recall on unlock", default: "Active", options: "Active / Inactive", effect: "Driver seat position recalled automatically when vehicle unlocked with matching key." },
  { module: "36", category: "Seat Memory", channel: "Seat memory: recall delay", default: "2 seconds", options: "0 / 1 / 2 / 5 seconds", effect: "Delay before seat begins moving to recalled position after unlock." },
  { module: "36", category: "Easy Entry", channel: "Easy entry mode: enable", default: "Inactive", options: "Active / Inactive", effect: "Seat slides back and steering wheel tilts up on unlock for easier entry/exit." },
  { module: "36", category: "Easy Entry", channel: "Easy entry distance", default: "100 mm", options: "50 / 100 / 150 mm", effect: "How far seat slides back in easy entry mode." },
  { module: "36", category: "Lumbar Support", channel: "Lumbar support: memory save", default: "Inactive", options: "Active / Inactive", effect: "Recall lumbar support adjustment with seat position if adjustable seat." },

  // Module 44 - Steering / EPS / Lane Assist
  { module: "44", category: "EPS", channel: "Power steering: weight / feel", default: "Standard", options: "Light / Standard / Heavy / Sport", effect: "Steering weight at different speeds. Light = less resistance, Heavy = more resistance." },
  { module: "44", category: "EPS", channel: "EPS: progressive steering enable", default: "Active", options: "Active / Inactive", effect: "Steering ratio changes with speed. Ratio increases (more turns needed) at highway speeds." },
  { module: "44", category: "SAS", channel: "Steering angle sensor: calibration status", default: "Read current", options: "Recalibrate", effect: "Run after wheel alignment or suspension work. Vehicle must be on level surface, wheels straight." },
  { module: "44", category: "Lane Assist", channel: "Lane assist: enable", default: "Active", options: "Active / Inactive", effect: "Lane departure warning/gentle steering correction. Requires forward camera calibration." },
  { module: "44", category: "Lane Assist", channel: "Lane assist: sensitivity", default: "Medium", options: "Low / Medium / High", effect: "How aggressively lane assist corrects steering. High = more intrusive." },
  { module: "44", category: "Lane Assist", channel: "Lane assist: warning type", default: "Visual + Haptic", options: "Visual / Haptic / Visual + Haptic", effect: "Haptic = steering wheel vibration. Visual = light flash on cluster." },

  // Module 5F - Infotainment / MMI - Additional
  { module: "5F", category: "Navigation", channel: "Traffic sign recognition: enable", default: "Active", options: "Active / Inactive", effect: "Display recognized speed limit signs on cluster. Requires forward camera." },
  { module: "5F", category: "Bluetooth", channel: "Bluetooth: automatic connection", default: "Active", options: "Active / Inactive", effect: "Last paired phone connects automatically when vehicle starts." },
  { module: "5F", category: "Voice Control", channel: "Voice control: language", default: "English (US)", options: "English / German / French / etc.", effect: "Set voice command language. Match to market region." },

  // Module 61 - Battery - Additional
  { module: "61", category: "Start-Stop", channel: "Start-stop: enable", default: "Active", options: "Active / Inactive", effect: "Enable/disable engine auto-stop at idle. Requires Module 16 enabled too." },
  { module: "61", category: "Battery Health", channel: "Battery health: state of health", default: "Read current", options: "View only", effect: "Shows battery SoH percentage. <70% = battery aging." },

  // Module 76 - Parking Aid / PDC
  { module: "76", category: "Sensors", channel: "Front parking sensors: enable", default: "Inactive", options: "Active / Inactive", effect: "Enable front bumper sensors if installed. Costs ~$300 to retrofit." },
  { module: "76", category: "Sensors", channel: "Rear parking sensors: enable", default: "Active", options: "Active / Inactive", effect: "Disable rear sensors if they malfunction. Standard on most A3s." },
  { module: "76", category: "Display", channel: "PDC display mode", default: "Graphic + Audio", options: "Graphic only / Audio only / Graphic + Audio", effect: "How parking sensor feedback is displayed/played." },
  { module: "76", category: "Display", channel: "PDC: active on reverse only", default: "Active", options: "Active / Inactive", effect: "If Inactive, PDC activates in Drive/Park too (high sensitivity mode)." },
];
