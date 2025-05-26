
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingHero from '../components/RoofingHero';
import AboutUs from '../../../components/AboutUs';
import Services from '../../../components/Services';
import Process from '../../../components/Process';
import WhyChooseUs from '../../../components/WhyChooseUs';
import Testimonials from '../../../components/Testimonials';
import ServiceAreas from '../../../components/ServiceAreas';
import FAQ from '../../../components/FAQ';
import Footer from '../../../components/Footer';

const RoofingIndex = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      <RoofingHero />
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

export default RoofingIndex;
