
import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

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
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-xs sm:text-sm font-medium mb-4 animate-fade-in">
            <MapPin size={14} className="mr-2" />
            Local Services Available 24/7
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in">
            Get Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Local Services
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1">Today!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in px-4">
            Need urgent help? Our local experts are ready to serve you. 
            Call now for immediate assistance and quick solutions!
          </p>

          {/* Phone Number - Large Display */}
          <div className="mb-4 animate-fade-in">
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <Phone size={20} className="text-yellow-300 mr-2 sm:mr-3" />
              <div className="text-left">
                <div className="text-xs text-white/70 uppercase tracking-wide font-medium">Call Now</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">(555) 123-4567</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 animate-fade-in px-4">
            <button className="group bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center shadow-2xl">
              <Phone size={20} className="group-hover:animate-pulse" />
              <span>CALL NOW</span>
            </button>
            
            <button className="group bg-green-600 hover:bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center shadow-2xl">
              <Clock size={20} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>24/7 SERVICE</span>
            </button>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto animate-fade-in px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-yellow-300 text-xl font-bold mb-1">Fast</div>
              <div className="text-white/90 text-sm">Same Day Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-green-300 text-xl font-bold mb-1">Local</div>
              <div className="text-white/90 text-sm">In Your Area</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-blue-300 text-xl font-bold mb-1">Expert</div>
              <div className="text-white/90 text-sm">Professional Team</div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-4 p-3 bg-red-600/20 backdrop-blur-sm rounded-lg border border-red-500/30 animate-fade-in mx-4">
            <div className="text-red-300 font-bold text-sm mb-1">Emergency Services Available</div>
            <div className="text-white/90 text-xs">Call anytime - We're here to help!</div>
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
