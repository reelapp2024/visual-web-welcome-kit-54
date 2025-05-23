
import React from 'react';
import { Wrench, Home, Zap, Droplet, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "General Repairs",
      description: "Quick fixes for all household repairs and maintenance needs",
      gradient: "from-electric-500 to-electric-600",
      slug: "general-repairs"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Home Maintenance",
      description: "Regular upkeep and preventive maintenance for your property",
      gradient: "from-lime-500 to-lime-600",
      slug: "home-maintenance"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Electrical Services",
      description: "Licensed electrical work, installations, and emergency repairs",
      gradient: "from-brand-500 to-brand-600",
      slug: "electrical-services"
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Plumbing Services",
      description: "Professional plumbing repairs, installations, and drain cleaning",
      gradient: "from-electric-600 to-brand-500",
      slug: "plumbing-services"
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: "Handyman Services",
      description: "Skilled craftsman for various home improvement projects",
      gradient: "from-brand-600 to-electric-500",
      slug: "handyman-services"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Emergency Services",
      description: "24/7 emergency response for urgent repair needs",
      gradient: "from-lime-600 to-brand-500",
      slug: "emergency-services"
    }
  ];

  const handleServiceClick = (slug: string) => {
    window.open(`/services/${slug}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional local services you can trust. From emergency repairs to regular maintenance, 
            we're here to help with all your home and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleServiceClick(service.slug)}
            >
              <div className="p-8">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
              <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Don't see exactly what you need? We offer customized solutions for unique requirements.
            </p>
            <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
