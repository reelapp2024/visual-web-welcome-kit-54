
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceMapProps {
  theme?: 'plumbing' | 'electrical' | 'remodeling' | 'roofing';
  className?: string;
}

const ServiceMap: React.FC<ServiceMapProps> = ({ theme = 'plumbing', className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const getThemeColors = () => {
    switch (theme) {
      case 'electrical':
        return {
          primary: '#f59e0b', // amber-500
          secondary: '#fbbf24', // amber-400
        };
      case 'remodeling':
        return {
          primary: '#8b5cf6', // violet-500
          secondary: '#a78bfa', // violet-400
        };
      case 'roofing':
        return {
          primary: '#475569', // slate-600
          secondary: '#64748b', // slate-500
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

    // Check if mobile device
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5, 39.8], // Center of US
      zoom: isMobile ? 3 : isTablet ? 3.5 : 4,
      pitch: 0,
      bearing: 0,
      scrollZoom: false, // Disable scroll zoom to prevent scroll issues
      dragPan: true,
      touchZoomRotate: false
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add custom scroll zoom behavior
    map.current.on('wheel', (e) => {
      if (e.originalEvent.ctrlKey || e.originalEvent.metaKey) {
        // Only zoom when Ctrl/Cmd key is pressed
        e.preventDefault();
        map.current?.scrollZoom.enable();
        setTimeout(() => {
          map.current?.scrollZoom.disable();
        }, 100);
      }
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Service areas data with proper coordinate typing
      const serviceAreas: Array<{ name: string; coordinates: [number, number] }> = [
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
        // Responsive marker size
        const markerSize = isMobile ? 20 : isTablet ? 24 : 28;
        const borderWidth = isMobile ? 2 : 3;

        // Create marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'service-marker';
        markerElement.style.cssText = `
          width: ${markerSize}px;
          height: ${markerSize}px;
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
          border: ${borderWidth}px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 ${isMobile ? '2px' : '4px'} ${isMobile ? '8px' : '12px'} rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        `;

        // Add pulse animation
        const pulseElement = document.createElement('div');
        pulseElement.style.cssText = `
          position: absolute;
          top: -${borderWidth}px;
          left: -${borderWidth}px;
          width: ${markerSize + borderWidth * 2}px;
          height: ${markerSize + borderWidth * 2}px;
          border-radius: 50%;
          background: ${colors.primary};
          opacity: 0.3;
          animation: pulse 2s infinite;
        `;
        markerElement.appendChild(pulseElement);

        // Add hover effect
        markerElement.addEventListener('mouseenter', () => {
          const scale = isMobile ? 1.1 : 1.15;
          markerElement.style.transform = `scale(${scale})`;
          markerElement.style.boxShadow = `0 ${isMobile ? '4px' : '6px'} ${isMobile ? '16px' : '20px'} rgba(0,0,0,0.4)`;
          markerElement.style.zIndex = '10';
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
          markerElement.style.boxShadow = `0 ${isMobile ? '2px' : '4px'} ${isMobile ? '8px' : '12px'} rgba(0,0,0,0.3)`;
          markerElement.style.zIndex = '1';
        });

        // Create responsive popup
        const popup = new mapboxgl.Popup({
          offset: isMobile ? 25 : isTablet ? 30 : 35,
          closeButton: false,
          closeOnClick: false,
          className: 'service-popup'
        }).setHTML(`
          <div style="padding: ${isMobile ? '8px' : '12px'}; text-align: center; min-width: ${isMobile ? '140px' : '160px'};">
            <h4 style="margin: 0 0 ${isMobile ? '4px' : '6px'} 0; font-weight: bold; color: ${colors.primary}; font-size: ${isMobile ? '13px' : '15px'};">${area.name}</h4>
            <p style="margin: 0; font-size: ${isMobile ? '11px' : '13px'}; color: #666;">Service Area</p>
          </div>
        `);

        // Create marker with proper coordinates
        new mapboxgl.Marker(markerElement)
          .setLngLat(area.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        // Add service radius circle with proper GeoJSON structure
        map.current!.addSource(`service-radius-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
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
                [20, isMobile ? 30 : isTablet ? 40 : 45]
              ],
              base: 2
            },
            'circle-color': colors.primary,
            'circle-opacity': 0.08,
            'circle-stroke-color': colors.primary,
            'circle-stroke-width': isMobile ? 1 : 2,
            'circle-stroke-opacity': 0.25
          }
        });
      });

      // Fit map to show all service areas with proper bounds
      const bounds = new mapboxgl.LngLatBounds();
      serviceAreas.forEach(area => bounds.extend(area.coordinates));
      map.current!.fitBounds(bounds, { 
        padding: isMobile ? 30 : isTablet ? 40 : 60 
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [theme]);

  return (
    <div className={`w-full relative ${className}`}>
      {/* Responsive height classes */}
      <div className="h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] relative overflow-hidden">
        <div ref={mapContainer} className="w-full h-full rounded-xl shadow-xl border border-gray-200" />
        
        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.1;
            }
            100% {
              transform: scale(1);
              opacity: 0.3;
            }
          }
          
          .service-popup .mapboxgl-popup-content {
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            border: none;
          }
          
          .service-popup .mapboxgl-popup-tip {
            border-top-color: white;
          }
        `}</style>
      </div>
      
      {/* Responsive overlay info */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200 max-w-[180px] sm:max-w-none">
        <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base">Service Areas</h3>
        <p className="text-xs sm:text-sm text-gray-600">
          <span className="hidden sm:inline">Click markers for details • </span>
          <span className="sm:hidden">Tap markers • </span>
          <kbd className="px-1 py-0.5 text-xs bg-gray-100 rounded">Ctrl+Scroll</kbd> to zoom
        </p>
      </div>
    </div>
  );
};

export default ServiceMap;
