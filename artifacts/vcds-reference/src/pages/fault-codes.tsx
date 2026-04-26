import { useState } from "react";
import { faultCodes } from "@/data/faultCodes";
import { modules } from "@/data/modules";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";

export default function FaultCodes() {
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [moduleFilter, setModuleFilter] = useState("all");

  const filteredCodes = faultCodes.filter((fault) => {
    const matchesSearch = 
      fault.code.toLowerCase().includes(search.toLowerCase()) || 
      fault.description.toLowerCase().includes(search.toLowerCase()) ||
      fault.cause.toLowerCase().includes(search.toLowerCase());
    
    const matchesSeverity = severityFilter === "all" || fault.severity === severityFilter;
    const matchesModule = moduleFilter === "all" || fault.module === moduleFilter;

    return matchesSearch && matchesSeverity && matchesModule;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Fault Code Reference</h1>
        <p className="text-muted-foreground">Comprehensive database of VAG-specific DTCs and diagnostic steps.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search code (e.g. P0011) or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md font-mono text-sm"
        />
        <Select value={severityFilter} onValueChange={setSeverityFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Severities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
          </SelectContent>
        </Select>
        <Select value={moduleFilter} onValueChange={setModuleFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Module" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Modules</SelectItem>
            {modules.map((mod) => (
              <SelectItem key={mod.id} value={mod.id}>
                {mod.id} - {mod.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead className="w-[80px]">Mod</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Diagnosis / Cause</TableHead>
              <TableHead className="w-[100px]">Severity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCodes.length > 0 ? (
              filteredCodes.map((fault) => (
                <TableRow key={`${fault.module}-${fault.code}`}>
                  <TableCell className="font-mono font-bold text-primary">{fault.code}</TableCell>
                  <TableCell>
                    <Link href={`/module/${fault.module}`} className="font-mono text-xs hover:text-primary hover:underline">
                      {fault.module}
                    </Link>
                  </TableCell>
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No fault codes found matching your criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
