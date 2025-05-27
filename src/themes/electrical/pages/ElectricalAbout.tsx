
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalAboutUs from '../components/ElectricalAboutUs';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalMissionVision from '../components/ElectricalMissionVision';
import ElectricalValues from '../components/ElectricalValues';
import ElectricalUSP from '../components/ElectricalUSP';
import ElectricalTestimonials from '../components/ElectricalTestimonials';
import ElectricalFooter from '../components/ElectricalFooter';

const ElectricalAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About ElectricPro
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Your trusted electrical service provider with years of experience
          </p>
        </div>
      </section>

      <ElectricalAboutUs />
      <ElectricalCTA />
      <ElectricalMissionVision />
      <ElectricalValues />
      <ElectricalUSP />
      <ElectricalTestimonials />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalAbout;
