
import React from 'react';
import { CheckCircle, Users, Award, Shield } from 'lucide-react';

const RoofingAboutUs = () => {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Roofing
              <span className="block text-slate-600">You Can Trust</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 20 years of experience, Elite Roofing Pro is your trusted partner for all roofing installation, repair, and maintenance needs. Our licensed contractors use premium materials and proven techniques to protect your most valuable investment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Licensed Contractors</h4>
                  <p className="text-gray-600 text-sm">Certified and experienced professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fully Bonded</h4>
                  <p className="text-gray-600 text-sm">Complete insurance protection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Skilled roofing specialists</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Top Rated</h4>
                  <p className="text-gray-600 text-sm">Highest quality service</p>
                </div>
              </div>
            </div>

            <a 
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional roofing team"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingAboutUs;
