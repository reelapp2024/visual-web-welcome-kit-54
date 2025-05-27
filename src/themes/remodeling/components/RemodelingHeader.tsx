
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const RemodelingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/remodeling" className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Kitchen & Bathroom Remodeling
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/remodeling" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">Home</Link>
            <Link to="/remodeling/about" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">About</Link>
            <Link to="/remodeling/services" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">Services</Link>
            <Link to="/remodeling/areas" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">Service Areas</Link>
            <Link to="/remodeling/contact" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:5551234567" className="flex items-center text-violet-600 hover:text-purple-600 transition-colors duration-200">
              <Phone size={20} className="mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <Link to="/remodeling/contact" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link to="/remodeling" className="block py-2 text-gray-700 hover:text-violet-600 transition-colors duration-200">Home</Link>
            <Link to="/remodeling/about" className="block py-2 text-gray-700 hover:text-violet-600 transition-colors duration-200">About</Link>
            <Link to="/remodeling/services" className="block py-2 text-gray-700 hover:text-violet-600 transition-colors duration-200">Services</Link>
            <Link to="/remodeling/areas" className="block py-2 text-gray-700 hover:text-violet-600 transition-colors duration-200">Service Areas</Link>
            <Link to="/remodeling/contact" className="block py-2 text-gray-700 hover:text-violet-600 transition-colors duration-200">Contact</Link>
            <a href="tel:5551234567" className="block py-2 text-violet-600 font-semibold">Call: (555) 123-4567</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default RemodelingHeader;
