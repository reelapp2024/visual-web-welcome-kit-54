
import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';

const ElectricalGuarantee = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Work Guarantee",
      description: "All electrical work guaranteed for 1 full year",
      details: ["Parts & labor warranty", "Free service calls", "Quality assurance"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock electrical emergency support",
      details: ["Same-day service", "No overtime charges", "Emergency hotline"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed electricians with comprehensive insurance",
      details: ["State licensed", "Bonded & insured", "Background checked"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Satisfaction Promise",
      description: "100% satisfaction guaranteed or we'll make it right",
      details: ["Customer satisfaction", "Quality workmanship", "Professional service"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white font-poppins relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">
            Our Electrical Service Guarantee
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            When you choose our electrical services, you're choosing quality, reliability, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {guarantee.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {guarantee.title}
              </h3>
              
              <p className="text-yellow-100 mb-6 leading-relaxed">
                {guarantee.description}
              </p>
              
              <ul className="space-y-2">
                {guarantee.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-yellow-200 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Our Electrical Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-yellow-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-yellow-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-yellow-100">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalGuarantee;
