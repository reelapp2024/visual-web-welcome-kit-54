
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingHero from '../components/RemodelingHero';
import RemodelingServices from '../components/RemodelingServices';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingProcess from '../components/RemodelingProcess';
import RemodelingServiceAreas from '../components/RemodelingServiceAreas';
import RemodelingBeforeAfter from '../components/RemodelingBeforeAfter';
import RemodelingGuarantee from '../components/RemodelingGuarantee';
import RemodelingFAQ from '../components/RemodelingFAQ';
import RemodelingTestimonials from '../components/RemodelingTestimonials';
import RemodelingFooter from '../components/RemodelingFooter';
import ServiceMap from '../../../components/ServiceMap';

const RemodelingIndex = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      <RemodelingHero />
      <RemodelingServices />
      <RemodelingCTA />
      <RemodelingProcess />
      <RemodelingCTA />
      <RemodelingServiceAreas />
      <RemodelingCTA />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide kitchen and bathroom remodeling services throughout the metropolitan area.
            </p>
          </div>
          <ServiceMap theme="remodeling" />
        </div>
      </div>
      <RemodelingCTA />
      <RemodelingBeforeAfter />
      <RemodelingCTA />
      <RemodelingGuarantee />
      <RemodelingCTA />
      <RemodelingFAQ />
      <RemodelingCTA />
      <RemodelingTestimonials />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingIndex;
