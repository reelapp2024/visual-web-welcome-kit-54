
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

interface CleaningCountryMapProps {
  countryName: string;
}

const CleaningCountryMap = ({ countryName }: CleaningCountryMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Country coordinates mapping
  const countryCoordinates: { [key: string]: { center: [number, number]; zoom: number } } = {
    'usa': { center: [-95.7129, 37.0902], zoom: 3 },
    'united-states': { center: [-95.7129, 37.0902], zoom: 3 },
    'canada': { center: [-106.3468, 56.1304], zoom: 3 },
    'uk': { center: [-3.4360, 55.3781], zoom: 5 },
    'united-kingdom': { center: [-3.4360, 55.3781], zoom: 5 },
    'australia': { center: [133.7751, -25.2744], zoom: 4 },
    'germany': { center: [10.4515, 51.1657], zoom: 5 },
    'france': { center: [2.2137, 46.2276], zoom: 5 },
    'spain': { center: [-3.7492, 40.4637], zoom: 5 },
    'italy': { center: [12.5674, 41.8719], zoom: 5 },
    'india': { center: [78.9629, 20.5937], zoom: 4 },
    'japan': { center: [138.2529, 36.2048], zoom: 5 },
    'china': { center: [104.1954, 35.8617], zoom: 4 },
    'brazil': { center: [-51.9253, -14.2350], zoom: 4 },
    'mexico': { center: [-102.5528, 23.6345], zoom: 4 }
  };

  useEffect(() => {
    if (map.current) return; // prevent map from initializing more than once
    if (!mapboxgl.accessToken) return;

    const normalizedCountryName = countryName.toLowerCase().replace(/\s+/g, '-');
    const countryData = countryCoordinates[normalizedCountryName] || countryCoordinates['usa'];

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v11',
      center: countryData.center,
      zoom: countryData.zoom,
      scrollZoom: true
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add a marker for the country center
      const el = document.createElement('div');
      el.className = 'country-marker';
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

      // Create popup for the country
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: true })
        .setHTML(`
          <div style="padding: 15px; min-width: 250px;">
            <h4 style="margin: 0 0 10px 0; font-weight: bold; color: #10B981; font-size: 18px;">${countryName.charAt(0).toUpperCase() + countryName.slice(1)}</h4>
            <p style="margin: 0 0 8px 0; color: #666;">Professional cleaning services available</p>
            <p style="margin: 0; font-weight: bold; color: #059669;">✓ Licensed & Insured</p>
            <p style="margin: 5px 0 0 0; font-weight: bold; color: #059669;">✓ 24/7 Emergency Service</p>
          </div>
        `);

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(countryData.center)
        .setPopup(popup)
        .addTo(map.current!);

      // Add a subtle highlight layer for the country (if available in Mapbox data)
      if (map.current!.getSource('countries')) {
        map.current!.addLayer({
          id: 'country-highlight',
          type: 'fill',
          source: 'countries',
          paint: {
            'fill-color': '#10B981',
            'fill-opacity': 0.1
          },
          filter: ['==', ['get', 'name'], countryName]
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [countryName]);

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Service Coverage in {countryName.charAt(0).toUpperCase() + countryName.slice(1)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive cleaning service coverage across {countryName}. We're committed to providing professional cleaning solutions in your area.
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

export default CleaningCountryMap;
