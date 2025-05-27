
import React from 'react';
import { Phone, Star, Sparkles, CheckCircle } from 'lucide-react';

const CleaningHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white overflow-hidden min-h-[700px] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 4 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <Sparkles className="w-5 h-5 text-emerald-300 mr-2" />
            <span className="text-emerald-100 font-semibold">Professional Cleaning Services</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Sparkling Clean
            </span>
            <br />
            <span className="text-emerald-300">Every Time</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Professional residential and commercial cleaning services with eco-friendly products. 
            Same-day bookings available with 100% satisfaction guaranteed.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="tel:5551234567"
              className="group bg-white text-green-600 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl transform hover:scale-105 hover:shadow-3xl"
            >
              <Phone size={24} className="group-hover:animate-bounce" />
              <span>Call Now: (555) 123-4567</span>
            </a>
            
            <a 
              href="/cleaning/contact"
              className="group bg-emerald-500/80 backdrop-blur-sm hover:bg-emerald-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 border border-white/30 transform hover:scale-105"
            >
              <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
              <span>Free Quote</span>
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Eco-Friendly</h3>
              <p className="text-green-100 text-sm">Safe, green cleaning products</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5-Star Rated</h3>
              <p className="text-green-100 text-sm">500+ happy customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Same Day</h3>
              <p className="text-green-100 text-sm">Book today, clean today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningHero;
