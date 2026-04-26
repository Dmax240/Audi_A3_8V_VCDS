import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { modules } from "@/data/modules";
import { faultCodes } from "@/data/faultCodes";
import { warningLights } from "@/data/warningLights";
import { securityCodes } from "@/data/securityCodes";
import { Link } from "wouter";
import { Shield, AlertTriangle, Key, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">2018 Audi A3 8V MQB</h1>
        <p className="text-muted-foreground">CZPB 2.0 TSI 220hp • DQ381 S-Tronic • Simos 18.1</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Control Modules</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{modules.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Indexed in reference</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fault Codes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{faultCodes.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Common issues documented</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Codes</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{securityCodes.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Access codes known</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warning Lights</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">{warningLights.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Diagnostic procedures</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <Link key={mod.id} href={`/module/${mod.id}`}>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full bg-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{mod.name}</CardTitle>
                  <span className="font-mono text-sm bg-muted text-muted-foreground px-2 py-1 rounded border border-border">
                    {mod.id}
                  </span>
                </div>
                <CardDescription>{mod.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{mod.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>Security: {mod.securityCode}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
