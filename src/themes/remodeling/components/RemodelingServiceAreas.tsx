
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const RemodelingServiceAreas = () => {
  const areas = [
    { name: "Downtown", link: "/remodeling/areas/downtown" },
    { name: "Midtown", link: "/remodeling/areas/midtown" },
    { name: "Uptown", link: "/remodeling/areas/uptown" },
    { name: "Westside", link: "/remodeling/areas/westside" },
    { name: "Eastside", link: "/remodeling/areas/eastside" },
    { name: "Northside", link: "/remodeling/areas/northside" },
    { name: "Southside", link: "/remodeling/areas/southside" },
    { name: "Suburbs", link: "/remodeling/areas/suburbs" },
    { name: "Metro Area", link: "/remodeling/areas/metro-area" },
    { name: "Business District", link: "/remodeling/areas/business-district" },
    { name: "Historic District", link: "/remodeling/areas/historic-district" },
    { name: "Residential Areas", link: "/remodeling/areas/residential-areas" }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional kitchen and bathroom remodeling services throughout the metropolitan area and surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <Link 
              key={index} 
              to={area.link}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-full mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <MapPin className="text-white" size={20} />
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">{area.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
            <p className="text-amber-100 mb-6">
              We may still serve your location! Give us a call to discuss your remodeling project.
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
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
