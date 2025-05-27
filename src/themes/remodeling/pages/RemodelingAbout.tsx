
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Remodeling Company
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Transforming kitchens and bathrooms with expert craftsmanship and innovative design
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in kitchen and bathroom remodeling, we've helped hundreds of homeowners transform their spaces into beautiful, functional areas they love.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-8">
              To provide exceptional remodeling services that exceed our clients' expectations while delivering outstanding value and craftsmanship.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>• Licensed and insured contractors</li>
              <li>• Quality materials and workmanship</li>
              <li>• Transparent pricing and timeline</li>
              <li>• 100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingAbout;
