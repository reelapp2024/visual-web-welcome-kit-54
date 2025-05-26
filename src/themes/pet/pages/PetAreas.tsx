
import React from 'react';
import PetHeader from '../components/PetHeader';
import PetServiceAreas from '../components/PetServiceAreas';
import PetFooter from '../components/PetFooter';

const PetAreas = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      <PetServiceAreas />
      <PetFooter />
    </div>
  );
};

export default PetAreas;
