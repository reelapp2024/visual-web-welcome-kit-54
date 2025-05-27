
import React from 'react';
import { Shield, Clock, Users, Award, ThumbsUp, Zap } from 'lucide-react';

const PlumbingWhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency plumbing services. We're here when you need us most.",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Plumbers",
      description: "Skilled professionals with years of experience in residential and commercial plumbing.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our plumbing work. We stand behind our services.",
      gradient: "from-cyan-600 to-blue-500"
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: "Trusted Locally",
      description: "Trusted by thousands of local customers. Check our 5-star reviews and testimonials.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Fast Response",
      description: "Quick response times and efficient service delivery for all plumbing needs.",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Why Choose ProFlow Plumbing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're committed to providing exceptional plumbing services with the highest standards 
            of quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
              <div className={`bg-gradient-to-br ${reason.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{reason.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Professional Plumbing?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join thousands of satisfied customers who trust us with their plumbing needs.
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingWhyChooseUs;
