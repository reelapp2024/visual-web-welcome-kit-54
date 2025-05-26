
import React from 'react';
import { Shield, Clock, Heart, Award, Users, Sparkles } from 'lucide-react';

const PetWhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Pet Lovers',
      description: 'Our team genuinely loves animals and understands pet owner needs.',
      emoji: '💕'
    },
    {
      icon: Shield,
      title: 'Safe & Eco-Friendly',
      description: 'Using only pet-safe, environmentally responsible cleaning products.',
      emoji: '🌱'
    },
    {
      icon: Clock,
      title: 'Reliable Schedule',
      description: 'Consistent weekly service you can count on, rain or shine.',
      emoji: '⏰'
    },
    {
      icon: Award,
      title: 'Fully Insured',
      description: 'Licensed, bonded, and insured for your complete peace of mind.',
      emoji: '🏆'
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Local family business that cares about our community.',
      emoji: '👨‍👩‍👧‍👦'
    },
    {
      icon: Sparkles,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or we will make it right.',
      emoji: '✨'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-paw-50 to-pet-100 font-poppins relative overflow-hidden">
      {/* Playful floating elements */}
      <div className="absolute top-10 right-10 text-4xl text-pet-300 animate-bounce">🐕</div>
      <div className="absolute bottom-20 left-10 text-3xl text-paw-300 animate-bounce delay-1000">🐈</div>
      <div className="absolute top-1/2 left-20 text-2xl text-pet-200 animate-wiggle">🎾</div>
      <div className="absolute top-1/3 right-20 text-2xl text-paw-200 animate-wiggle delay-500">🦴</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Pet Families <span className="text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">Choose Us 🐾</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pet-500 to-paw-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Dedicated to providing the best pet waste removal service with love, care, and professionalism
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-2 border-transparent group-hover:border-pet-200 relative overflow-hidden">
                {/* Playful background gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pet-100 to-paw-100 rounded-full opacity-50 transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with emoji */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce group-hover:animate-wiggle">
                      {feature.emoji}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pet-700 transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="bg-gradient-to-r from-pet-500 to-paw-500 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-6xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold mb-4">"Paws & Clean has been a lifesaver!"</h3>
          <p className="text-xl opacity-90 mb-4 max-w-2xl mx-auto">
            "Our yard is always spotless and our dogs are so much happier. The team is reliable, friendly, and truly cares about pets."
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-semibold">Sarah & Max</span>
            <span className="opacity-80">•</span>
            <span className="opacity-80">Golden Retriever Parents 🐕</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetWhyChooseUs;
