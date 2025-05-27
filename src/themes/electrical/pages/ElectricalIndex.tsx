
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalHero from '../components/ElectricalHero';
import ElectricalServices from '../components/ElectricalServices';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalProcess from '../components/ElectricalProcess';
import ElectricalServiceAreas from '../components/ElectricalServiceAreas';
import ElectricalBeforeAfter from '../components/ElectricalBeforeAfter';
import ElectricalGuarantee from '../components/ElectricalGuarantee';
import ElectricalFAQ from '../components/ElectricalFAQ';
import ElectricalTestimonials from '../components/ElectricalTestimonials';
import ElectricalFooter from '../components/ElectricalFooter';
import ServiceMap from '../../../components/ServiceMap';

const ElectricalIndex = () => {
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      <ElectricalHero />
      <ElectricalServices />
      <ElectricalCTA />
      <ElectricalProcess />
      <ElectricalCTA />
      <ElectricalServiceAreas />
      <ElectricalCTA />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide electrical services throughout the metropolitan area with fast response times.
            </p>
          </div>
          <ServiceMap theme="electrical" />
        </div>
      </div>
      <ElectricalCTA />
      <ElectricalBeforeAfter />
      <ElectricalCTA />
      <ElectricalGuarantee />
      <ElectricalCTA />
      <ElectricalFAQ />
      <ElectricalCTA />
      <ElectricalTestimonials />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalIndex;
