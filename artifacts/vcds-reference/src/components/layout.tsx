import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { modules } from "@/data/modules";
import { Shield, AlertTriangle, Key, Wrench, Home, Settings2 } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background dark">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="border-b border-border px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <Wrench className="h-5 w-5" />
              <span>VCDS Reference</span>
            </Link>
            <div className="text-xs text-muted-foreground mt-1 font-mono">A3 8V MQB / EA888.3</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/"}>
                      <Link href="/">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/fault-codes"}>
                      <Link href="/fault-codes">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Fault Codes</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/warning-lights"}>
                      <Link href="/warning-lights">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        <span>Warning Lights</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/security-codes"}>
                      <Link href="/security-codes">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>Security Codes</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location === "/setup"}>
                      <Link href="/setup">
                        <Settings2 className="h-4 w-4" />
                        <span>Setup & Guide</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Modules</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {modules.map((mod) => (
                    <SidebarMenuItem key={mod.id}>
                      <SidebarMenuButton asChild isActive={location === `/module/${mod.id}`}>
                        <Link href={`/module/${mod.id}`} className="flex justify-between items-center w-full">
                          <span className="truncate">{mod.name}</span>
                          <span className="font-mono text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">
                            {mod.id}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background px-6">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
