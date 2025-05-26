
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const RoofingFooter = () => {
  return (
    <footer className="bg-slate-900 text-white font-poppins">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/roofing" className="text-2xl font-bold hover:text-orange-300 transition-colors">Elite Roofing Pro</a>
            <p className="text-slate-100 leading-relaxed">
              Professional roofing installation, repair, and maintenance services for residential and commercial properties. 
              Licensed contractors providing quality workmanship with premium materials and reliable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/roofing/services/roof-installation" className="text-slate-100 hover:text-white transition-colors duration-200">Roof Installation</a></li>
              <li><a href="/roofing/services/roof-repair" className="text-slate-100 hover:text-white transition-colors duration-200">Roof Repair</a></li>
              <li><a href="/roofing/services/roof-replacement" className="text-slate-100 hover:text-white transition-colors duration-200">Roof Replacement</a></li>
              <li><a href="/roofing/services/emergency-roof-service" className="text-slate-100 hover:text-white transition-colors duration-200">Emergency Service</a></li>
              <li><a href="/roofing/services/roof-inspection" className="text-slate-100 hover:text-white transition-colors duration-200">Roof Inspection</a></li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Areas We Serve</h4>
            <ul className="space-y-2">
              <li><a href="/roofing/areas/central-business-district" className="text-slate-100 hover:text-white transition-colors duration-200">Central Business District</a></li>
              <li><a href="/roofing/areas/highland-park" className="text-slate-100 hover:text-white transition-colors duration-200">Highland Park</a></li>
              <li><a href="/roofing/areas/riverside-commons" className="text-slate-100 hover:text-white transition-colors duration-200">Riverside Commons</a></li>
              <li><a href="/roofing/areas/summit-ridge" className="text-slate-100 hover:text-white transition-colors duration-200">Summit Ridge</a></li>
              <li><a href="/roofing/areas/valley-view" className="text-slate-100 hover:text-white transition-colors duration-200">Valley View</a></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact & Links</h4>
            <ul className="space-y-2">
              <li><a href="/roofing" className="text-slate-100 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/roofing/about" className="text-slate-100 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/roofing/services" className="text-slate-100 hover:text-white transition-colors duration-200">All Services</a></li>
              <li><a href="/roofing/areas" className="text-slate-100 hover:text-white transition-colors duration-200">Service Areas</a></li>
              <li><a href="/roofing/contact" className="text-slate-100 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-slate-400" />
                <a href="tel:5551234567" className="text-slate-100 hover:text-white transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-slate-400" />
                <a href="mailto:info@eliteroofingpro.com" className="text-slate-100 hover:text-white transition-colors">info@eliteroofingpro.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-slate-400" />
                <span className="text-slate-100">Serving Metro Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Need Roofing Services Today?</h4>
            <p className="text-slate-100 mb-6 max-w-2xl mx-auto">
              Call now for professional roofing installation, repair, and maintenance services! We handle everything from emergency repairs to complete roof replacement.
            </p>
            <a href="tel:5551234567" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Elite Roofing Pro. All rights reserved. Licensed & Bonded Roofing Services.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="/disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RoofingFooter;
