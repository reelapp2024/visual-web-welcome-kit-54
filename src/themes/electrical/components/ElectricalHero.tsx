
import React from 'react';
import { Phone, Clock, CheckCircle, Star, Zap, Wrench } from 'lucide-react';

const ElectricalHero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden font-poppins">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-yellow-900/90 to-amber-800/95"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-bounce delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/90 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle size={16} className="mr-2 text-yellow-400" />
              <span className="font-medium">Licensed Electricians</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Wrench size={16} className="mr-2 text-amber-400" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star size={16} className="mr-2 text-yellow-400" />
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Electrical Services
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-bold">
              & Emergency Repairs!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            ⚡ 24/7 Emergency Service • 🔌 Expert Installations • ⚡ Fast, reliable electrical solutions
          </p>

          {/* Phone Number Display - Fixed and Responsive */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/30 shadow-2xl">
              <Phone size={28} className="text-yellow-400 mr-3 sm:mr-4 animate-pulse flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wide font-semibold">Call Now - 24/7 Emergency Service</div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white break-all sm:break-normal">
                  (555) 123-4567
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:5551234567"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center shadow-2xl transform hover:scale-105"
            >
              <Phone size={24} className="group-hover:animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">CALL NOW: (555) 123-4567</span>
            </a>
            
            <a 
              href="tel:5551234567"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center shadow-2xl transform hover:scale-105"
            >
              <Clock size={24} className="group-hover:rotate-12 transition-transform duration-200 flex-shrink-0" />
              <span className="whitespace-nowrap">Emergency Service</span>
            </a>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-amber-500/80 to-yellow-500/80 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-bold text-base sm:text-lg lg:text-xl flex items-center justify-center flex-wrap gap-2">
              <Zap className="text-yellow-400 animate-pulse flex-shrink-0" />
              <span className="text-center">24/7 Emergency Electrical Service - Call Now!</span>
              <Zap className="text-yellow-400 animate-pulse flex-shrink-0" />
            </p>
          </div>
        </div>
      </div>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:5551234567"
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black p-4 rounded-full shadow-2xl animate-bounce"
        >
          <Phone size={24} />
        </a>
      </div>
    </section>
  );
};

export default ElectricalHero;
