
import React from 'react';
import { Wrench, Droplet, Thermometer, Settings, ShowerHead, Zap } from 'lucide-react';

const PlumbingServices = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency repairs for burst pipes, severe leaks, and plumbing disasters.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Repairs"],
      link: "/services/emergency-plumbing"
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and unclogging services for all types of blockages.",
      features: ["Hydro Jetting", "Snake Services", "Root Removal"],
      link: "/services/drain-cleaning"
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types and brands.",
      features: ["Tank & Tankless", "Repair & Replace", "Maintenance"],
      link: "/services/water-heater-repair"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Pipe Installation",
      description: "Complete pipe installation and replacement for residential and commercial properties.",
      features: ["New Installation", "Pipe Replacement", "Repiping"],
      link: "/services/pipe-installation"
    },
    {
      icon: <ShowerHead className="w-12 h-12" />,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing services from fixtures to full renovations.",
      features: ["Fixture Installation", "Bathroom Remodel", "Leak Repair"],
      link: "/services/bathroom-plumbing"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "General Repairs",
      description: "Professional repairs for all plumbing fixtures, faucets, and systems.",
      features: ["Faucet Repair", "Toilet Repair", "Leak Detection"],
      link: "/services/general-repairs"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Complete Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive plumbing 
            solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-cyan-600 transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/services"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlumbingServices;
