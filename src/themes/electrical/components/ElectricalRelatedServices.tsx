
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const ElectricalRelatedServices = () => {
  const relatedServices = [
    {
      title: "Emergency Electrical Repair",
      description: "24/7 emergency electrical services for urgent repairs and power outages.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "emergency-electrical-repair"
    },
    {
      title: "Residential Electrical",
      description: "Complete electrical services for homes including installations and upgrades.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "residential-electrical"
    },
    {
      title: "Panel Upgrades",
      description: "Electrical panel upgrades and circuit breaker replacements for improved safety.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "panel-upgrades"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Related Electrical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our other professional electrical services to meet all your electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              to={`/electrical/services/${service.slug}`}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <a 
                    href="tel:5551234567"
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={16} />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/electrical/services"
            className="inline-flex items-center bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElectricalRelatedServices;
