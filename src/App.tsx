
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Plumbing Theme (Main theme)
import PlumbingIndex from "./themes/plumbing/pages/PlumbingIndex";
import PlumbingAbout from "./themes/plumbing/pages/PlumbingAbout";
import PlumbingServices from "./themes/plumbing/pages/PlumbingServices";
import PlumbingContact from "./themes/plumbing/pages/PlumbingContact";
import PlumbingServiceDetail from "./themes/plumbing/pages/PlumbingServiceDetail";
import PlumbingAreas from "./themes/plumbing/pages/PlumbingAreas";
import PlumbingAreaDetail from "./themes/plumbing/pages/PlumbingAreaDetail";
import PlumbingCountry from "./themes/plumbing/pages/PlumbingCountry";
import PlumbingState from "./themes/plumbing/pages/PlumbingState";
import PlumbingCity from "./themes/plumbing/pages/PlumbingCity";

// Electrical Theme
import ElectricalIndex from "./themes/electrical/pages/ElectricalIndex";
import ElectricalAbout from "./themes/electrical/pages/ElectricalAbout";
import ElectricalServices from "./themes/electrical/pages/ElectricalServices";
import ElectricalContact from "./themes/electrical/pages/ElectricalContact";
import ElectricalServiceDetail from "./themes/electrical/pages/ElectricalServiceDetail";
import ElectricalAreas from "./themes/electrical/pages/ElectricalAreas";
import ElectricalAreaDetail from "./themes/electrical/pages/ElectricalAreaDetail";
import ElectricalCountry from "./themes/electrical/pages/ElectricalCountry";
import ElectricalState from "./themes/electrical/pages/ElectricalState";
import ElectricalCity from "./themes/electrical/pages/ElectricalCity";

// Remodeling Theme
import RemodelingIndex from "./themes/remodeling/pages/RemodelingIndex";
import RemodelingAbout from "./themes/remodeling/pages/RemodelingAbout";
import RemodelingServices from "./themes/remodeling/pages/RemodelingServices";
import RemodelingContact from "./themes/remodeling/pages/RemodelingContact";
import RemodelingServiceDetail from "./themes/remodeling/pages/RemodelingServiceDetail";
import RemodelingAreas from "./themes/remodeling/pages/RemodelingAreas";
import RemodelingAreaDetail from "./themes/remodeling/pages/RemodelingAreaDetail";
import RemodelingCountry from "./themes/remodeling/pages/RemodelingCountry";
import RemodelingState from "./themes/remodeling/pages/RemodelingState";
import RemodelingCity from "./themes/remodeling/pages/RemodelingCity";

// Roofing Services Theme
import RoofingIndex from "./themes/roofing/pages/RoofingIndex";
import RoofingAbout from "./themes/roofing/pages/RoofingAbout";
import RoofingServices from "./themes/roofing/pages/RoofingServices";
import RoofingContact from "./themes/roofing/pages/RoofingContact";
import RoofingServiceDetail from "./themes/roofing/pages/RoofingServiceDetail";
import RoofingAreas from "./themes/roofing/pages/RoofingAreas";
import RoofingAreaDetail from "./themes/roofing/pages/RoofingAreaDetail";
import RoofingCountry from "./themes/roofing/pages/RoofingCountry";
import RoofingState from "./themes/roofing/pages/RoofingState";
import RoofingCity from "./themes/roofing/pages/RoofingCity";

// Legal Pages
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
          {/* Plumbing Theme (Main theme) */}
          <Route path="/" element={<PlumbingIndex />} />
          <Route path="/about" element={<PlumbingAbout />} />
          <Route path="/services" element={<PlumbingServices />} />
          <Route path="/contact" element={<PlumbingContact />} />
          <Route path="/services/:slug" element={<PlumbingServiceDetail />} />
          <Route path="/areas" element={<PlumbingAreas />} />
          <Route path="/areas/:slug" element={<PlumbingAreaDetail />} />
          <Route path="/country" element={<PlumbingCountry />} />
          <Route path="/states" element={<PlumbingState />} />
          <Route path="/cities" element={<PlumbingCity />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/states/:slug" element={<StateDetail />} />
          
          {/* Electrical Theme */}
          <Route path="/electrical" element={<ElectricalIndex />} />
          <Route path="/electrical/about" element={<ElectricalAbout />} />
          <Route path="/electrical/services" element={<ElectricalServices />} />
          <Route path="/electrical/contact" element={<ElectricalContact />} />
          <Route path="/electrical/services/:slug" element={<ElectricalServiceDetail />} />
          <Route path="/electrical/areas" element={<ElectricalAreas />} />
          <Route path="/electrical/areas/:slug" element={<ElectricalAreaDetail />} />
          <Route path="/electrical/country" element={<ElectricalCountry />} />
          <Route path="/electrical/states" element={<ElectricalState />} />
          <Route path="/electrical/cities" element={<ElectricalCity />} />
          
          {/* Remodeling Theme */}
          <Route path="/remodeling" element={<RemodelingIndex />} />
          <Route path="/remodeling/about" element={<RemodelingAbout />} />
          <Route path="/remodeling/services" element={<RemodelingServices />} />
          <Route path="/remodeling/contact" element={<RemodelingContact />} />
          <Route path="/remodeling/services/:slug" element={<RemodelingServiceDetail />} />
          <Route path="/remodeling/areas" element={<RemodelingAreas />} />
          <Route path="/remodeling/areas/:slug" element={<RemodelingAreaDetail />} />
          <Route path="/remodeling/country" element={<RemodelingCountry />} />
          <Route path="/remodeling/states" element={<RemodelingState />} />
          <Route path="/remodeling/cities" element={<RemodelingCity />} />
          
          {/* Roofing Services Theme */}
          <Route path="/roofing" element={<RoofingIndex />} />
          <Route path="/roofing/about" element={<RoofingAbout />} />
          <Route path="/roofing/services" element={<RoofingServices />} />
          <Route path="/roofing/contact" element={<RoofingContact />} />
          <Route path="/roofing/services/:slug" element={<RoofingServiceDetail />} />
          <Route path="/roofing/areas" element={<RoofingAreas />} />
          <Route path="/roofing/areas/:slug" element={<RoofingAreaDetail />} />
          <Route path="/roofing/country" element={<RoofingCountry />} />
          <Route path="/roofing/states" element={<RoofingState />} />
          <Route path="/roofing/cities" element={<RoofingCity />} />
          
          {/* Legal Pages */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
