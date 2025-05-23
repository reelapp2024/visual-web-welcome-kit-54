
import React from 'react';
import { Phone, Clock, CheckCircle, Star, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden font-poppins">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          alt="Local business services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/95 via-electric-900/90 to-brand-800/95"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lime-400/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-400/20 rounded-full blur-xl animate-bounce-slow delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle size={16} className="mr-2 text-lime-400" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap size={16} className="mr-2 text-brand-400" />
              <span className="font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star size={16} className="mr-2 text-lime-400" />
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-lime-400 via-brand-400 to-electric-400 bg-clip-text text-transparent animate-pulse">
              Local Services
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-bold">
              When You Need Them Most!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            🚀 Same-day service • 💯 100% satisfaction guarantee • ⚡ Emergency response in 30 minutes
          </p>

          {/* Phone Number Display */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
              <Phone size={32} className="text-lime-400 mr-4 animate-pulse" />
              <div className="text-left">
                <div className="text-sm text-white/70 uppercase tracking-wide font-semibold">Call Now - 24/7</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">(555) 123-4567</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-xl sm:text-2xl transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-2xl transform hover:scale-105">
              <Phone size={28} className="group-hover:animate-pulse" />
              <span>CALL NOW</span>
            </button>
            
            <button className="group bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-xl sm:text-2xl transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-2xl transform hover:scale-105">
              <Clock size={28} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>FREE QUOTE</span>
            </button>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-brand-500/80 to-electric-500/80 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-bold text-lg sm:text-xl flex items-center justify-center">
              <Zap className="mr-2 text-lime-400 animate-pulse" />
              Emergency Response Available 24/7 - Call Now!
              <Zap className="ml-2 text-lime-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black p-4 rounded-full shadow-2xl animate-bounce-slow">
          <Phone size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
