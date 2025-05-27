
import React from 'react';
import { Wrench, Droplet, Thermometer, ArrowRight } from 'lucide-react';

const PlumbingRelatedServices = () => {
  const relatedServices = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Drain Cleaning",
      description: "Professional drain unclogging and cleaning services",
      link: "/services/drain-cleaning"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Water Heater Repair",
      description: "Complete water heater installation and repair",
      link: "/services/water-heater-repair"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Pipe Installation",
      description: "New pipe installation and replacement services",
      link: "/services/pipe-installation"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our other professional plumbing services to solve all your plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-cyan-600 transition-colors duration-200 group"
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

export default PlumbingRelatedServices;
