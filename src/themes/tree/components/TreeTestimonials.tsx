
import React from 'react';
import { Star, Quote, Leaf } from 'lucide-react';

const TreeTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Oak Valley",
      rating: 5,
      text: "TreeCare Pro removed two large oak trees from our backyard safely and efficiently. Their team was professional and cleaned up everything perfectly!"
    },
    {
      name: "Mike Chen",
      location: "Pine Ridge",
      rating: 5,
      text: "Emergency tree service after the storm was excellent. They responded quickly and handled the fallen tree on our roof with great care."
    },
    {
      name: "Lisa Rodriguez",
      location: "Maple Grove",
      rating: 5,
      text: "Regular tree trimming service has kept our property looking great. The arborists are knowledgeable and always explain what they're doing."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 via-nature-800 to-forest-900 font-poppins relative overflow-hidden">
      {/* Organic floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-nature-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-forest-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating leaves */}
      <div className="absolute top-40 left-1/4 text-nature-300/20 animate-bounce">
        <Leaf size={40} />
      </div>
      <div className="absolute bottom-40 right-1/3 text-forest-300/20 animate-bounce delay-500">
        <Leaf size={32} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Organic Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nature-400 to-forest-300">
              Nature Lovers Say
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-nature-400 via-forest-300 to-nature-500 rounded-full"></div>
          </div>
          <p className="text-xl text-forest-100 max-w-3xl mx-auto leading-relaxed">
            Trusted by homeowners who care about their trees and the environment
          </p>
        </div>

        {/* Flowing testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`group transform ${index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-4'}`}>
              <div className="relative">
                {/* Organic background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                
                <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/30">
                  {/* Organic quote design */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-nature-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="text-white" size={20} />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-nature-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-forest-200 pt-6">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-forest-600 font-medium">{testimonial.location}</p>
                  </div>
                  
                  {/* Decorative leaf accent */}
                  <div className="absolute top-4 right-4 text-nature-300/50 group-hover:text-nature-400 transition-colors">
                    <Leaf size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organic CTA */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-nature-400 to-forest-400 rounded-full blur-2xl opacity-50"></div>
            <a
              href="tel:5551234567"
              className="relative bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🌿 Join Our Happy Tree Customers 🌲
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeTestimonials;
