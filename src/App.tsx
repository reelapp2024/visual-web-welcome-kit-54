
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

const queryClient = new QueryClient();

// Dynamic theme configuration
export const currentTheme = "cleaning";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Dynamic Theme Routes */}
          <Route path="/" element={<ThemeIndex />} />
          <Route path="/about" element={<ThemeAbout />} />
          <Route path="/services" element={<ThemeServices />} />
          <Route path="/contact" element={<ThemeContact />} />
          <Route path="/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/areas" element={<ThemeAreas />} />
          <Route path="/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/country" element={<ThemeCountry />} />
          <Route path="/states" element={<ThemeState />} />
          <Route path="/cities" element={<ThemeCity />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/states/:slug" element={<StateDetail />} />
          
          {/* Legacy theme-specific routes for backward compatibility */}
          <Route path="/cleaning" element={<ThemeIndex />} />
          <Route path="/cleaning/about" element={<ThemeAbout />} />
          <Route path="/cleaning/services" element={<ThemeServices />} />
          <Route path="/cleaning/contact" element={<ThemeContact />} />
          <Route path="/cleaning/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/cleaning/areas" element={<ThemeAreas />} />
          <Route path="/cleaning/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/cleaning/country" element={<ThemeCountry />} />
          <Route path="/cleaning/states" element={<ThemeState />} />
          <Route path="/cleaning/cities" element={<ThemeCity />} />
          
          <Route path="/plumbing" element={<ThemeIndex />} />
          <Route path="/plumbing/about" element={<ThemeAbout />} />
          <Route path="/plumbing/services" element={<ThemeServices />} />
          <Route path="/plumbing/contact" element={<ThemeContact />} />
          <Route path="/plumbing/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/plumbing/areas" element={<ThemeAreas />} />
          <Route path="/plumbing/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/plumbing/country" element={<ThemeCountry />} />
          <Route path="/plumbing/states" element={<ThemeState />} />
          <Route path="/plumbing/cities" element={<ThemeCity />} />
          
          <Route path="/roofing" element={<ThemeIndex />} />
          <Route path="/roofing/about" element={<ThemeAbout />} />
          <Route path="/roofing/services" element={<ThemeServices />} />
          <Route path="/roofing/contact" element={<ThemeContact />} />
          <Route path="/roofing/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/roofing/areas" element={<ThemeAreas />} />
          <Route path="/roofing/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/roofing/country" element={<ThemeCountry />} />
          <Route path="/roofing/states" element={<ThemeState />} />
          <Route path="/roofing/cities" element={<ThemeCity />} />
          
          <Route path="/hvac" element={<ThemeIndex />} />
          <Route path="/hvac/about" element={<ThemeAbout />} />
          <Route path="/hvac/services" element={<ThemeServices />} />
          <Route path="/hvac/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/hvac/contact" element={<ThemeContact />} />
          <Route path="/hvac/areas" element={<ThemeAreas />} />
          <Route path="/hvac/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/hvac/country" element={<ThemeCountry />} />
          <Route path="/hvac/state" element={<ThemeState />} />
          <Route path="/hvac/city" element={<ThemeCity />} />
          
          <Route path="/painting" element={<ThemeIndex />} />
          <Route path="/painting/about" element={<ThemeAbout />} />
          <Route path="/painting/services" element={<ThemeServices />} />
          <Route path="/painting/contact" element={<ThemeContact />} />
          <Route path="/painting/services/:slug" element={<ThemeServiceDetail />} />
          <Route path="/painting/areas" element={<ThemeAreas />} />
          <Route path="/painting/areas/:slug" element={<ThemeAreaDetail />} />
          <Route path="/painting/country" element={<ThemeCountry />} />
          <Route path="/painting/states" element={<ThemeState />} />
          <Route path="/painting/cities" element={<ThemeCity />} />
          
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
