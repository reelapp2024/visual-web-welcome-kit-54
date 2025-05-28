
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import InteractiveMap from '../../../components/InteractiveMap';
import { MapPin, Navigation, Globe, Zap, Clock, Phone } from 'lucide-react';

const PlumbingMaps = () => {
  // Different map configurations
  const downtownArea = [
    {
      name: "Downtown Central",
      coordinates: { lat: 34.0522, lng: -118.2537 },
      description: "24/7 emergency plumbing services in downtown area",
      responseTime: "15-20 min"
    },
    {
      name: "Financial District",
      coordinates: { lat: 34.0512, lng: -118.2520 },
      description: "Commercial plumbing specialists",
      responseTime: "20-25 min"
    }
  ];

  const residentialAreas = [
    {
      name: "Beverly Hills",
      coordinates: { lat: 34.0736, lng: -118.4004 },
      description: "Luxury home plumbing services",
      responseTime: "25-30 min"
    },
    {
      name: "Santa Monica",
      coordinates: { lat: 34.0195, lng: -118.4912 },
      description: "Residential plumbing and repairs",
      responseTime: "30-35 min"
    },
    {
      name: "Hollywood",
      coordinates: { lat: 34.0928, lng: -118.3287 },
      description: "Full residential plumbing services",
      responseTime: "20-25 min"
    }
  ];

  const emergencyZones = [
    {
      name: "Emergency Zone 1",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Priority emergency response area",
      responseTime: "10-15 min"
    },
    {
      name: "Emergency Zone 2",
      coordinates: { lat: 34.1478, lng: -118.1445 },
      description: "East side emergency coverage",
      responseTime: "15-20 min"
    },
    {
      name: "Emergency Zone 3",
      coordinates: { lat: 33.9425, lng: -118.4081 },
      description: "South bay emergency services",
      responseTime: "20-25 min"
    }
  ];

  const commercialDistricts = [
    {
      name: "Business Park East",
      coordinates: { lat: 34.0734, lng: -118.1445 },
      description: "Office building plumbing maintenance",
      responseTime: "30-40 min"
    },
    {
      name: "Industrial Zone",
      coordinates: { lat: 34.0180, lng: -118.2900 },
      description: "Industrial plumbing solutions",
      responseTime: "35-45 min"
    }
  ];

  const westSideLocations = [
    {
      name: "Venice Beach",
      coordinates: { lat: 34.0118, lng: -118.4696 },
      description: "Coastal area plumbing services",
      responseTime: "40-50 min"
    },
    {
      name: "Culver City",
      coordinates: { lat: 34.0211, lng: -118.3965 },
      description: "West side residential services",
      responseTime: "35-40 min"
    },
    {
      name: "Marina del Rey",
      coordinates: { lat: 33.9806, lng: -118.4517 },
      description: "Marina and waterfront plumbing",
      responseTime: "45-55 min"
    }
  ];

  const allServiceAreas = [
    {
      name: "Downtown Metro",
      coordinates: { lat: 34.0522, lng: -118.2537 },
      description: "Central business district",
      responseTime: "15-30 min"
    },
    {
      name: "North Hollywood",
      coordinates: { lat: 34.1625, lng: -118.3779 },
      description: "Valley area services",
      responseTime: "25-35 min"
    },
    {
      name: "Westside",
      coordinates: { lat: 34.0259, lng: -118.4650 },
      description: "West LA coverage",
      responseTime: "30-40 min"
    },
    {
      name: "East LA",
      coordinates: { lat: 34.0522, lng: -118.1937 },
      description: "East side services",
      responseTime: "25-35 min"
    },
    {
      name: "South Bay",
      coordinates: { lat: 33.9425, lng: -118.4081 },
      description: "South bay area",
      responseTime: "35-45 min"
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-gray-50">
      <PlumbingHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">Service Area Maps</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive service coverage with interactive maps showing response times and service areas
          </p>
        </div>
      </section>

      {/* Maps Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Downtown Commercial Map */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Downtown Commercial District</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Fast response times for business and commercial properties in the downtown core</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.2537, 34.0522]}
              zoom={13}
              locations={downtownArea}
              areaName="Downtown Commercial"
              className="h-80 rounded-xl shadow-lg"
              theme="plumbing"
            />
          </div>

          {/* Residential Areas Map */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Residential Service Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive home plumbing services across premium residential neighborhoods</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.3500, 34.0600]}
              zoom={11}
              locations={residentialAreas}
              areaName="Residential Areas"
              className="h-80 rounded-xl shadow-lg"
              theme="plumbing"
            />
          </div>

          {/* Emergency Response Zones */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Emergency Response Zones</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Priority emergency plumbing services with fastest response times</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.2800, 34.0800]}
              zoom={10}
              locations={emergencyZones}
              areaName="Emergency Zones"
              className="h-80 rounded-xl shadow-lg border-2 border-red-200"
              theme="plumbing"
            />
          </div>

          {/* Commercial & Industrial */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial & Industrial Districts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized plumbing services for business parks and industrial facilities</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.2200, 34.0450]}
              zoom={12}
              locations={commercialDistricts}
              areaName="Commercial Districts"
              className="h-80 rounded-xl shadow-lg"
              theme="plumbing"
            />
          </div>

          {/* West Side Coverage */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">West Side Coverage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Coastal and west side plumbing services including marina areas</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.4400, 34.0100]}
              zoom={12}
              locations={westSideLocations}
              areaName="West Side"
              className="h-80 rounded-xl shadow-lg"
              theme="plumbing"
            />
          </div>

          {/* Complete Service Coverage */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Navigation className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Complete Metro Coverage</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Overview of all our service areas across the greater metropolitan region</p>
            </div>
            <InteractiveMap
              centerCoordinates={[-118.3000, 34.0700]}
              zoom={9}
              locations={allServiceAreas}
              areaName="Complete Coverage"
              className="h-96 rounded-xl shadow-lg border-2 border-blue-200"
              theme="plumbing"
            />
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Service in Your Area?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find your location on our maps? We're constantly expanding our service areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (555) 123-4567
            </a>
            <a 
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Clock className="w-6 h-6 mr-2" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <PlumbingFooter />
    </div>
  );
};

export default PlumbingMaps;
