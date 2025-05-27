
import React from 'react';
import { Home, Palette, Wrench, Award } from 'lucide-react';

const RemodelingAboutUs = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Kitchen Specialists",
      description: "Expert kitchen remodeling with custom cabinets, countertops, and modern appliances."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Consultation",
      description: "Professional design services to create your dream kitchen or bathroom space."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Quality Craftsmanship",
      description: "Skilled craftsmen delivering superior workmanship on every remodeling project."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Committed to exceeding expectations with every kitchen and bathroom renovation."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            About Our Remodeling Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your kitchen and bathroom spaces with our professional remodeling services. 
            We specialize in creating beautiful, functional spaces that enhance your home's value and your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
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

export default RemodelingAboutUs;
