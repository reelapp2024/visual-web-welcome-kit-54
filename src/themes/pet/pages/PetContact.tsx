
import React, { useState } from 'react';
import PetHeader from '../components/PetHeader';
import PetFooter from '../components/PetFooter';
import { Phone, Mail, MapPin, Clock, Heart, Star } from 'lucide-react';

const PetContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petInfo: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pet contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pet-100 to-paw-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl text-pet-300 animate-bounce">🐕</div>
        <div className="absolute bottom-10 right-10 text-3xl text-paw-300 animate-bounce delay-1000">📞</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">
                Pet Care Team 🐾
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to give your pet the clean, healthy yard they deserve? Let's chat about your pet waste removal needs!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch 📞</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4 bg-pet-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <a href="tel:5551234567" className="text-pet-600 font-semibold text-lg hover:text-pet-500 transition-colors">
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-sm">Free quotes available!</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-paw-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-paw-500 to-pet-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <a href="mailto:hello@pawsandclean.com" className="text-paw-600 font-semibold text-lg hover:text-paw-500 transition-colors">
                      hello@pawsandclean.com
                    </a>
                    <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-pet-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Service Hours</h3>
                    <p className="text-gray-800 font-semibold">Monday - Saturday</p>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Happy customers */}
              <div className="bg-gradient-to-r from-pet-500 to-paw-500 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="animate-pulse" size={24} />
                  <h3 className="font-bold text-xl">Join 500+ Happy Pet Families!</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-300 fill-current" size={16} />
                    ))}
                  </div>
                  <span className="text-pet-100">5.0 Customer Rating</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-pet-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Get Your Free Quote 🐾
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="petInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your pets 🐕
                    </label>
                    <input
                      type="text"
                      id="petInfo"
                      name="petInfo"
                      value={formData.petInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-500 focus:border-transparent transition-colors"
                      placeholder="2 dogs, large backyard"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-500 focus:border-transparent transition-colors"
                      placeholder="Any specific needs or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pet-500 to-paw-500 hover:from-pet-400 hover:to-paw-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🐾 Get My Free Quote!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PetFooter />
    </div>
  );
};

export default PetContact;
