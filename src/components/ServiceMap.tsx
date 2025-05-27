import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

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

  const serviceAreas = [
    { name: 'Downtown', distance: '2.5 miles', rating: 4.9, reviews: 127 },
    { name: 'Suburbs', distance: '8.2 miles', rating: 4.8, reviews: 89 },
    { name: 'North Side', distance: '5.1 miles', rating: 4.9, reviews: 156 },
    { name: 'East District', distance: '7.3 miles', rating: 4.7, reviews: 92 },
    { name: 'West End', distance: '6.8 miles', rating: 4.8, reviews: 134 },
    { name: 'South Valley', distance: '9.1 miles', rating: 4.9, reviews: 78 }
  ];

  return (
    <section className={`py-20 ${config.bg} font-poppins`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${config.primary} bg-clip-text text-transparent mb-6`}>
            Service Areas Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve customers throughout the metropolitan area with fast, reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className={`bg-gradient-to-r ${config.primary} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Service Coverage</h3>
                    <p className="text-white/90">Available 24/7 in your area</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {/* Decorative map background */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
                    <path d="M50 100 Q150 50 250 100 T350 150 L350 250 Q200 200 50 250 Z" fill="currentColor" className={config.accent} />
                    <circle cx="120" cy="120" r="4" fill="currentColor" className={config.accent} />
                    <circle cx="180" cy="180" r="4" fill="currentColor" className={config.accent} />
                    <circle cx="280" cy="140" r="4" fill="currentColor" className={config.accent} />
                  </svg>
                </div>
                
                {/* Service pins */}
                <div className="absolute inset-0 p-8">
                  {serviceAreas.slice(0, 4).map((area, index) => (
                    <div 
                      key={index}
                      className={`absolute bg-gradient-to-r ${config.secondary} text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse cursor-pointer hover:scale-110 transition-transform`}
                      style={{
                        left: `${20 + (index % 2) * 60}%`,
                        top: `${20 + Math.floor(index / 2) * 50}%`
                      }}
                    >
                      <MapPin className="w-6 h-6" />
                    </div>
                  ))}
                </div>

                {/* Coverage overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${config.secondary} opacity-10 rounded-full transform scale-150 blur-3xl`}></div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-8 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${config.accent}`}>50+</div>
                    <div className="text-gray-600 text-sm">Service Areas</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div>
                    <div className={`text-2xl font-bold ${config.accent}`}>24/7</div>
                    <div className="text-gray-600 text-sm">Emergency Service</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
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
                Professional service available in all major districts. Call now for immediate assistance!
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
                <h4 className="text-xl font-bold text-gray-900 mb-2">Popular Service Areas</h4>
                <p className="text-gray-600">Highly rated in these neighborhoods</p>
              </div>
              <div className="divide-y divide-gray-100">
                {serviceAreas.map((area, index) => (
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
