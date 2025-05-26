
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
    <section className="py-20 bg-gradient-to-br from-forest-50 via-nature-50 to-forest-100 font-poppins relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nature-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flowing Header Design */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Tree Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-nature-500">
                Services
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-forest-400 to-nature-400 rounded-full opacity-60"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional tree services from certified arborists with years of experience in nurturing nature
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Hexagonal Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-100 to-nature-100 transform rotate-6 rounded-3xl group-hover:rotate-12 transition-transform duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-2 border-transparent group-hover:border-nature-200">
                {/* Organic Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-forest-500 via-nature-500 to-forest-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <service.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-nature-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <a
                  href={service.link}
                  className="inline-flex items-center text-forest-600 hover:text-forest-500 font-semibold transition-colors group-hover:transform group-hover:translate-x-2 duration-300"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Organic CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-400 to-nature-400 rounded-full blur-xl opacity-30"></div>
            <a
              href="tel:5551234567"
              className="relative bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🌲 Call Now: (555) 123-4567 🌿
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeServices;
