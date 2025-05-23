
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    {
      name: "Downtown District",
      neighborhoods: ["Financial District", "Arts Quarter", "Business Center", "Historic Downtown"]
    },
    {
      name: "North Side",
      neighborhoods: ["Riverside", "Parkview", "Highland", "Northgate"]
    },
    {
      name: "South Side", 
      neighborhoods: ["Southport", "Garden District", "Industrial Area", "Lakefront"]
    },
    {
      name: "East Side",
      neighborhoods: ["Eastwood", "Sunrise", "Valley View", "Hillcrest"]
    },
    {
      name: "West Side",
      neighborhoods: ["Westbrook", "Sunset Hills", "Meadowbrook", "Westfield"]
    },
    {
      name: "Suburban Areas",
      neighborhoods: ["Maple Heights", "Oak Grove", "Pine Valley", "Cedar Park"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where Do We Serve?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly serve the entire metropolitan area and surrounding communities. 
            No matter where you are, we're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 border-2 border-transparent hover:border-blue-200">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
              </div>
              <ul className="space-y-2">
                {area.neighborhoods.map((neighborhood, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
            <p>Most areas receive same-day or next-day service availability</p>
          </div>
          
          <div className="bg-green-600 rounded-lg p-6 text-white text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
            <p>24/7 emergency services available in all service areas</p>
          </div>
          
          <div className="bg-yellow-500 rounded-lg p-6 text-black text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Local Experts</h3>
            <p>We know your area and understand local service needs</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
            <p className="mb-6 text-blue-100">
              We're constantly expanding our service areas. Call us to check if we serve your location!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Call (555) 123-4567
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Check Service Area
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
