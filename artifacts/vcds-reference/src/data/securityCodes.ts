export interface SecurityCode {
  module: string;
  moduleName: string;
  codes: string;
  purpose: string;
}
export const securityCodes: SecurityCode[] = [
  { module: "01", moduleName: "Engine Control", codes: "27971", purpose: "General adaptations. 12233 or 79153 for injector IMA codes. No code for Basic Settings calibrations." },
  { module: "02", moduleName: "Transmission", codes: "01138", purpose: "All adaptations and long coding. 20103 for auto-hold. Try 01295, 01972, 02537 if 01138 fails." },
  { module: "03", moduleName: "ABS / Brakes", codes: "40168", purpose: "Primary for all adaptations and basic settings. 11966 alternate if 40168 fails." },
  { module: "08", moduleName: "Comfort / BCM", codes: "31347", purpose: "All window, lock, mirror, wiper, and convenience adaptations." },
  { module: "09", moduleName: "Central Electronics", codes: "20103", purpose: "All lighting adaptations, Drive Select, coming/leaving home settings." },
  { module: "13", moduleName: "ACC / Radar", codes: "None required", purpose: "All Basic Settings and calibration accessible without code." },
  { module: "15", moduleName: "Airbag", codes: "Varies", purpose: "Varies by specific adaptation channel — check VCDS display prompt." },
  { module: "16", moduleName: "Steering Column / KESSY", codes: "17956", purpose: "Key fob programming and KESSY adaptations." },
  { module: "17", moduleName: "Instrument Cluster", codes: "11046", purpose: "Service resets, TPMS, unit settings, all standard adaptations. 38041 for some advanced channels." },
  { module: "19", moduleName: "CAN Gateway", codes: "31347 or none", purpose: "Most functions accessible without code." },
  { module: "5F", moduleName: "Infotainment / MMI", codes: "1804", purpose: "VIM (video in motion) removal. No code for most other adaptations." },
  { module: "36", moduleName: "Electric Seat", codes: "None required", purpose: "All seat memory functions accessible without code." },
  { module: "44", moduleName: "Steering / EPS", codes: "Varies", purpose: "Some channels require no code — check VCDS prompt per channel." },
  { module: "61", moduleName: "Battery Management", codes: "None required", purpose: "Battery registration and all BMS functions." },
  { module: "76", moduleName: "Parking Aid", codes: "None required", purpose: "All parking sensor functions." },
  { module: "0E", moduleName: "Camera", codes: "None required", purpose: "Camera calibration and settings." },
];
