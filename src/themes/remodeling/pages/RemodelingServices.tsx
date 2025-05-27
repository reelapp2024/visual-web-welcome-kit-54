
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingServices from '../components/RemodelingServices';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Remodeling Services
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Complete kitchen and bathroom remodeling solutions for your home
          </p>
        </div>
      </section>
      <RemodelingServices />
      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingServicesPage;
