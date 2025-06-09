
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpFile } from "../../../config.js";
import { Home, Building, Sparkles, Car, Sofa, Shirt } from 'lucide-react';

const CleaningRelatedServices = () => {
  const navigate = useNavigate();

    const [projectServices, setprojectServices] = useState([]);

  
    const savedSiteId = localStorage.getItem("currentSiteId");
    const projectId = savedSiteId || "683da559d48d4721c48972d5";


      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await httpFile.post("/webapp/v1/fetch_random_services", {
              projectId,
            });
    
            if (data) {
              setprojectServices(data.services || []);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [projectId]);


      console.log(projectServices,"projectServicesprojectServicesprojectServices")



  
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Cleaning",
      description: "Regular home cleaning services",
      link: "/services/residential"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Cleaning", 
      description: "Office and business cleaning",
      link: "/services/commercial"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Deep Cleaning",
      description: "Thorough deep cleaning service",
      link: "/services/deep-cleaning"
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Upholstery Cleaning",
      description: "Furniture and fabric cleaning",
      link: "/services/upholstery"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of professional cleaning services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectServices.map((service, index) => (
            <button
              key={index}
              onClick={() => navigate(service.link)}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 text-left w-full"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300">
                {service.fas_fa_icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.service_name}</h3>
              <p className="text-gray-600">{service.service_description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningRelatedServices;
