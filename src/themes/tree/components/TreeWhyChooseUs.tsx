
import React from 'react';
import { Shield, Clock, Award, Users, Leaf, Phone } from 'lucide-react';

const TreeWhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Certified Arborists',
      description: 'ISA certified professionals with extensive training and experience'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Available around the clock for storm damage and urgent tree issues'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record of safe, professional tree care services'
    },
    {
      icon: Users,
      title: 'Fully Insured Team',
      description: 'Complete liability and workers compensation coverage'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Disposal',
      description: 'Responsible recycling and disposal of all tree materials'
    },
    {
      icon: Phone,
      title: 'Free Estimates',
      description: 'No-obligation quotes for all tree care services'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-forest-900 to-nature-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose TreeCare Pro?
          </h2>
          <p className="text-xl text-forest-100 max-w-3xl mx-auto">
            Professional tree care services you can trust for your property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-nature-400 to-forest-400 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-forest-100">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Professional Tree Care?</h3>
            <p className="text-forest-100 mb-6">
              Get your free estimate today and experience the difference professional arborists make
            </p>
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeWhyChooseUs;
