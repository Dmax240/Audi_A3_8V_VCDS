export interface PerformanceTweak {
  name: string;
  module: string;
  category: string;
  defaultValue: string;
  optimizedValue: string;
  effect: string;
  riskLevel: "Safe" | "Moderate" | "High";
  notes: string;
}

export const performanceTuning: PerformanceTweak[] = [
  // Engine Performance
  {
    name: "Fuel Octane Rating Configuration",
    module: "01",
    category: "Fuel Mapping",
    defaultValue: "95 RON (Euro Standard)",
    optimizedValue: "98 RON Premium",
    effect: "ECM adjusts ignition timing for higher octane. More timing advance = more power and torque. Fuel economy slightly improves. Knock resistance increases.",
    riskLevel: "Safe",
    notes: "Only set to 98 if regularly using premium fuel. Mixing octanes confuses ECM. 98 RON available everywhere in Europe, premium in USA."
  },
  {
    name: "Engine Ignition Timing Aggression",
    module: "01",
    category: "Spark Timing",
    defaultValue: "Conservative (knock-limited)",
    optimizedValue: "Aggressive (advanced)",
    effect: "ECM advances spark timing at lower RPM/load. More power available, especially in mid-range. Requires premium fuel and good maintenance.",
    riskLevel: "Moderate",
    notes: "Factory default already conservative. Aftermarket tune maps provide more aggression. Risk: spark knock if low-octane fuel used."
  },
  {
    name: "Turbo Boost Pressure Peak Management",
    module: "01",
    category: "Boost Control",
    defaultValue: "1.8-2.0 bar (factory)",
    optimizedValue: "2.0-2.1 bar (mild tune)",
    effect: "Increases turbo pressure by 0.2-0.3 bar. +20-30 hp and +30-40 Nm torque available. Intercooler heats up more. Fuel consumption increases slightly.",
    riskLevel: "Moderate",
    notes: "Modest increase in boost is safe. >2.2 bar risks turbo/engine damage. Requires quality fuel and excellent maintenance."
  },
  {
    name: "Rev Limiter Adjustment",
    module: "01",
    category: "RPM Management",
    defaultValue: "6500 RPM",
    optimizedValue: "6800 RPM (if track use)",
    effect: "Allows engine to rev higher before fuel cut. More power extraction at peak RPM. Engine stresses increase significantly.",
    riskLevel: "High",
    notes: "Factory limit is conservative. Increasing risks engine damage if driven hard. Only for track cars or spirited enthusiasts."
  },

  // Transmission Performance
  {
    name: "DSG Shift Aggressiveness (Sport Mode)",
    module: "02",
    category: "Shift Feel",
    defaultValue: "Standard (smooth)",
    optimizedValue: "Aggressive (sharp)",
    effect: "Transmission holds gears longer, shifts at higher RPM. More power on exit. Faster acceleration. Fuel economy decreases.",
    riskLevel: "Safe",
    notes: "Purely preference-based. No mechanical stress. Aggressive mode is fun but uses more fuel. No long-term wear impact."
  },
  {
    name: "DSG Launch Control Engagement",
    module: "02",
    category: "Launch Performance",
    defaultValue: "Disabled / Standard",
    optimizedValue: "Aggressive (higher slip target)",
    effect: "Allows more clutch slip during launch. Better grip during acceleration. Clutch heats up more (visible in K1/K2 temperatures).",
    riskLevel: "Moderate",
    notes: "Increased clutch temps from aggressive launches. Occasional spirited launches OK. Constant abuse risks clutch wear."
  },
  {
    name: "Manual Mode Shift Speed Enhancement",
    module: "02",
    category: "Manual Mode",
    defaultValue: "Standard",
    optimizedValue: "Fast (blip enabled on downshift)",
    effect: "Downshift blips engine to rev-match. Smoother downshifts, faster shift action. More driver engagement.",
    riskLevel: "Safe",
    notes: "Blip function is standard on newer cars. Purely improves shift smoothness. No wear concerns."
  },

  // Brake Performance
  {
    name: "ABS Sensitivity - Intervention Threshold",
    module: "03",
    category: "ABS Tuning",
    defaultValue: "Standard (street-optimized)",
    optimizedValue: "Reduced (track/dry-optimized)",
    effect: "ABS engages later, allowing more brake power before slip. Shorter stopping distances on dry pavement. Less effective on wet roads.",
    riskLevel: "High",
    notes: "Reducing ABS sensitivity on track is common. Street driving with reduced ABS = danger in rain/wet. Not recommended for daily drivers."
  },
  {
    name: "ESP / Traction Control Aggressiveness",
    module: "03",
    category: "Stability Control",
    defaultValue: "Standard (active)",
    optimizedValue: "Sport Mode (reduced intervention)",
    effect: "Sport mode: ESP allows more wheel slip before intervening. More fun in curves, more control (for skilled drivers). Less safe for novices.",
    riskLevel: "Moderate",
    notes: "Sport mode is for experienced drivers only. On wet/loose surfaces, standard mode is safer. Some cars have full ESP disable (racing)."
  },

  // Steering Performance
  {
    name: "Steering Ratio Aggressiveness",
    module: "44",
    category: "Steering Feel",
    defaultValue: "Progressive (highway-optimized)",
    optimizedValue: "Fixed Ratio (sports car feel)",
    effect: "Progressive: steering ratio changes with speed (less input needed at highway). Fixed: constant ratio (more steering input always). Sports feel vs highway comfort.",
    riskLevel: "Safe",
    notes: "Pure preference. Progressive is easier for daily driving. Fixed ratio feels more engaged for enthusiasts. No safety impact."
  },
  {
    name: "EPS Motor Power Assist Reduction",
    module: "44",
    category: "Power Steering",
    defaultValue: "Full Assist (electric)",
    optimizedValue: "Sport (light assist)",
    effect: "Reduces electric power assist. Steering feels heavier/more connected. Feedback is more direct. Power consumption decreases slightly.",
    riskLevel: "Safe",
    notes: "Sport mode is great for track. Heavy steering at low speeds (parking) when assist reduced. Not ideal for daily drivers."
  },

  // Lighting Performance
  {
    name: "DRL Brightness Optimization",
    module: "09",
    category: "Visibility",
    defaultValue: "100%",
    optimizedValue: "70-80% (visibility + aesthetic)",
    effect: "Lower brightness: less aggressive look, slight power savings, still excellent visibility. 70-80% is sweet spot for many.",
    riskLevel: "Safe",
    notes: "Visibility is excellent even at 70%. 100% is very bright (some think it's rude). Most enthusiasts prefer 75%."
  },
  {
    name: "Adaptive Front Lighting (AFS) Curve Aggressiveness",
    module: "09",
    category: "Cornering Lights",
    defaultValue: "Standard (conservative)",
    optimizedValue: "Aggressive (corners fully lit)",
    effect: "Aggressive: headlights turn harder into curves. More light on inside of turn. Visibility much improved. Factory default already good.",
    riskLevel: "Safe",
    notes: "Only available on cars with AFS (xenon/LED). Halogen headlights don't have AFS. Aggressive setting helps night driving in mountains."
  },

  // ACC / Radar Performance
  {
    name: "ACC Minimum Following Distance (Default Speed-Based)",
    module: "13",
    category: "ACC Behavior",
    defaultValue: "Medium (2-second gap)",
    optimizedValue: "Close (1-second gap) or Far (3-second gap)",
    effect: "Close: very aggressive following, more fuel efficient. Far: relaxed following, safer if brakes fail. Preference-based, adjustable via steering wheel.",
    riskLevel: "Moderate",
    notes: "1-second gap is risky on wet roads. 3-second gap is safest. Most drivers prefer 2-second (factory). Adjustable on-the-fly with buttons."
  },
  {
    name: "Front Assist Sensitivity - Collision Warning Distance",
    module: "13",
    category: "Collision Warning",
    defaultValue: "80 meters (standard)",
    optimizedValue: "120 meters (early warning) or 50 meters (late warning)",
    effect: "Early (120m): more time to react, less startling. Late (50m): less intrusive, fewer false alarms in traffic.",
    riskLevel: "Safe",
    notes: "Early warning is safer for highway speeds. Late warning for heavy traffic. Factory default (80m) is good compromise."
  },

  // Comfort / Customization Performance
  {
    name: "Transmission Creep Feel - City Driving Convenience",
    module: "02",
    category: "Comfort Driving",
    defaultValue: "Enabled (creeps forward)",
    optimizedValue: "Disabled (manual mode feel)",
    effect: "Disabled: car stays put in traffic (better control). Enabled: car slowly creeps (easier city driving). Fuel economy difference negligible.",
    riskLevel: "Safe",
    notes: "Enabled is easier for heavy traffic. Disabled gives more control. Neither improves or harms engine life."
  },
  {
    name: "Approach Unlock Distance Optimization",
    module: "16",
    category: "Convenience",
    defaultValue: "1.5 meters (standard)",
    optimizedValue: "2.5 meters (long range) or 1 meter (short range)",
    effect: "Long range: unlock from far away (convenient). Short range: only unlock when at car (security). Preference-based.",
    riskLevel: "Safe",
    notes: "No security risk either way. Longer range uses more battery (fob). Shorter range is more secure (less accidental unlock)."
  },
  {
    name: "Coming Home Lights Duration",
    module: "09",
    category: "Convenience",
    defaultValue: "30 seconds",
    optimizedValue: "60 seconds (safer) or 10 seconds (minimal use)",
    effect: "Longer: lights stay on longer (safety). Shorter: less power drain. Preference-based for lifestyle.",
    riskLevel: "Safe",
    notes: "Safety perspective: longer is better. 60 seconds for poorly-lit parking, 10 seconds for well-lit areas."
  },

  // Battery and Electrical
  {
    name: "Start-Stop Enable / Disable (Module 61 + 16)",
    module: "61",
    category: "Efficiency",
    defaultValue: "Enabled (default)",
    optimizedValue: "Disabled (if battery old or frequent short trips)",
    effect: "Enabled: saves 5-10% fuel. Disabled: easier engine starts, less wear if battery weak. Trade-off: efficiency vs comfort.",
    riskLevel: "Safe",
    notes: "Disable if battery is near end of life (<50% SoH). Saves money on fuel but battery registration must be done (post-replacement)."
  },
  {
    name: "Start-Stop Temperature Threshold Adjustment",
    module: "61",
    category: "Temperature Management",
    defaultValue: "-7°C (minimum)",
    optimizedValue: "0°C (cold climate) or -15°C (cold region)",
    effect: "Higher threshold: start-stop disabled earlier in cold (easier starts in winter). Lower threshold: start-stop active in very cold (better fuel economy).",
    riskLevel: "Safe",
    notes: "Cold starting stresses battery. Higher threshold (-15°C) is good for winter climates. -7°C is factory default."
  }
];
