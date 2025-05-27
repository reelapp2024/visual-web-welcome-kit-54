
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const RemodelingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const services = [
    { name: "Kitchen Remodeling", slug: "kitchen-remodeling" },
    { name: "Bathroom Remodeling", slug: "bathroom-remodeling" },
    { name: "Custom Cabinets", slug: "custom-cabinets" },
    { name: "Countertops", slug: "countertops" },
    { name: "Design Consultation", slug: "design-consultation" },
    { name: "Lighting Design", slug: "lighting-design" }
  ];

  return (
    <header className="bg-white shadow-lg relative z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <Link to="/remodeling" className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              Kitchen & Bathroom Remodeling
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/remodeling" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium transform hover:scale-105">Home</Link>
            <Link to="/remodeling/about" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium transform hover:scale-105">About</Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium transform hover:scale-105">
                Services
                <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/remodeling/services" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    View All Services
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/remodeling/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium transform hover:scale-105">
                Areas We Serve
                <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/remodeling/areas" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    All Areas
                  </Link>
                  <Link to="/remodeling/country" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    Country
                  </Link>
                  <Link to="/remodeling/state" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    State
                  </Link>
                  <Link to="/remodeling/city" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    City
                  </Link>
                  <Link to="/remodeling/local-area" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-1">
                    Local Area
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/remodeling/contact" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium transform hover:scale-105">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:5551234567" className="flex items-center text-amber-600 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
              <Phone size={18} className="mr-2" />
              <span className="font-semibold text-sm xl:text-base">(555) 123-4567</span>
            </a>
            <Link to="/remodeling/contact" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 xl:px-6 py-2 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm xl:text-base font-medium">
              Get Free Quote
            </Link>
          </div>

          <button 
            className="lg:hidden p-2 transition-all duration-300 hover:bg-amber-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-amber-600" /> : <Menu size={24} className="text-amber-600" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            <Link to="/remodeling" className="block py-3 text-gray-700 hover:text-amber-600 transition-all duration-200 border-b border-gray-100 transform hover:translate-x-2">Home</Link>
            <Link to="/remodeling/about" className="block py-3 text-gray-700 hover:text-amber-600 transition-all duration-200 border-b border-gray-100 transform hover:translate-x-2">About</Link>
            
            <div className="border-b border-gray-100">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-amber-600 transition-all duration-200"
              >
                Services
                <ChevronDown size={16} className={`transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                  <Link to="/remodeling/services" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">View All Services</Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/remodeling/services/${service.slug}`}
                      className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100">
              <button 
                onClick={() => setIsAreasOpen(!isAreasOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-amber-600 transition-all duration-200"
              >
                Areas We Serve
                <ChevronDown size={16} className={`transform transition-transform duration-300 ${isAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAreasOpen && (
                <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                  <Link to="/remodeling/areas" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">All Areas</Link>
                  <Link to="/remodeling/country" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">Country</Link>
                  <Link to="/remodeling/state" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">State</Link>
                  <Link to="/remodeling/city" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">City</Link>
                  <Link to="/remodeling/local-area" className="block py-2 text-gray-600 hover:text-amber-600 text-sm transition-all duration-200 transform hover:translate-x-1">Local Area</Link>
                </div>
              )}
            </div>

            <Link to="/remodeling/contact" className="block py-3 text-gray-700 hover:text-amber-600 transition-all duration-200 transform hover:translate-x-2">Contact</Link>
            <div className="pt-3 space-y-3">
              <a href="tel:5551234567" className="block text-amber-600 font-semibold transition-all duration-200 hover:text-orange-600">Call: (555) 123-4567</a>
              <Link to="/remodeling/contact" className="block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default RemodelingHeader;
