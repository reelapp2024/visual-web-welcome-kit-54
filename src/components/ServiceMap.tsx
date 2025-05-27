
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceMapProps {
  theme?: 'plumbing' | 'tree' | 'pet';
  className?: string;
}

const ServiceMap: React.FC<ServiceMapProps> = ({ theme = 'plumbing', className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const getThemeColors = () => {
    switch (theme) {
      case 'tree':
        return {
          primary: '#059669', // forest-600
          secondary: '#10b981', // nature-500
        };
      case 'pet':
        return {
          primary: '#7c3aed', // pet-600
          secondary: '#a855f7', // paw-500
        };
      default:
        return {
          primary: '#2563eb', // blue-600
          secondary: '#06b6d4', // cyan-500
        };
    }
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

    const colors = getThemeColors();

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5, 39.8], // Center of US
      zoom: 4,
      pitch: 0,
      bearing: 0
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Service areas data
      const serviceAreas = [
        { name: 'Downtown District', coordinates: [-74.0060, 40.7128] },
        { name: 'Greenwood Heights', coordinates: [-73.9441, 40.7589] },
        { name: 'Oak Valley', coordinates: [-73.9442, 40.6782] },
        { name: 'Pine Ridge', coordinates: [-73.9482, 40.8176] },
        { name: 'Maple Grove', coordinates: [-73.7949, 40.7282] },
        { name: 'Riverside District', coordinates: [-74.0445, 40.7282] },
        { name: 'Highland Park', coordinates: [-73.8648, 40.7023] },
        { name: 'Valley View', coordinates: [-73.9876, 40.7505] }
      ];

      // Add service area markers
      serviceAreas.forEach((area, index) => {
        // Create marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'service-marker';
        markerElement.style.cssText = `
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        `;

        // Add hover effect
        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.transform = 'scale(1.2)';
          markerElement.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
          markerElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        });

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 35,
          closeButton: false,
          closeOnClick: false
        }).setHTML(`
          <div style="padding: 8px; text-align: center;">
            <h4 style="margin: 0 0 4px 0; font-weight: bold; color: ${colors.primary};">${area.name}</h4>
            <p style="margin: 0; font-size: 12px; color: #666;">Service Area</p>
          </div>
        `);

        // Create marker
        new mapboxgl.Marker(markerElement)
          .setLngLat(area.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        // Add service radius circle
        map.current!.addSource(`service-radius-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: area.coordinates
            }
          }
        });

        map.current!.addLayer({
          id: `service-radius-${index}`,
          type: 'circle',
          source: `service-radius-${index}`,
          paint: {
            'circle-radius': {
              stops: [
                [0, 0],
                [20, 50]
              ],
              base: 2
            },
            'circle-color': colors.primary,
            'circle-opacity': 0.1,
            'circle-stroke-color': colors.primary,
            'circle-stroke-width': 2,
            'circle-stroke-opacity': 0.3
          }
        });
      });

      // Fit map to show all service areas
      const bounds = new mapboxgl.LngLatBounds();
      serviceAreas.forEach(area => bounds.extend(area.coordinates));
      map.current!.fitBounds(bounds, { padding: 50 });
    });

    return () => {
      map.current?.remove();
    };
  }, [theme]);

  return (
    <div className={`w-full h-96 relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="font-bold text-gray-900 mb-1">Service Areas</h3>
        <p className="text-sm text-gray-600">Click markers for details</p>
      </div>
    </div>
  );
};

export default ServiceMap;
