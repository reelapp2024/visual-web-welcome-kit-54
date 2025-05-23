
import React from 'react';
import { Wrench, Home, Zap, Droplet, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "General Repairs",
      description: "Quick fixes for all household repairs and maintenance needs",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Maintenance",
      description: "Regular upkeep and preventive maintenance for your property",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Services",
      description: "Licensed electrical work, installations, and emergency repairs",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Plumbing Services",
      description: "Professional plumbing repairs, installations, and drain cleaning",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Handyman Services",
      description: "Skilled craftsman for various home improvement projects",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Emergency Services",
      description: "24/7 emergency response for urgent repair needs",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional local services you can trust. From emergency repairs to regular maintenance, 
            we're here to help with all your home and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
