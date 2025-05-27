
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const RemodelingFooter = () => {
  return (
    <footer className="bg-gray-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Kitchen & Bathroom Remodeling
            </h3>
            <p className="text-gray-300 mb-6">
              Professional remodeling services that transform your space into the kitchen or bathroom of your dreams.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <Phone className="mr-3" size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="mr-3" size={20} />
              <span>info@remodeling.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/remodeling/services/kitchen-remodeling" className="hover:text-blue-400 transition-colors">Kitchen Remodeling</Link></li>
              <li><Link to="/remodeling/services/bathroom-remodeling" className="hover:text-blue-400 transition-colors">Bathroom Remodeling</Link></li>
              <li><Link to="/remodeling/services/custom-cabinets" className="hover:text-blue-400 transition-colors">Custom Cabinets</Link></li>
              <li><Link to="/remodeling/services/countertops" className="hover:text-blue-400 transition-colors">Countertops</Link></li>
              <li><Link to="/remodeling/services/design-consultation" className="hover:text-blue-400 transition-colors">Design Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/remodeling/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/remodeling/areas" className="hover:text-blue-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/remodeling/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1" size={20} />
                <span>123 Main Street<br />Your City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3" size={20} />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kitchen & Bathroom Remodeling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RemodelingFooter;
