
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

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

    const colors = getThemeColors();
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5, 39.8],
      zoom: isMobile ? 3 : isTablet ? 3.5 : 4,
      pitch: 0,
      bearing: 0,
      scrollZoom: false,
      dragPan: true,
      touchZoomRotate: false
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('wheel', (e) => {
      if (e.originalEvent.ctrlKey || e.originalEvent.metaKey) {
        e.preventDefault();
        map.current?.scrollZoom.enable();
        setTimeout(() => {
          map.current?.scrollZoom.disable();
        }, 100);
      }
    });

    map.current.on('load', () => {
      if (!map.current) return;

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

      serviceAreas.forEach((area, index) => {
        const markerSize = isMobile ? 16 : isTablet ? 20 : 24;
        const borderWidth = isMobile ? 2 : 3;

        const markerElement = document.createElement('div');
        markerElement.className = 'service-marker';
        markerElement.style.cssText = `
          width: ${markerSize}px;
          height: ${markerSize}px;
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
          border: ${borderWidth}px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 ${isMobile ? '2px' : '3px'} ${isMobile ? '6px' : '8px'} rgba(0,0,0,0.25);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        `;

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

        markerElement.addEventListener('mouseenter', () => {
          const scale = isMobile ? 1.1 : 1.15;
          markerElement.style.transform = `scale(${scale})`;
          markerElement.style.boxShadow = `0 ${isMobile ? '3px' : '4px'} ${isMobile ? '10px' : '12px'} rgba(0,0,0,0.35)`;
          markerElement.style.zIndex = '10';
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
          markerElement.style.boxShadow = `0 ${isMobile ? '2px' : '3px'} ${isMobile ? '6px' : '8px'} rgba(0,0,0,0.25)`;
          markerElement.style.zIndex = '1';
        });

        const popup = new mapboxgl.Popup({
          offset: isMobile ? 20 : isTablet ? 25 : 30,
          closeButton: false,
          closeOnClick: false,
          className: 'service-popup'
        }).setHTML(`
          <div style="padding: ${isMobile ? '6px' : '8px'}; text-align: center; min-width: ${isMobile ? '120px' : '140px'};">
            <h4 style="margin: 0 0 ${isMobile ? '3px' : '4px'} 0; font-weight: bold; color: ${colors.primary}; font-size: ${isMobile ? '12px' : '14px'};">${area.name}</h4>
            <p style="margin: 0; font-size: ${isMobile ? '10px' : '12px'}; color: #666;">Service Area</p>
          </div>
        `);

        new mapboxgl.Marker(markerElement)
          .setLngLat(area.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

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
                [20, isMobile ? 25 : isTablet ? 35 : 40]
              ],
              base: 2
            },
            'circle-color': colors.primary,
            'circle-opacity': 0.06,
            'circle-stroke-color': colors.primary,
            'circle-stroke-width': isMobile ? 1 : 2,
            'circle-stroke-opacity': 0.2
          }
        });
      });

      const bounds = new mapboxgl.LngLatBounds();
      serviceAreas.forEach(area => bounds.extend(area.coordinates));
      map.current!.fitBounds(bounds, { 
        padding: isMobile ? 25 : isTablet ? 35 : 50 
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [theme]);

  return (
    <div className={`w-full relative ${className}`}>
      <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[400px] relative overflow-hidden">
        <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg border border-gray-200" />
        
        <style>{`
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
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            border: none;
          }
          
          .service-popup .mapboxgl-popup-tip {
            border-top-color: white;
          }
        `}</style>
      </div>
      
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md border border-gray-200 max-w-[160px] sm:max-w-none">
        <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">Service Areas</h3>
        <p className="text-xs text-gray-600">
          <span className="hidden sm:inline">Click markers • </span>
          <span className="sm:hidden">Tap • </span>
          <kbd className="px-1 py-0.5 text-xs bg-gray-100 rounded">Ctrl+Scroll</kbd> zoom
        </p>
      </div>
    </div>
  );
};

export default ServiceMap;
