
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const HVACFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-orange-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">CoolHeat Pro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional HVAC services you can trust. Available 24/7 for all your emergency and routine heating and cooling needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/hvac/services/emergency-hvac" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Emergency HVAC</a></li>
              <li><a href="/hvac/services/ac-repair" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Air Conditioning</a></li>
              <li><a href="/hvac/services/heating-repair" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Heating Systems</a></li>
              <li><a href="/hvac/services/hvac-installation" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">HVAC Installation</a></li>
              <li><a href="/hvac/services/duct-cleaning" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Duct Cleaning</a></li>
              <li><a href="/hvac/services/thermostat-services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Thermostat Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/hvac" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Home</a></li>
              <li><a href="/hvac/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">About Us</a></li>
              <li><a href="/hvac/services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Services</a></li>
              <li><a href="/hvac/areas" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Service Areas</a></li>
              <li><a href="/hvac/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Contact</a></li>
              <li><a href="/terms-conditions" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3" />
                <a href="tel:5551234567" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <a href="mailto:info@coolheatpro.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  info@coolheatpro.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  123 HVAC Street<br />
                  Los Angeles, CA 90210
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-3" />
                <div className="text-gray-300">
                  24/7 Emergency Service
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400">
            © 2024 CoolHeat Pro. All rights reserved. | Licensed & Insured HVAC Contractors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HVACFooter;
