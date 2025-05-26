
import React from 'react';
import { MapPin, Clock, CheckCircle, Leaf } from 'lucide-react';

const TreeServiceAreas = () => {
  const areas = [
    'Downtown District',
    'Greenwood Heights', 
    'Oak Valley',
    'Pine Ridge',
    'Maple Grove',
    'Cedar Park'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 via-nature-50 to-forest-100 font-poppins relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nature-200/30 rounded-full blur-3xl"></div>
      
      {/* Floating leaves */}
      <div className="absolute top-20 right-20 text-forest-200 animate-bounce">
        <Leaf size={48} />
      </div>
      <div className="absolute bottom-20 left-20 text-nature-200 animate-bounce delay-1000">
        <Leaf size={36} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flowing header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tree Service
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-nature-500">
              Growing Areas
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-forest-400 via-nature-400 to-forest-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional tree care services nurturing communities throughout our natural metro area
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Organic areas list */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-100 to-nature-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Leaf className="mr-3 text-forest-500" />
                Areas We Naturally Serve
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {areas.map((area, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-forest-50 to-nature-50 rounded-2xl hover:from-forest-100 hover:to-nature-100 transition-all duration-300 transform hover:-translate-y-1">
                      <MapPin size={20} className="text-forest-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-gray-900 group-hover:text-forest-700 transition-colors">{area}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Organic service features */}
              <div className="bg-gradient-to-br from-forest-500 via-nature-500 to-forest-600 rounded-3xl p-8 text-white mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock size={28} className="text-nature-200" />
                    <h4 className="text-2xl font-bold">Natural Service Coverage</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Same-day service available',
                      '24/7 emergency response',
                      'Free eco-friendly estimates',
                      'Licensed & naturally insured'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={18} className="text-nature-200 flex-shrink-0" />
                        <span className="text-forest-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  🌿 Call Now: (555) 123-4567 🌲
                </a>
              </div>
            </div>
          </div>

          {/* Organic image section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-200 to-nature-200 rounded-3xl transform -rotate-3"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tree service coverage area"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover transform rotate-3 hover:rotate-6 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-600/30 via-transparent to-nature-400/20 rounded-3xl transform rotate-3"></div>
              
              {/* Floating nature elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-nature-400/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Leaf className="text-white" size={24} />
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-forest-400/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Leaf className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeServiceAreas;
