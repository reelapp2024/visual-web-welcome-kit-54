
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, ZoomIn, ZoomOut, Phone, Star, Clock } from 'lucide-react';

interface EnhancedMapboxMapProps {
  coordinates: { lat: number; lng: number };
  areaName: string;
  className?: string;
  theme?: 'junk' | 'tree';
}

const EnhancedMapboxMap: React.FC<EnhancedMapboxMapProps> = ({ 
  coordinates, 
  areaName, 
  className = '',
  theme = 'junk'
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const themeColors = {
    junk: {
      primary: '#f97316',
      secondary: '#0ea5e9',
      accent: '#84cc16'
    },
    tree: {
      primary: '#22c55e',
      secondary: '#eab308',
      accent: '#16a34a'
    }
  };

  const currentTheme = themeColors[theme];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [coordinates.lng, coordinates.lat],
      zoom: 13,
      pitch: 45,
      bearing: -17.6
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Create custom marker with theme colors
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.innerHTML = `
      <div style="
        width: 50px; 
        height: 50px; 
        background: linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary});
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 3px solid white;
        cursor: pointer;
        animation: pulse 2s infinite;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
    `;

    // Add marker to map
    const marker = new mapboxgl.Marker(el)
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current);

    // Create enhanced popup
    const popup = new mapboxgl.Popup({ 
      offset: 25,
      closeButton: false,
      className: 'custom-popup'
    }).setLngLat([coordinates.lng, coordinates.lat])
      .setHTML(`
        <div style="padding: 16px; text-align: center; font-family: 'Poppins', sans-serif; min-width: 250px;">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary}); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h3 style="margin: 0; color: ${currentTheme.primary}; font-weight: bold; font-size: 16px;">${areaName}</h3>
              <p style="margin: 0; color: #666; font-size: 12px;">${theme === 'tree' ? 'Tree Care' : 'Junk Removal'} Service Area</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 12px; gap: 8px;">
            <div style="display: flex; align-items: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${currentTheme.accent}" style="margin-right: 4px;">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span style="color: ${currentTheme.accent}; font-weight: bold; font-size: 14px;">5.0 Rating</span>
            </div>
            <div style="display: flex; align-items: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${currentTheme.secondary}" style="margin-right: 4px;">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span style="color: ${currentTheme.secondary}; font-weight: bold; font-size: 14px;">Same Day</span>
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <span style="color: ${currentTheme.primary}; font-weight: bold; font-size: 14px;">✓ Licensed & Insured</span>
          </div>
          
          <a href="tel:5551234567" style="
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary});
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now: (555) 123-4567
          </a>
        </div>
      `);

    // Add click event to marker
    el.addEventListener('click', () => {
      popup.addTo(map.current!);
    });

    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Add service area circle
      map.current?.addSource('service-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [coordinates.lng, coordinates.lat]
          }
        }
      });

      // Add multiple service area circles with different radii
      map.current?.addLayer({
        id: 'service-area-outer',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [10, 150],
              [16, 300]
            ]
          },
          'circle-color': currentTheme.primary,
          'circle-opacity': 0.05,
          'circle-stroke-width': 1,
          'circle-stroke-color': currentTheme.primary,
          'circle-stroke-opacity': 0.3
        }
      });

      map.current?.addLayer({
        id: 'service-area-inner',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [10, 100],
              [16, 200]
            ]
          },
          'circle-color': currentTheme.secondary,
          'circle-opacity': 0.1,
          'circle-stroke-width': 2,
          'circle-stroke-color': currentTheme.secondary,
          'circle-stroke-opacity': 0.5
        }
      });

      // Add pulsing animation to circles
      let animationId: number;
      const animate = () => {
        const opacity = (Math.sin(Date.now() * 0.003) + 1) / 2 * 0.2 + 0.05;
        map.current?.setPaintProperty('service-area-outer', 'circle-opacity', opacity);
        animationId = requestAnimationFrame(animate);
      };
      animate();

      // Cleanup animation on unmount
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [coordinates, areaName, theme]);

  const zoomIn = () => {
    map.current?.zoomIn();
  };

  const zoomOut = () => {
    map.current?.zoomOut();
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  const callNow = () => {
    window.location.href = 'tel:5551234567';
  };

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading interactive map...</p>
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
          onClick={callNow}
          className={`bg-gradient-to-r from-${theme === 'tree' ? 'forest' : 'brand'}-500 to-${theme === 'tree' ? 'nature' : 'electric'}-500 hover:opacity-90 text-white px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium`}
        >
          <Phone size={16} className="mr-1" />
          Call Now
        </button>
        <button
          onClick={openGoogleMaps}
          className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium border"
        >
          <MapPin size={16} className="mr-1" />
          View Larger
        </button>
        <button
          onClick={getDirections}
          className={`bg-${theme === 'tree' ? 'forest' : 'brand'}-500 hover:bg-${theme === 'tree' ? 'forest' : 'brand'}-600 text-white px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium`}
        >
          <Navigation size={16} className="mr-1" />
          Directions
        </button>
      </div>

      {/* Enhanced info card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs border">
        <div className="flex items-center mb-2">
          <div className={`w-8 h-8 bg-gradient-to-r from-${theme === 'tree' ? 'forest' : 'brand'}-500 to-${theme === 'tree' ? 'nature' : 'electric'}-500 rounded-full flex items-center justify-center mr-3`}>
            <MapPin size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">{areaName}</h3>
            <p className="text-gray-600 text-xs">Service Area Coverage</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Active Service Zone
          </div>
          <div className="flex items-center">
            <Star size={12} className={`text-${theme === 'tree' ? 'nature' : 'lime'}-500 mr-1`} />
            <span className="text-gray-600 font-medium">5.0</span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="flex items-center text-xs text-blue-600">
            <Clock size={12} className="mr-1" />
            Same-Day Service Available
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMapboxMap;
