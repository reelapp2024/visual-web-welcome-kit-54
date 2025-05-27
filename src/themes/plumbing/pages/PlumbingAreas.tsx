
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import PlumbingFooter from '../components/PlumbingFooter';

const PlumbingAreas = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Areas Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional plumbing services throughout the metropolitan area with fast response times.
          </p>
        </div>
      </section>

      <PlumbingCTA />
      <PlumbingServiceAreas />
      <ServiceMap theme="plumbing" />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingAreas;
