
import React from 'react';
import { Phone, MapPin, Clock, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricalFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  ElectricPro
                </h3>
                <p className="text-yellow-200 text-sm">Professional Electrical Services</p>
              </div>
            </div>
            <p className="text-yellow-100 mb-6 leading-relaxed">
              Licensed, insured, and trusted electrical professionals providing 24/7 emergency service and quality electrical solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-yellow-200">
                <Phone size={16} className="mr-3 text-yellow-400" />
                <span className="font-bold">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-yellow-200">
                <Clock size={16} className="mr-3 text-yellow-400" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/electrical" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/electrical/about" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/electrical/services" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/electrical/areas" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/electrical/contact" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Our Services</h4>
            <ul className="space-y-3 text-yellow-100">
              <li>Emergency Electrical Repair</li>
              <li>Panel Upgrades</li>
              <li>Residential Electrical</li>
              <li>Commercial Electrical</li>
              <li>Electrical Inspections</li>
              <li>Surge Protection</li>
              <li>Outlet Installation</li>
              <li>Lighting Installation</li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Emergency Service</h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h5 className="font-bold text-white mb-2">24/7 Available</h5>
                <p className="text-yellow-100 text-sm mb-4">
                  Electrical emergencies can't wait. We're here when you need us most.
                </p>
              </div>
              <a 
                href="tel:5551234567"
                className="block w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black text-center py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              >
                Emergency: (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <h4 className="text-xl font-bold mb-6 text-yellow-400 text-center">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="text-yellow-100">Downtown District</div>
            <div className="text-yellow-100">Greenwood Heights</div>
            <div className="text-yellow-100">Oak Valley</div>
            <div className="text-yellow-100">Pine Ridge</div>
            <div className="text-yellow-100">Maple Grove</div>
            <div className="text-yellow-100">Riverside District</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-200 text-sm mb-4 md:mb-0">
            © 2024 ElectricPro. All rights reserved. Licensed & Insured Electrical Contractor.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ElectricalFooter;
