
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import MapboxMap from '../../../components/MapboxMap';
import { MapPin, Navigation, Globe, Zap, Clock, Phone, Building, Home, Factory, Waves } from 'lucide-react';

const PlumbingMaps = () => {
  // 1. USA National Coverage
  const nationalLocations = [
    {
      name: "New York City, NY",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      description: "Northeast regional headquarters",
      responseTime: "24/7 coverage"
    },
    {
      name: "Los Angeles, CA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "West Coast operations center",
      responseTime: "24/7 coverage"
    },
    {
      name: "Chicago, IL",
      coordinates: { lat: 41.8781, lng: -87.6298 },
      description: "Midwest regional hub",
      responseTime: "24/7 coverage"
    },
    {
      name: "Houston, TX",
      coordinates: { lat: 29.7604, lng: -95.3698 },
      description: "Southern operations base",
      responseTime: "24/7 coverage"
    },
    {
      name: "Phoenix, AZ",
      coordinates: { lat: 33.4484, lng: -112.0740 },
      description: "Southwest service center",
      responseTime: "24/7 coverage"
    }
  ];

  // 2. California State Coverage
  const californiaLocations = [
    {
      name: "San Francisco",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      description: "Bay Area headquarters",
      responseTime: "15-30 min"
    },
    {
      name: "Los Angeles",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Southern California hub",
      responseTime: "15-30 min"
    },
    {
      name: "San Diego",
      coordinates: { lat: 32.7157, lng: -117.1611 },
      description: "South Coast operations",
      responseTime: "20-35 min"
    },
    {
      name: "Sacramento",
      coordinates: { lat: 38.5767, lng: -121.4687 },
      description: "Central Valley service",
      responseTime: "25-40 min"
    },
    {
      name: "Fresno",
      coordinates: { lat: 36.7378, lng: -119.7871 },
      description: "Central California coverage",
      responseTime: "30-45 min"
    }
  ];

  // 3. Los Angeles Metropolitan Area
  const losAngelesMetroLocations = [
    {
      name: "Downtown LA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Central business district",
      responseTime: "10-20 min"
    },
    {
      name: "Hollywood",
      coordinates: { lat: 34.0928, lng: -118.3287 },
      description: "Entertainment district",
      responseTime: "15-25 min"
    },
    {
      name: "Beverly Hills",
      coordinates: { lat: 34.0736, lng: -118.4004 },
      description: "Luxury residential area",
      responseTime: "15-25 min"
    },
    {
      name: "Santa Monica",
      coordinates: { lat: 34.0195, lng: -118.4912 },
      description: "Coastal community",
      responseTime: "20-30 min"
    },
    {
      name: "Pasadena",
      coordinates: { lat: 34.1478, lng: -118.1445 },
      description: "San Gabriel Valley",
      responseTime: "20-30 min"
    },
    {
      name: "Long Beach",
      coordinates: { lat: 33.7701, lng: -118.1937 },
      description: "Port city services",
      responseTime: "25-35 min"
    }
  ];

  // 4. Emergency Response Zones LA
  const emergencyZonesLA = [
    {
      name: "Zone 1 - Central LA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Priority emergency response",
      responseTime: "5-15 min"
    },
    {
      name: "Zone 2 - West LA",
      coordinates: { lat: 34.0522, lng: -118.4437 },
      description: "Westside emergency coverage",
      responseTime: "10-20 min"
    },
    {
      name: "Zone 3 - East LA",
      coordinates: { lat: 34.0522, lng: -118.1437 },
      description: "Eastside rapid response",
      responseTime: "10-20 min"
    },
    {
      name: "Zone 4 - South LA",
      coordinates: { lat: 33.9522, lng: -118.2437 },
      description: "South LA emergency services",
      responseTime: "15-25 min"
    }
  ];

  // 5. Commercial Districts
  const commercialDistricts = [
    {
      name: "Financial District",
      coordinates: { lat: 34.0507, lng: -118.2467 },
      description: "Banking and finance buildings",
      responseTime: "15-25 min"
    },
    {
      name: "Arts District",
      coordinates: { lat: 34.0394, lng: -118.2348 },
      description: "Creative commercial spaces",
      responseTime: "20-30 min"
    },
    {
      name: "Fashion District",
      coordinates: { lat: 34.0394, lng: -118.2581 },
      description: "Garment industry hub",
      responseTime: "20-30 min"
    },
    {
      name: "Koreatown Business",
      coordinates: { lat: 34.0522, lng: -118.3000 },
      description: "Commercial corridor",
      responseTime: "25-35 min"
    }
  ];

  // 6. Residential Neighborhoods
  const residentialAreas = [
    {
      name: "Bel Air",
      coordinates: { lat: 34.0900, lng: -118.4456 },
      description: "Luxury hillside homes",
      responseTime: "20-30 min"
    },
    {
      name: "Manhattan Beach",
      coordinates: { lat: 33.8847, lng: -118.4109 },
      description: "Beachside residential",
      responseTime: "30-40 min"
    },
    {
      name: "Silverlake",
      coordinates: { lat: 34.0928, lng: -118.2739 },
      description: "Trendy residential area",
      responseTime: "20-30 min"
    },
    {
      name: "Westwood",
      coordinates: { lat: 34.0633, lng: -118.4456 },
      description: "Family neighborhoods",
      responseTime: "25-35 min"
    }
  ];

  // 7. Industrial Areas
  const industrialAreas = [
    {
      name: "Port of LA",
      coordinates: { lat: 33.7361, lng: -118.2644 },
      description: "Major port facilities",
      responseTime: "35-45 min"
    },
    {
      name: "Vernon Industrial",
      coordinates: { lat: 34.0044, lng: -118.2317 },
      description: "Manufacturing district",
      responseTime: "25-35 min"
    },
    {
      name: "Commerce Industrial",
      coordinates: { lat: 34.0067, lng: -118.1597 },
      description: "Logistics and warehousing",
      responseTime: "30-40 min"
    },
    {
      name: "El Segundo Aerospace",
      coordinates: { lat: 33.9192, lng: -118.4192 },
      description: "Aerospace industry hub",
      responseTime: "30-40 min"
    }
  ];

  // 8. Educational Institutions
  const educationalInstitutions = [
    {
      name: "UCLA",
      coordinates: { lat: 34.0689, lng: -118.4452 },
      description: "University campus plumbing",
      responseTime: "20-30 min"
    },
    {
      name: "USC",
      coordinates: { lat: 34.0224, lng: -118.2851 },
      description: "Private university services",
      responseTime: "25-35 min"
    },
    {
      name: "CalTech",
      coordinates: { lat: 34.1377, lng: -118.1253 },
      description: "Research facility plumbing",
      responseTime: "30-40 min"
    },
    {
      name: "CSUN",
      coordinates: { lat: 34.2411, lng: -118.5291 },
      description: "State university campus",
      responseTime: "35-45 min"
    }
  ];

  // 9. Healthcare Facilities
  const healthcareFacilities = [
    {
      name: "Cedars-Sinai Medical Center",
      coordinates: { lat: 34.0755, lng: -118.3785 },
      description: "Major medical center",
      responseTime: "15-25 min"
    },
    {
      name: "UCLA Medical Center",
      coordinates: { lat: 34.0689, lng: -118.4452 },
      description: "University hospital",
      responseTime: "20-30 min"
    },
    {
      name: "Children's Hospital LA",
      coordinates: { lat: 34.0975, lng: -118.2697 },
      description: "Pediatric specialty hospital",
      responseTime: "20-30 min"
    },
    {
      name: "Good Samaritan Hospital",
      coordinates: { lat: 34.0611, lng: -118.2664 },
      description: "Downtown medical facility",
      responseTime: "15-25 min"
    }
  ];

  // 10. Entertainment & Tourism
  const entertainmentTourism = [
    {
      name: "Hollywood Walk of Fame",
      coordinates: { lat: 34.1022, lng: -118.3406 },
      description: "Tourist attraction area",
      responseTime: "20-30 min"
    },
    {
      name: "Griffith Observatory",
      coordinates: { lat: 34.1184, lng: -118.3004 },
      description: "Observatory and planetarium",
      responseTime: "25-35 min"
    },
    {
      name: "Santa Monica Pier",
      coordinates: { lat: 34.0089, lng: -118.4973 },
      description: "Iconic pier and amusement park",
      responseTime: "30-40 min"
    },
    {
      name: "Getty Center",
      coordinates: { lat: 34.0780, lng: -118.4740 },
      description: "Art museum complex",
      responseTime: "25-35 min"
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
            <h1 className="text-4xl md:text-6xl font-bold">Real Location Maps</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive service coverage with interactive Mapbox maps showing real locations and precise response times
          </p>
        </div>
      </section>

      {/* Maps Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 1. National Coverage */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">National Coverage - USA</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Professional plumbing services across major metropolitan areas nationwide</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-98.5795, 39.8283]}
                zoom={4}
                locations={nationalLocations}
                areaName="National Coverage"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 2. California State */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">California State Coverage</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive plumbing services throughout California's major cities</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-119.4179, 36.7783]}
                zoom={6}
                locations={californiaLocations}
                areaName="California"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 3. Los Angeles Metro */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Los Angeles Metropolitan Area</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Complete coverage across the greater Los Angeles metropolitan region</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.2437, 34.0522]}
                zoom={10}
                locations={losAngelesMetroLocations}
                areaName="LA Metro"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 4. Emergency Response Zones */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Emergency Response Zones</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Priority emergency plumbing services with rapid response times</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden border-2 border-red-200">
              <MapboxMap
                centerCoordinates={[-118.2437, 34.0522]}
                zoom={11}
                locations={emergencyZonesLA}
                areaName="Emergency Zones"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 5. Commercial Districts */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Factory className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Commercial Districts</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized commercial plumbing services for business districts</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.2500, 34.0450]}
                zoom={12}
                locations={commercialDistricts}
                areaName="Commercial Districts"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 6. Residential Areas */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Premium Residential Areas</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Luxury home plumbing services in exclusive neighborhoods</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.4000, 34.0600]}
                zoom={11}
                locations={residentialAreas}
                areaName="Residential Areas"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 7. Industrial Areas */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Factory className="w-8 h-8 text-gray-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Industrial & Port Areas</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Heavy-duty industrial plumbing for manufacturing and port facilities</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.2200, 33.9500]}
                zoom={11}
                locations={industrialAreas}
                areaName="Industrial Areas"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 8. Educational Institutions */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Educational Institutions</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized plumbing services for universities and educational facilities</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.3000, 34.1500]}
                zoom={10}
                locations={educationalInstitutions}
                areaName="Educational"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 9. Healthcare Facilities */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Healthcare Facilities</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical plumbing services for hospitals and medical centers</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden border-2 border-red-100">
              <MapboxMap
                centerCoordinates={[-118.3200, 34.0700]}
                zoom={11}
                locations={healthcareFacilities}
                areaName="Healthcare"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 10. Entertainment & Tourism */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Waves className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Entertainment & Tourism</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Plumbing services for major attractions and entertainment venues</p>
            </div>
            <div className="h-96 rounded-xl shadow-lg overflow-hidden">
              <MapboxMap
                centerCoordinates={[-118.3700, 34.0600]}
                zoom={11}
                locations={entertainmentTourism}
                areaName="Entertainment"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Find Your Location</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't see your specific location? We're continuously expanding our service areas across the region.
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
