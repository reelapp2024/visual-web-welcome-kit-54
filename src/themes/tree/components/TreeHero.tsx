
import React from 'react';
import { Phone, Clock, CheckCircle, Star, Zap, Trees, Leaf, Shield } from 'lucide-react';

const TreeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-poppins">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          alt="Professional tree removal services"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/90 via-forest-800/85 to-nature-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Organic floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-nature-400/30 rounded-full blur-2xl animate-bounce-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-forest-500/40 rounded-full blur-xl animate-bounce-slow delay-700"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-nature-300/20 rounded-full blur-2xl animate-bounce-slow delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-forest-400/30 rounded-full blur-xl animate-bounce-slow delay-1500"></div>

      {/* Decorative leaves */}
      <div className="absolute top-32 left-1/4 text-nature-400/20 animate-pulse">
        <Leaf size={60} className="rotate-45" />
      </div>
      <div className="absolute bottom-40 right-1/3 text-forest-400/20 animate-pulse delay-1000">
        <Leaf size={40} className="rotate-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Trust badges - circular design */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center mb-2">
              <CheckCircle size={20} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm">Certified Arborists</span>
          </div>
          
          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mb-2">
              <Trees size={20} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm">24/7 Emergency</span>
          </div>
          
          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center mb-2">
              <Star size={20} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm">5-Star Rated</span>
          </div>
          
          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mb-2">
              <Shield size={20} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm">Fully Insured</span>
          </div>
        </div>

        {/* Hero content in organic layout */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline with organic styling */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-nature-500/20 to-forest-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-nature-400/30 mb-6">
              <Trees className="text-nature-400 mr-2" size={20} />
              <span className="text-nature-300 font-medium">Professional Tree Care Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-nature-300 via-nature-400 to-forest-400 bg-clip-text text-transparent animate-pulse">
                Tree Removal
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nature-200">
                & Tree Care
              </span>
            </h1>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white/90">
            <div className="flex items-center bg-forest-600/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-nature-300 mr-2">🌲</span>
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center bg-forest-600/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-nature-300 mr-2">🌿</span>
              <span className="font-medium">Eco-Friendly</span>
            </div>
            <div className="flex items-center bg-forest-600/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-nature-300 mr-2">⚡</span>
              <span className="font-medium">30-Min Response</span>
            </div>
          </div>

          {/* Phone display with organic design */}
          <div className="mb-10">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center mr-4">
                  <Phone size={28} className="text-black animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/80 font-medium mb-1">Call Now - Emergency Service</div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    (555) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons with organic styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a 
              href="tel:5551234567"
              className="group bg-gradient-to-r from-nature-400 to-nature-500 hover:from-nature-300 hover:to-nature-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Call Now: (555) 123-4567</span>
            </a>
            
            <a 
              href="tel:5551234567"
              className="group bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Clock size={24} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>Emergency Service</span>
            </a>
          </div>

          {/* Organic styled notification */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-forest-700/90 to-nature-700/90 backdrop-blur-md rounded-2xl p-5 border-2 border-nature-400/30 shadow-2xl">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center">
                <Zap size={18} className="text-black" />
              </div>
              <p className="text-white font-bold text-lg flex items-center justify-center">
                24/7 Emergency Tree Removal - Call Now!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating call button with organic styling */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:5551234567"
          className="bg-gradient-to-r from-nature-400 to-nature-500 text-black p-4 rounded-full shadow-2xl animate-bounce-slow relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-nature-400 to-nature-500 rounded-full animate-ping opacity-75"></div>
          <Phone size={24} />
        </a>
      </div>
    </section>
  );
};

export default TreeHero;
