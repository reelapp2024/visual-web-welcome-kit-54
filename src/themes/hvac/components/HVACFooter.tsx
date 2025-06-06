
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const HVACFooter = () => {
  const navigate = useNavigate();

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
              <button className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-orange-600 p-2 rounded-full transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('/services/emergency-hvac')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Emergency HVAC</button></li>
              <li><button onClick={() => navigate('/services/ac-repair')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Air Conditioning</button></li>
              <li><button onClick={() => navigate('/services/heating-repair')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Heating Systems</button></li>
              <li><button onClick={() => navigate('/services/hvac-installation')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">HVAC Installation</button></li>
              <li><button onClick={() => navigate('/services/duct-cleaning')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Duct Cleaning</button></li>
              <li><button onClick={() => navigate('/services/thermostat-services')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Thermostat Services</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('/')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => navigate('/services')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Services</button></li>
              <li><button onClick={() => navigate('/areas')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Service Areas</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Contact</button></li>
              <li><button onClick={() => navigate('/hvac/privacy-policy')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Privacy Policy</button></li>
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 CoolHeat Pro. All rights reserved. | Licensed & Insured HVAC Contractors
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => navigate('/hvac/terms-conditions')} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Terms & Conditions
              </button>
              <button onClick={() => navigate('/hvac/privacy-policy')} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/disclaimer')} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HVACFooter;
