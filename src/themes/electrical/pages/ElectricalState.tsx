
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalHero from '../components/ElectricalHero';
import ElectricalAboutUs from '../components/ElectricalAboutUs';
import ElectricalServices from '../components/ElectricalServices';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalWhyChooseUs from '../components/ElectricalWhyChooseUs';
import ElectricalProcess from '../components/ElectricalProcess';
import ElectricalGuarantee from '../components/ElectricalGuarantee';
import ElectricalTestimonials from '../components/ElectricalTestimonials';
import ElectricalServiceAreas from '../components/ElectricalServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import ElectricalFAQ from '../components/ElectricalFAQ';
import ElectricalFooter from '../components/ElectricalFooter';

const ElectricalState = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-amber-50 to-yellow-50">
      <ElectricalHeader />
      <ElectricalHero />
      <ElectricalAboutUs />
      <ElectricalServices />
      <ElectricalCTA />
      <ElectricalWhyChooseUs />
      <ElectricalProcess />
      <ElectricalCTA />
      <ElectricalGuarantee />
      <ElectricalTestimonials />
      <ElectricalCTA />
      <ElectricalServiceAreas />
      <ServiceMap theme="electrical" />
      <ElectricalFAQ />
      <ElectricalCTA />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalState;
