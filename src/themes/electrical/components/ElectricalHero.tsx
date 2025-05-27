
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-bold text-lg">Professional Electrical Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Expert <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Electrical</span> Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-100 mb-10 leading-relaxed">
              Licensed electricians providing safe, reliable electrical services 24/7. 
              From emergency repairs to complete installations - we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a 
                href="tel:5551234567"
                className="group bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-xl"
              >
                <Phone size={24} className="mr-3 group-hover:animate-pulse" />
                Call Now: (555) 123-4567
              </a>
              <a 
                href="/electrical/contact"
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm transform hover:scale-105"
              >
                Get Free Estimate
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-bold">Licensed & Insured</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-bold">24/7 Emergency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-bold">Expert Service</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Emergency Electrical Service</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Power outages and electrical failures</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Faulty wiring and electrical hazards</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Panel upgrades and installations</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Outlet and lighting repairs</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-yellow-400 font-bold text-lg mb-2">Available 24/7</div>
                <a href="tel:5551234567" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
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
