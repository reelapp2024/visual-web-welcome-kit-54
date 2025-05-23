
import React from 'react';
import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Contact us for immediate assistance. We're available 24/7 for emergencies.",
      color: "bg-blue-500",
      number: "01"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Service",
      description: "We'll arrange a convenient time that works for your schedule.",
      color: "bg-green-500",
      number: "02"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Work",
      description: "Our skilled professionals complete the job efficiently and properly.",
      color: "bg-orange-500",
      number: "03"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Check",
      description: "We ensure everything is perfect before considering the job complete.",
      color: "bg-purple-500",
      number: "04"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work for Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process ensures you get the best service experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.number}
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${step.color} text-white`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Don't wait for problems to get worse. Call us now for immediate assistance!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
