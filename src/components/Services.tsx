
import React from 'react';
import { Wrench, Home, Zap, Droplet, Hammer, Shield, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "General Repairs",
      description: "Quick fixes for all household repairs and maintenance needs",
      gradient: "from-electric-500 to-electric-600",
      slug: "general-repairs",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Home Maintenance",
      description: "Regular upkeep and preventive maintenance for your property",
      gradient: "from-lime-500 to-lime-600",
      slug: "home-maintenance",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Electrical Services",
      description: "Licensed electrical work, installations, and emergency repairs",
      gradient: "from-brand-500 to-brand-600",
      slug: "electrical-services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45249ff49?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Plumbing Services",
      description: "Professional plumbing repairs, installations, and drain cleaning",
      gradient: "from-electric-600 to-brand-500",
      slug: "plumbing-services",
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: "Handyman Services",
      description: "Skilled craftsman for various home improvement projects",
      gradient: "from-brand-600 to-electric-500",
      slug: "handyman-services",
      image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Emergency Services",
      description: "24/7 emergency response for urgent repair needs",
      gradient: "from-lime-600 to-brand-500",
      slug: "emergency-services",
      image: "https://images.unsplash.com/photo-1544985361-b420d7a77140?q=80&w=500&auto=format&fit=crop"
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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-full w-16 h-16 flex items-center justify-center m-4 text-white shadow-xl`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="flex items-center justify-center w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </button>
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
            <button className="flex items-center justify-center bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
