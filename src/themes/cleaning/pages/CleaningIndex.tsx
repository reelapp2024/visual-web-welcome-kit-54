
import React, { useState, useEffect } from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningHero from '../components/CleaningHero';
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
import CleaningLoader from '../components/CleaningLoader';

const CleaningIndex = () => {
 
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      <CleaningHero />
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
      {/* <ServiceMap theme="cleaning" /> */}
      <CleaningFAQ />
      <CleaningCTA />
      <CleaningFooter />
    </div>
  );
};

export default CleaningIndex;
