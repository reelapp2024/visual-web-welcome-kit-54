
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TreeAreaDetail from "./pages/TreeAreaDetail";

// Junk Removal Theme (original theme)
import JunkIndex from "./themes/junk/pages/JunkIndex";
import JunkAbout from "./themes/junk/pages/JunkAbout";
import JunkServices from "./themes/junk/pages/JunkServices";
import JunkContact from "./themes/junk/pages/JunkContact";
import JunkServiceDetail from "./themes/junk/pages/JunkServiceDetail";
import JunkAreas from "./themes/junk/pages/JunkAreas";
import JunkAreaDetail from "./themes/junk/pages/JunkAreaDetail";

// Tree Removal Theme
import TreeIndex from "./pages/TreeIndex";
import TreeAbout from "./themes/tree/pages/TreeAbout";
import TreeServices from "./themes/tree/pages/TreeServices";
import TreeContact from "./themes/tree/pages/TreeContact";
import TreeServiceDetail from "./themes/tree/pages/TreeServiceDetail";
import TreeAreas from "./themes/tree/pages/TreeAreas";

// Roofing Services Theme
import RoofingIndex from "./themes/roofing/pages/RoofingIndex";
import RoofingAbout from "./themes/roofing/pages/RoofingAbout";
import RoofingServices from "./themes/roofing/pages/RoofingServices";
import RoofingContact from "./themes/roofing/pages/RoofingContact";
import RoofingServiceDetail from "./themes/roofing/pages/RoofingServiceDetail";
import RoofingAreas from "./themes/roofing/pages/RoofingAreas";
import RoofingAreaDetail from "./themes/roofing/pages/RoofingAreaDetail";

// Legal Pages
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
          {/* Junk Removal Theme (Original) */}
          <Route path="/" element={<JunkIndex />} />
          <Route path="/about" element={<JunkAbout />} />
          <Route path="/services" element={<JunkServices />} />
          <Route path="/contact" element={<JunkContact />} />
          <Route path="/services/:slug" element={<JunkServiceDetail />} />
          <Route path="/areas" element={<JunkAreas />} />
          <Route path="/areas/:slug" element={<JunkAreaDetail />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/states" element={<States />} />
          <Route path="/states/:slug" element={<StateDetail />} />
          
          {/* Tree Removal Theme */}
          <Route path="/tree" element={<TreeIndex />} />
          <Route path="/tree/about" element={<TreeAbout />} />
          <Route path="/tree/services" element={<TreeServices />} />
          <Route path="/tree/contact" element={<TreeContact />} />
          <Route path="/tree/services/:slug" element={<TreeServiceDetail />} />
          <Route path="/tree/areas" element={<TreeAreas />} />
          <Route path="/tree/areas/:slug" element={<TreeAreaDetail />} />
          
          {/* Roofing Services Theme */}
          <Route path="/roofing" element={<RoofingIndex />} />
          <Route path="/roofing/about" element={<RoofingAbout />} />
          <Route path="/roofing/services" element={<RoofingServices />} />
          <Route path="/roofing/contact" element={<RoofingContact />} />
          <Route path="/roofing/services/:slug" element={<RoofingServiceDetail />} />
          <Route path="/roofing/areas" element={<RoofingAreas />} />
          <Route path="/roofing/areas/:slug" element={<RoofingAreaDetail />} />
          
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
