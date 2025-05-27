
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingTestimonials from '../components/PlumbingTestimonials';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingAreaMap from '../../../components/PlumbingAreaMap';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';
import { Flag } from 'lucide-react';

const PlumbingCountry = () => {
  const stateLocations = [
    { name: 'California', coordinates: [-119.4179, 36.7783] as [number, number], type: 'state' as const },
    { name: 'Texas', coordinates: [-99.9018, 31.9686] as [number, number], type: 'state' as const },
    { name: 'Florida', coordinates: [-82.4572, 27.7663] as [number, number], type: 'state' as const },
    { name: 'New York', coordinates: [-74.0059, 40.7128] as [number, number], type: 'state' as const },
    { name: 'Illinois', coordinates: [-89.3985, 40.6331] as [number, number], type: 'state' as const }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Country Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-600/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Flag className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">United States Plumbing Services</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional plumbing services across the United States with nationwide coverage 
            and local expertise in every state.
          </p>
        </div>
      </section>

      <PlumbingCTA />
      <PlumbingAboutUs />
      <PlumbingServices />
      <PlumbingCTA />
      <PlumbingWhyChooseUs />
      <PlumbingProcess />
      <PlumbingCTA />
      <PlumbingGuarantee />
      <PlumbingTestimonials />
      <PlumbingCTA />
      <PlumbingServiceAreas />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Service States
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional plumbing services across multiple states with local expertise and 24/7 emergency response.
            </p>
          </div>
          
          <PlumbingAreaMap
            centerCoordinates={[-98.5795, 39.8283]}
            zoom={4}
            locations={stateLocations}
            areaName="United States"
            areaType="country"
            className="h-[600px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingCountry;
