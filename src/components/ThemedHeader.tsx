import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useContent } from '../context/ContentContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentTheme } = useTheme();
  const { content } = useContent();

  const headerStyle = {
    '--brand-color': currentTheme.colors.primary,
    '--brand-secondary': currentTheme.colors.secondary,
    '--brand-accent': currentTheme.colors.accent,
  } as React.CSSProperties;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 font-poppins" style={headerStyle}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-secondary)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <a href={`tel:${currentTheme.phone.replace(/[^\d]/g, '')}`} className="font-medium hover:text-lime-200 transition-colors">
                  {currentTheme.phone}
                </a>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>Same-Day Service Available</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold">Licensed • Insured • Local Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-bold" style={{ color: currentTheme.colors.primary }}>
              {currentTheme.brandName}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="/" className="text-gray-700 hover:text-[var(--brand-color)] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-gray-700 hover:text-[var(--brand-color)] transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[var(--brand-color)] transition-all duration-300 font-medium relative group outline-none">
                Services
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 min-w-[250px] p-2">
                {content.services.map((service) => (
                  <DropdownMenuItem key={service.slug} className="p-0">
                    <a 
                      href={`/services/${service.slug}`} 
                      className="w-full px-4 py-3 text-gray-700 hover:text-[var(--brand-color)] hover:bg-gray-50 rounded-md transition-all duration-200 font-medium block"
                    >
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="p-0 border-t border-gray-100 mt-2 pt-2">
                  <a 
                    href="/services" 
                    className="w-full px-4 py-3 font-semibold hover:bg-gray-50 rounded-md transition-all duration-200 block"
                    style={{ color: currentTheme.colors.primary }}
                  >
                    View All Services
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[var(--brand-color)] transition-all duration-300 font-medium relative group outline-none">
                Areas We Serve
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 min-w-[220px] p-2">
                {content.areas.map((area) => (
                  <DropdownMenuItem key={area.slug} className="p-0">
                    <a 
                      href={`/areas/${area.slug}`} 
                      className="w-full px-4 py-3 text-gray-700 hover:text-[var(--brand-color)] hover:bg-gray-50 rounded-md transition-all duration-200 font-medium block"
                    >
                      {area.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="p-0 border-t border-gray-100 mt-2 pt-2">
                  <a 
                    href="/areas" 
                    className="w-full px-4 py-3 font-semibold hover:bg-gray-50 rounded-md transition-all duration-200 block"
                    style={{ color: currentTheme.colors.primary }}
                  >
                    View All Areas
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/contact" className="text-gray-700 hover:text-[var(--brand-color)] transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${currentTheme.phone.replace(/[^\d]/g, '')}`} 
              className="px-4 lg:px-6 py-2 rounded-full font-bold text-sm text-black transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-slow"
              style={{ 
                background: `linear-gradient(to right, ${currentTheme.colors.accent}, ${currentTheme.colors.secondary})` 
              }}
            >
              CALL NOW: {currentTheme.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-[var(--brand-color)] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-[var(--brand-color)] hover:bg-gray-50 rounded-md font-medium transition-all duration-200">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-[var(--brand-color)] hover:bg-gray-50 rounded-md font-medium transition-all duration-200">About</a>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-semibold mb-3 text-base">Services</div>
                <div className="pl-4 space-y-2">
                  {content.services.map((service) => (
                    <a key={service.slug} href={`/services/${service.slug}`} className="block py-2 text-sm text-gray-600 hover:text-[var(--brand-color)] transition-colors duration-200 font-medium">
                      {service.name}
                    </a>
                  ))}
                  <a 
                    href="/services" 
                    className="block py-2 text-sm font-semibold border-t border-gray-100 pt-3 mt-2"
                    style={{ color: currentTheme.colors.primary }}
                  >
                    View All Services
                  </a>
                </div>
              </div>

              {/* Mobile Areas */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-semibold mb-3 text-base">Areas We Serve</div>
                <div className="pl-4 space-y-2">
                  {content.areas.map((area) => (
                    <a key={area.slug} href={`/areas/${area.slug}`} className="block py-2 text-sm text-gray-600 hover:text-[var(--brand-color)] transition-colors duration-200 font-medium">
                      {area.name}
                    </a>
                  ))}
                  <a 
                    href="/areas" 
                    className="block py-2 text-sm font-semibold border-t border-gray-100 pt-3 mt-2"
                    style={{ color: currentTheme.colors.primary }}
                  >
                    View All Areas
                  </a>
                </div>
              </div>

              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[var(--brand-color)] hover:bg-gray-50 rounded-md font-medium transition-all duration-200">Contact</a>
              <div className="px-3 py-2">
                <a 
                  href={`tel:${currentTheme.phone.replace(/[^\d]/g, '')}`} 
                  className="block w-full px-4 py-3 rounded-full font-bold text-sm text-center transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    background: `linear-gradient(to right, ${currentTheme.colors.accent}, ${currentTheme.colors.secondary})`,
                    color: currentTheme.colors.text
                  }}
                >
                  CALL NOW: {currentTheme.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ThemedHeader;
