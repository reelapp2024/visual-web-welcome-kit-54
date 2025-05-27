
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const RemodelingServiceAreas = () => {
  const areas = [
    "Downtown", "Midtown", "Uptown", "Westside",
    "Eastside", "Northside", "Southside", "Suburbs",
    "Metro Area", "Business District", "Historic District", "Residential Areas"
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional kitchen and bathroom remodeling services throughout the metropolitan area and surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <MapPin className="text-violet-600 mr-3" size={24} />
                <span className="font-semibold text-gray-900">{area}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
            <p className="text-violet-100 mb-6">
              We may still serve your location! Give us a call to discuss your remodeling project.
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Call (555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemodelingServiceAreas;
