
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { httpFile } from "../../../config.js";
import { Sparkles, Home, Building, Car, Sofa, Utensils, Trash } from 'lucide-react';
import { slugify } from "../../../extras/slug";

const CleaningServices = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [services, setServices] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [isFromLocationPage, setIsFromLocationPage] = useState(false);
  const [currentLocationName, setCurrentLocationName] = useState("");

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "683da559d48d4721c48972d5";

  useEffect(() => {
    // Check if we're on a location page by examining the pathname
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const isLocationPage = pathSegments.length > 1 && 
      !['services', 'about', 'contact', 'areas'].includes(pathSegments[0]);
    
    setIsFromLocationPage(isLocationPage);
    
    if (isLocationPage) {
      // Extract location name from URL
      const locationName = pathSegments[pathSegments.length - 1];
      setCurrentLocationName(locationName.replace(/-/g, ' '));
    }

    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setServices(data.services || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId, location.pathname]);

  const handleServiceClick = (serviceName) => {
    if (isFromLocationPage) {
      // Navigate to location-based service URL
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const serviceSlug = slugify(serviceName);
      const newPath = `/${pathSegments.join('/')}/${serviceSlug}`;
      navigate(newPath);
    } else {
      // Navigate to regular service URL
      navigate(`/services/${slugify(serviceName)}`);
    }
  };

  const getServiceIcon = (index) => {
    const icons = [Sparkles, Home, Building, Car, Sofa, Utensils, Trash];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8" />;
  };

  const getServiceTitle = (serviceName) => {
    if (isFromLocationPage && currentLocationName) {
      return `${serviceName} in ${currentLocationName.charAt(0).toUpperCase() + currentLocationName.slice(1)}`;
    }
    return serviceName;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our {projectCategory} Services
            {isFromLocationPage && currentLocationName && (
              <span className="block text-3xl md:text-4xl mt-2">
                in {currentLocationName.charAt(0).toUpperCase() + currentLocationName.slice(1)}
              </span>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional {projectCategory?.toLowerCase()} solutions for every need, 
            {isFromLocationPage && currentLocationName 
              ? ` serving ${currentLocationName} with eco-friendly products and expert staff.`
              : ' with eco-friendly products and expert staff.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.name)}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {getServiceIcon(index)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {getServiceTitle(service.name)}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold group-hover:text-green-700">
                  Learn More →
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Same-day available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
