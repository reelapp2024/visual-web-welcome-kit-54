
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
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/remodeling" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Kitchen & Bathroom Remodeling
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/remodeling" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/remodeling/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/remodeling/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    View All Services
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/remodeling/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Areas We Serve
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/remodeling/areas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    All Areas
                  </Link>
                  <Link to="/remodeling/country" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Country
                  </Link>
                  <Link to="/remodeling/state" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    State
                  </Link>
                  <Link to="/remodeling/city" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    City
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/remodeling/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:5551234567" className="flex items-center text-blue-600 hover:text-cyan-600 transition-colors duration-200">
              <Phone size={20} className="mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <Link to="/remodeling/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
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
            <Link to="/remodeling" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/remodeling/about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
            
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Services
                <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/remodeling/services" className="block py-1 text-gray-600 hover:text-blue-600">View All Services</Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/remodeling/services/${service.slug}`}
                      className="block py-1 text-gray-600 hover:text-blue-600"
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
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Areas We Serve
                <ChevronDown size={16} className={`transform transition-transform ${isAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAreasOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/remodeling/areas" className="block py-1 text-gray-600 hover:text-blue-600">All Areas</Link>
                  <Link to="/remodeling/country" className="block py-1 text-gray-600 hover:text-blue-600">Country</Link>
                  <Link to="/remodeling/state" className="block py-1 text-gray-600 hover:text-blue-600">State</Link>
                  <Link to="/remodeling/city" className="block py-1 text-gray-600 hover:text-blue-600">City</Link>
                </div>
              )}
            </div>

            <Link to="/remodeling/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
            <a href="tel:5551234567" className="block py-2 text-blue-600 font-semibold">Call: (555) 123-4567</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default RemodelingHeader;
