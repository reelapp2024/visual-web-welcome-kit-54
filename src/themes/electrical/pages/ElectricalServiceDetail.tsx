
import React from 'react';
import { useParams } from 'react-router-dom';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalAboutUs from '../components/ElectricalAboutUs';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalProcess from '../components/ElectricalProcess';
import ElectricalBeforeAfter from '../components/ElectricalBeforeAfter';
import ElectricalWhyChooseUs from '../components/ElectricalWhyChooseUs';
import ElectricalGuarantee from '../components/ElectricalGuarantee';
import ElectricalRelatedServices from '../components/ElectricalRelatedServices';
import ElectricalServiceAreas from '../components/ElectricalServiceAreas';
import ElectricalFooter from '../components/ElectricalFooter';

const ElectricalServiceDetail = () => {
  const { slug } = useParams();
  
  const serviceData = {
    'emergency-electrical-repair': {
      title: 'Emergency Electrical Repair',
      description: '24/7 emergency electrical services for urgent repairs and power outages.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    'residential-electrical': {
      title: 'Residential Electrical Services',
      description: 'Complete electrical services for homes including installations and upgrades.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    'commercial-electrical': {
      title: 'Commercial Electrical Solutions',
      description: 'Professional electrical solutions for businesses and commercial properties.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    'electrical-inspection': {
      title: 'Electrical Inspection Services',
      description: 'Comprehensive electrical safety inspections and code compliance checks.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    'panel-upgrades': {
      title: 'Electrical Panel Upgrades',
      description: 'Electrical panel upgrades and circuit breaker replacements for improved safety.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    'surge-protection': {
      title: 'Surge Protection Systems',
      description: 'Whole-house surge protection systems to safeguard your electrical devices.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    }
  };

  const service = serviceData[slug as keyof typeof serviceData] || serviceData['emergency-electrical-repair'];
  
  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-yellow-600/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567"
              className="bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-xl"
            >
              <span>Call Now: (555) 123-4567</span>
            </a>
            <a 
              href="/electrical/contact"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <ElectricalAboutUs />
      <ElectricalCTA />
      <ElectricalProcess />
      <ElectricalBeforeAfter />
      <ElectricalCTA />
      <ElectricalWhyChooseUs />
      <ElectricalGuarantee />
      <ElectricalCTA />
      <ElectricalRelatedServices />
      <ElectricalServiceAreas />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalServiceDetail;
