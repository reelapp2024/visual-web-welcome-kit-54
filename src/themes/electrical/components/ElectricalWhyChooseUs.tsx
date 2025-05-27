
import React from 'react';
import { Shield, Clock, Award, Users, Zap, CheckCircle } from 'lucide-react';

const ElectricalWhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed electricians with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Service",
      description: "Electrical emergencies don't wait. We're available around the clock for urgent repairs."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Workmanship",
      description: "We take pride in our work and guarantee quality electrical services that last."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Years of experience in residential and commercial electrical installations and repairs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Latest Technology",
      description: "We use the most advanced electrical tools and techniques for efficient service."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our priority. We stand behind every electrical job we complete."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Why Choose ElectricPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When it comes to electrical work, experience and reliability matter. Here's why customers trust us with their electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 group">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl w-16 h-16 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricalWhyChooseUs;
