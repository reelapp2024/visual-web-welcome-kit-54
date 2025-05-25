
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const Areas = () => {
  const areas = [
    {
      name: 'Downtown Metro',
      slug: 'downtown-metro',
      description: 'Professional junk removal services in the heart of the city',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=500&auto=format&fit=crop',
      features: ['Same-Day Service', '24/7 Emergency Calls', 'Commercial Focus']
    },
    {
      name: 'North Hills',
      slug: 'north-hills',
      description: 'Residential and estate cleanout services in North Hills area',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=500&auto=format&fit=crop',
      features: ['Residential Specialists', 'Estate Cleanouts', 'Senior Discounts']
    },
    {
      name: 'Westside District',
      slug: 'westside-district',
      description: 'Complete junk removal and hauling services for Westside residents',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop',
      features: ['Furniture Removal', 'Appliance Pickup', 'Eco-Friendly Disposal']
    },
    {
      name: 'East Valley',
      slug: 'east-valley',
      description: 'Construction debris and commercial cleanout services',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=500&auto=format&fit=crop',
      features: ['Construction Debris', 'Large Item Removal', 'Business Cleanouts']
    },
    {
      name: 'South Bay Area',
      slug: 'south-bay-area',
      description: 'Comprehensive junk removal services for South Bay communities',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b924?q=80&w=500&auto=format&fit=crop',
      features: ['Yard Waste Removal', 'Home Cleanouts', 'Moving Assistance']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-500 to-electric-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Areas We Serve
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional junk removal services across the metro area. Same-day service available in all locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:5551234567" className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <Phone className="inline mr-2" size={20} />
              Call Now: (555) 123-4567
            </a>
            <div className="flex items-center text-lime-200">
              <Clock className="mr-2" size={20} />
              <span>Available 7 Days a Week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve communities throughout the metro area with fast, reliable junk removal services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-brand-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`/areas/${area.slug}`} 
                    className="block w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    View Area Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Coverage Map
            </h2>
            <p className="text-xl text-gray-600">
              See all the areas we serve with our professional junk removal services
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-brand-500" size={48} />
              <p className="text-gray-600 text-lg">Interactive coverage map coming soon</p>
              <p className="text-gray-500">Call us to confirm service in your area</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-electric-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Schedule Your Junk Removal?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see your area listed? Call us! We're expanding our service areas and may be able to help.
          </p>
          <a href="tel:5551234567" className="bg-lime-500 hover:bg-lime-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            <Phone className="inline mr-2" size={20} />
            Call Now: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Areas;
