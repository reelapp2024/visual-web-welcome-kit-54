
import React from 'react';
import PlumbingHeader from '../themes/plumbing/components/PlumbingHeader';
import PlumbingHero from '../themes/plumbing/components/PlumbingHero';
import PlumbingAboutUs from '../themes/plumbing/components/PlumbingAboutUs';
import PlumbingServices from '../themes/plumbing/components/PlumbingServices';
import PlumbingWhyChooseUs from '../themes/plumbing/components/PlumbingWhyChooseUs';
import PlumbingProcess from '../themes/plumbing/components/PlumbingProcess';
import PlumbingGuarantee from '../themes/plumbing/components/PlumbingGuarantee';
import PlumbingTestimonials from '../themes/plumbing/components/PlumbingTestimonials';
import PlumbingServiceAreas from '../themes/plumbing/components/PlumbingServiceAreas';
import ServiceMap from '../components/ServiceMap';
import PlumbingFAQ from '../themes/plumbing/components/PlumbingFAQ';
import PlumbingFooter from '../themes/plumbing/components/PlumbingFooter';
import PlumbingCTA from '../themes/plumbing/components/PlumbingCTA';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      <PlumbingHero />
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
      <ServiceMap theme="plumbing" />
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default Index;
