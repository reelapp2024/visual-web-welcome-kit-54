
import React from 'react';
import { useParams } from 'react-router-dom';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalFooter from '../components/ElectricalFooter';

const ElectricalServiceDetail = () => {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Electrical Service Details
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Professional electrical service: {slug}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              Detailed information about our {slug} electrical service will be displayed here.
            </p>
          </div>
        </div>
      </section>

      <ElectricalCTA />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalServiceDetail;
