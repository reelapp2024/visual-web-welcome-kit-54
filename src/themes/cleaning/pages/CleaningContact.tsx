
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningCTA from '../components/CleaningCTA';
import CleaningFooter from '../components/CleaningFooter';
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';

const CleaningContact = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      {/* Contact Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 to-emerald-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready for professional cleaning? Contact us today for a free quote and same-day booking.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-green-500 rounded-full p-4 mr-6">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-green-600">Same-day booking available</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-emerald-500 rounded-full p-4 mr-6">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@sparklecleanpro.com</p>
                    <p className="text-sm text-emerald-600">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-green-600 rounded-full p-4 mr-6">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Los Angeles County</p>
                    <p className="text-sm text-green-600">Free estimates in service area</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-emerald-600 rounded-full p-4 mr-6">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Service Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 7AM - 6PM</p>
                    <p className="text-sm text-emerald-600">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request Free Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Upholstery Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your cleaning needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CleaningCTA />
      <CleaningFooter />
    </div>
  );
};

export default CleaningContact;
