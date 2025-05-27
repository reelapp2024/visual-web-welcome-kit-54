
import React from 'react';
import { Thermometer, Wind, Settings, Zap, ShowerHead, Wrench } from 'lucide-react';

const HVACServices = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Emergency HVAC",
      description: "24/7 emergency repairs for heating and cooling system failures.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Repairs"],
      link: "/hvac/services/emergency-hvac"
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Air Conditioning",
      description: "Complete AC installation, repair, and maintenance services.",
      features: ["AC Installation", "Repair & Service", "Maintenance"],
      link: "/hvac/services/ac-repair"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Heating Systems",
      description: "Furnace installation, repair, and heating system maintenance.",
      features: ["Furnace Repair", "Heat Pump Service", "Boiler Repair"],
      link: "/hvac/services/heating-repair"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "HVAC Installation",
      description: "Complete HVAC system installation for residential and commercial properties.",
      features: ["New Installation", "System Replacement", "Upgrades"],
      link: "/hvac/services/hvac-installation"
    },
    {
      icon: <ShowerHead className="w-12 h-12" />,
      title: "Duct Cleaning",
      description: "Professional air duct cleaning and ventilation system maintenance.",
      features: ["Duct Cleaning", "Air Quality", "Ventilation"],
      link: "/hvac/services/duct-cleaning"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Thermostat Services",
      description: "Smart thermostat installation and programming services.",
      features: ["Smart Thermostats", "Programming", "Repair"],
      link: "/hvac/services/thermostat-services"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Complete HVAC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive HVAC 
            solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-orange-600 mb-6 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-orange-600 font-semibold hover:text-red-600 transition-colors duration-200 group"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="/hvac/services"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HVACServices;
