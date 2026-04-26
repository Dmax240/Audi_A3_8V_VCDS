import { warningLights } from "@/data/warningLights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";

export default function WarningLights() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Warning Light Diagnosis</h1>
        <p className="text-muted-foreground">Identify instrument cluster indicators and determine which modules to scan first.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {warningLights.map((light, i) => (
          <Card 
            key={i} 
            className={`bg-card overflow-hidden border-l-4 ${
              light.urgency === "stop" ? "border-l-destructive" :
              light.urgency === "warning" ? "border-l-amber-500" :
              "border-l-blue-500"
            }`}
          >
            <CardHeader className="pb-2 bg-muted/20">
              <div className="flex items-start gap-3">
                {light.urgency === "stop" ? (
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                ) : light.urgency === "warning" ? (
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                ) : (
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                )}
                <CardTitle className="text-lg">{light.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 grid gap-4">
              <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                <span className="text-muted-foreground font-medium">Primary Module:</span>
                <span className="font-mono text-primary font-medium">{light.primaryModule}</span>
                
                <span className="text-muted-foreground font-medium">Also Check:</span>
                <span className="text-foreground">{light.secondaryModules}</span>
              </div>
              
              <div className="bg-muted/30 p-3 rounded-md border border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Recommended Action</h4>
                <p className="text-sm font-medium">{light.action}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
