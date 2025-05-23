
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative max-h-[600px] h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          alt="Local business services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in">
            Get Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Local Services
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1">Today!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in px-4">
            Need urgent help? Our local experts are ready to serve you. 
            Call now for immediate assistance and quick solutions!
          </p>

          {/* Phone Number - Large Display */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <Phone size={24} className="text-yellow-300 mr-3 sm:mr-4" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wide font-medium">Call Now</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">(555) 123-4567</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in px-4">
            <button className="group bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-xl sm:text-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-2xl">
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>CALL NOW</span>
            </button>
            
            <button className="group bg-green-600 hover:bg-green-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-xl sm:text-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-2xl">
              <Clock size={24} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>24/7 SERVICE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl animate-pulse">
          <Phone size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
