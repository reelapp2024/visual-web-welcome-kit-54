
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const RemodelingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white font-poppins">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Get your free consultation today and start your dream kitchen or bathroom remodel!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:5551234567"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-xl"
          >
            <Phone size={24} />
            <span>Call Now: (555) 123-4567</span>
          </a>
          <div className="flex items-center text-lg text-blue-100">
            <Clock className="mr-2" size={20} />
            Free Estimates Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingCTA;
