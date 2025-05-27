
import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const RemodelingHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 py-12 md:py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">
                Kitchen & Bathroom
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Expert kitchen and bathroom remodeling services that bring your dream spaces to life. 
              Quality craftsmanship, modern designs, and exceptional service guaranteed.
            </p>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center justify-center lg:justify-start text-base lg:text-lg text-gray-700">
                <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                <span>Free Design Consultation</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-base lg:text-lg text-gray-700">
                <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                <span>Licensed & Insured Contractors</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-base lg:text-lg text-gray-700">
                <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Phone className="mr-2 lg:mr-3" size={20} />
                Call Now: (555) 123-4567
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Beautiful Kitchen Remodel" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white p-4 lg:p-6 rounded-2xl shadow-xl">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm lg:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-white p-4 lg:p-6 rounded-2xl shadow-xl">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-600">15+</div>
              <div className="text-sm lg:text-base text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingHero;
