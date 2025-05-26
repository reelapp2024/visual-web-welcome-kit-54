
import React from 'react';
import JunkHeader from '../themes/junk/components/JunkHeader';
import JunkHero from '../themes/junk/components/JunkHero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <JunkHeader />
      <JunkHero />
      <AboutUs />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
