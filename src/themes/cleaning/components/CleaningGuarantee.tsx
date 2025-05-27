
import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';

const CleaningGuarantee = () => {
  const guarantees = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee on all cleaning services.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Same Day Booking",
      description: "Need cleaning today? We offer same-day booking for all urgent cleaning needs.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Bonded & Insured",
      description: "All our cleaners are fully bonded, insured, and background-checked for your protection.",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Eco-Friendly Products",
      description: "We use only safe, non-toxic cleaning products for a healthy clean environment.",
      gradient: "from-emerald-600 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Cleaning Guarantee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose SparkleClean Pro, you're choosing peace of mind. We guarantee quality cleaning and complete customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                <div className={`bg-gradient-to-br ${guarantee.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to You</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're committed to providing exceptional cleaning services that exceed your expectations. 
              If you're not completely satisfied with our work, we'll make it right – guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningGuarantee;
