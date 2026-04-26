import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import ModuleDetail from "@/pages/module";
import FaultCodes from "@/pages/fault-codes";
import WarningLights from "@/pages/warning-lights";
import SecurityCodes from "@/pages/security-codes";
import Setup from "@/pages/setup";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/module/:id" component={ModuleDetail} />
        <Route path="/fault-codes" component={FaultCodes} />
        <Route path="/warning-lights" component={WarningLights} />
        <Route path="/security-codes" component={SecurityCodes} />
        <Route path="/setup" component={Setup} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
