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

// HVAC Theme Imports
import HVACIndex from './themes/hvac/pages/HVACIndex';
import HVACAbout from './themes/hvac/pages/HVACAbout';
import HVACServices from './themes/hvac/pages/HVACServices';
import HVACServiceDetail from './themes/hvac/pages/HVACServiceDetail';
import HVACContact from './themes/hvac/pages/HVACContact';
import HVACAreas from './themes/hvac/pages/HVACAreas';
import HVACCountry from './themes/hvac/pages/HVACCountry';
import HVACState from './themes/hvac/pages/HVACState';
import HVACCity from './themes/hvac/pages/HVACCity';

// Painting Theme Imports
import PaintingIndex from './themes/painting/pages/PaintingIndex';
import PaintingAbout from './themes/painting/pages/PaintingAbout';
import PaintingServicesPage from './themes/painting/pages/PaintingServices';
import PaintingContact from './themes/painting/pages/PaintingContact';
import PaintingServiceDetail from './themes/painting/pages/PaintingServiceDetail';
import PaintingAreas from './themes/painting/pages/PaintingAreas';
import PaintingAreaDetail from './themes/painting/pages/PaintingAreaDetail';
import PaintingCountry from './themes/painting/pages/PaintingCountry';
import PaintingState from './themes/painting/pages/PaintingState';
import PaintingCity from './themes/painting/pages/PaintingCity';

// Cleaning Theme Imports
import CleaningIndex from './themes/cleaning/pages/CleaningIndex';
import CleaningAbout from './themes/cleaning/pages/CleaningAbout';
import CleaningServicesPage from './themes/cleaning/pages/CleaningServices';
import CleaningContact from './themes/cleaning/pages/CleaningContact';
import CleaningServiceDetail from './themes/cleaning/pages/CleaningServiceDetail';
import CleaningAreas from './themes/cleaning/pages/CleaningAreas';
import CleaningAreaDetail from './themes/cleaning/pages/CleaningAreaDetail';
import CleaningCountry from './themes/cleaning/pages/CleaningCountry';
import CleaningState from './themes/cleaning/pages/CleaningState';
import CleaningCity from './themes/cleaning/pages/CleaningCity';

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
          
          {/* HVAC Theme Routes */}
          <Route path="/hvac" element={<HVACIndex />} />
          <Route path="/hvac/about" element={<HVACAbout />} />
          <Route path="/hvac/services" element={<HVACServices />} />
          <Route path="/hvac/services/:slug" element={<HVACServiceDetail />} />
          <Route path="/hvac/contact" element={<HVACContact />} />
          <Route path="/hvac/areas" element={<HVACAreas />} />
          <Route path="/hvac/areas/:slug" element={<HVACAreas />} />
          <Route path="/hvac/country" element={<HVACCountry />} />
          <Route path="/hvac/state" element={<HVACState />} />
          <Route path="/hvac/city" element={<HVACCity />} />
          
          {/* Painting Theme Routes */}
          <Route path="/painting" element={<PaintingIndex />} />
          <Route path="/painting/about" element={<PaintingAbout />} />
          <Route path="/painting/services" element={<PaintingServicesPage />} />
          <Route path="/painting/contact" element={<PaintingContact />} />
          <Route path="/painting/services/:slug" element={<PaintingServiceDetail />} />
          <Route path="/painting/areas" element={<PaintingAreas />} />
          <Route path="/painting/areas/:slug" element={<PaintingAreaDetail />} />
          <Route path="/painting/country" element={<PaintingCountry />} />
          <Route path="/painting/states" element={<PaintingState />} />
          <Route path="/painting/cities" element={<PaintingCity />} />
          
          {/* Cleaning Theme Routes */}
          <Route path="/cleaning" element={<CleaningIndex />} />
          <Route path="/cleaning/about" element={<CleaningAbout />} />
          <Route path="/cleaning/services" element={<CleaningServicesPage />} />
          <Route path="/cleaning/contact" element={<CleaningContact />} />
          <Route path="/cleaning/services/:slug" element={<CleaningServiceDetail />} />
          <Route path="/cleaning/areas" element={<CleaningAreas />} />
          <Route path="/cleaning/areas/:slug" element={<CleaningAreaDetail />} />
          <Route path="/cleaning/country" element={<CleaningCountry />} />
          <Route path="/cleaning/states" element={<CleaningState />} />
          <Route path="/cleaning/cities" element={<CleaningCity />} />
          
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
