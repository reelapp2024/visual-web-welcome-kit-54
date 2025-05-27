
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalHero from '../components/ElectricalHero';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalAboutUs from '../components/ElectricalAboutUs';
import ElectricalTestimonials from '../components/ElectricalTestimonials';
import ElectricalFooter from '../components/ElectricalFooter';
import ElectricalMissionVision from '../components/ElectricalMissionVision';
import ElectricalValues from '../components/ElectricalValues';
import ElectricalUSP from '../components/ElectricalUSP';

const ElectricalAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      <ElectricalHero />
      <ElectricalAboutUs />
      <ElectricalCTA />
      <ElectricalMissionVision />
      <ElectricalCTA />
      <ElectricalValues />
      <ElectricalCTA />
      <ElectricalUSP />
      <ElectricalCTA />
      <ElectricalTestimonials />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalAbout;
