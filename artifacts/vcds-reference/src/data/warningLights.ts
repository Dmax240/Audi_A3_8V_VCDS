export interface WarningLight {
  name: string;
  primaryModule: string;
  secondaryModules: string;
  urgency: "stop" | "warning" | "info";
  action: string;
}
export const warningLights: WarningLight[] = [
  { name: "Check Engine (MIL) — amber engine outline", primaryModule: "01 (Engine Control)", secondaryModules: "19 (Gateway — if no Module 01 faults found)", urgency: "warning", action: "Read Module 01 first. Note freeze frame data before clearing." },
  { name: "Coolant Temperature — red thermometer", primaryModule: "01 (Engine — check IDE00005)", secondaryModules: "17 (Instruments — verify display)", urgency: "stop", action: "STOP ENGINE. Check coolant level physically before connecting VCDS." },
  { name: "Oil Pressure — red oil can", primaryModule: "01 (Engine Control)", secondaryModules: "Physical oil pressure issue", urgency: "stop", action: "STOP ENGINE IMMEDIATELY. Do not restart. Physical oil pressure fault." },
  { name: "Battery / Charging — red battery", primaryModule: "61 (Battery Management)", secondaryModules: "01 (Alternator live data)", urgency: "warning", action: "Check alternator output in Module 01 live data. Check for battery registration." },
  { name: "ABS — amber ABS letters", primaryModule: "03 (Brake Electronics)", secondaryModules: "19 (Gateway — for U codes)", urgency: "warning", action: "ABS disabled but normal braking intact. Read Module 03. Do not clear without diagnosing." },
  { name: "ESP / Stability — amber car with skid marks", primaryModule: "03 (Brake Electronics)", secondaryModules: "44 (Steering — SAS calibration)", urgency: "warning", action: "Check if SAS calibration is needed after recent suspension work." },
  { name: "Airbag — red person with circle", primaryModule: "15 (Airbag — URGENT)", secondaryModules: "Check for crash event data before driving", urgency: "stop", action: "Check for crash event data BEFORE DRIVING. Never clear without understanding the cause." },
  { name: "Steering — amber steering wheel", primaryModule: "44 (Steering / EPS)", secondaryModules: "03 (if SAS related)", urgency: "warning", action: "Read Module 44. SAS calibration may be needed after alignment." },
  { name: "TPMS — amber flat tire", primaryModule: "17 (Instruments — TPMS channels)", secondaryModules: "65 (TPMS receiver — if equipped)", urgency: "warning", action: "Inflate all tires to correct pressure. Run TPMS calibration in Module 17." },
  { name: "Service Due — wrench symbol", primaryModule: "17 (Instruments — service counter)", secondaryModules: "Reset via Basic Settings after service", urgency: "info", action: "Run oil service reset or inspection reset in Module 17 after completing service." },
  { name: "ACC / Distance — amber car gap", primaryModule: "13 (Distance Regulation)", secondaryModules: "Calibration likely needed if misalignment fault", urgency: "warning", action: "Check for misalignment fault in Module 13. Run 12-step calibration sequence if needed." },
  { name: "Transmission — amber gear symbol", primaryModule: "02 (Transmission Control)", secondaryModules: "Check ATF temperature and clutch slip channels", urgency: "warning", action: "Read Module 02. Check ATF temp and K1/K2 slip channels in live data." },
  { name: "Parking Brake — red P circle", primaryModule: "03 (Brake Electronics — EPB)", secondaryModules: "53 (if separate EPB module)", urgency: "warning", action: "If EPB service mode was used, ensure EPB was re-initialized after brake work." },
  { name: "Door Ajar — open door outline", primaryModule: "08 (Comfort / BCM)", secondaryModules: "Check status of each door/trunk manually", urgency: "info", action: "Physical door or trunk not fully closed. Check all four doors and trunk." },
  { name: "Seatbelt — person with belt symbol", primaryModule: "15 (Airbag — Seatbelt switch)", secondaryModules: "08 (Instruments display)", urgency: "warning", action: "Fastening seatbelt cancels warning. Bulb check: lights all dash lights on startup." },
  { name: "Lane Assist — car with lane lines (amber)", primaryModule: "44 (Steering / Lane Assist)", secondaryModules: "0E (Camera — if equipped)", urgency: "info", action: "Lane assist unavailable. Check camera calibration or severe weather." },
  { name: "Adaptive Lighting — headlight outline (amber)", primaryModule: "09 (Central Electronics)", secondaryModules: "Check xenon/LED bulb status", urgency: "warning", action: "Adaptive headlight malfunction. Check bulbs and leveling solenoids." },
  { name: "Fuel Range — fuel pump nozzle (amber)", primaryModule: "01 (Engine — fuel quantity)", secondaryModules: "17 (Instruments — display fuel range)", urgency: "info", action: "Fuel tank nearly empty. Refuel soon to avoid fuel pump starvation." },
  { name: "Glow Plugs — orange spiral (Diesel only)", primaryModule: "01 (Engine Control)", secondaryModules: "N/A (TSI is gasoline)", urgency: "info", action: "N/A for A3 TSI. Glow plug preheat in progress (diesel vehicles only)." },
  { name: "Airbag System Fault (continuous red)", primaryModule: "15 (Airbag — URGENT)", secondaryModules: "Module hardware failure", urgency: "stop", action: "CRITICAL: Airbag system non-functional. Do not drive until repaired. Risk of injury in crash." },
  { name: "Electronic Brake Force Distribution (amber)", primaryModule: "03 (Brake Electronics)", secondaryModules: "Rare — indicates ABS/stability fault", urgency: "warning", action: "EBD malfunction reduces brake efficiency. Check Module 03 for faults." },
  { name: "Turbo/Supercharger (amber T or S symbol)", primaryModule: "01 (Engine Control — boost pressure)", secondaryModules: "Check turbocharger status", urgency: "warning", action: "Turbo fault. Check boost pressure live data, vacuum hoses for leaks." },
  { name: "Engine Oil Temperature (red thermometer)", primaryModule: "01 (Engine — IDE00012)", secondaryModules: "Physical oil cooling issue", urgency: "stop", action: "Engine oil overheating. STOP ENGINE. Check oil level and radiator." },
  { name: "Fuel Filler Flap (amber nozzle outline)", primaryModule: "08 (Comfort / BCM)", secondaryModules: "Physical flap latch fault", urgency: "info", action: "Fuel door latch stuck. Check solenoid, wiring. Manually open via interior trim." },
  { name: "DPF Regeneration (amber filter symbol, Diesel)", primaryModule: "01 (Engine Control)", secondaryModules: "N/A for TSI gasoline", urgency: "info", action: "N/A for A3 TSI (gasoline engine). DPF warnings only for diesel models." },
  { name: "Sunroof/Tilt Panel Open (amber)", primaryModule: "08 (Comfort / BCM)", secondaryModules: "Check sunroof fully closed", urgency: "info", action: "Sunroof or tilt panel not fully sealed. Ensure fully closed." },
];
