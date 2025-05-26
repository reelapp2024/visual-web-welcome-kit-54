
import React from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const RoofingServiceAreas = () => {
  const areas = [
    'Central Business District',
    'Highland Park', 
    'Riverside Commons',
    'Summit Ridge',
    'Valley View',
    'Westside Plaza'
  ];

  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Roofing Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional roofing services throughout the metropolitan area
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <MapPin size={16} className="text-slate-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-500 to-orange-500 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} className="text-orange-200" />
                <h4 className="text-xl font-bold">Service Coverage</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-orange-200" />
                  <span>Emergency service available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-orange-200" />
                  <span>24/7 emergency response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-orange-200" />
                  <span>Free estimates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-orange-200" />
                  <span>Licensed & bonded</span>
                </div>
              </div>
            </div>

            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Roofing service coverage area"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingServiceAreas;
