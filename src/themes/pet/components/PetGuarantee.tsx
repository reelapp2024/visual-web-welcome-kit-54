
import React from 'react';
import { Shield, Heart, Award, CheckCircle, Home, Star } from 'lucide-react';

const PetGuarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: '100% Satisfaction Guarantee',
      description: 'If you\'re not happy with our service, we\'ll return and make it right for free!',
      highlight: '100% Happy Pets'
    },
    {
      icon: Heart,
      title: 'Pet-Safe Methods',
      description: 'All our cleaning products and methods are completely safe for your furry friends.',
      highlight: 'Pet-Safe Always'
    },
    {
      icon: Award,
      title: 'Reliable Weekly Service',
      description: 'Consistent, dependable service every week to keep your yard clean and healthy.',
      highlight: 'Always On Time'
    },
    {
      icon: Home,
      title: 'Bonded & Insured',
      description: 'Fully bonded and insured for your peace of mind and property protection.',
      highlight: 'Fully Protected'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pet-600 to-paw-600 text-white font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-10 left-10 text-pet-200/20 animate-bounce-slow">
        <span className="text-6xl">🐕</span>
      </div>
      <div className="absolute top-20 right-20 text-paw-200/20 animate-bounce-slow delay-500">
        <span className="text-5xl">🐾</span>
      </div>
      <div className="absolute bottom-20 left-20 text-pet-200/20 animate-bounce-slow delay-1000">
        <span className="text-4xl">🦴</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Pet Waste
            <span className="block text-pet-200">Guarantee</span>
          </h2>
          <p className="text-xl text-pet-100 max-w-3xl mx-auto">
            🐾 We promise clean yards, happy pets, and satisfied pet parents! 🐾
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gradient-to-br from-white/90 to-pet-50/90 rounded-3xl p-6 shadow-xl border-2 border-pet-200 hover:border-paw-300 transition-all duration-300 transform hover:scale-105 text-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-pet-400 to-paw-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-pet-700">{guarantee.title}</h3>
              <p className="text-gray-600 text-center mb-4">{guarantee.description}</p>
              <div className="bg-pet-400/20 border-2 border-pet-400/30 rounded-2xl p-3 text-center">
                <span className="text-pet-600 font-bold">{guarantee.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-pet-400 to-paw-400 hover:from-pet-300 hover:to-paw-300 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🐕 Call Now: (555) 123-4567 🐾
          </a>
        </div>
      </div>
    </section>
  );
};

export default PetGuarantee;
