
import React from 'react';
import { Phone, Clock, Thermometer, Wind, Shield, Award, Star, CheckCircle } from 'lucide-react';

const HVACHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-[800px] flex items-center font-poppins">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span className="text-orange-200 font-semibold">5-Star HVAC Service</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-white">HVAC Solutions</span>
              <br />
              <span className="text-2xl md:text-4xl font-normal text-blue-200">
                When You Need Them Most
              </span>
            </h1>
            
            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-100">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-100">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-100">Free Estimates</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-100">Satisfaction Guaranteed</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:5551234567"
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl transform hover:scale-105 hover:shadow-orange-500/25"
              >
                <Phone size={28} className="group-hover:animate-pulse" />
                <span>Call Now: (555) 123-4567</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="/hvac/services"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-4 border border-white/30 transform hover:scale-105"
              >
                <Clock size={28} />
                <span>View All Services</span>
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Stats */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-300">Why Choose CoolHeat Pro?</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-4 mx-auto w-fit transform group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-orange-200">Emergency<br />Response</div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 mb-4 mx-auto w-fit transform group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">20+</div>
                  <div className="text-blue-200">Years<br />Experience</div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 mb-4 mx-auto w-fit transform group-hover:scale-110 transition-transform duration-300">
                    <Thermometer className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-green-200">Satisfaction<br />Guarantee</div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-4 mx-auto w-fit transform group-hover:scale-110 transition-transform duration-300">
                    <Wind className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">5000+</div>
                  <div className="text-purple-200">Happy<br />Customers</div>
                </div>
              </div>
            </div>
            
            {/* Emergency Call Box */}
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 rounded-3xl p-8 shadow-2xl border border-white/20 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4">
                <Phone className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">HVAC Emergency?</h3>
              <p className="text-orange-100 mb-6 text-lg">We're available right now!</p>
              <a 
                href="tel:5551234567"
                className="block w-full bg-white text-red-600 text-center py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Emergency Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACHero;
