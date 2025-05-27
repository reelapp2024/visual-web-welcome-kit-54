
import React from 'react';
import { Zap, Shield, Clock, Award } from 'lucide-react';

const ElectricalAboutUs = () => {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              Professional Electrical Services You Can Trust
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience serving the community, we're your trusted local electrical contractors providing safe, reliable, and code-compliant electrical solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Happy Customers</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-amber-500 mr-4" />
                <span className="text-gray-700">Licensed & Certified Electricians</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-amber-500 mr-4" />
                <span className="text-gray-700">Fully Bonded & Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-amber-500 mr-4" />
                <span className="text-gray-700">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-amber-500 mr-4" />
                <span className="text-gray-700">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional Electrician at Work"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalAboutUs;
