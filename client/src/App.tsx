import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin-prawali" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Calling AI ko window par set karna taaki Home page se access ho sake
    window.startRileyCall = () => {
      if (window.vapiSDK) {
        const vapi = new window.vapiSDK.default(
          "c19b7909-74f0-459f-a23c-ff4cf3d9cbe6",
        );
        vapi.start("517b20fd-d5b4-40b6-a9f8-57f6d1580f1c");
        console.log("Riley AI calling started...");
      } else {
        alert(
          "Riley AI load ho rahi hai, please 5 second baad fir se try karein ya refresh karein.",
        );
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
