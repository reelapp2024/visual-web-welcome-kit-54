
import React from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">BlogSpace</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Articles</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Search and User Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Articles</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
