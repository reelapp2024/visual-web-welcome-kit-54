import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapboxMapProps {
  locations: Array<{
    name: string;
    coordinates: { lat: number; lng: number };
    description: string;
    responseTime: string;
  }>;
  areaName: string;
  className?: string;
  theme: 'plumbing' | 'hvac' | 'cleaning' | 'painting' | 'roofing';
}

const MapboxMap = ({ locations, areaName, className = '', theme }: MapboxMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // prevent map from initializing more than once
    if (!mapboxgl.accessToken) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [locations[0].coordinates.lng, locations[0].coordinates.lat],
      zoom: 12,
      scrollZoom: false
    });

    map.current.on('load', () => {
      locations.forEach((location) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.background = getThemeColors(theme).primary;
        el.style.cursor = 'pointer';

        new mapboxgl.Marker(el)
          .setLngLat([location.coordinates.lng, location.coordinates.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<h4>${location.name}</h4><p>${location.description}</p><p>Response Time: ${location.responseTime}</p>`
              )
          )
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.destroy();
    };
  }, [locations, theme]);

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'plumbing':
        return { primary: '#3B82F6', secondary: '#1E40AF', bg: 'from-blue-500 to-blue-600' };
      case 'hvac':
        return { primary: '#EA580C', secondary: '#DC2626', bg: 'from-orange-500 to-red-600' };
      case 'cleaning':
        return { primary: '#10B981', secondary: '#059669', bg: 'from-green-500 to-emerald-600' };
      case 'painting':
        return { primary: '#8B5CF6', secondary: '#EC4899', bg: 'from-purple-500 to-pink-600' };
      case 'roofing':
        return { primary: '#78716C', secondary: '#57534E', bg: 'from-gray-600 to-stone-600' };
      default:
        return { primary: '#3B82F6', secondary: '#1E40AF', bg: 'from-blue-500 to-blue-600' };
    }
  };

  return <div ref={mapContainer} className={`map-container ${className}`} style={{ height: '400px', borderRadius: '1rem' }} />;
};

export default MapboxMap;
