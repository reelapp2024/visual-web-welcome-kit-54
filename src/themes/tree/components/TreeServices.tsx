
import React from 'react';
import { Trees, Scissors, Shovel, Zap, Search, Shield } from 'lucide-react';

const TreeServices = () => {
  const services = [
    {
      icon: Trees,
      title: 'Tree Removal',
      description: 'Safe removal of dangerous or unwanted trees',
      link: '/tree/services/tree-removal'
    },
    {
      icon: Scissors,
      title: 'Tree Trimming',
      description: 'Professional pruning and maintenance',
      link: '/tree/services/tree-trimming'
    },
    {
      icon: Shovel,
      title: 'Stump Grinding',
      description: 'Complete stump removal services',
      link: '/tree/services/stump-grinding'
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      description: '24/7 storm damage response',
      link: '/tree/services/emergency-tree-service'
    },
    {
      icon: Search,
      title: 'Tree Assessment',
      description: 'Health diagnosis and treatment',
      link: '/tree/services/tree-health-assessment'
    },
    {
      icon: Shield,
      title: 'Tree Protection',
      description: 'Preventive care and maintenance',
      link: '/tree/services/tree-protection'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-forest-50 to-nature-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Tree Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional tree services from certified arborists with years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mb-4">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-forest-600 hover:text-forest-500 font-semibold transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default TreeServices;
