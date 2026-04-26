import { securityCodes } from "@/data/securityCodes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "wouter";

export default function SecurityCodes() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Security Access Codes</h1>
        <p className="text-muted-foreground">Reference for module security access required for adaptations and coding.</p>
      </div>

      <Alert className="bg-muted/50 border-primary/20">
        <Info className="h-4 w-4 text-primary" />
        <AlertTitle className="text-primary font-medium">Entry Procedure</AlertTitle>
        <AlertDescription className="text-muted-foreground mt-2">
          <ol className="list-decimal list-inside space-y-1 ml-2 font-mono text-sm">
            <li>Open target module (e.g. 09-Cent. Elect.)</li>
            <li>Click <strong>[Security Access - 16]</strong></li>
            <li>Enter the 5-digit code</li>
            <li>Click <strong>[Do It!]</strong></li>
            <li>Wait for "Security access granted!" confirmation message.</li>
          </ol>
        </AlertDescription>
      </Alert>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[80px]">Mod</TableHead>
              <TableHead className="w-[200px]">Module Name</TableHead>
              <TableHead className="w-[150px]">Code</TableHead>
              <TableHead>Purpose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {securityCodes.map((item) => (
              <TableRow key={item.module}>
                <TableCell>
                  <Link href={`/module/${item.module}`} className="font-mono text-xs hover:text-primary hover:underline">
                    {item.module}
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{item.moduleName}</TableCell>
                <TableCell>
                  {item.codes !== "None required" && item.codes !== "Varies" ? (
                    <span className="font-mono font-bold text-primary tracking-widest bg-primary/10 px-2 py-1 rounded">
                      {item.codes}
                    </span>
                  ) : (
                    <span className="text-muted-foreground italic text-sm">{item.codes}</span>
                  )}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{item.purpose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
