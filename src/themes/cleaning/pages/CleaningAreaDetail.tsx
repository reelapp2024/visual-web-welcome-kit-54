
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningCTA from '../components/CleaningCTA';
import CleaningAboutUs from '../components/CleaningAboutUs';
import CleaningServices from '../components/CleaningServices';
import CleaningWhyChooseUs from '../components/CleaningWhyChooseUs';
import CleaningProcess from '../components/CleaningProcess';
import CleaningGuarantee from '../components/CleaningGuarantee';
import CleaningTestimonials from '../components/CleaningTestimonials';
import CleaningServiceAreas from '../components/CleaningServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import CleaningFAQ from '../components/CleaningFAQ';
import CleaningFooter from '../components/CleaningFooter';
import { MapPin, Clock } from 'lucide-react';

const CleaningAreaDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      {/* Area Hero */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-emerald-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">Downtown Metro</h1>
              </div>
              <p className="text-xl text-green-100 mb-8">
                Professional cleaning services in Downtown Metro with same-day booking and eco-friendly products.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-emerald-400" />
                <span className="text-lg">Same-day booking available</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Downtown Metro cleaning services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CleaningCTA />
      <CleaningAboutUs />
      <CleaningServices />
      <CleaningCTA />
      <CleaningWhyChooseUs />
      <CleaningProcess />
      <CleaningCTA />
      <CleaningGuarantee />
      <CleaningTestimonials />
      <CleaningCTA />
      <CleaningServiceAreas />
      <ServiceMap theme="cleaning" />
      <CleaningFAQ />
      <CleaningCTA />
      <CleaningFooter />
    </div>
  );
};

export default CleaningAreaDetail;
