
import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface ServiceMapProps {
  theme: 'junk' | 'roofing' | 'tree' | 'pet';
}

const ServiceMap = ({ theme }: ServiceMapProps) => {
  const [mapboxToken, setMapboxToken] = useState('');

  const themeStyles = {
    junk: {
      bg: 'bg-gradient-to-br from-brand-900 to-electric-900',
      accent: 'from-lime-500 to-lime-600',
      text: 'text-brand-100'
    },
    roofing: {
      bg: 'bg-gradient-to-br from-slate-900 to-gray-900',
      accent: 'from-orange-500 to-orange-600',
      text: 'text-slate-100'
    },
    tree: {
      bg: 'bg-gradient-to-br from-forest-900 to-nature-900',
      accent: 'from-nature-400 to-nature-500',
      text: 'text-nature-100'
    },
    pet: {
      bg: 'bg-gradient-to-br from-pet-600 to-paw-600',
      accent: 'from-pet-400 to-paw-400',
      text: 'text-pet-100'
    }
  };

  const currentTheme = themeStyles[theme];

  const serviceAreas = [
    { name: 'Downtown Metro', lat: 40.7128, lng: -74.0060 },
    { name: 'North Hills', lat: 40.7589, lng: -73.9851 },
    { name: 'Westside District', lat: 40.7505, lng: -73.9934 },
    { name: 'East Valley', lat: 40.7282, lng: -73.7949 },
    { name: 'South Bay Area', lat: 40.6892, lng: -74.0445 }
  ];

  return (
    <section className={`py-20 ${currentTheme.bg} text-white font-poppins`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service Areas Map
          </h2>
          <p className={`text-xl ${currentTheme.text} max-w-3xl mx-auto`}>
            We proudly serve communities throughout the metropolitan area
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              {!mapboxToken ? (
                <div className="text-center p-8">
                  <MapPin className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-600 mb-4">Interactive map coming soon</p>
                  <input
                    type="text"
                    placeholder="Enter Mapbox token for live map"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border text-gray-800"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Get your token at mapbox.com
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-600">
                  <p>Map integration ready!</p>
                  <p className="text-sm">Token: {mapboxToken.substring(0, 20)}...</p>
                </div>
              )}
            </div>
          </div>

          {/* Service Areas List */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Areas We Serve</h3>
            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center">
                    <MapPin className="text-white mr-3" size={20} />
                    <span className="font-semibold">{area.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-white/70" />
                    <span className="text-sm text-white/70">Same-day service</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="tel:5551234567"
                className={`bg-gradient-to-r ${currentTheme.accent} hover:scale-105 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center`}
              >
                <Phone size={20} className="mr-2" />
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
