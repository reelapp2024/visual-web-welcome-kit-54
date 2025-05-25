
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, CheckCircle, Star, Truck } from 'lucide-react';

const AreaDetail = () => {
  const { slug } = useParams();

  const areaData: { [key: string]: any } = {
    'downtown-metro': {
      name: 'Downtown Metro',
      description: 'Professional junk removal services in the heart of the city',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      features: [
        'Same-Day Service Available',
        '24/7 Emergency Response',
        'Commercial & Residential',
        'Licensed & Insured',
        'Eco-Friendly Disposal'
      ],
      services: [
        'Office Cleanouts',
        'Retail Space Clearing',
        'Restaurant Equipment Removal',
        'Construction Debris',
        'Furniture & Appliance Pickup'
      ]
    },
    'north-hills': {
      name: 'North Hills',
      description: 'Residential and estate cleanout services in North Hills area',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      coordinates: { lat: 40.7589, lng: -73.9851 },
      features: [
        'Residential Specialists',
        'Estate Cleanout Experts',
        'Senior Citizen Discounts',
        'Compassionate Service',
        'Free Estimates'
      ],
      services: [
        'Estate Cleanouts',
        'Garage Cleanouts',
        'Basement Clearing',
        'Attic Cleanouts',
        'Whole House Cleanouts'
      ]
    },
    'westside-district': {
      name: 'Westside District',
      description: 'Complete junk removal and hauling services for Westside residents',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      coordinates: { lat: 40.7282, lng: -74.0776 },
      features: [
        'Furniture Removal Experts',
        'Large Appliance Pickup',
        'Eco-Friendly Recycling',
        'Same-Day Service',
        'No Hidden Fees'
      ],
      services: [
        'Furniture Removal',
        'Appliance Pickup',
        'Electronics Disposal',
        'Mattress Removal',
        'Hot Tub Removal'
      ]
    },
    'east-valley': {
      name: 'East Valley',
      description: 'Construction debris and commercial cleanout services',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
      coordinates: { lat: 40.6892, lng: -74.0445 },
      features: [
        'Construction Debris Experts',
        'Large Item Specialists',
        'Commercial Cleanouts',
        'Renovation Cleanup',
        'Heavy Equipment Available'
      ],
      services: [
        'Construction Debris',
        'Renovation Cleanup',
        'Drywall Removal',
        'Concrete Disposal',
        'Commercial Cleanouts'
      ]
    },
    'south-bay-area': {
      name: 'South Bay Area',
      description: 'Comprehensive junk removal services for South Bay communities',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b924?q=80&w=800&auto=format&fit=crop',
      coordinates: { lat: 40.6501, lng: -74.0496 },
      features: [
        'Yard Waste Specialists',
        'Moving Assistance',
        'Home Cleanout Experts',
        'Tree Debris Removal',
        'Storm Cleanup'
      ],
      services: [
        'Yard Waste Removal',
        'Tree Limb Removal',
        'Moving Cleanouts',
        'Shed Removal',
        'Storm Debris Cleanup'
      ]
    }
  };

  const area = areaData[slug || ''] || areaData['downtown-metro'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-500 to-electric-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-3 text-lime-300" size={32} />
                <span className="text-lime-300 font-semibold text-lg">Service Area</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {area.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {area.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5551234567" className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Call Now: (555) 123-4567
                </a>
                <div className="flex items-center text-lime-200">
                  <Clock className="mr-2" size={20} />
                  <span>Same-Day Service Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={area.image} 
                alt={area.name}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-2" size={20} />
                  <span className="font-bold text-gray-900">4.9/5 Rating</span>
                </div>
                <p className="text-gray-600 text-sm">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Location Map
            </h2>
            <p className="text-xl text-gray-600">
              We serve {area.name} and surrounding neighborhoods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20" />
              <div className="text-center z-10">
                <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.name}</h3>
                <p className="text-gray-600">Lat: {area.coordinates.lat}, Lng: {area.coordinates.lng}</p>
                <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
                  <p className="text-sm text-gray-700">
                    <Truck className="inline mr-2" size={16} />
                    Average response time: 30-60 minutes
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-green-500 rounded-full opacity-60" />
              <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full opacity-60" />
              <div className="absolute bottom-16 left-16 w-5 h-5 bg-yellow-500 rounded-full opacity-60" />
              <div className="absolute bottom-10 right-10 w-6 h-6 bg-purple-500 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Us in {area.name}
              </h2>
              <div className="space-y-4">
                {area.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Services in {area.name}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {area.services.map((service: string, index: number) => (
                  <div key={index} className="bg-gradient-to-r from-brand-50 to-electric-50 rounded-lg p-4 border border-brand-100">
                    <div className="flex items-center">
                      <div className="bg-brand-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <Truck className="text-white" size={16} />
                      </div>
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-electric-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Junk Removal in {area.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call now for same-day service in {area.name}. Free estimates, no hidden fees, and eco-friendly disposal guaranteed.
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

export default AreaDetail;
