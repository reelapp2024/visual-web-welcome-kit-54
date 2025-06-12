
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

interface CleaningStateMapProps {
  stateName: string;
  countryName: string;
}

const CleaningStateMap = ({ stateName, countryName }: CleaningStateMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // State coordinates mapping for US states
  const stateCoordinates: { [key: string]: { center: [number, number]; zoom: number } } = {
    'california': { center: [-119.4179, 36.7783], zoom: 5 },
    'texas': { center: [-99.9018, 31.9686], zoom: 5 },
    'florida': { center: [-82.4572, 27.7663], zoom: 6 },
    'new york': { center: [-74.2179, 43.2994], zoom: 6 },
    'pennsylvania': { center: [-77.1945, 41.2033], zoom: 6 },
    'illinois': { center: [-89.3985, 40.6331], zoom: 6 },
    'ohio': { center: [-82.7649, 40.3888], zoom: 6 },
    'georgia': { center: [-83.2572, 32.1656], zoom: 6 },
    'north carolina': { center: [-79.0193, 35.7596], zoom: 6 },
    'michigan': { center: [-84.5467, 44.3467], zoom: 6 },
    'new jersey': { center: [-74.7429, 40.0583], zoom: 7 },
    'virginia': { center: [-78.6569, 37.4316], zoom: 6 },
    'washington': { center: [-120.7401, 47.7511], zoom: 6 },
    'arizona': { center: [-111.0937, 34.0489], zoom: 6 },
    'massachusetts': { center: [-71.3824, 42.2373], zoom: 7 },
    'tennessee': { center: [-86.7816, 35.7478], zoom: 6 },
    'indiana': { center: [-86.1349, 40.2732], zoom: 6 },
    'missouri': { center: [-92.6890, 37.9643], zoom: 6 },
    'maryland': { center: [-76.7909, 39.0458], zoom: 7 },
    'wisconsin': { center: [-89.6165, 43.7844], zoom: 6 },
    'colorado': { center: [-105.3111, 39.0598], zoom: 6 },
    'minnesota': { center: [-93.9002, 46.7296], zoom: 6 },
    'south carolina': { center: [-80.8414, 33.8361], zoom: 6 },
    'alabama': { center: [-86.7916, 32.3668], zoom: 6 },
    'louisiana': { center: [-92.3732, 30.9843], zoom: 6 },
    'kentucky': { center: [-84.2700, 37.8393], zoom: 6 },
    'oregon': { center: [-120.5542, 43.8041], zoom: 6 },
    'oklahoma': { center: [-96.9289, 35.4676], zoom: 6 },
    'connecticut': { center: [-72.7273, 41.5978], zoom: 8 },
    'utah': { center: [-111.8910, 39.3210], zoom: 6 },
    'iowa': { center: [-93.2105, 42.0115], zoom: 6 },
    'nevada': { center: [-116.4194, 38.3135], zoom: 6 },
    'arkansas': { center: [-92.3731, 34.9697], zoom: 6 },
    'mississippi': { center: [-89.6678, 32.7673], zoom: 6 },
    'kansas': { center: [-96.7260, 38.5266], zoom: 6 },
    'new mexico': { center: [-106.2485, 34.8405], zoom: 6 },
    'nebraska': { center: [-99.9018, 41.1254], zoom: 6 },
    'idaho': { center: [-114.7420, 44.2619], zoom: 6 },
    'west virginia': { center: [-80.9696, 38.4680], zoom: 7 },
    'hawaii': { center: [-157.8583, 21.0943], zoom: 7 },
    'new hampshire': { center: [-71.5376, 43.4525], zoom: 7 },
    'maine': { center: [-69.3977, 44.6939], zoom: 6 },
    'montana': { center: [-110.3626, 46.9219], zoom: 5 },
    'rhode island': { center: [-71.5118, 41.6809], zoom: 9 },
    'delaware': { center: [-75.5277, 39.3185], zoom: 8 },
    'south dakota': { center: [-99.9018, 43.9695], zoom: 6 },
    'north dakota': { center: [-99.7840, 47.4012], zoom: 6 },
    'alaska': { center: [-152.4044, 61.2181], zoom: 4 },
    'vermont': { center: [-72.7317, 44.0459], zoom: 7 },
    'wyoming': { center: [-107.3025, 42.7475], zoom: 6 }
  };

  useEffect(() => {
    if (map.current) return; // prevent map from initializing more than once
    if (!mapboxgl.accessToken) return;

    const normalizedStateName = stateName.toLowerCase().replace(/\s+/g, ' ');
    const stateData = stateCoordinates[normalizedStateName] || stateCoordinates['california'];

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v11',
      center: stateData.center,
      zoom: stateData.zoom,
      scrollZoom: true
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add a marker for the state center
      const el = document.createElement('div');
      el.className = 'state-marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.borderRadius = '50%';
      el.style.background = '#10B981';
      el.style.border = '4px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.innerHTML = '🏠';

      // Create popup for the state
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: true })
        .setHTML(`
          <div style="padding: 15px; min-width: 250px;">
            <h4 style="margin: 0 0 10px 0; font-weight: bold; color: #10B981; font-size: 18px;">${stateName}</h4>
            <p style="margin: 0 0 8px 0; color: #666;">Professional cleaning services available in ${stateName}, ${countryName}</p>
            <p style="margin: 0; font-weight: bold; color: #059669;">✓ Licensed & Insured</p>
            <p style="margin: 5px 0 0 0; font-weight: bold; color: #059669;">✓ 24/7 Emergency Service</p>
          </div>
        `);

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(stateData.center)
        .setPopup(popup)
        .addTo(map.current!);

      // Add a subtle highlight layer for the state (if available in Mapbox data)
      if (map.current!.getSource('states')) {
        map.current!.addLayer({
          id: 'state-highlight',
          type: 'fill',
          source: 'states',
          paint: {
            'fill-color': '#10B981',
            'fill-opacity': 0.1
          },
          filter: ['==', ['get', 'name'], stateName]
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [stateName, countryName]);

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Service Coverage in {stateName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive cleaning service coverage across {stateName}, {countryName}. We're committed to providing professional cleaning solutions in your area.
          </p>
        </div>
        
        <div 
          ref={mapContainer} 
          className="map-container h-[500px] rounded-2xl shadow-2xl border border-gray-200" 
          style={{ width: '100%' }} 
        />
      </div>
    </section>
  );
};

export default CleaningStateMap;
