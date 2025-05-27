
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingFooter from '../components/PlumbingFooter';
import { Wrench, CheckCircle } from 'lucide-react';

const PlumbingServiceDetail = () => {
  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1584622781564-1d987cc5e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Emergency Pipe Repair"
    },
    {
      before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1584622781564-1d987cc5e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Water Heater Installation"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Service Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Plumbing Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                24/7 emergency plumbing repairs when you need them most. Fast response, expert service.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Available 24/7</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Emergency plumbing service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PlumbingCTA />
      <PlumbingAboutUs />
      <PlumbingProcess />

      {/* Before & After */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Before & After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality of our plumbing work through real customer transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfter.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">Before</h4>
                      <img src={project.before} alt="Before" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">After</h4>
                      <img src={project.after} alt="After" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlumbingCTA />
      <PlumbingWhyChooseUs />
      <PlumbingGuarantee />
      <PlumbingCTA />
      <PlumbingServices />
      <PlumbingServiceAreas />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingServiceDetail;
