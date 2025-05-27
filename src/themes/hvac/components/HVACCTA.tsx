
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const HVACCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
          Need Emergency HVAC Service?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Don't let heating or cooling problems leave you uncomfortable. Our expert technicians are available 24/7 
          to handle any emergency with fast, reliable service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="tel:5551234567"
            className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
          >
            <Phone size={24} className="group-hover:animate-pulse" />
            <span>Call Now: (555) 123-4567</span>
          </a>
          
          <a 
            href="/hvac/contact"
            className="group bg-red-500 hover:bg-red-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
          >
            <Clock size={24} />
            <span>Schedule Service</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HVACCTA;
