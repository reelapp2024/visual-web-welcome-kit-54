
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Sparkles, Facebook, Twitter, Instagram } from 'lucide-react';

const CleaningFooter = () => {
  const navigate = useNavigate();

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
              <li><button onClick={() => navigate('/services/residential')} className="text-gray-300 hover:text-green-500 transition-colors">Residential Cleaning</button></li>
              <li><button onClick={() => navigate('/services/commercial')} className="text-gray-300 hover:text-green-500 transition-colors">Commercial Cleaning</button></li>
              <li><button onClick={() => navigate('/services/deep-cleaning')} className="text-gray-300 hover:text-green-500 transition-colors">Deep Cleaning</button></li>
              <li><button onClick={() => navigate('/services/upholstery')} className="text-gray-300 hover:text-green-500 transition-colors">Upholstery Cleaning</button></li>
              <li><button onClick={() => navigate('/services/laundry')} className="text-gray-300 hover:text-green-500 transition-colors">Laundry Services</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-green-500 transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/areas')} className="text-gray-300 hover:text-green-500 transition-colors">Service Areas</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-green-500 transition-colors">Contact Us</button></li>
              <li><button onClick={() => navigate('/cleaning/terms-conditions')} className="text-gray-300 hover:text-green-500 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => navigate('/cleaning/privacy-policy')} className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</button></li>
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
              <button onClick={() => navigate('/cleaning/terms-conditions')} className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms</button>
              <button onClick={() => navigate('/cleaning/privacy-policy')} className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy</button>
              <button onClick={() => navigate('/disclaimer')} className="text-gray-400 hover:text-green-500 text-sm transition-colors">Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CleaningFooter;
