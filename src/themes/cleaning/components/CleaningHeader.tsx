
import React from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

const CleaningHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/cleaning' },
    { name: 'About', href: '/cleaning/about' },
    { name: 'Services', href: '/cleaning/services' },
    { name: 'Areas', href: '/cleaning/areas' },
    { name: 'Contact', href: '/cleaning/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg mr-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                SparkleClean Pro
              </h1>
              <p className="text-sm text-gray-600">Professional Residential & Commercial Cleaning</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CleaningHeader;
