
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dynamic Theme Components
import ThemeIndex from "./components/ThemeIndex";
import ThemeAbout from "./components/ThemeAbout";
import ThemeServices from "./components/ThemeServices";
import ThemeContact from "./components/ThemeContact";
import ThemeServiceDetail from "./components/ThemeServiceDetail";
import ThemeAreas from "./components/ThemeAreas";
import ThemeAreaDetail from "./components/ThemeAreaDetail";
import ThemeCountry from "./components/ThemeCountry";
import ThemeState from "./components/ThemeState";
import ThemeCity from "./components/ThemeCity";

// Legal Pages
import StateDetail from "./pages/StateDetail";
import CityDetail from "./pages/CityDetail";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

import PlumbingMaps from "./themes/plumbing/pages/PlumbingMaps";


const queryClient = new QueryClient();

// Dynamic theme configuration - define the type properly
export type ThemeType = 'cleaning' | 'plumbing' | 'roofing' | 'hvac' | 'painting';
export const currentTheme: ThemeType = "cleaning";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Theme Routes */}
          <Route path="/" element={<ThemeIndex />} />
          <Route path="/about" element={<ThemeAbout />} />
          <Route path="/services" element={<ThemeServices />} />
          <Route path="/contact" element={<ThemeContact />} />
          <Route path="/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/areas" element={<ThemeAreas />} />
          <Route path="/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/:slug" element={<ThemeCountry />} />
          <Route path="/country/:countryname" element={<ThemeCountry />} />
          <Route path="/:countryname" element={<ThemeCountry />} />
          <Route path="/:countryname/:statename" element={<ThemeState />} />
          <Route path="/:countryname/:statename/:cityname" element={<ThemeCity />} />
          <Route path="/:countryname/:statename/:cityname/:localareaname" element={<ThemeCountry />} />
          <Route path="/states" element={<ThemeState />} />
          <Route path="/cities" element={<ThemeCity />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/states/:slug" element={<StateDetail />} />
          <Route path="/maps" element={<PlumbingMaps />} />
          
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
