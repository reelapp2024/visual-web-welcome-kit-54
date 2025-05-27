
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingHero from '../components/RemodelingHero';
import RemodelingAboutUs from '../components/RemodelingAboutUs';
import RemodelingServices from '../components/RemodelingServices';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingWhyChooseUs from '../components/RemodelingWhyChooseUs';
import RemodelingProcess from '../components/RemodelingProcess';
import RemodelingGuarantee from '../components/RemodelingGuarantee';
import RemodelingTestimonials from '../components/RemodelingTestimonials';
import RemodelingServiceAreas from '../components/RemodelingServiceAreas';
import RemodelingMapSection from '../components/RemodelingMapSection';
import RemodelingFAQ from '../components/RemodelingFAQ';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingState = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-amber-50 to-orange-50">
      <RemodelingHeader />
      <RemodelingHero />
      <RemodelingAboutUs />
      <RemodelingServices />
      <RemodelingCTA />
      <RemodelingWhyChooseUs />
      <RemodelingProcess />
      <RemodelingCTA />
      <RemodelingGuarantee />
      <RemodelingTestimonials />
      <RemodelingCTA />
      <RemodelingServiceAreas />
      <RemodelingMapSection />
      <RemodelingFAQ />
      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingState;
