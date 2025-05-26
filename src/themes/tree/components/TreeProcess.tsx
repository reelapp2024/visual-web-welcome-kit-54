
import React from 'react';
import { Phone, Calendar, Truck, CheckCircle } from 'lucide-react';

const TreeProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Call for Estimate',
      description: 'Contact us for a free, no-obligation quote for your tree care needs.'
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      description: 'We arrange a convenient time that works with your schedule.'
    },
    {
      icon: Truck,
      title: 'Professional Service',
      description: 'Our certified arborists perform safe, efficient tree care services.'
    },
    {
      icon: CheckCircle,
      title: 'Complete Cleanup',
      description: 'We clean up all debris and leave your property spotless.'
    }
  ];

  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Tree Service Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, professional, and reliable tree care in just four easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-forest-200 to-nature-200 transform -translate-x-1/2 z-0"></div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-nature-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Tree Service Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TreeProcess;
