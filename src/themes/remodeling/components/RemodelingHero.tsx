
import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const RemodelingHero = () => {
  return (
    <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent block">
                Kitchen & Bathroom
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert kitchen and bathroom remodeling services that bring your dream spaces to life. 
              Quality craftsmanship, modern designs, and exceptional service guaranteed.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-lg text-gray-700">
                <CheckCircle className="text-violet-600 mr-3" size={24} />
                <span>Free Design Consultation</span>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <CheckCircle className="text-violet-600 mr-3" size={24} />
                <span>Licensed & Insured Contractors</span>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <CheckCircle className="text-violet-600 mr-3" size={24} />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Phone className="mr-3" size={24} />
                Call Now: (555) 123-4567
              </a>
              <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Beautiful Kitchen Remodel" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-violet-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingHero;
