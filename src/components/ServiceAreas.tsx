
import React from 'react';
import { MapPin, Clock, Phone, Truck } from 'lucide-react';

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
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
            Junk Removal Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We proudly serve the entire metropolitan area with fast, reliable junk removal services. 
            Same-day pickup available in most areas!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-200 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-electric-500 to-brand-500 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
              </div>
              <ul className="space-y-3">
                {area.neighborhoods.map((neighborhood, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center group-hover:text-gray-700 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full mr-4"></div>
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-electric-500 to-electric-600 rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Same Day Service</h3>
            <p className="text-electric-100">Most areas receive same-day junk removal service when you call before 2 PM</p>
          </div>
          
          <div className="bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl p-8 text-black text-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
            <p>Fast quotes and scheduling available in all service areas</p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Local Experts</h3>
            <p className="text-brand-100">We know your area and provide the best junk removal solutions</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-electric-500 to-brand-600 rounded-2xl p-8 max-w-5xl mx-auto text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Area Listed?</h3>
            <p className="mb-8 text-electric-100 text-lg">
              We're constantly expanding our junk removal service areas. Call us to check if we serve your location!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Call Now: (555) 123-4567
              </button>
              <button className="bg-white hover:bg-gray-100 text-electric-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
