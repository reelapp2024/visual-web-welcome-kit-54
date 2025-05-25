
import React from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Residential Junk Removal', slug: 'residential-junk-removal' },
    { name: 'Commercial Cleanouts', slug: 'commercial-cleanouts' },
    { name: 'Estate Cleanouts', slug: 'estate-cleanouts' },
    { name: 'Furniture Removal', slug: 'furniture-removal' },
    { name: 'Construction Debris', slug: 'construction-debris' }
  ];

  const areas = [
    { name: 'Downtown Metro', slug: 'downtown-metro' },
    { name: 'North Hills', slug: 'north-hills' },
    { name: 'Westside District', slug: 'westside-district' },
    { name: 'East Valley', slug: 'east-valley' },
    { name: 'South Bay Area', slug: 'south-bay-area' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 font-poppins">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <a href="tel:5551234567" className="font-medium hover:text-lime-200 transition-colors">(555) 123-4567</a>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>Same-Day Junk Removal Available</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold">Licensed • Insured • Local Hauling Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-electric-600 bg-clip-text text-transparent">
              JunkPro Hauling
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-brand-600 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-gray-700 hover:text-brand-600 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-brand-600 transition-all duration-300 font-medium relative group">
                Services
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug}>
                    <a href={`/services/${service.slug}`} className="w-full text-gray-700 hover:text-brand-600">
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a href="/services" className="w-full text-brand-600 font-semibold">
                    View All Services
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Areas We Serve Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-brand-600 transition-all duration-300 font-medium relative group">
                Areas We Serve
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {areas.map((area) => (
                  <DropdownMenuItem key={area.slug}>
                    <a href={`/areas/${area.slug}`} className="w-full text-gray-700 hover:text-brand-600">
                      {area.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a href="/areas" className="w-full text-brand-600 font-semibold">
                    View All Areas
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/contact" className="text-gray-700 hover:text-brand-600 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:5551234567" className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-black px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-slow">
              CALL NOW: (555) 123-4567
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md font-medium">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md font-medium">About</a>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <a key={service.slug} href={`/services/${service.slug}`} className="block py-1 text-sm text-gray-600 hover:text-brand-600">
                      {service.name}
                    </a>
                  ))}
                  <a href="/services" className="block py-1 text-sm text-brand-600 font-semibold">View All Services</a>
                </div>
              </div>

              {/* Mobile Areas */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Areas We Serve</div>
                <div className="pl-4 space-y-1">
                  {areas.map((area) => (
                    <a key={area.slug} href={`/areas/${area.slug}`} className="block py-1 text-sm text-gray-600 hover:text-brand-600">
                      {area.name}
                    </a>
                  ))}
                  <a href="/areas" className="block py-1 text-sm text-brand-600 font-semibold">View All Areas</a>
                </div>
              </div>

              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md font-medium">Contact</a>
              <div className="px-3 py-2">
                <a href="tel:5551234567" className="block w-full bg-gradient-to-r from-lime-500 to-lime-600 text-black px-4 py-2 rounded-full font-bold text-sm text-center">
                  CALL NOW: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
