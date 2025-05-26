
import React from 'react';
import TreeHeader from '../themes/tree/components/TreeHeader';
import TreeHero from '../themes/tree/components/TreeHero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const TreeIndex = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      <TreeHero />
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

export default TreeIndex;
