
import React from 'react';
import { Phone, Calendar, Heart, Star } from 'lucide-react';

const PetProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Contact us for a free quote and consultation about your pet waste needs.',
      emoji: '📞'
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      description: 'We set up a convenient weekly schedule that works for you and your pets.',
      emoji: '📅'
    },
    {
      icon: Heart,
      title: 'Professional Cleanup',
      description: 'Our trained team provides thorough, pet-safe waste removal service.',
      emoji: '💖'
    },
    {
      icon: Star,
      title: 'Enjoy Clean Space',
      description: 'Relax and enjoy your clean, fresh yard with your furry friends.',
      emoji: '⭐'
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins relative overflow-hidden">
      {/* Playful background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl text-pet-400 animate-bounce">🐾</div>
        <div className="absolute top-60 right-32 text-4xl text-paw-400 animate-bounce delay-1000">🎾</div>
        <div className="absolute bottom-40 left-1/4 text-5xl text-pet-300 animate-bounce delay-500">🦴</div>
        <div className="absolute bottom-20 right-20 text-4xl text-paw-300 animate-bounce delay-1500">🏠</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">Pet Care Process</span> Works
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pet-500 to-paw-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Simple, reliable pet waste removal process designed with love for pets and their families
          </p>
        </div>

        {/* Playful Process Timeline */}
        <div className="relative">
          {/* Curved connection lines */}
          <div className="hidden lg:block absolute top-16 left-0 w-full">
            <div className="flex justify-between items-center px-20">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-1 mx-8">
                  <div className="h-2 bg-gradient-to-r from-pet-400 to-paw-400 rounded-full opacity-30"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce" style={{animationDelay: `${i * 500}ms`}}>
                    🐾
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative z-10">
                  {/* Playful icon container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <step.icon size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 text-3xl animate-wiggle">
                      {step.emoji}
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-paw-400 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-125 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pet-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Playful CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pet-500 to-paw-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">🐕 Ready to Start? 🐾</h3>
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:bg-pet-50 shadow-lg inline-block transform hover:scale-105"
              >
                📞 Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProcess;
