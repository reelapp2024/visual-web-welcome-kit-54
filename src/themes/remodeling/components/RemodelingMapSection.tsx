
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
    { name: "Downtown", coords: [40.7589, -73.9851], projects: 45 },
    { name: "Midtown", coords: [40.7505, -73.9934], projects: 38 },
    { name: "Uptown", coords: [40.7831, -73.9712], projects: 29 },
    { name: "Westside", coords: [40.7505, -74.0134], projects: 52 },
    { name: "Eastside", coords: [40.7505, -73.9634], projects: 41 },
    { name: "Brooklyn Heights", coords: [40.6962, -73.9942], projects: 33 },
    { name: "Queens", coords: [40.7282, -73.7949], projects: 27 },
    { name: "Bronx", coords: [40.8448, -73.8648], projects: 19 }
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
                    className="flex justify-between items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:translate-x-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{location.name}</span>
                    </div>
                    <div className="text-sm bg-white/20 px-2 py-1 rounded">
                      {location.projects} projects
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Service Hours</span>
                </div>
                <div className="text-amber-100 text-sm space-y-1">
                  <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency Only</div>
                </div>

                <div className="mt-6">
                  <a
                    href="tel:5551234567"
                    className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg w-full justify-center"
                  >
                    <Phone size={20} />
                    <span>Call (555) 123-4567</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingMapSection;
