
import React from 'react';
import { Phone, Zap, Shield, Clock } from 'lucide-react';

const ElectricalHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white overflow-hidden font-poppins">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-yellow-900/85 to-amber-900/85"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-bold text-base sm:text-lg">Professional Electrical Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Expert <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Electrical</span> Solutions
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-yellow-100 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Licensed electricians providing safe, reliable electrical services 24/7. 
              From emergency repairs to complete installations - we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center lg:justify-start">
              <a 
                href="tel:5551234567"
                className="group bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-xl"
              >
                <Phone size={20} className="sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
                <span className="hidden sm:inline">Call Now: </span>(555) 123-4567
              </a>
              <a 
                href="/electrical/contact"
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm transform hover:scale-105"
              >
                Get Free Estimate
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-bold">Licensed & Insured</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-bold">24/7 Emergency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-bold">Expert Service</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Emergency Electrical Service</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Power outages and electrical failures</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Faulty wiring and electrical hazards</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Panel upgrades and installations</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Outlet and lighting repairs</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <div className="text-yellow-400 font-bold text-base sm:text-lg mb-2">Available 24/7</div>
                <a href="tel:5551234567" className="text-lg sm:text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalHero;
