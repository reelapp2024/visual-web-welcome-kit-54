
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningCTA from '../components/CleaningCTA';
import CleaningAboutUs from '../components/CleaningAboutUs';
import CleaningServices from '../components/CleaningServices';
import CleaningWhyChooseUs from '../components/CleaningWhyChooseUs';
import CleaningProcess from '../components/CleaningProcess';
import CleaningGuarantee from '../components/CleaningGuarantee';
import CleaningTestimonials from '../components/CleaningTestimonials';
import CleaningServiceAreas from '../components/CleaningServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import CleaningFAQ from '../components/CleaningFAQ';
import CleaningFooter from '../components/CleaningFooter';
import { Building } from 'lucide-react';

const CleaningCity = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      {/* City Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 to-emerald-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Building className="w-8 h-8 text-emerald-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Los Angeles Cleaning Services</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Professional residential and commercial cleaning services in Los Angeles 
            with same-day booking and eco-friendly products.
          </p>
        </div>
      </section>

      <CleaningCTA />
      <CleaningAboutUs />
      <CleaningServices />
      <CleaningCTA />
      <CleaningWhyChooseUs />
      <CleaningProcess />
      <CleaningCTA />
      <CleaningGuarantee />
      <CleaningTestimonials />
      <CleaningCTA />
      <CleaningServiceAreas />
      <ServiceMap theme="cleaning" />
      <CleaningFAQ />
      <CleaningCTA />
      <CleaningFooter />
    </div>
  );
};

export default CleaningCity;
