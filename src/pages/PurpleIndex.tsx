
import React from 'react';
import Template from '../components/Template';
import ThemedHeader from '../components/ThemedHeader';
import ThemeNavigation from '../components/ThemeNavigation';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { purpleTheme } from '../config/themes';
import { defaultContent } from '../config/content';

const PurpleIndex = () => {
  return (
    <Template theme={purpleTheme} content={defaultContent}>
      <div className="min-h-screen font-poppins">
        <ThemeNavigation />
        <ThemedHeader />
        <Hero />
        <AboutUs />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Footer />
      </div>
    </Template>
  );
};

export default PurpleIndex;
