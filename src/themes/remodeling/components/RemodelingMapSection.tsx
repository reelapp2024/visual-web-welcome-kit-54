
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

const RemodelingMapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate map loading
    if (mapRef.current) {
      mapRef.current.style.opacity = '1';
    }
  }, []);

  const serviceLocations = [
    { name: "Downtown LA", coords: [34.0522, -118.2437], projects: 45 },
    { name: "Beverly Hills", coords: [34.0736, -118.4004], projects: 38 },
    { name: "Santa Monica", coords: [34.0195, -118.4912], projects: 29 },
    { name: "Hollywood", coords: [34.0928, -118.3267], projects: 52 },
    { name: "Pasadena", coords: [34.1478, -118.1445], projects: 41 },
    { name: "Long Beach", coords: [33.7701, -118.1937], projects: 33 },
    { name: "Glendale", coords: [34.1425, -118.2551], projects: 27 },
    { name: "Burbank", coords: [34.1808, -118.3090], projects: 19 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Our Service Coverage Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See all the areas where we provide professional kitchen and bathroom remodeling services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Map Area */}
            <div className="lg:col-span-2 relative">
              <div 
                ref={mapRef}
                className="h-96 lg:h-[600px] bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden transition-opacity duration-1000"
                style={{ opacity: 0 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-amber-400 rounded-full animate-pulse"
                        style={{
                          width: Math.random() * 6 + 4 + 'px',
                          height: Math.random() * 6 + 4 + 'px',
                          top: Math.random() * 100 + '%',
                          left: Math.random() * 100 + '%',
                          animationDelay: Math.random() * 2 + 's',
                          animationDuration: (Math.random() * 3 + 2) + 's'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Service Location Pins */}
                {serviceLocations.map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-fade-in"
                    style={{
                      top: `${20 + (index % 4) * 20}%`,
                      left: `${15 + (index % 5) * 18}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="relative">
                      <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-full shadow-lg transform group-hover:scale-125 transition-all duration-300 hover:shadow-xl">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                          <div className="font-semibold">{location.name}</div>
                          <div className="text-xs text-gray-300">{location.projects} Projects</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>

                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-full bg-amber-400 opacity-30 animate-ping"></div>
                    </div>
                  </div>
                ))}

                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in">
                  <div className="flex items-center space-x-2 text-amber-600">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold text-sm">284+ Completed Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas List */}
            <div className="p-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
              <h3 className="text-2xl font-bold mb-6">Active Service Areas</h3>
              <div className="space-y-4 mb-8">
                {serviceLocations.map((location, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div>
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-xs text-orange-100">{location.projects} completed projects</div>
                    </div>
                    <MapPin className="w-5 h-5 text-orange-200" />
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 mr-2 text-orange-200" />
                    <span className="font-semibold">Response Time</span>
                  </div>
                  <p className="text-orange-100 text-sm">Average 30-45 minutes across all areas</p>
                </div>

                <a 
                  href="tel:5551234567"
                  className="block w-full bg-white text-amber-600 px-6 py-4 rounded-lg font-bold text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingMapSection;
