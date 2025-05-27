
import React, { useState } from 'react';
import { Phone, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const services = [
    { name: 'Emergency Electrical Repair', slug: 'emergency-electrical-repair' },
    { name: 'Residential Electrical', slug: 'residential-electrical' },
    { name: 'Commercial Electrical', slug: 'commercial-electrical' },
    { name: 'Electrical Inspection', slug: 'electrical-inspection' },
    { name: 'Panel Upgrades', slug: 'panel-upgrades' },
    { name: 'Surge Protection', slug: 'surge-protection' }
  ];

  const areas = [
    { name: 'Country', path: '/electrical/country' },
    { name: 'States', path: '/electrical/states' },
    { name: 'Cities', path: '/electrical/cities' },
    { name: 'Local Areas', path: '/electrical/areas' }
  ];

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

              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/electrical" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/electrical/about" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  About
                </Link>
                
                <div className="relative group">
                  <button className="text-white hover:text-yellow-400 transition-colors font-medium flex items-center">
                    Services
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      <Link to="/electrical/services" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        View All Services
                      </Link>
                      <div className="border-t border-gray-100 my-2"></div>
                      {services.map((service) => (
                        <Link 
                          key={service.slug} 
                          to={`/electrical/services/${service.slug}`} 
                          className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="text-white hover:text-yellow-400 transition-colors font-medium flex items-center">
                    Areas We Serve
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {areas.map((area) => (
                        <Link 
                          key={area.path} 
                          to={area.path} 
                          className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

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

              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="space-y-4">
                  <Link 
                    to="/electrical" 
                    className="block text-white hover:text-yellow-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/electrical/about" 
                    className="block text-white hover:text-yellow-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  <div>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full text-white hover:text-yellow-400 transition-colors font-medium"
                    >
                      Services
                      <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link 
                          to="/electrical/services" 
                          className="block text-yellow-200 hover:text-yellow-400 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                        {services.map((service) => (
                          <Link 
                            key={service.slug} 
                            to={`/electrical/services/${service.slug}`} 
                            className="block text-yellow-200 hover:text-yellow-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button 
                      onClick={() => setIsAreasOpen(!isAreasOpen)}
                      className="flex items-center justify-between w-full text-white hover:text-yellow-400 transition-colors font-medium"
                    >
                      Areas We Serve
                      <ChevronDown size={16} className={`transition-transform ${isAreasOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isAreasOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        {areas.map((area) => (
                          <Link 
                            key={area.path} 
                            to={area.path} 
                            className="block text-yellow-200 hover:text-yellow-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {area.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link 
                    to="/electrical/contact" 
                    className="block text-white hover:text-yellow-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <a 
                    href="tel:5551234567"
                    className="block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now: (555) 123-4567
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ElectricalHeader;
