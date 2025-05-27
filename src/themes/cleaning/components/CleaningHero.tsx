
import React from 'react';
import { Phone, Star, Sparkles } from 'lucide-react';

const CleaningHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
              <span className="text-emerald-300 font-semibold">Professional Cleaning Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sparkling Clean
              <span className="block text-emerald-300">Every Time</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Professional residential and commercial cleaning services with eco-friendly products. 
              Same-day bookings available with satisfaction guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="tel:5551234567"
                className="group bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto shadow-xl transform hover:scale-105"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                <span>Call Now: (555) 123-4567</span>
              </a>
              
              <a 
                href="/cleaning/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto shadow-xl transform hover:scale-105"
              >
                <Sparkles size={24} />
                <span>Free Quote</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-green-100">4.9/5 Rating</span>
              </div>
              <div className="text-green-100">
                <span className="font-bold">500+</span> Happy Customers
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional cleaning service"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningHero;
