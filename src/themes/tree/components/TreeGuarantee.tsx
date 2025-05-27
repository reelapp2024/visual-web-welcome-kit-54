
import React from 'react';
import { Shield, Leaf, Award, CheckCircle, Trees, Star } from 'lucide-react';

const TreeGuarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: '100% Satisfaction Promise',
      description: 'Complete satisfaction guaranteed or we\'ll return to make it right at no extra cost.',
      highlight: '100% Satisfaction'
    },
    {
      icon: Trees,
      title: 'Certified Arborists',
      description: 'All work performed by ISA certified arborists with years of professional experience.',
      highlight: 'Certified Experts'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Methods',
      description: 'Environmentally responsible tree care with sustainable disposal and recycling.',
      highlight: 'Earth-Friendly'
    },
    {
      icon: Award,
      title: '5-Star Service',
      description: 'Consistently rated 5 stars by customers for quality, reliability, and professionalism.',
      highlight: '5-Star Rated'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 to-nature-900 text-white font-poppins relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-nature-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Tree Care
            <span className="block bg-gradient-to-r from-nature-300 to-forest-300 bg-clip-text text-transparent">
              Guarantee
            </span>
          </h2>
          <p className="text-xl text-nature-100 max-w-3xl mx-auto">
            Professional tree care with guarantees that protect you and your property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gradient-to-br from-forest-800/80 to-nature-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-nature-400/30 hover:border-nature-300 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-nature-400 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{guarantee.title}</h3>
              <p className="text-nature-100 text-center mb-4">{guarantee.description}</p>
              <div className="bg-nature-400/20 border border-nature-400/30 rounded-2xl p-3 text-center">
                <span className="text-nature-300 font-semibold">{guarantee.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-400 to-nature-500 hover:from-nature-300 hover:to-nature-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🌲 Call Now: (555) 123-4567 🌿
          </a>
        </div>
      </div>
    </section>
  );
};

export default TreeGuarantee;
