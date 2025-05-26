
import React, { useState } from 'react';
import { Menu, X, Heart, Star } from 'lucide-react';

const PetHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/pet' },
    { name: 'About', href: '/pet/about' },
    { name: 'Services', href: '/pet/services' },
    { name: 'Areas', href: '/pet/areas' },
    { name: 'Contact', href: '/pet/contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-pet-500 via-paw-500 to-pet-600 shadow-lg sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Playful Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <Heart className="text-pet-500 animate-pulse" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-paw-400 rounded-full flex items-center justify-center">
                <Star className="text-white" size={12} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Paws & Clean
              </h1>
              <p className="text-pet-100 text-sm">Pet Waste Experts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-pet-200 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-full group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <a
              href="tel:5551234567"
              className="bg-white text-pet-600 px-6 py-3 rounded-full font-bold hover:bg-pet-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📞 Call Now!
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pet-200 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-pet-600/20 backdrop-blur-sm rounded-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-pet-200 block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 block px-4 py-3 rounded-lg font-bold hover:bg-pet-50 transition-colors text-center mt-4"
              >
                📞 Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PetHeader;
