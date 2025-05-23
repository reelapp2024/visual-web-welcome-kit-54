
import React from 'react';
import { Shield, Clock, Users, Award, ThumbsUp, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock emergency services. We're here when you need us most.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in local services and repairs.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our work. We stand behind our services.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Local Trust",
      description: "Trusted by thousands of local customers. Check our 5-star reviews.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Response",
      description: "Quick response times and efficient service delivery every time.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional local services with the highest standards 
            of quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${reason.color}`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 rounded-lg p-8 max-w-3xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="mb-6 text-blue-100">
              Join thousands of satisfied customers who trust us with their local service needs.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
