
import React from 'react';
import { Shield, Heart, Clock, Award, Users, Zap } from 'lucide-react';

const ElectricalValues = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Electrical safety is our top priority in every project we undertake.",
      details: "We follow all safety protocols and electrical codes to ensure your protection."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Care",
      description: "Building lasting relationships through exceptional customer service.",
      details: "Your satisfaction and peace of mind are what drive our success."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliability",
      description: "Dependable electrical service when you need it most.",
      details: "24/7 emergency service and prompt response to all service calls."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Work",
      description: "Professional electrical work that stands the test of time.",
      details: "Using premium materials and proven techniques for lasting results."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Proudly serving our local community with electrical expertise.",
      details: "Supporting local families and businesses with trusted electrical solutions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Staying current with the latest electrical technologies and methods.",
      details: "Continuous learning and adaptation to provide the best electrical solutions."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our electrical service and define our commitment to excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {value.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                {value.description}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Experience the Difference</h3>
            <p className="text-xl mb-6 text-yellow-100 max-w-3xl mx-auto">
              When you choose our electrical services, you're choosing a team that lives by these values every day. Experience the difference that genuine care and professional expertise make.
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-3" size={20} />
              Call Our Value-Driven Team: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalValues;
