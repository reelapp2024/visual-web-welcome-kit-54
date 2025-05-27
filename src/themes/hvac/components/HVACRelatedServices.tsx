
import React from 'react';
import { Thermometer, Wind, Settings, ArrowRight } from 'lucide-react';

const HVACRelatedServices = () => {
  const relatedServices = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Duct Cleaning",
      description: "Professional air duct cleaning and ventilation services",
      link: "/hvac/services/duct-cleaning"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Heating Repair",
      description: "Complete furnace and heating system repair services",
      link: "/hvac/services/heating-repair"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "HVAC Installation",
      description: "New HVAC system installation and replacement services",
      link: "/hvac/services/hvac-installation"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our other professional HVAC services to solve all your heating and cooling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-orange-600 mb-6 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-orange-600 font-semibold hover:text-red-600 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HVACRelatedServices;
