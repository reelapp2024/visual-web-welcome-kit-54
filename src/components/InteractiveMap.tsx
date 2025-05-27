
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface Location {
  name: string;
  coordinates: [number, number];
  type: 'country' | 'state' | 'city' | 'local';
  description?: string;
  responseTime?: string;
}

interface InteractiveMapProps {
  centerCoordinates: [number, number];
  zoom: number;
  locations: Location[];
  areaName: string;
  areaType: 'country' | 'state' | 'city' | 'local';
  className?: string;
  theme?: 'plumbing' | 'hvac' | 'roofing';
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  centerCoordinates,
  zoom,
  locations,
  areaName,
  areaType,
  className = '',
  theme = 'plumbing'
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const themeColors = {
    plumbing: {
      primary: 'from-blue-600 to-cyan-600',
      pin: 'bg-blue-600',
      hover: 'hover:bg-blue-700'
    },
    hvac: {
      primary: 'from-orange-600 to-red-600',
      pin: 'bg-orange-600',
      hover: 'hover:bg-orange-700'
    },
    roofing: {
      primary: 'from-slate-600 to-gray-600',
      pin: 'bg-slate-600',
      hover: 'hover:bg-slate-700'
    }
  };

  const colors = themeColors[theme];

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.style.opacity = '1';
    }
  }, []);

  const getLocationPosition = (index: number, total: number) => {
    const cols = Math.ceil(Math.sqrt(total));
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    return {
      top: `${20 + (row * 25)}%`,
      left: `${15 + (col * 20)}%`
    };
  };

  return (
    <div className={`relative w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden ${className}`}>
      {/* Map Background */}
      <div 
        ref={mapRef}
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: 0 }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${colors.pin} rounded-full animate-pulse`}
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: (Math.random() * 2 + 2) + 's'
                }}
              />
            ))}
          </div>
        </div>

        {/* Service Location Pins */}
        {locations.map((location, index) => {
          const position = getLocationPosition(index, locations.length);
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-fade-in z-10"
              style={{
                ...position,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="relative">
                <div className={`${colors.pin} p-3 rounded-full shadow-lg transform group-hover:scale-125 transition-all duration-300 hover:shadow-xl`}>
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                
                {/* Location Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs font-medium">
                  {location.name}
                </div>

                {/* Ripple Effect */}
                <div className={`absolute inset-0 rounded-full ${colors.pin} opacity-30 animate-ping`}></div>
              </div>
            </div>
          );
        })}

        {/* Map Info Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in">
          <div className={`flex items-center space-x-2 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-sm text-gray-800">{areaName} Service Area</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">{locations.length} Active Locations</div>
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg max-w-xs animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-900">{selectedLocation.name}</h3>
            <button 
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          {selectedLocation.description && (
            <p className="text-sm text-gray-600 mb-3">{selectedLocation.description}</p>
          )}
          {selectedLocation.responseTime && (
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <Clock className="w-4 h-4 mr-2" />
              Response: {selectedLocation.responseTime}
            </div>
          )}
          <a
            href="tel:5551234567"
            className={`bg-gradient-to-r ${colors.primary} ${colors.hover} text-white px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg w-full justify-center`}
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
