
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingHero from '../components/PlumbingHero';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';

const PlumbingServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      <PlumbingHero />
      <PlumbingCTA />
      <PlumbingServices />
      <PlumbingWhyChooseUs />
      <PlumbingCTA />
      <PlumbingGuarantee />
      <PlumbingProcess />
      <PlumbingCTA />
      <PlumbingServiceAreas />
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingServicesPage;
