
import React from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const ElectricalServiceAreas = () => {
  const areas = [
    {
      name: "Downtown District",
      description: "Emergency electrical services in the heart of downtown",
      responseTime: "15-30 minutes",
      services: ["24/7 Emergency", "Commercial Electrical", "Residential Service"]
    },
    {
      name: "Greenwood Heights", 
      description: "Residential electrical services for all Greenwood Heights neighborhoods",
      responseTime: "20-35 minutes",
      services: ["Home Rewiring", "Panel Upgrades", "Outlet Installation"]
    },
    {
      name: "Oak Valley",
      description: "Complete electrical solutions for Oak Valley residents",
      responseTime: "25-40 minutes", 
      services: ["Electrical Repairs", "Lighting Installation", "Safety Inspections"]
    },
    {
      name: "Pine Ridge",
      description: "Professional electrical services throughout Pine Ridge",
      responseTime: "30-45 minutes",
      services: ["Circuit Installation", "Electrical Troubleshooting", "Code Updates"]
    },
    {
      name: "Maple Grove",
      description: "Expert electrical work for Maple Grove properties",
      responseTime: "20-35 minutes",
      services: ["Surge Protection", "Electrical Maintenance", "Emergency Repairs"]
    },
    {
      name: "Riverside District",
      description: "Reliable electrical services along the Riverside District",
      responseTime: "25-40 minutes",
      services: ["Generator Installation", "Electrical Upgrades", "Safety Testing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Electrical Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional electrical services throughout the metropolitan area with fast response times and 24/7 emergency availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {area.name}
                  </h3>
                  <div className="flex items-center text-amber-600 text-sm font-medium">
                    <Clock size={14} className="mr-1" />
                    {area.responseTime}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Available Services:</h4>
                {area.services.map((service, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="text-xl mb-6 text-yellow-100">
              We serve additional areas throughout the region. Call us to check if we service your location!
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MapPin className="mr-3" size={20} />
              Check Service Availability: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalServiceAreas;
