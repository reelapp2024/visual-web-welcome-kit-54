
import React from 'react';
import { Award, Clock, Palette, Users, Home, CheckCircle } from 'lucide-react';

const RemodelingWhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Design",
      description: "Our design team has won multiple awards for innovative kitchen and bathroom remodeling projects."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Completion",
      description: "We respect your time and complete projects on schedule without compromising quality."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Every remodel is tailored to your specific needs, style, and budget requirements."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced designers, contractors, and craftsmen working together on your project."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Complete Remodels",
      description: "From planning to completion, we handle every aspect of your kitchen or bathroom renovation."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties on all remodeling projects."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Our Remodeling Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your home with confidence. Here's why homeowners trust us with their most important remodeling projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 group">
              <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

export default RemodelingWhyChooseUs;
