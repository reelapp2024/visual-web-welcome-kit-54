import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingServices from '../components/PaintingServices';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingProcess from '../components/PaintingProcess';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingTestimonials from '../components/PaintingTestimonials';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import InteractiveMap from '../../../components/InteractiveMap';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';
import { Flag } from 'lucide-react';

const PaintingCountry = () => {
  const stateLocations = [
    { 
      name: 'California', 
      coordinates: { lat: 36.7783, lng: -119.4179 }, 
      description: 'California statewide painting services',
      responseTime: '24-48 hours'
    },
    { 
      name: 'Texas', 
      coordinates: { lat: 31.9686, lng: -99.9018 }, 
      description: 'Texas painting services',
      responseTime: '24-48 hours'
    },
    { 
      name: 'Florida', 
      coordinates: { lat: 27.7663, lng: -82.4572 }, 
      description: 'Florida painting services',
      responseTime: '24-48 hours'
    },
    { 
      name: 'New York', 
      coordinates: { lat: 40.7128, lng: -74.0059 }, 
      description: 'New York painting services',
      responseTime: '24-48 hours'
    },
    { 
      name: 'Illinois', 
      coordinates: { lat: 40.6331, lng: -89.3985 }, 
      description: 'Illinois painting services',
      responseTime: '24-48 hours'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Country Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Flag className="w-8 h-8 text-pink-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">United States Painting Services</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional painting services across the United States with nationwide coverage 
            and local expertise in every state.
          </p>
        </div>
      </section>

      <PaintingAboutUs />
      <PaintingServices />
      <PaintingCTA />
      <PaintingWhyChooseUs />
      <PaintingProcess />
      <PaintingCTA />
      <PaintingGuarantee />
      <PaintingTestimonials />
      <PaintingCTA />
      <PaintingServiceAreas />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our Service States
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional painting services across multiple states with local expertise and same-day estimates.
            </p>
          </div>
          
          <InteractiveMap
            centerCoordinates={[-98.5795, 39.8283]}
            zoom={4}
            locations={stateLocations}
            areaName="United States"
            className="h-[600px] rounded-2xl shadow-2xl"
            theme="painting"
          />
        </div>
      </section>
      
      <PaintingFAQ />
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingCountry;
