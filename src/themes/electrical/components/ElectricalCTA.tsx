
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const ElectricalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white font-poppins">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Electrical Service Now?
        </h2>
        <p className="text-xl mb-8 text-yellow-100">
          Don't wait for electrical problems to get worse. Call our licensed electricians today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:5551234567"
            className="bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-xl"
          >
            <Phone size={24} />
            <span>Call Now: (555) 123-4567</span>
          </a>
          <div className="flex items-center text-lg text-yellow-100">
            <Clock className="mr-2" size={20} />
            24/7 Emergency Service Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalCTA;
