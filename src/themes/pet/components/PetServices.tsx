
import React from 'react';
import { Calendar, Zap, Shield, Home, Sparkles, Users } from 'lucide-react';

const PetServices = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Weekly Cleanup',
      description: 'Regular scheduled waste removal service',
      link: '/pet/services/weekly-cleanup',
      emoji: '📅'
    },
    {
      icon: Zap,
      title: 'One-Time Service',
      description: 'Perfect for special events or deep cleaning',
      link: '/pet/services/one-time-service',
      emoji: '⚡'
    },
    {
      icon: Shield,
      title: 'Sanitization',
      description: 'Complete area disinfection and deodorizing',
      link: '/pet/services/sanitization',
      emoji: '🛡️'
    },
    {
      icon: Home,
      title: 'Yard Maintenance',
      description: 'Keep your outdoor space pristine',
      link: '/pet/services/yard-maintenance',
      emoji: '🏡'
    },
    {
      icon: Sparkles,
      title: 'Odor Control',
      description: 'Advanced odor elimination solutions',
      link: '/pet/services/odor-control',
      emoji: '✨'
    },
    {
      icon: Users,
      title: 'Multi-Pet Service',
      description: 'Special rates for multiple pet households',
      link: '/pet/services/multi-pet-service',
      emoji: '👥'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pet-50 via-paw-50 to-pet-100 font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pet-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-paw-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Pet Waste
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">
                Services 🐾
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-pet-400 to-paw-400 rounded-full opacity-60"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive pet waste management solutions to keep your family and pets happy and healthy
          </p>
        </div>

        {/* Playful Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Playful background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pet-100 to-paw-100 transform rotate-3 rounded-3xl group-hover:rotate-6 transition-transform duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-2 border-transparent group-hover:border-pet-200">
                {/* Playful icon container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pet-500 via-paw-500 to-pet-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce group-hover:animate-wiggle">
                    {service.emoji}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pet-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <a
                  href={service.link}
                  className="inline-flex items-center text-pet-600 hover:text-pet-500 font-semibold transition-colors group-hover:transform group-hover:translate-x-2 duration-300"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">🐾</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Playful CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pet-400 to-paw-400 rounded-full blur-xl opacity-30"></div>
            <a
              href="tel:5551234567"
              className="relative bg-gradient-to-r from-pet-500 to-paw-600 hover:from-pet-400 hover:to-paw-500 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🐕 Call Now: (555) 123-4567 🐾
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetServices;
