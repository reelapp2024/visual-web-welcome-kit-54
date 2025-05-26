
import React from 'react';
import PetHeader from '../components/PetHeader';
import PetAboutUs from '../components/PetAboutUs';
import PetWhyChooseUs from '../components/PetWhyChooseUs';
import PetFooter from '../components/PetFooter';

const PetAbout = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      <PetAboutUs />
      <PetWhyChooseUs />
      <PetFooter />
    </div>
  );
};

export default PetAbout;
