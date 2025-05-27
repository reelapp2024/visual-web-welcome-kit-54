
import React from 'react';
import { Zap, Shield, Clock, Users } from 'lucide-react';

const ElectricalAboutUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Licensed Electricians",
      description: "All our technicians are fully licensed and certified electrical professionals."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "We prioritize safety in every electrical installation and repair project."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Service",
      description: "Electrical emergencies don't wait. Neither do we. Available round the clock."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Over 15 years of combined experience in residential and commercial electrical work."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            About ElectricPro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted electrical service provider with years of experience delivering safe, 
            reliable, and professional electrical solutions for homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricalAboutUs;
