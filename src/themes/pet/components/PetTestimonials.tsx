
import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const PetTestimonials = () => {
  const testimonials = [
    {
      name: "Jennifer & Buddy",
      location: "Oak Hills",
      rating: 5,
      text: "Paws & Clean keeps our yard perfect for Buddy to play. Professional, reliable, and they genuinely care about pets!",
      petType: "🐕 Labrador"
    },
    {
      name: "Mike & Luna",
      location: "Pine Valley",
      rating: 5,
      text: "Weekly service has been a game-changer! Luna loves her clean yard and we love the fresh outdoor space.",
      petType: "🐕 Border Collie"
    },
    {
      name: "Lisa & Whiskers",
      location: "Maple Grove",
      rating: 5,
      text: "Even works great for our cat's outdoor area. The team is gentle and respectful of all our pets' needs.",
      petType: "🐈 Persian Cat"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pet-800 via-paw-800 to-pet-900 font-poppins relative">
      {/* Playful floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-4xl text-pet-400 animate-bounce">🐾</div>
        <div className="absolute top-60 right-32 text-3xl text-paw-400 animate-bounce delay-1000">💖</div>
        <div className="absolute bottom-32 left-1/4 text-4xl text-pet-300 animate-bounce delay-500">🌟</div>
        <div className="absolute bottom-20 right-20 text-3xl text-paw-300 animate-bounce delay-1500">🎾</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Happy Pet <span className="text-transparent bg-clip-text bg-gradient-to-r from-pet-400 to-paw-300">Families</span> 🐾
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pet-500 to-paw-400 rounded-full"></div>
          </div>
          <p className="text-xl text-pet-200 max-w-3xl mx-auto mt-8 leading-relaxed">
            See what pet families in our community are saying about our caring service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative">
                {/* Playful background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pet-600/30 to-paw-600/30 backdrop-blur-sm rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-t-4 border-pet-500">
                  {/* Playful quote header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Quote className="text-white" size={20} />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-pet-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-pet-600 text-sm">{testimonial.location}</p>
                      <p className="text-paw-600 text-sm mt-1">{testimonial.petType}</p>
                    </div>
                    <Heart className="text-pet-400 animate-pulse" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playful CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pet-700 to-paw-700 rounded-3xl p-12 shadow-2xl">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">🐕 Join Our Happy Pet Family! 🐾</h3>
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:bg-pet-50 shadow-lg inline-block transform hover:scale-105"
              >
                📞 Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetTestimonials;
