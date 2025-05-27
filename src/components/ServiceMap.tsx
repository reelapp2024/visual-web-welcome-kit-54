
import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';

interface ServiceMapProps {
  theme: 'plumbing' | 'electrical' | 'remodeling' | 'roofing' | 'hvac';
}

const ServiceMap: React.FC<ServiceMapProps> = ({ theme }) => {
  const themeConfig = {
    plumbing: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'from-blue-500 to-cyan-500',
      accent: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    electrical: {
      primary: 'from-amber-600 to-yellow-600',
      secondary: 'from-amber-500 to-yellow-500',
      accent: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    remodeling: {
      primary: 'from-green-600 to-emerald-600',
      secondary: 'from-green-500 to-emerald-500',
      accent: 'text-green-600',
      bg: 'bg-green-50'
    },
    roofing: {
      primary: 'from-slate-600 to-gray-600',
      secondary: 'from-slate-500 to-gray-500',
      accent: 'text-slate-600',
      bg: 'bg-slate-50'
    },
    hvac: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'from-orange-500 to-red-500',
      accent: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  };

  const config = themeConfig[theme];

  const realServiceAreas = [
    { name: 'Los Angeles', distance: '2.5 miles', rating: 4.9, reviews: 127, coords: { x: 15, y: 45 } },
    { name: 'San Diego', distance: '8.2 miles', rating: 4.8, reviews: 89, coords: { x: 18, y: 75 } },
    { name: 'San Francisco', distance: '5.1 miles', rating: 4.9, reviews: 156, coords: { x: 8, y: 25 } },
    { name: 'Sacramento', distance: '7.3 miles', rating: 4.7, reviews: 92, coords: { x: 25, y: 20 } },
    { name: 'Fresno', distance: '6.8 miles', rating: 4.8, reviews: 134, coords: { x: 35, y: 40 } },
    { name: 'Long Beach', distance: '9.1 miles', rating: 4.9, reviews: 78, coords: { x: 20, y: 50 } },
    { name: 'Oakland', distance: '4.2 miles', rating: 4.8, reviews: 165, coords: { x: 12, y: 28 } },
    { name: 'Bakersfield', distance: '11.5 miles', rating: 4.7, reviews: 103, coords: { x: 45, y: 60 } }
  ];

  return (
    <section className={`py-20 ${config.bg} font-poppins`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${config.primary} bg-clip-text text-transparent mb-6`}>
            Service Areas Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve customers throughout California with fast, reliable service and certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Interactive Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className={`bg-gradient-to-r ${config.primary} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">California Coverage</h3>
                    <p className="text-white/90">Real locations with certified teams</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Navigation className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* California Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
                {/* California State Outline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 120" className="w-full h-full opacity-20 text-gray-400">
                    <path 
                      d="M20 15 Q25 10 35 12 L45 15 Q55 18 65 25 L70 35 Q72 45 70 55 L68 65 Q65 75 60 85 L55 95 Q50 105 45 110 L35 115 Q25 112 20 105 L15 95 Q12 85 15 75 L18 65 Q20 55 22 45 L20 35 Q18 25 20 15 Z" 
                      fill="currentColor" 
                      stroke="currentColor" 
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                
                {/* Real Service Location Pins */}
                <div className="absolute inset-0 p-4">
                  {realServiceAreas.map((area, index) => (
                    <div 
                      key={index}
                      className={`absolute group cursor-pointer`}
                      style={{
                        left: `${area.coords.x}%`,
                        top: `${area.coords.y}%`
                      }}
                    >
                      {/* Animated Pin */}
                      <div className={`relative bg-gradient-to-r ${config.secondary} text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 animate-pulse`}>
                        <MapPin className="w-4 h-4" />
                        
                        {/* Ripple Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${config.secondary} rounded-full animate-ping opacity-75`}></div>
                        
                        {/* Tooltip on Hover */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="bg-black text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                            <div className="font-semibold">{area.name}</div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{area.rating}</span>
                              <span>({area.reviews})</span>
                            </div>
                            <div className="text-xs opacity-75">{area.distance} away</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coverage Radius Visualization */}
                <div className={`absolute inset-0 bg-gradient-to-r ${config.secondary} opacity-5 rounded-full transform scale-150 blur-3xl pointer-events-none`}></div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${config.accent}`}>50+</div>
                    <div className="text-gray-600 text-sm">Cities Served</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${config.accent}`}>24/7</div>
                    <div className="text-gray-600 text-sm">Emergency Service</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${config.accent}`}>30min</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas List */}
          <div className="space-y-6">
            <div className={`bg-gradient-to-r ${config.primary} text-white rounded-2xl p-8 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-4">We Serve Your Area!</h3>
              <p className="text-white/90 mb-6">
                Professional service available in all major California cities. Call now for immediate assistance!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:5551234567"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (555) 123-4567</span>
                </a>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Major Service Areas</h4>
                <p className="text-gray-600">Highly rated in these California cities</p>
              </div>
              <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                {realServiceAreas.map((area, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${config.secondary} text-white rounded-full p-2`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{area.name}</div>
                          <div className="text-sm text-gray-500">{area.distance} away</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{area.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">{area.reviews} reviews</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
