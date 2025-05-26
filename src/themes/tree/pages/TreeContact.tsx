
import React from 'react';
import TreeHeader from '../components/TreeHeader';
import Footer from '../../../components/Footer';
import { Phone, MapPin, Clock, Mail, CheckCircle } from 'lucide-react';

const TreeContact = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact
              <span className="block text-nature-300">TreeCare Pro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get your free estimate today from certified tree care professionals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us Now</h3>
                    <p className="text-lg text-gray-600 mb-2">24/7 Emergency Service Available</p>
                    <a href="tel:5551234567" className="text-2xl font-bold text-forest-600 hover:text-forest-700">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Service Areas</h3>
                    <p className="text-gray-600">
                      Downtown District, Greenwood Heights, Oak Valley, Pine Ridge, Maple Grove and surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                      <p className="font-semibold text-forest-600 mt-2">24/7 Emergency Response</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">For non-emergency inquiries</p>
                    <a href="mailto:info@treecarepro.com" className="text-forest-600 hover:text-forest-700 font-semibold">
                      info@treecarepro.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <div className="bg-gradient-to-br from-forest-500 to-nature-600 text-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready for Professional Tree Care?
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-nature-300 flex-shrink-0" />
                    <span>Free estimates on all tree services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-nature-300 flex-shrink-0" />
                    <span>Same-day emergency response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-nature-300 flex-shrink-0" />
                    <span>Certified arborists on every job</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-nature-300 flex-shrink-0" />
                    <span>Fully licensed and insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-nature-300 flex-shrink-0" />
                    <span>Eco-friendly disposal methods</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="tel:5551234567"
                    className="block w-full bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Call Now: (555) 123-4567
                  </a>
                  
                  <p className="text-center text-nature-200">
                    Or call for immediate emergency tree service
                  </p>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-forest-50 rounded-lg">
                    <div className="text-2xl font-bold text-forest-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-forest-50 rounded-lg">
                    <div className="text-2xl font-bold text-forest-600">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Service</div>
                  </div>
                  <div className="text-center p-3 bg-forest-50 rounded-lg">
                    <div className="text-2xl font-bold text-forest-600">100%</div>
                    <div className="text-sm text-gray-600">Licensed & Insured</div>
                  </div>
                  <div className="text-center p-3 bg-forest-50 rounded-lg">
                    <div className="text-2xl font-bold text-forest-600">5★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Emergency Tree Service Available 24/7
          </h3>
          <p className="text-lg mb-6">
            Storm damage? Fallen tree? Hazardous tree situation? We're here to help immediately.
          </p>
          <a 
            href="tel:5551234567"
            className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            Emergency Call: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreeContact;
