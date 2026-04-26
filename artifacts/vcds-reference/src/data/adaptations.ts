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
  { module: "76", category: "Sensitivity", channel: "Parking sensor sensitivity level", default: "Medium", options: "Low / Medium / High", effect: "How sensitive sensors are to objects. High = earlier warning/beeping at distance." },
  { module: "76", category: "Display", channel: "PDC: sonar volume", default: "Medium", options: "Off / Low / Medium / High", effect: "Beep volume when object detected. Mute disables audio warnings." },

  // Module 01 - Engine - Additional Adaptations
  { module: "01", category: "Emissions", channel: "Diesel particulate filter regeneration mode", default: "Automatic", options: "Automatic / Manual", effect: "DPF regen timing. N/A for TSI gasoline engine." },
  { module: "01", category: "Fuel", channel: "Fuel octane rating", default: "95 RON", options: "91 / 95 / 98 / 100+ RON", effect: "Tell ECM your fuel grade. Affects ignition timing and knock detection." },

  // Module 02 - Transmission - Additional
  { module: "02", category: "Transmission", channel: "Kick-down sensitivity", default: "Standard", options: "Soft / Standard / Aggressive", effect: "How responsive transmission is to pedal input. Aggressive = quicker downshift." },
  { module: "02", category: "Transmission", channel: "Manual mode: downshift blip", default: "Active", options: "Active / Inactive", effect: "Rev-match blip when downshifting in manual mode. Smooth shift." },
  { module: "02", category: "Transmission", channel: "Launch control: enable", default: "Inactive", options: "Active / Inactive", effect: "Optimized launch from standstill in sport mode (DSG only)." },

  // Module 03 - ABS / Brakes - Additional
  { module: "03", category: "ABS", channel: "ABS activation threshold", default: "Standard", options: "Low / Standard / High", effect: "How aggressively ABS engages. Standard = best for most driving." },
  { module: "03", category: "EPB", channel: "Electronic parking brake: auto-hold on slope", default: "Active", options: "Active / Inactive", effect: "EPB auto-locks vehicle on hillside when in Drive. Release with accelerator." },

  // Module 08 - Comfort - Additional
  { module: "08", category: "Comfort", channel: "Approach unlock: activate proximity sensor", default: "Active", options: "Active / Inactive", effect: "Unlock when key approaches. Can disable if fob acts erratically." },
  { module: "08", category: "Comfort", channel: "Door unlock: driver side priority", default: "Active", options: "Active / Inactive", effect: "First fob press unlocks driver door only. Subsequent presses = all doors." },
  { module: "08", category: "Comfort", channel: "Light activation duration on unlock", default: "30 seconds", options: "0 / 10 / 20 / 30 / 60 seconds", effect: "Interior light duration after unlock. 0 = lights don't activate." },

  // Module 09 - Lighting - Additional
  { module: "09", category: "Lighting", channel: "Ambient light threshold: day/night mode", default: "7000 lux", options: "3000 / 7000 / 12000 lux", effect: "Lux level at which system switches from day to night lighting mode." },
  { module: "09", category: "Lighting", channel: "Fog light behavior: turn signal activation", default: "Inactive", options: "Active / Inactive", effect: "Fog lights automatically disable when turn signal activates (EU regulation)." },
  { module: "09", category: "Lighting", channel: "Rear fog light: activation mode", default: "Manual only", options: "Manual only / Auto on rain", effect: "Auto activation uses rain sensor to trigger rear fog light." },

  // Module 13 - ACC - Additional
  { module: "13", category: "ACC", channel: "Minimum following distance preset", default: "Medium (2 seconds)", options: "Close (1 sec) / Medium (2 sec) / Far (3 sec)", effect: "Default distance maintained from vehicle ahead. User can adjust while driving." },
  { module: "13", category: "Front Assist", channel: "Collision avoidance: brake strength", default: "Standard", options: "Soft / Standard / Strong", effect: "How hard Front Assist brakes when collision imminent." },
  { module: "13", category: "Front Assist", channel: "Warning distance: activation range", default: "80 meters", options: "50 / 80 / 120 meters", effect: "How far ahead system detects stationary objects before warning." },

  // Module 17 - Cluster - Additional
  { module: "17", category: "Display", channel: "Speed limit warning: visual", default: "Active", options: "Active / Inactive", effect: "Display recognized speed limit on dashboard (requires camera)." },
  { module: "17", category: "Display", channel: "Fuel consumption display: units", default: "L/100km", options: "L/100km / MPG", effect: "Display fuel economy in metric or imperial units." },
  { module: "17", category: "Display", channel: "Digital speedometer: precision", default: "5 km/h increments", options: "1 / 5 / 10 km/h increments", effect: "How detailed speed is displayed on digital cluster." },

  // Module 19 - Gateway - Additional
  { module: "19", category: "CAN Bus", channel: "Module installation list: update", default: "Automatic", options: "Automatic / Manual refresh", effect: "Gateway periodically scans for newly installed modules." },

  // Module 36 - Seats - Additional
  { module: "36", category: "Seat Position", channel: "Easy entry: mirror dip on unlock", default: "Active", options: "Active / Inactive", effect: "Both side mirrors tilt down for easier entry when easy entry engages." },
  { module: "36", category: "Seat Position", channel: "Easy exit: seat height adjustment", default: "Inactive", options: "Active / Inactive", effect: "Seat raises slightly on exit for easier standing up (if lumbar seat)." },

  // Module 44 - Steering - Additional
  { module: "44", category: "Steering", channel: "Steering: one-hand turn threshold", default: "Standard", options: "Sensitive / Standard / Insensitive", effect: "How much steering angle is needed to trigger lane change assist." },
  { module: "44", category: "Steering", channel: "Lane keep assist: intervention strength", default: "Mild", options: "Mild / Medium / Strong", effect: "How forcefully lane keep assist corrects steering to center lane." },

  // Module 5F - Infotainment - Additional
  { module: "5F", category: "Phone", channel: "Phone integration: auto-answer on steering wheel", default: "Inactive", options: "Active / Inactive", effect: "Answer incoming calls by pressing steering wheel button." },
  { module: "5F", category: "Audio", channel: "Bluetooth audio: codec preference", default: "Auto", options: "Auto / aptX / LDAC / SBC", effect: "Bluetooth audio quality. Auto = highest supported by both devices." },
  { module: "5F", category: "Display", channel: "Night mode: automatic activation", default: "Active", options: "Active / Inactive", effect: "Switch to dark UI automatically at dusk. Respects manual selection." },
  { module: "5F", category: "Navigation", channel: "Voice guidance: language", default: "English (US)", options: "20+ languages", effect: "Navigation voice language. Independent of system language." },

  // Module 61 - Battery - Additional
  { module: "61", category: "Battery", channel: "Battery disconnect monitoring", default: "Active", options: "Active / Inactive", effect: "Warn if battery terminal loosens or connection fails." },
  { module: "61", category: "Start-Stop", channel: "Start-stop: temperature threshold", default: "-7°C", options: "-20 / -7 / 0 / 5°C", effect: "Disable start-stop below this ambient temperature to preserve battery." },
  { module: "61", category: "Start-Stop", channel: "Start-stop: battery SoH minimum", default: "50%", options: "30% / 50% / 70%", effect: "Disable start-stop if battery health drops below threshold." },

  // Module 0E - Camera - Additional (if equipped)
  { module: "0E", category: "Camera", channel: "Camera: brightness adjustment", default: "Auto", options: "Auto / Manual", effect: "Let camera auto-adjust brightness or lock to manual setting." },
  { module: "0E", category: "Camera", channel: "Rear camera: display delay", default: "2 seconds", options: "0 / 1 / 2 / 5 seconds", effect: "Delay before rear camera image displays after shifting to Reverse." },
];
