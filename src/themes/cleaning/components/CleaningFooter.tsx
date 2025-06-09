
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Sparkles, Facebook, Twitter, Instagram } from 'lucide-react';

const CleaningFooter = () => {
  return (
    <footer className="bg-gray-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg mr-3">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SparkleClean Pro</h3>
                <p className="text-gray-400 text-sm">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional residential and commercial cleaning services with eco-friendly products and satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/residential" className="text-gray-300 hover:text-green-500 transition-colors">Residential Cleaning</Link></li>
              <li><Link to="/services/commercial" className="text-gray-300 hover:text-green-500 transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/services/deep-cleaning" className="text-gray-300 hover:text-green-500 transition-colors">Deep Cleaning</Link></li>
              <li><Link to="/services/upholstery" className="text-gray-300 hover:text-green-500 transition-colors">Upholstery Cleaning</Link></li>
              <li><Link to="/services/laundry" className="text-gray-300 hover:text-green-500 transition-colors">Laundry Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/areas" className="text-gray-300 hover:text-green-500 transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/cleaning/terms-conditions" className="text-gray-300 hover:text-green-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cleaning/privacy-policy" className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">info@sparklecleanpro.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Los Angeles, CA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Mon-Sat: 7AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SparkleClean Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/cleaning/terms-conditions" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms</Link>
              <Link to="/cleaning/privacy-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CleaningFooter;
