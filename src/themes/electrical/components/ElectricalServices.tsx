
import React from 'react';
import { Zap, Home, Building, AlertTriangle, Wrench, Shield } from 'lucide-react';

const ElectricalServices = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Electrical Repair",
      description: "24/7 emergency electrical services for urgent repairs and power outages.",
      features: ["Power outage restoration", "Circuit breaker repair", "Emergency wiring fixes"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Electrical",
      description: "Complete electrical services for homes including installations and upgrades.",
      features: ["Home rewiring", "Outlet installation", "Lighting upgrades"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses and commercial properties.",
      features: ["Office electrical systems", "Retail lighting", "Industrial wiring"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Electrical Inspection",
      description: "Comprehensive electrical safety inspections and code compliance checks.",
      features: ["Safety inspections", "Code compliance", "Electrical testing"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Panel Upgrades",
      description: "Electrical panel upgrades and circuit breaker replacements for improved safety.",
      features: ["Panel replacement", "Circuit additions", "Load calculations"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Surge Protection",
      description: "Whole-house surge protection systems to safeguard your electrical devices.",
      features: ["Surge protector installation", "Electrical protection", "Device safety"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Professional Electrical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complete electrical installations, our licensed electricians provide safe, reliable electrical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricalServices;
