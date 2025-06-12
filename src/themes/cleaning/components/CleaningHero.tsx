
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { httpFile } from "../../../config.js";
import CleaningLoader from '../components/CleaningLoader';
import { Phone, Star, Sparkles, CheckCircle } from "lucide-react";














import * as Icons from 'lucide-react';

function DynamicIcon({ iconName, ...props }) {
  const IconComponent = Icons[iconName];

  // If the icon name is not found, you can return null or a default icon
  if (!IconComponent) {
    return null; // or return <Icons.Star {...props} /> as fallback
  }

  return <IconComponent {...props} />;
}

// Usage example:
// Suppose your backend sends "Star" or "Quote" as iconName




const CleaningHero = () => {
  const navigate = useNavigate();
  const [projectCategory, setProjectCategory] = useState("");
  const [welcomeLine, setWelcomeLine] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const iconFromApi='Star'
  // 1) Read the query-param once:
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get("siteId");

  // 2) Only overwrite localStorage if `site` is a non-null string:
  if (site) {
    const currentSiteId = localStorage.getItem("currentSiteId");
    if (currentSiteId !== site) {
  
      localStorage.setItem("currentSiteId", site);
    }
  }
  // If `site` is null, do not touch localStorage at all.

  // 3) Now read back from localStorage (or fall back to default):
  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "683da559d48d4721c48972d5";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom:"Hero"

        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setWelcomeLine(data.projectInfo.welcomeLine);
          setPhoneNumber(data.aboutUs.phone);
      setIsLoading(false);
         
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

   if (isLoading) {
      return <CleaningLoader />;
    }

  return (

    
    <section className="relative py-20 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white overflow-hidden min-h-[700px] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">

      
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 8 + 4 + "px",
                height: Math.random() * 8 + 4 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 3 + "s",
                animationDuration: Math.random() * 4 + 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <Sparkles className="w-5 h-5 text-emerald-300 mr-2" />
            <span className="text-emerald-100 font-semibold">
              Professional {projectCategory}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Sparkling {projectCategory}
            </span>
            <br />
            <span className="text-emerald-300">Every Time</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            {welcomeLine}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-white text-green-600 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl transform hover:scale-105 hover:shadow-3xl"
            >
              <Phone size={24} className="group-hover:animate-bounce" />
              <span>Call Now: {phoneNumber}</span>
            </a>

            <button
              onClick={() => navigate('/contact')}
              className="group bg-emerald-500/80 backdrop-blur-sm hover:bg-emerald-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 border border-white/30 transform hover:scale-105"
            >
              <Sparkles
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>Free Quote</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Eco-Friendly</h3>
              <p className="text-green-100 text-sm">
                Safe, green products
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5-Star Rated</h3>
              <p className="text-green-100 text-sm">500+ happy customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Same Day</h3>
              <p className="text-green-100 text-sm">Book today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningHero;
