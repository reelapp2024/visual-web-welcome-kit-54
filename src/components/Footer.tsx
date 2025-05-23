
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="text-2xl font-bold hover:text-lime-300 transition-colors">JunkPro Hauling</a>
            <p className="text-gray-300 leading-relaxed">
              Professional junk removal and hauling services for residential and commercial properties. 
              Fast, reliable, and eco-friendly disposal solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/residential-junk-removal" className="text-gray-300 hover:text-white transition-colors duration-200">Residential Junk Removal</a></li>
              <li><a href="/services/commercial-cleanouts" className="text-gray-300 hover:text-white transition-colors duration-200">Commercial Cleanouts</a></li>
              <li><a href="/services/estate-cleanouts" className="text-gray-300 hover:text-white transition-colors duration-200">Estate Cleanouts</a></li>
              <li><a href="/services/furniture-removal" className="text-gray-300 hover:text-white transition-colors duration-200">Furniture Removal</a></li>
              <li><a href="/services/construction-debris" className="text-gray-300 hover:text-white transition-colors duration-200">Construction Debris</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="tel:5551234567" className="text-gray-300 hover:text-white transition-colors duration-200">Same-Day Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:5551234567" className="text-gray-300 hover:text-white transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:info@junkprohauling.com" className="text-gray-300 hover:text-white transition-colors">info@junkprohauling.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Serving Metro Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Need Junk Removed Today?</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Call now for same-day junk removal service! We handle everything from single items to complete property cleanouts.
            </p>
            <a href="tel:5551234567" className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 JunkPro Hauling. All rights reserved. Licensed & Insured Junk Removal Services.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Service Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
