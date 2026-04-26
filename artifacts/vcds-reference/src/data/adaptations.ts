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
];
