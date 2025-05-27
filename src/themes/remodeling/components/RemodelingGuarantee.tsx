
import React from 'react';
import { Shield, Award, Clock, ThumbsUp } from 'lucide-react';

const RemodelingGuarantee = () => {
  const guarantees = [
    {
      icon: <Shield size={48} />,
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee on all remodeling projects."
    },
    {
      icon: <Award size={48} />,
      title: "Quality Workmanship",
      description: "Licensed and insured contractors with years of experience in kitchen and bathroom remodeling."
    },
    {
      icon: <Clock size={48} />,
      title: "On-Time Completion",
      description: "We respect your time and complete projects according to the agreed timeline."
    },
    {
      icon: <ThumbsUp size={48} />,
      title: "Material Warranty",
      description: "All materials and installations come with manufacturer warranties for your peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Guarantee to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your satisfaction is our priority. We guarantee quality workmanship and exceptional service on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-violet-600 mb-6 flex justify-center">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingGuarantee;
