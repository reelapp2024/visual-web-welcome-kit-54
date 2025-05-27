
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningHero from '../components/CleaningHero';
import CleaningCTA from '../components/CleaningCTA';
import CleaningAboutUs from '../components/CleaningAboutUs';
import CleaningTestimonials from '../components/CleaningTestimonials';
import CleaningFooter from '../components/CleaningFooter';
import CleaningMissionVision from '../components/CleaningMissionVision';
import CleaningValues from '../components/CleaningValues';
import CleaningUSP from '../components/CleaningUSP';

const CleaningAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      <CleaningHero />
      <CleaningAboutUs />
      <CleaningCTA />
      <CleaningMissionVision />
      <CleaningCTA />
      <CleaningValues />
      <CleaningCTA />
      <CleaningUSP />
      <CleaningCTA />
      <CleaningTestimonials />
      <CleaningFooter />
    </div>
  );
};

export default CleaningAbout;
