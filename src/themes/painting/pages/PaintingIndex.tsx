
import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingHero from '../components/PaintingHero';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingServices from '../components/PaintingServices';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingProcess from '../components/PaintingProcess';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingTestimonials from '../components/PaintingTestimonials';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';

const PaintingIndex = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      <PaintingHero />
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
      <ServiceMap theme="painting" />
      <PaintingFAQ />
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingIndex;
