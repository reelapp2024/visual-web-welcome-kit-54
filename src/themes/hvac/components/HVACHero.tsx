
import React from 'react';
import { Phone, Clock, Thermometer, Wind } from 'lucide-react';

const HVACHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[600px] flex items-center font-poppins">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/95 to-red-600/95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 rounded-full p-3 mr-4">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/20 rounded-full p-3">
                <Wind className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert HVAC Services
              <span className="block text-orange-200">You Can Trust</span>
            </h1>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Professional heating, ventilation, and air conditioning services. 
              24/7 emergency repairs, installations, and maintenance for your home and business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="tel:5551234567"
                className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                <span>Call Now: (555) 123-4567</span>
              </a>
              
              <a 
                href="/hvac/services"
                className="group bg-red-500 hover:bg-red-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
              >
                <Clock size={24} />
                <span>View Services</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-orange-200 text-sm">Emergency Service</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-orange-200 text-sm">Years Experience</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-orange-200 text-sm">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional HVAC technician at work"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-6 shadow-xl animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3">
                  <Thermometer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Licensed & Insured</div>
                  <div className="text-gray-600 text-sm">Certified Technicians</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl animate-scale-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Same Day Service</div>
                  <div className="text-gray-600 text-sm">Emergency Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACHero;
