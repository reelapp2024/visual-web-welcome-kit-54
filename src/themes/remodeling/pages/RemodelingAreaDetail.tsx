
import React from 'react';
import { useParams } from 'react-router-dom';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingAreaDetail = () => {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Remodeling Services in {slug}
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Professional remodeling services in your area
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Area Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              Detailed information about our remodeling services in {slug} will be displayed here.
            </p>
          </div>
        </div>
      </section>

      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingAreaDetail;
