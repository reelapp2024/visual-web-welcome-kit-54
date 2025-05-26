
import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const PetAboutUs = () => {
  const stats = [
    { icon: Heart, number: '10K+', label: 'Happy Pets', color: 'pet' },
    { icon: Users, number: '500+', label: 'Families Served', color: 'paw' },
    { icon: Award, number: '5', label: 'Years Experience', color: 'pet' },
    { icon: Clock, number: '24/7', label: 'Support Available', color: 'paw' }
  ];

  return (
    <section className="py-20 bg-white font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pet-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-paw-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center bg-pet-100 rounded-full px-4 py-2 mb-4">
                <Heart className="text-pet-500 mr-2" size={20} />
                <span className="text-pet-700 font-semibold">About Our Pet Care</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We Love Pets as Much as
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pet-500 to-paw-500">
                  You Do! 🐾
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Founded by pet lovers, Paws & Clean understands the joy pets bring to our lives and the responsibility that comes with keeping our spaces clean and healthy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our professional team provides reliable, eco-friendly pet waste removal services, so you can focus on enjoying quality time with your furry family members. 🏡
              </p>
            </div>

            {/* Stats with playful design */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pet-200 group-hover:transform group-hover:-translate-y-2">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pet-500 to-paw-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🐕🐈</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pet-Friendly Approach</h3>
                  <p className="text-gray-600">Safe, gentle, and caring service</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-pet-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-pet-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Eco-friendly products</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-paw-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-paw-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Trained professionals</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-pet-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-pet-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Flexible scheduling</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🎾</div>
            <div className="absolute -bottom-6 -left-6 text-3xl animate-bounce delay-1000">🦴</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetAboutUs;
