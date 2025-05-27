
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalServiceAreas from '../components/ElectricalServiceAreas';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalFooter from '../components/ElectricalFooter';

const ElectricalAreas = () => {
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Electrical Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Professional electrical services throughout the metropolitan area
          </p>
        </div>
      </section>

      <ElectricalServiceAreas />
      <ElectricalCTA />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalAreas;
