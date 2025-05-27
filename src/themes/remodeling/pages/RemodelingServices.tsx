
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingServices from '../components/RemodelingServices';
import RemodelingWhyChooseUs from '../components/RemodelingWhyChooseUs';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingGuarantee from '../components/RemodelingGuarantee';
import RemodelingProcess from '../components/RemodelingProcess';
import RemodelingServiceAreas from '../components/RemodelingServiceAreas';
import RemodelingFAQ from '../components/RemodelingFAQ';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Remodeling Services
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Complete kitchen and bathroom remodeling solutions for your home
          </p>
        </div>
      </section>
      <RemodelingServices />
      <RemodelingWhyChooseUs />
      <RemodelingCTA />
      <RemodelingGuarantee />
      <RemodelingProcess />
      <RemodelingCTA />
      <RemodelingServiceAreas />
      <RemodelingFAQ />
      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingServicesPage;
