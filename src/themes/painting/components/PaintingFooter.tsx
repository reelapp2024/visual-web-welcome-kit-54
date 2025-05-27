
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const PaintingFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">ColorPro Painting</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional interior and exterior painting services you can trust. Same-day estimates 
              and satisfaction guaranteed on all projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Interior Painting</a></li>
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Exterior Painting</a></li>
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Cabinet Painting</a></li>
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Color Consultation</a></li>
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Specialty Finishes</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/painting" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Home</a></li>
              <li><a href="/painting/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="/painting/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Services</a></li>
              <li><a href="/painting/areas" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Service Areas</a></li>
              <li><a href="/painting/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">info@colorpropainting.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Los Angeles, CA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Mon-Fri: 7AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ColorPro Painting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/disclaimer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PaintingFooter;
