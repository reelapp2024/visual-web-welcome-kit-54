
import React from 'react';
import { MapPin, Heart, Clock } from 'lucide-react';

const PetServiceAreas = () => {
  const areas = [
    { name: 'Oak Hills', pets: '200+', emoji: '🏘️' },
    { name: 'Pine Valley', pets: '150+', emoji: '🌲' },
    { name: 'Maple Grove', pets: '180+', emoji: '🍁' },
    { name: 'Cedar Park', pets: '120+', emoji: '🌳' },
    { name: 'Willow Creek', pets: '160+', emoji: '🌊' },
    { name: 'Sunset Ridge', pets: '140+', emoji: '🌅' }
  ];

  return (
    <section className="py-20 bg-white font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pet-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-paw-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pet Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">Areas 🗺️</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pet-500 to-paw-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Proudly serving pet families throughout our local communities with reliable waste removal
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-pet-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-2 border-transparent group-hover:border-pet-200 relative overflow-hidden">
                {/* Playful background element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pet-200 to-paw-200 rounded-full opacity-50 transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 animate-bounce group-hover:animate-wiggle">
                    {area.emoji}
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={20} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pet-700 transition-colors">
                    {area.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 text-pet-600 mb-4">
                    <Heart size={16} className="animate-pulse" />
                    <span className="font-semibold">{area.pets} Happy Pets</span>
                  </div>
                  
                  <a
                    href={`/pet/areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-pet-600 hover:text-pet-500 font-semibold transition-colors group-hover:transform group-hover:translate-x-2 duration-300"
                  >
                    View Details
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">🐾</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service info */}
        <div className="bg-gradient-to-r from-pet-500 to-paw-500 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="animate-pulse" size={24} />
              <div>
                <div className="font-bold text-lg">Weekly Service</div>
                <div className="opacity-90">Reliable schedule</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Heart className="animate-pulse" size={24} />
              <div>
                <div className="font-bold text-lg">Pet-Safe</div>
                <div className="opacity-90">Eco-friendly methods</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="animate-pulse" size={24} />
              <div>
                <div className="font-bold text-lg">Local Service</div>
                <div className="opacity-90">Community focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetServiceAreas;
