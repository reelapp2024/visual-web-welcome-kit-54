
import React from 'react';
import TreeHeader from '../components/TreeHeader';
import Footer from '../../../components/Footer';
import EnhancedMapboxMap from '../../../components/EnhancedMapboxMap';
import { MapPin, Phone, CheckCircle } from 'lucide-react';

const TreeAreas = () => {
  const areas = [
    {
      name: 'Downtown District',
      slug: 'downtown-district',
      description: 'Professional tree care services in the heart of Downtown District',
      neighborhoods: ['Financial District', 'City Center', 'Business District', 'Historic Quarter']
    },
    {
      name: 'Greenwood Heights',
      slug: 'greenwood-heights',
      description: 'Expert tree removal and care services for Greenwood Heights residents',
      neighborhoods: ['Greenwood Park', 'Heights Manor', 'Oak Hills', 'Maple Estates']
    },
    {
      name: 'Oak Valley',
      slug: 'oak-valley',
      description: 'Complete tree services for Oak Valley and surrounding areas',
      neighborhoods: ['Oak Valley Center', 'Valley View', 'Oak Grove', 'Valley Heights']
    },
    {
      name: 'Pine Ridge',
      slug: 'pine-ridge',
      description: 'Trusted tree care professionals serving Pine Ridge community',
      neighborhoods: ['Pine Ridge Estates', 'Ridge View', 'Pine Grove', 'Mountain View']
    },
    {
      name: 'Maple Grove',
      slug: 'maple-grove',
      description: 'Professional tree services for Maple Grove residential and commercial properties',
      neighborhoods: ['Maple Grove Village', 'Grove Park', 'Maple Heights', 'Grove Manor']
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Areas We
              <span className="block text-nature-300">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional tree care services throughout the greater metropolitan area
            </p>
            <a 
              href="tel:5551234567"
              className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Interactive map showing our tree care service areas
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <EnhancedMapboxMap className="h-96 md:h-[500px]" />
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cities & Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional tree care in your neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.slug} className="bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mr-4">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Neighborhoods:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={14} className="text-forest-500 mr-2 flex-shrink-0" />
                          {neighborhood}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href={`/tree/areas/${area.slug}`}
                      className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                    >
                      View Area Details
                    </a>
                    <a
                      href="tel:5551234567"
                      className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                    >
                      Call Now: (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-nature-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Tree Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">Deep knowledge of local tree species and conditions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">Fast response times throughout our service area</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured in all service areas</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Emergency tree service available around the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Tree Service in Your Area?
          </h2>
          <p className="text-xl mb-8">
            Call our certified arborists today. We serve all areas with professional tree care services.
          </p>
          <a 
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            <Phone className="mr-2" size={20} />
            Call Now: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreeAreas;
