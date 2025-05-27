
import React from 'react';
import { Phone, Clock, Wrench, CheckCircle } from 'lucide-react';

const ElectricalProcess = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Contact our 24/7 electrical service hotline for immediate assistance.",
      details: "Licensed electricians standing by"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Response",
      description: "We arrive quickly to assess your electrical issue and provide solutions.",
      details: "Same-day service available"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Repair",
      description: "Our certified electricians perform safe, code-compliant electrical work.",
      details: "Quality workmanship guaranteed"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete",
      description: "We test all work and ensure your electrical system is safe and functional.",
      details: "100% satisfaction guaranteed"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Our Electrical Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, professional electrical service with a proven 4-step process that ensures quality results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <div className="inline-block bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Electrical Service</h3>
            <p className="text-gray-600 mb-6">Electrical emergencies can't wait. Our licensed electricians are available 24/7 for urgent electrical repairs.</p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-3" size={20} />
              Emergency Hotline: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalProcess;
