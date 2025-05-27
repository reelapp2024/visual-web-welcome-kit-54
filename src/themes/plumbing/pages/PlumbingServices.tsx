
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';
import { Wrench } from 'lucide-react';

const PlumbingServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-600/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Professional Plumbing Services</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive plumbing solutions from emergency repairs to complete installations. 
            Available 24/7 with expert technicians and guaranteed satisfaction.
          </p>
        </div>
      </section>
      
      <PlumbingCTA />
      <PlumbingServices />
      <PlumbingWhyChooseUs />
      <PlumbingCTA />
      <PlumbingGuarantee />
      <PlumbingProcess />
      <PlumbingCTA />
      <PlumbingServiceAreas />
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingServicesPage;
