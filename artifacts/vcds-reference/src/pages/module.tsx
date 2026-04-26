import { useParams } from "wouter";
import { modules } from "@/data/modules";
import { liveDataChannels } from "@/data/liveData";
import { adaptations } from "@/data/adaptations";
import { basicSettings } from "@/data/basicSettings";
import { faultCodes } from "@/data/faultCodes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Shield, Key, AlertCircle, Activity, Settings2, SlidersHorizontal } from "lucide-react";

export default function ModuleDetail() {
  const { id } = useParams<{ id: string }>();
  const module = modules.find((m) => m.id === id);

  const [liveDataSearch, setLiveDataSearch] = useState("");

  if (!module) {
    return <div>Module not found</div>;
  }

  const moduleLiveData = liveDataChannels.filter((c) => c.module === id);
  const moduleAdaptations = adaptations.filter((a) => a.module === id);
  const moduleBasicSettings = basicSettings.filter((b) => b.module === id);
  const moduleFaultCodes = faultCodes.filter((f) => f.module === id);

  const filteredLiveData = moduleLiveData.filter(
    (c) =>
      c.channel.toLowerCase().includes(liveDataSearch.toLowerCase()) ||
      c.description.toLowerCase().includes(liveDataSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl font-bold bg-primary/10 text-primary px-3 py-1 rounded border border-primary/20">
            {module.id}
          </span>
          <h1 className="text-3xl font-bold tracking-tight">{module.name}</h1>
        </div>
        <p className="text-muted-foreground text-lg">{module.subtitle}</p>
        <p className="text-sm">{module.description}</p>
        
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="font-mono flex items-center gap-1.5 py-1">
            <Shield className="h-3 w-3" />
            Security Access: {module.securityCode}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="livedata" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="livedata" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span className="hidden sm:inline">Live Data</span>
          </TabsTrigger>
          <TabsTrigger value="adaptations" className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" />
            <span className="hidden sm:inline">Adaptations</span>
          </TabsTrigger>
          <TabsTrigger value="basicsettings" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Basic Settings</span>
          </TabsTrigger>
          <TabsTrigger value="faultcodes" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Fault Codes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="livedata" className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search channels or descriptions..."
              value={liveDataSearch}
              onChange={(e) => setLiveDataSearch(e.target.value)}
              className="max-w-md font-mono text-sm"
            />
          </div>
          <div className="rounded-md border border-border bg-card overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[150px]">Channel</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Unit</TableHead>
                  <TableHead>Normal Values</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLiveData.length > 0 ? (
                  filteredLiveData.map((channel) => (
                    <TableRow key={channel.channel}>
                      <TableCell className="font-mono text-sm font-medium">{channel.channel}</TableCell>
                      <TableCell>{channel.description}</TableCell>
                      <TableCell className="text-muted-foreground">{channel.unit}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{channel.normalValues}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      No live data channels found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="adaptations" className="mt-6">
          {moduleAdaptations.length > 0 ? (
            <div className="grid gap-6">
              {Array.from(new Set(moduleAdaptations.map(a => a.category))).map(category => (
                <div key={category || 'general'} className="space-y-4">
                  {category && <h3 className="text-lg font-semibold border-b border-border pb-2">{category}</h3>}
                  <div className="grid gap-4">
                    {moduleAdaptations.filter(a => a.category === category).map((adaptation, i) => (
                      <Card key={i} className="bg-card">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-mono text-primary">{adaptation.channel}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div>
                                <span className="text-muted-foreground font-medium">Default:</span>{" "}
                                <span className="font-mono">{adaptation.default}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground font-medium">Options:</span>{" "}
                                <span>{adaptation.options}</span>
                              </div>
                            </div>
                            <div>
                              <span className="text-muted-foreground font-medium block mb-1">Effect:</span>
                              <p className="text-foreground">{adaptation.effect}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground border border-border rounded-md bg-card">
              No adaptations documented for this module.
            </div>
          )}
        </TabsContent>

        <TabsContent value="basicsettings" className="mt-6">
          {moduleBasicSettings.length > 0 ? (
            <div className="grid gap-4">
              {moduleBasicSettings.map((bs, i) => (
                <Card key={i} className="bg-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{bs.name}</CardTitle>
                      {bs.category && <Badge variant="secondary">{bs.category}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/30 p-3 rounded-md border border-border">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Prerequisites</h4>
                      <p className="text-sm font-medium">{bs.prerequisites}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Procedure</h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">{bs.procedure}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground border border-border rounded-md bg-card">
              No basic settings documented for this module.
            </div>
          )}
        </TabsContent>

        <TabsContent value="faultcodes" className="mt-6">
          {moduleFaultCodes.length > 0 ? (
            <div className="rounded-md border border-border bg-card overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[100px]">Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Cause / Diagnosis</TableHead>
                    <TableHead className="w-[100px]">Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {moduleFaultCodes.map((fault) => (
                    <TableRow key={fault.code}>
                      <TableCell className="font-mono font-bold text-primary">{fault.code}</TableCell>
                      <TableCell className="font-medium">{fault.description}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{fault.cause}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={fault.severity === "critical" ? "destructive" : fault.severity === "warning" ? "default" : "secondary"}
                          className={fault.severity === "warning" ? "bg-amber-500 hover:bg-amber-600 text-black" : ""}
                        >
                          {fault.severity}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground border border-border rounded-md bg-card">
              No fault codes documented for this module.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
