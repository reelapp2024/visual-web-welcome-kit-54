
import React from 'react';
import { Phone, Clock, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricalHeader = () => {
  return (
    <header className="bg-gradient-to-r from-amber-900 to-yellow-900 text-white shadow-2xl relative overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span className="font-bold">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <span className="font-bold">⚡ Licensed Electricians • Fast Response Times ⚡</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/electrical" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                    ElectricPro
                  </h1>
                  <p className="text-sm text-yellow-200">Professional Electrical Services</p>
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link to="/electrical" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/electrical/about" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  About
                </Link>
                <Link to="/electrical/services" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Services
                </Link>
                <Link to="/electrical/areas" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Service Areas
                </Link>
                <Link to="/electrical/contact" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Contact
                </Link>
                <a 
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="md:hidden">
                <Menu className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ElectricalHeader;
