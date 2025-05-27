
import React from 'react';
import { Link } from 'react-router-dom';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingServiceAreas from '../components/RemodelingServiceAreas';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';
import { MapPin, Building, Flag, Navigation } from 'lucide-react';

const RemodelingAreas = () => {
  const areaTypes = [
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Country",
      description: "Nationwide remodeling services",
      link: "/remodeling/country",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "State",
      description: "Statewide coverage",
      link: "/remodeling/state",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "City",
      description: "Major metropolitan areas",
      link: "/remodeling/city",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Area",
      description: "Neighborhood service",
      link: "/remodeling/local-area",
      gradient: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Remodeling Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Professional kitchen and bathroom remodeling services throughout the metropolitan area
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Service Coverage Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your location to see specific service information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {areaTypes.map((area, index) => (
              <Link 
                key={index}
                to={area.link}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className={`bg-gradient-to-r ${area.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RemodelingServiceAreas />
      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingAreas;
