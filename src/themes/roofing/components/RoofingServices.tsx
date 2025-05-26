
import React from 'react';
import { Home, Wrench, RotateCcw, Zap, Search, Shield } from 'lucide-react';

const RoofingServices = () => {
  const services = [
    {
      icon: Home,
      title: 'Roof Installation',
      description: 'Complete new roof installation with premium materials',
      link: '/roofing/services/roof-installation'
    },
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Expert repairs for leaks and damage',
      link: '/roofing/services/roof-repair'
    },
    {
      icon: RotateCcw,
      title: 'Roof Replacement',
      description: 'Full roof replacement and upgrades',
      link: '/roofing/services/roof-replacement'
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      description: '24/7 emergency roof repairs',
      link: '/roofing/services/emergency-roof-service'
    },
    {
      icon: Search,
      title: 'Roof Inspection',
      description: 'Comprehensive roof assessments',
      link: '/roofing/services/roof-inspection'
    },
    {
      icon: Shield,
      title: 'Maintenance',
      description: 'Preventive care and upkeep',
      link: '/roofing/services/roof-maintenance'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional roofing solutions from licensed contractors with decades of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-slate-600 hover:text-slate-500 font-semibold transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoofingServices;
