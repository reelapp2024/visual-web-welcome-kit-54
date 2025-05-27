
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
  centerCoordinates?: [number, number];
  zoom?: number;
  areaType?: 'local' | 'city' | 'state' | 'country';
}

const InteractiveMap = ({ 
  locations, 
  areaName, 
  className = '', 
  theme,
  centerCoordinates,
  zoom = 10
}: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const center = centerCoordinates || [locations[0].coordinates.lng, locations[0].coordinates.lat];
      
      const map = new maplibregl.Map({
        container: mapRef.current,
        style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9uVxtLqVmJvP9Qx9',
        center: center,
        zoom: zoom,
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
  }, [locations, centerCoordinates, zoom]);

  return (
    <div ref={mapRef} className={`map-container ${className}`} style={{ height: '400px' }}>
    </div>
  );
};

export default InteractiveMap;
