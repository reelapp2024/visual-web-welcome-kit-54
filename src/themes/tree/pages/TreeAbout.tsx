
import React from 'react';
import TreeHeader from '../components/TreeHeader';
import Footer from '../../../components/Footer';
import { Users, Award, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const TreeAbout = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-nature-300">TreeCare Pro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional tree care services with certified arborists and 24/7 emergency response
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Tree Care Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in professional tree care, TreeCare Pro has been serving our community with reliable, safe, and eco-friendly tree services. Our team of certified arborists is dedicated to preserving the health and beauty of your trees while ensuring the safety of your property.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand that trees are valuable assets to your property, and our mission is to provide expert care that extends their life while maintaining their natural beauty. From emergency storm damage to routine maintenance, we're here 24/7 to serve you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional arborist team"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-nature-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TreeCare Pro?
            </h2>
            <p className="text-xl text-gray-600">
              Professional expertise you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Arborists</h3>
              <p className="text-gray-600">ISA certified professionals with extensive tree care knowledge</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency tree removal and storm cleanup</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete liability and workers compensation coverage</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with state-of-the-art equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISA Certified</h3>
              <p className="text-gray-600">International Society of Arboriculture certified professionals</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Shield size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Bonded</h3>
              <p className="text-gray-600">Fully licensed tree care company with comprehensive bonding</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Star size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Consistently rated 5 stars by satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Tree Care?
          </h2>
          <p className="text-xl mb-8">
            Contact our certified arborists today for a free estimate on your tree care needs.
          </p>
          <a 
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreeAbout;
