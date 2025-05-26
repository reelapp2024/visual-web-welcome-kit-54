
import React from 'react';
import Header from '../components/Header';
import TreeHero from '../components/TreeHero';
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
    <div className="min-h-screen font-poppins">
      <Header />
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
