
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Phone, Clock } from 'lucide-react';

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  responseTime?: string;
}

interface MapboxMapProps {
  locations: Location[];
  areaName: string;
  className?: string;
  theme?: 'plumbing' | 'hvac' | 'roofing';
}

const MapboxMap: React.FC<MapboxMapProps> = ({
  locations,
  areaName,
  className = '',
  theme = 'plumbing'
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const themeColors = {
    plumbing: {
      primary: 'from-blue-600 to-cyan-600',
      pin: '#2563eb',
      hover: 'hover:bg-blue-700'
    },
    hvac: {
      primary: 'from-orange-600 to-red-600',
      pin: '#ea580c',
      hover: 'hover:bg-orange-700'
    },
    roofing: {
      primary: 'from-slate-600 to-gray-600',
      pin: '#475569',
      hover: 'hover:bg-slate-700'
    }
  };

  const colors = themeColors[theme];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-119.4179, 36.7783], // Center on California
      zoom: 6
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each location
    locations.forEach((location) => {
      // Create marker element
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = colors.pin;
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';

      // Add icon
      const icon = document.createElement('div');
      icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>`;
      el.appendChild(icon);

      // Add click event
      el.addEventListener('click', () => {
        setSelectedLocation(location);
      });

      // Create marker
      new mapboxgl.Marker(el)
        .setLngLat([location.coordinates.lng, location.coordinates.lat])
        .addTo(map.current!);
    });

    map.current.on('load', () => {
      setIsLoaded(true);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [locations, colors.pin]);

  return (
    <div className={`relative w-full ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Map Info Overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <div className={`flex items-center space-x-2 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-sm text-gray-800">{areaName} Service Area</span>
        </div>
        <div className="text-xs text-gray-600 mt-1">{locations.length} Active Locations</div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-900">{selectedLocation.name}</h3>
            <button 
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600 text-xl"
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

export default MapboxMap;
