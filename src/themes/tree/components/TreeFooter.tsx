
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const TreeFooter = () => {
  return (
    <footer className="bg-forest-900 text-white font-poppins">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/tree" className="text-2xl font-bold hover:text-nature-300 transition-colors">TreeCare Pro</a>
            <p className="text-forest-100 leading-relaxed">
              Professional tree removal, trimming, and care services for residential and commercial properties. 
              Certified arborists providing safe, efficient, and eco-friendly tree solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-forest-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-forest-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-forest-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/tree/services/tree-removal" className="text-forest-100 hover:text-white transition-colors duration-200">Tree Removal</a></li>
              <li><a href="/tree/services/tree-trimming" className="text-forest-100 hover:text-white transition-colors duration-200">Tree Trimming</a></li>
              <li><a href="/tree/services/stump-grinding" className="text-forest-100 hover:text-white transition-colors duration-200">Stump Grinding</a></li>
              <li><a href="/tree/services/emergency-tree-service" className="text-forest-100 hover:text-white transition-colors duration-200">Emergency Service</a></li>
              <li><a href="/tree/services/tree-health-assessment" className="text-forest-100 hover:text-white transition-colors duration-200">Tree Health Assessment</a></li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Areas We Serve</h4>
            <ul className="space-y-2">
              <li><a href="/tree/areas/downtown-district" className="text-forest-100 hover:text-white transition-colors duration-200">Downtown District</a></li>
              <li><a href="/tree/areas/greenwood-heights" className="text-forest-100 hover:text-white transition-colors duration-200">Greenwood Heights</a></li>
              <li><a href="/tree/areas/oak-valley" className="text-forest-100 hover:text-white transition-colors duration-200">Oak Valley</a></li>
              <li><a href="/tree/areas/pine-ridge" className="text-forest-100 hover:text-white transition-colors duration-200">Pine Ridge</a></li>
              <li><a href="/tree/areas/maple-grove" className="text-forest-100 hover:text-white transition-colors duration-200">Maple Grove</a></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact & Links</h4>
            <ul className="space-y-2">
              <li><a href="/tree" className="text-forest-100 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/tree/about" className="text-forest-100 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/tree/services" className="text-forest-100 hover:text-white transition-colors duration-200">All Services</a></li>
              <li><a href="/tree/areas" className="text-forest-100 hover:text-white transition-colors duration-200">Service Areas</a></li>
              <li><a href="/tree/contact" className="text-forest-100 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-forest-400" />
                <a href="tel:5551234567" className="text-forest-100 hover:text-white transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-forest-400" />
                <a href="mailto:info@treecarepro.com" className="text-forest-100 hover:text-white transition-colors">info@treecarepro.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-forest-400" />
                <span className="text-forest-100">Serving Metro Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Need Tree Care Today?</h4>
            <p className="text-forest-100 mb-6 max-w-2xl mx-auto">
              Call now for professional tree removal, trimming, and care services! We handle everything from emergency tree removal to routine maintenance.
            </p>
            <a href="tel:5551234567" className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-forest-400 text-sm">
              © 2024 TreeCare Pro. All rights reserved. Licensed & Insured Tree Care Services.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-forest-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-forest-400 hover:text-white text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="/disclaimer" className="text-forest-400 hover:text-white text-sm transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TreeFooter;
