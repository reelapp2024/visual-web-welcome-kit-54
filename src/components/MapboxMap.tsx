
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, ZoomIn, ZoomOut } from 'lucide-react';

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

    // Create custom marker
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMzMjc4RkYiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CjxwYXRoIGQ9Im0zIDExIDMtM20wIDAgMy4wMDEtM00xNSAyMWwtMy0zbTAgMC0zIDNtMTIuMDAxLTE0djZtMCAwdjZtMCAwLTYtNm02IDZ2Nm0wIDBoNm0tNiAwaDYiLz4KPC9zdmc+Cjwvc3ZnPgo=)';
    el.style.width = '40px';
    el.style.height = '40px';
    el.style.backgroundSize = 'cover';
    el.style.borderRadius = '50%';
    el.style.cursor = 'pointer';
    el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';

    // Add marker to map
    new mapboxgl.Marker(el)
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current);

    // Add popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setLngLat([coordinates.lng, coordinates.lat])
      .setHTML(`
        <div style="padding: 10px; text-align: center;">
          <h3 style="margin: 0 0 8px 0; color: #3278FF; font-weight: bold;">${areaName}</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">JunkPro Hauling Service Area</p>
          <div style="margin-top: 8px;">
            <span style="color: #10B981; font-weight: bold;">✓ Same-Day Service Available</span>
          </div>
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
              [10, 100],
              [16, 200]
            ]
          },
          'circle-color': '#3278FF',
          'circle-opacity': 0.1,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#3278FF',
          'circle-stroke-opacity': 0.5
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

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mx-auto mb-4"></div>
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
          onClick={openGoogleMaps}
          className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium border"
        >
          <MapPin size={16} className="mr-1" />
          View Larger
        </button>
        <button
          onClick={getDirections}
          className="bg-brand-500 hover:bg-brand-600 text-white px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center text-sm font-medium"
        >
          <Navigation size={16} className="mr-1" />
          Directions
        </button>
      </div>

      {/* Area info card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg max-w-xs border">
        <h3 className="font-bold text-gray-800 mb-1 text-sm">{areaName}</h3>
        <p className="text-gray-600 text-xs mb-2">Service Area Coverage</p>
        <div className="flex items-center text-xs text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Active Service Zone
        </div>
      </div>
    </div>
  );
};

export default MapboxMap;
