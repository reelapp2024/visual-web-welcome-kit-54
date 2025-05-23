
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
