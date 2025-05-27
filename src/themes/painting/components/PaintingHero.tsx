
import React from 'react';
import { Phone, Clock, Paintbrush, Palette } from 'lucide-react';

const PaintingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden font-poppins">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Paintbrush className="w-12 h-12 text-pink-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Professional 
                <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Painting Services
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Transform your space with expert interior and exterior painting. 
              Quality finishes, premium materials, and satisfaction guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="tel:5551234567"
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 justify-center shadow-xl transform hover:scale-105"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                <span>Call Now: (555) 123-4567</span>
              </a>
              
              <a 
                href="/painting/contact"
                className="group bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 justify-center shadow-xl transform hover:scale-105"
              >
                <Palette size={24} />
                <span>Free Estimate</span>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Clock className="w-5 h-5 text-pink-300" />
                </div>
                <span className="text-purple-100">Same Day Estimates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Paintbrush className="w-5 h-5 text-pink-300" />
                </div>
                <span className="text-purple-100">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional painting services"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                  <Paintbrush className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Premium Quality</div>
                  <div className="text-gray-600 text-sm">Guaranteed Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingHero;
