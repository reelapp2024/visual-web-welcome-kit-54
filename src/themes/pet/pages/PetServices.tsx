
import React from 'react';
import PetHeader from '../components/PetHeader';
import PetServices from '../components/PetServices';
import PetProcess from '../components/PetProcess';
import PetFooter from '../components/PetFooter';

const PetServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      <PetServices />
      <PetProcess />
      <PetFooter />
    </div>
  );
};

export default PetServicesPage;
