
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TreeIndex from "./pages/TreeIndex";
import RoofingIndex from "./themes/roofing/pages/RoofingIndex";
import TreeAreaDetail from "./pages/TreeAreaDetail";
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
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Original Junk Removal Theme */}
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
          
          {/* Tree Removal Theme */}
          <Route path="/tree" element={<TreeIndex />} />
          <Route path="/tree/about" element={<About />} />
          <Route path="/tree/services" element={<Services />} />
          <Route path="/tree/contact" element={<Contact />} />
          <Route path="/tree/services/:slug" element={<ServiceDetail />} />
          <Route path="/tree/areas" element={<Areas />} />
          <Route path="/tree/areas/:slug" element={<TreeAreaDetail />} />
          
          {/* Roofing Services Theme */}
          <Route path="/roofing" element={<RoofingIndex />} />
          <Route path="/roofing/about" element={<About />} />
          <Route path="/roofing/services" element={<Services />} />
          <Route path="/roofing/contact" element={<Contact />} />
          <Route path="/roofing/services/:slug" element={<ServiceDetail />} />
          <Route path="/roofing/areas" element={<Areas />} />
          <Route path="/roofing/areas/:slug" element={<AreaDetail />} />
          
          {/* Legal Pages */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
