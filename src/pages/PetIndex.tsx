
import React from 'react';
import PetHeader from '../themes/pet/components/PetHeader';
import PetHero from '../themes/pet/components/PetHero';
import PetAboutUs from '../themes/pet/components/PetAboutUs';
import PetServices from '../themes/pet/components/PetServices';
import PetGuarantee from '../themes/pet/components/PetGuarantee';
import PetProcess from '../themes/pet/components/PetProcess';
import PetWhyChooseUs from '../themes/pet/components/PetWhyChooseUs';
import PetTestimonials from '../themes/pet/components/PetTestimonials';
import PetServiceAreas from '../themes/pet/components/PetServiceAreas';
import ServiceMap from '../components/ServiceMap';
import PetFAQ from '../themes/pet/components/PetFAQ';
import PetFooter from '../themes/pet/components/PetFooter';

const PetIndex = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      <PetHero />
      <PetAboutUs />
      <PetServices />
      <PetGuarantee />
      <PetProcess />
      <PetWhyChooseUs />
      <PetTestimonials />
      <PetServiceAreas />
      <ServiceMap theme="pet" />
      <PetFAQ />
      <PetFooter />
    </div>
  );
};

export default PetIndex;
