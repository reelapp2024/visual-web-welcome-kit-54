
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

// Tree Removal Theme
import TreeIndex from "./pages/TreeIndex";
import TreeAbout from "./themes/tree/pages/TreeAbout";
import TreeServices from "./themes/tree/pages/TreeServices";
import TreeContact from "./themes/tree/pages/TreeContact";
import TreeServiceDetail from "./themes/tree/pages/TreeServiceDetail";
import TreeAreas from "./themes/tree/pages/TreeAreas";
import TreeAreaDetail from "./pages/TreeAreaDetail";

// Roofing Services Theme
import RoofingIndex from "./themes/roofing/pages/RoofingIndex";
import RoofingAbout from "./themes/roofing/pages/RoofingAbout";
import RoofingServices from "./themes/roofing/pages/RoofingServices";
import RoofingContact from "./themes/roofing/pages/RoofingContact";
import RoofingServiceDetail from "./themes/roofing/pages/RoofingServiceDetail";
import RoofingAreas from "./themes/roofing/pages/RoofingAreas";
import RoofingAreaDetail from "./themes/roofing/pages/RoofingAreaDetail";

// Pet Waste Removal Theme
import PetIndex from "./pages/PetIndex";
import PetAbout from "./themes/pet/pages/PetAbout";
import PetServices from "./themes/pet/pages/PetServices";
import PetContact from "./themes/pet/pages/PetContact";
import PetServiceDetail from "./themes/pet/pages/PetServiceDetail";
import PetAreas from "./themes/pet/pages/PetAreas";
import PetAreaDetail from "./themes/pet/pages/PetAreaDetail";

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
          {/* Plumbing Theme (Main theme) */}
          <Route path="/" element={<PlumbingIndex />} />
          <Route path="/about" element={<PlumbingAbout />} />
          <Route path="/services" element={<PlumbingServices />} />
          <Route path="/contact" element={<PlumbingContact />} />
          <Route path="/services/:slug" element={<PlumbingServiceDetail />} />
          <Route path="/areas" element={<PlumbingAreas />} />
          <Route path="/areas/:slug" element={<PlumbingAreaDetail />} />
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
          
          {/* Pet Waste Removal Theme */}
          <Route path="/pet" element={<PetIndex />} />
          <Route path="/pet/about" element={<PetAbout />} />
          <Route path="/pet/services" element={<PetServices />} />
          <Route path="/pet/contact" element={<PetContact />} />
          <Route path="/pet/services/:slug" element={<PetServiceDetail />} />
          <Route path="/pet/areas" element={<PetAreas />} />
          <Route path="/pet/areas/:slug" element={<PetAreaDetail />} />
          
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
