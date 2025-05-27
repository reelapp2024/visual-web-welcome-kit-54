import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface InteractiveMapProps {
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

const InteractiveMap = ({ locations, areaName, className = '', theme }: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new maplibregl.Map({
        container: mapRef.current,
        style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9uVxtLqVmJvP9Qx9',
        center: locations[0].coordinates,
        zoom: 10,
      });

      locations.forEach(location => {
        new maplibregl.Marker()
          .setLngLat([location.coordinates.lng, location.coordinates.lat])
          .setPopup(new maplibregl.Popup({ offset: 25 })
            .setHTML(
              `<h3>${location.name}</h3>
              <p>${location.description}</p>
              <p>Response Time: ${location.responseTime}</p>`
            ))
          .addTo(map);
      });

      return () => map.remove();
    }
  }, [locations]);

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'plumbing':
        return { primary: '#3B82F6', secondary: '#1E40AF' };
      case 'hvac':
        return { primary: '#EA580C', secondary: '#DC2626' };
      case 'cleaning':
        return { primary: '#10B981', secondary: '#059669' };
      case 'painting':
        return { primary: '#8B5CF6', secondary: '#EC4899' };
      case 'roofing':
        return { primary: '#78716C', secondary: '#57534E' };
      default:
        return { primary: '#3B82F6', secondary: '#1E40AF' };
    }
  };

  const themeColors = getThemeColors(theme);

  return (
    <div ref={mapRef} className={`map-container ${className}`} style={{ height: '300px' }}>
    </div>
  );
};

export default InteractiveMap;
