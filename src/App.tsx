
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import Cities from "./pages/Cities";
import States from "./pages/States";
import StateDetail from "./pages/StateDetail";
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:slug" element={<AreaDetail />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/states" element={<States />} />
          <Route path="/states/:slug" element={<StateDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
