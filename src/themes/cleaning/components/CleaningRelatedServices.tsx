
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building, Sparkles, Car, Sofa, Shirt } from 'lucide-react';

const CleaningRelatedServices = () => {
  const navigate = useNavigate();
  
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
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => navigate(service.link)}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 text-left w-full"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningRelatedServices;
