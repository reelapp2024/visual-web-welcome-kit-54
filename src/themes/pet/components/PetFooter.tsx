
import React from 'react';
import { Heart, MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const PetFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-pet-800 via-paw-800 to-pet-900 text-white font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🐾</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce delay-1000">🏠</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-wiggle">💖</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-wiggle delay-500">🌟</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Heart className="text-pet-500 animate-pulse" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Paws & Clean</h3>
                <p className="text-pet-200">Pet Waste Experts</p>
              </div>
            </div>
            <p className="text-pet-200 mb-6 leading-relaxed max-w-md">
              Your local pet waste removal specialists. We love pets as much as you do and are committed to keeping your outdoor spaces clean, healthy, and enjoyable for the whole family. 🐕🏡
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <span className="text-pet-200">Trusted by 500+ Pet Families</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links 🔗</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/pet' },
                { name: 'About Us', href: '/pet/about' },
                { name: 'Our Services', href: '/pet/services' },
                { name: 'Service Areas', href: '/pet/areas' },
                { name: 'Contact', href: '/pet/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-pet-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-paw-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch 📞</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pet-600 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-pet-200 text-sm">Call Us</p>
                  <a href="tel:5551234567" className="text-white font-semibold hover:text-pet-300 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-paw-600 rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-pet-200 text-sm">Email Us</p>
                  <a href="mailto:hello@pawsandclean.com" className="text-white font-semibold hover:text-paw-300 transition-colors">
                    hello@pawsandclean.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pet-600 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-pet-200 text-sm">Service Hours</p>
                  <p className="text-white font-semibold">Mon-Sat: 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pet-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-pet-200 mb-4 md:mb-0">
              © {currentYear} Paws & Clean. Made with 💖 for pet families.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy-policy" className="text-pet-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-pet-200 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <div className="text-pet-200">🐾 Pet-Safe & Eco-Friendly 🌱</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PetFooter;
