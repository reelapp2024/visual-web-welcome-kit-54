import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpFile } from "../../../config.js";
import { Home, Building, Sparkles, Car, Sofa, Shirt } from 'lucide-react';

const CleaningServices = () => {
  const navigate = useNavigate();
  const [projectServices, setprojectServices] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "683da559d48d4721c48972d5";

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning with flexible scheduling options.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Office cleaning", "Retail spaces", "Medical facilities"],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Deep Cleaning",
      description: "Thorough deep cleaning service for homes and businesses that need extra attention.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Spring cleaning", "Post-construction", "Move-in ready"],
      gradient: "from-green-600 to-emerald-500"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Garage Cleaning",
      description: "Complete garage organization and cleaning services to maximize your storage space.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Organization", "Floor cleaning", "Storage solutions"],
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: <Sofa className="w-12 h-12" />,
      title: "Upholstery Cleaning",
      description: "Professional furniture and upholstery cleaning to restore your favorite pieces.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Fabric protection", "Stain removal", "Odor elimination"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Laundry Services",
      description: "Professional laundry and dry cleaning services with pickup and delivery options.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Wash & fold", "Dry cleaning", "Pickup & delivery"],
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const handleServiceClick = (service: any) => {
    const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services/${serviceName}`, {
      state: {
        serviceId: service._id,
        serviceName: service.service_name,
        serviceDescription: service.service_description,
        serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_services", {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our {projectCategory} Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive {projectCategory} solutions for you and we make sure for professional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"}
                  alt={service.service_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${service.gradient} rounded-full p-3 text-white shadow-lg`}>
                 <i className={service.fas_fa_icon} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.service_name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.service_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
