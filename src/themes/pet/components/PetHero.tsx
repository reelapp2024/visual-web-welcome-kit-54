
import React from 'react';
import { Heart, Shield, Clock, Star } from 'lucide-react';

const PetHero = () => {
  return (
    <section className="bg-gradient-to-br from-pet-50 via-paw-50 to-pet-100 py-20 font-poppins relative overflow-hidden">
      {/* Playful floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pet-200/30 rounded-full animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-paw-200/40 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pet-300/20 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-paw-300/30 rounded-full animate-bounce delay-1500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-lg mb-4">
                <Heart className="text-pet-500 mr-2 animate-pulse" size={20} />
                <span className="text-pet-700 font-semibold">🐕 Trusted Pet Care Experts 🐾</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Keep Your Yard
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pet-500 to-paw-500">
                Clean & Fresh
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Professional pet waste removal services that keep your outdoor spaces clean, healthy, and enjoyable for your family and furry friends. 🏡🐕
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Shield, text: 'Safe & Sanitary', color: 'pet' },
                { icon: Clock, text: 'Weekly Service', color: 'paw' },
                { icon: Star, text: '100% Satisfaction', color: 'pet' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/pet/contact"
                className="bg-gradient-to-r from-pet-500 to-pet-600 hover:from-pet-400 hover:to-pet-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                🐾 Get Free Quote
              </a>
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 border-2 border-pet-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-pet-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pet-400 to-paw-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="text-center">
                  <div className="text-8xl mb-4">🐕</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Happy Pets</h3>
                  <p className="text-gray-600">Clean Yards</p>
                  <div className="flex justify-center mt-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating paw prints */}
            <div className="absolute -top-4 -left-4 text-pet-300 text-4xl animate-wiggle">🐾</div>
            <div className="absolute -bottom-4 -right-4 text-paw-300 text-3xl animate-wiggle delay-1000">🐾</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetHero;
