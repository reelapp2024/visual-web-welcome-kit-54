
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const RoofingFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-900 text-white font-poppins">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => navigate('/')} className="text-2xl font-bold hover:text-orange-300 transition-colors">Elite Roofing Pro</button>
            <p className="text-slate-100 leading-relaxed">
              Professional roofing installation, repair, and maintenance services for residential and commercial properties. 
              Licensed contractors providing quality workmanship with premium materials and reliable service.
            </p>
            <div className="flex space-x-4">
              <button className="text-slate-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/services/roof-installation')} className="text-slate-100 hover:text-white transition-colors duration-200">Roof Installation</button></li>
              <li><button onClick={() => navigate('/services/roof-repair')} className="text-slate-100 hover:text-white transition-colors duration-200">Roof Repair</button></li>
              <li><button onClick={() => navigate('/services/roof-replacement')} className="text-slate-100 hover:text-white transition-colors duration-200">Roof Replacement</button></li>
              <li><button onClick={() => navigate('/services/emergency-roof-service')} className="text-slate-100 hover:text-white transition-colors duration-200">Emergency Service</button></li>
              <li><button onClick={() => navigate('/services/roof-inspection')} className="text-slate-100 hover:text-white transition-colors duration-200">Roof Inspection</button></li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Areas We Serve</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/areas/central-business-district')} className="text-slate-100 hover:text-white transition-colors duration-200">Central Business District</button></li>
              <li><button onClick={() => navigate('/areas/highland-park')} className="text-slate-100 hover:text-white transition-colors duration-200">Highland Park</button></li>
              <li><button onClick={() => navigate('/areas/riverside-commons')} className="text-slate-100 hover:text-white transition-colors duration-200">Riverside Commons</button></li>
              <li><button onClick={() => navigate('/areas/summit-ridge')} className="text-slate-100 hover:text-white transition-colors duration-200">Summit Ridge</button></li>
              <li><button onClick={() => navigate('/areas/valley-view')} className="text-slate-100 hover:text-white transition-colors duration-200">Valley View</button></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact & Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="text-slate-100 hover:text-white transition-colors duration-200">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="text-slate-100 hover:text-white transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => navigate('/services')} className="text-slate-100 hover:text-white transition-colors duration-200">All Services</button></li>
              <li><button onClick={() => navigate('/areas')} className="text-slate-100 hover:text-white transition-colors duration-200">Service Areas</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-slate-100 hover:text-white transition-colors duration-200">Contact</button></li>
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
              <button onClick={() => navigate('/roofing/privacy-policy')} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/roofing/terms-conditions')} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms & Conditions
              </button>
              <button onClick={() => navigate('/disclaimer')} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RoofingFooter;
