
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACHero from '../components/HVACHero';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACServices from '../components/HVACServices';
import HVACCTA from '../components/HVACCTA';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACProcess from '../components/HVACProcess';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACTestimonials from '../components/HVACTestimonials';
import HVACServiceAreas from '../components/HVACServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import HVACFAQ from '../components/HVACFAQ';
import HVACFooter from '../components/HVACFooter';

const HVACIndex = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      <HVACHero />
      <HVACAboutUs />
      <HVACServices />
      <HVACCTA />
      <HVACWhyChooseUs />
      <HVACProcess />
      <HVACCTA />
      <HVACGuarantee />
      <HVACTestimonials />
      <HVACCTA />
      <HVACServiceAreas />
      <ServiceMap theme="hvac" />
      <HVACFAQ />
      <HVACCTA />
      <HVACFooter />
    </div>
  );
};

export default HVACIndex;
