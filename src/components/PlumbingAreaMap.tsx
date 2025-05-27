
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, ZoomIn, ZoomOut, Phone } from 'lucide-react';

interface Location {
  name: string;
  coordinates: [number, number];
  type: 'country' | 'state' | 'city' | 'local';
}

interface PlumbingAreaMapProps {
  centerCoordinates: [number, number];
  zoom: number;
  locations: Location[];
  areaName: string;
  areaType: 'country' | 'state' | 'city' | 'local';
  className?: string;
}

const PlumbingAreaMap: React.FC<PlumbingAreaMapProps> = ({ 
  centerCoordinates, 
  zoom, 
  locations, 
  areaName, 
  areaType,
  className = '' 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: centerCoordinates,
      zoom: zoom,
      pitch: 30,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Add markers for each location
      locations.forEach((location, index) => {
        // Create custom marker
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.innerHTML = `
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-200">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
          </div>
        `;

        // Create popup
        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: false,
          className: 'plumbing-popup'
        }).setHTML(`
          <div class="p-4 font-poppins">
            <h3 class="font-bold text-lg text-gray-800 mb-2">${location.name}</h3>
            <p class="text-gray-600 mb-3">Professional Plumbing Services Available</p>
            <div class="space-y-2 mb-3">
              <div class="flex items-center text-sm text-green-600">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                24/7 Emergency Service
              </div>
              <div class="flex items-center text-sm text-blue-600">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Licensed & Insured
              </div>
            </div>
            <div class="flex gap-2">
              <a href="tel:5551234567" class="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call Now
              </a>
              <a href="/plumbing/areas/${location.name.toLowerCase().replace(/\s+/g, '-')}" class="flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                Details
              </a>
            </div>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add service area circle for the main area
      if (areaType !== 'local') {
        map.current?.addSource('service-area', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: centerCoordinates
            }
          }
        });

        map.current?.addLayer({
          id: 'service-area-circle',
          type: 'circle',
          source: 'service-area',
          paint: {
            'circle-radius': {
              stops: [
                [6, 50],
                [10, 100],
                [16, 200]
              ]
            },
            'circle-color': '#3b82f6',
            'circle-opacity': 0.1,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#3b82f6',
            'circle-stroke-opacity': 0.5
          }
        });
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [centerCoordinates, zoom, locations, areaName, areaType]);

  const zoomIn = () => {
    map.current?.zoomIn();
  };

  const zoomOut = () => {
    map.current?.zoomOut();
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${centerCoordinates[1]},${centerCoordinates[0]}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading service area map...</p>
          </div>
        </div>
      )}

      {/* Custom controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-lg shadow-md transition-all duration-200 border"
          title="Zoom In"
        >
          <ZoomIn size={16} />
        </button>
        <button
          onClick={zoomOut}
          className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-lg shadow-md transition-all duration-200 border"
          title="Zoom Out"
        >
          <ZoomOut size={16} />
        </button>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={getDirections}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium"
        >
          <Navigation size={16} className="mr-1" />
          Directions
        </button>
      </div>

      {/* Area info card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg max-w-xs border">
        <h3 className="font-bold text-gray-800 mb-1 text-sm">{areaName}</h3>
        <p className="text-gray-600 text-xs mb-2">Plumbing Service Coverage</p>
        <div className="flex items-center text-xs text-green-600 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          24/7 Emergency Available
        </div>
        <a 
          href="tel:5551234567"
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
        >
          <Phone size={12} className="mr-1" />
          Call (555) 123-4567
        </a>
      </div>
    </div>
  );
};

export default PlumbingAreaMap;
