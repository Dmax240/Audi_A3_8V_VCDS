import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cable, Laptop, AlertTriangle, PlayCircle } from "lucide-react";

export default function Setup() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">VCDS Setup & Navigation</h1>
        <p className="text-muted-foreground">Basic requirements and safe operation guidelines based on the Ross-Tech manual.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cable className="h-5 w-5 text-primary" />
              Hardware Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              The 2018 Audi A3 8V (MQB platform) requires a modern HEX-NET or HEX-V2 interface. 
              Older Micro-CAN or HEX-USB+CAN interfaces will NOT communicate with all modules on this chassis.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Genuine Ross-Tech HEX-V2 or HEX-NET</li>
              <li>Windows laptop (Windows 7 through 11)</li>
              <li>Battery charger (highly recommended for coding sessions)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Laptop className="h-5 w-5 text-primary" />
              Software Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Always use the latest VCDS release. MQB platform cars have frequent label file updates.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Connect cable to USB port (install drivers if prompted)</li>
              <li>Open VCDS → Options</li>
              <li>Select USB → Click <strong>[Test]</strong></li>
              <li>Verify "Port Status: OK" and "Interface: Found!"</li>
              <li>Click <strong>[Save]</strong></li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Vehicle Connection</h2>
        
        <Card className="bg-card border-l-4 border-l-amber-500">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Critical Pre-checks</h3>
                <p className="text-sm text-muted-foreground">
                  Before performing any Adaptations or Basic Settings, ensure the vehicle battery is fully charged or connected to a quality power supply. Voltage dropping below 11.5V during a procedure can brick control modules.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 text-sm">
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <PlayCircle className="h-4 w-4" /> 1. Locating the OBD-II Port
            </h3>
            <p className="text-muted-foreground">
              In the left-hand drive A3 8V, the port is located in the driver's footwell, just above the hood release latch. It is un-covered and purple/pink in color.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <PlayCircle className="h-4 w-4" /> 2. Ignition State
            </h3>
            <p className="text-muted-foreground mb-2">
              For most diagnostic work, the ignition must be ON, but the engine OFF.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li><strong>Keyless entry (KESSY):</strong> DO NOT press the brake pedal. Press the Start/Stop button once. Instrument cluster will illuminate.</li>
              <li><strong>Standard key:</strong> Turn key to position 2 (run), do not crank.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Diagnostic Best Practices</h2>
        
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong>Auto-Scan First:</strong> Always run a complete Auto-Scan and SAVE the text file before making any changes. This provides a baseline of your coding and adaptation values in case you need to revert.
          </p>
          <p>
            <strong>Freeze Frame Data:</strong> When reading fault codes, look at the Freeze Frame data below the code description. It shows the exact conditions (RPM, Temp, Speed, Mileage) when the fault occurred. Do not clear codes without saving this data first.
          </p>
          <p>
            <strong>Clearing Codes:</strong> Clearing a code does not fix the physical problem. If the underlying issue is present, the code will return, sometimes immediately, sometimes after a drive cycle. 
          </p>
          <p>
            <strong>Long Coding:</strong> Always copy and paste your original long coding string into a text document before modifying any bytes/bits.
          </p>
        </div>
      </div>
    </div>
  );
}
