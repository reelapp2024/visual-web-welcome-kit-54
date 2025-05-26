
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, ZoomIn, ZoomOut, Phone, TreePine } from 'lucide-react';

interface MapboxMapProps {
  coordinates: { lat: number; lng: number };
  areaName: string;
  className?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ coordinates, areaName, className = '' }) => {
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
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [coordinates.lng, coordinates.lat],
      zoom: 13,
      pitch: 45,
      bearing: -17.6
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Create custom tree service marker
    const el = document.createElement('div');
    el.className = 'custom-tree-marker';
    el.innerHTML = `
      <div style="
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #369960, #5bb882);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(54, 153, 96, 0.4);
        border: 3px solid white;
        cursor: pointer;
        animation: pulse 2s infinite;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
          <path d="M12 2v20M8 8l4-4 4 4"/>
        </svg>
      </div>
    `;

    // Add marker to map
    new mapboxgl.Marker(el)
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current);

    // Add enhanced popup
    const popup = new mapboxgl.Popup({ 
      offset: 25,
      closeButton: true,
      closeOnClick: false
    })
      .setLngLat([coordinates.lng, coordinates.lat])
      .setHTML(`
        <div style="padding: 15px; text-align: center; min-width: 250px;">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
            <div style="background: linear-gradient(135deg, #369960, #5bb882); border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M12 2v20M8 8l4-4 4 4"/>
              </svg>
            </div>
            <h3 style="margin: 0; color: #369960; font-weight: bold; font-size: 18px;">${areaName}</h3>
          </div>
          <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">TreeCare Pro Service Area</p>
          <div style="margin: 10px 0; padding: 8px; background: #f0f9f4; border-radius: 8px;">
            <span style="color: #369960; font-weight: bold; font-size: 14px;">✓ 24/7 Emergency Tree Service</span>
          </div>
          <div style="margin: 10px 0; padding: 8px; background: #f0f9f4; border-radius: 8px;">
            <span style="color: #5bb882; font-weight: bold; font-size: 14px;">🌳 Licensed Arborists Available</span>
          </div>
          <a href="tel:5551234567" style="
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #369960, #5bb882);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            margin-top: 10px;
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            📞 Call Now: (555) 123-4567
          </a>
        </div>
      `);

    // Add click event to marker
    el.addEventListener('click', () => {
      popup.addTo(map.current!);
    });

    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Add service area circle with tree theme
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

      map.current?.addLayer({
        id: 'service-area-circle',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [10, 120],
              [16, 250]
            ]
          },
          'circle-color': '#369960',
          'circle-opacity': 0.15,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#5bb882',
          'circle-stroke-opacity': 0.8
        }
      });

      // Add animated pulse effect
      map.current?.addLayer({
        id: 'service-area-pulse',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [10, 80],
              [16, 180]
            ]
          },
          'circle-color': '#5bb882',
          'circle-opacity': 0.3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#369960',
          'circle-stroke-opacity': 0.6
        }
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [coordinates, areaName]);

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
            <p className="text-gray-600">Loading service area map...</p>
          </div>
        </div>
      )}

      {/* Enhanced custom controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="bg-white hover:bg-forest-50 text-forest-700 p-2 rounded-lg shadow-lg transition-all duration-200 border border-forest-200"
          title="Zoom In"
        >
          <ZoomIn size={16} />
        </button>
        <button
          onClick={zoomOut}
          className="bg-white hover:bg-forest-50 text-forest-700 p-2 rounded-lg shadow-lg transition-all duration-200 border border-forest-200"
          title="Zoom Out"
        >
          <ZoomOut size={16} />
        </button>
      </div>

      {/* Enhanced action buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={callNow}
          className="bg-forest-500 hover:bg-forest-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center text-sm font-bold animate-pulse"
        >
          <Phone size={16} className="mr-2" />
          Call Now
        </button>
        <button
          onClick={openGoogleMaps}
          className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center text-sm font-medium border"
        >
          <MapPin size={16} className="mr-1" />
          View Larger
        </button>
        <button
          onClick={getDirections}
          className="bg-nature-500 hover:bg-nature-600 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center text-sm font-medium"
        >
          <Navigation size={16} className="mr-1" />
          Directions
        </button>
      </div>

      {/* Enhanced area info card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-xl max-w-xs border border-forest-200">
        <div className="flex items-center mb-2">
          <div className="bg-forest-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <TreePine className="text-white" size={16} />
          </div>
          <h3 className="font-bold text-forest-800 text-sm">{areaName}</h3>
        </div>
        <p className="text-gray-600 text-xs mb-3">Tree Service Coverage Area</p>
        <div className="space-y-2">
          <div className="flex items-center text-xs text-forest-600">
            <div className="w-2 h-2 bg-forest-500 rounded-full mr-2"></div>
            24/7 Emergency Service
          </div>
          <div className="flex items-center text-xs text-nature-600">
            <div className="w-2 h-2 bg-nature-500 rounded-full mr-2"></div>
            Licensed Arborists
          </div>
        </div>
        <button
          onClick={callNow}
          className="w-full mt-3 bg-gradient-to-r from-forest-500 to-nature-500 text-white px-3 py-2 rounded-lg text-xs font-bold hover:from-forest-600 hover:to-nature-600 transition-all duration-200"
        >
          Call (555) 123-4567
        </button>
      </div>
    </div>
  );
};

export default MapboxMap;
