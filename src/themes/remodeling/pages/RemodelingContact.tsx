
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';

const RemodelingContact = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Ready to start your remodeling project? Get in touch with us today!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your free consultation and start planning your dream kitchen or bathroom remodel.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                <p className="text-lg text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-lg text-gray-600">info@remodeling.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingContact;
