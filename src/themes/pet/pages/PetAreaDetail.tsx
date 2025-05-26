
import React from 'react';
import { useParams } from 'react-router-dom';
import PetHeader from '../components/PetHeader';
import PetFooter from '../components/PetFooter';
import { MapPin, Heart, Users, Clock, Star, Phone } from 'lucide-react';

const PetAreaDetail = () => {
  const { slug } = useParams();

  const areas = {
    'oak-hills': {
      name: 'Oak Hills',
      emoji: '🏘️',
      description: 'A beautiful residential community perfect for families with pets',
      stats: { pets: '200+', families: '150+', years: '3+' },
      features: [
        'Family-friendly neighborhoods',
        'Large backyards perfect for pets',
        'Close to dog parks and walking trails',
        'Active pet owner community'
      ],
      testimonial: {
        text: "Paws & Clean has been amazing for our Oak Hills home. Buddy loves his clean yard!",
        author: "Sarah & Buddy",
        rating: 5
      }
    },
    'pine-valley': {
      name: 'Pine Valley',
      emoji: '🌲',
      description: 'Nestled among beautiful pine trees, a serene area for pet families',
      stats: { pets: '150+', families: '120+', years: '2+' },
      features: [
        'Natural pine forest setting',
        'Spacious properties with large yards',
        'Quiet, peaceful environment',
        'Great for outdoor-loving pets'
      ],
      testimonial: {
        text: "Living in Pine Valley with our two dogs is perfect, thanks to reliable cleanup service!",
        author: "Mike & Luna",
        rating: 5
      }
    },
    'maple-grove': {
      name: 'Maple Grove',
      emoji: '🍁',
      description: 'Charming tree-lined streets where pets and families thrive together',
      stats: { pets: '180+', families: '140+', years: '4+' },
      features: [
        'Tree-lined beautiful streets',
        'Established pet-friendly community',
        'Close to veterinary services',
        'Regular neighborhood pet events'
      ],
      testimonial: {
        text: "Our cats love the clean outdoor space. Professional service every week!",
        author: "Lisa & Whiskers",
        rating: 5
      }
    },
    'cedar-park': {
      name: 'Cedar Park',
      emoji: '🌳',
      description: 'A growing community with modern amenities and pet-loving families',
      stats: { pets: '120+', families: '90+', years: '2+' },
      features: [
        'Modern community amenities',
        'New construction with pet spaces',
        'Growing pet owner network',
        'Convenient location'
      ],
      testimonial: {
        text: "New to Cedar Park and so glad we found this reliable pet waste service!",
        author: "Tom & Bella",
        rating: 5
      }
    },
    'willow-creek': {
      name: 'Willow Creek',
      emoji: '🌊',
      description: 'Peaceful community near water features, perfect for active pets',
      stats: { pets: '160+', families: '130+', years: '3+' },
      features: [
        'Near beautiful creek areas',
        'Great for water-loving pets',
        'Scenic walking paths',
        'Active outdoor community'
      ],
      testimonial: {
        text: "Max loves playing by the creek and coming home to his clean yard!",
        author: "Jennifer & Max",
        rating: 5
      }
    },
    'sunset-ridge': {
      name: 'Sunset Ridge',
      emoji: '🌅',
      description: 'Elevated community with stunning views and happy pet families',
      stats: { pets: '140+', families: '110+', years: '2+' },
      features: [
        'Beautiful sunset views',
        'Elevated, clean air location',
        'Premium neighborhood amenities',
        'Luxury pet-friendly community'
      ],
      testimonial: {
        text: "The views are amazing and our yard is always spotless. Highly recommended!",
        author: "David & Rocky",
        rating: 5
      }
    }
  };

  const area = areas[slug as keyof typeof areas];

  if (!area) {
    return (
      <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
        <PetHeader />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Area Not Found 🐾</h1>
          <p className="text-gray-600">The service area you're looking for doesn't exist.</p>
        </div>
        <PetFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
      <PetHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pet-100 to-paw-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">{area.emoji}</div>
        <div className="absolute bottom-10 right-10 text-4xl text-pet-300 animate-bounce delay-1000">🐾</div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <MapPin className="text-pet-500" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              {area.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {area.description}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-pet-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{area.stats.pets}</div>
              <div className="text-gray-600 font-medium">Happy Pets</div>
            </div>
            
            <div className="text-center bg-paw-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-paw-500 to-pet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{area.stats.families}</div>
              <div className="text-gray-600 font-medium">Families Served</div>
            </div>
            
            <div className="text-center bg-pet-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{area.stats.years}</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Area Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Pets Love {area.name} 🐕</h2>
              <div className="space-y-4">
                {area.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-pet-50 rounded-xl p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Pet Family Review 🌟</h2>
              <div className="bg-gradient-to-br from-white to-pet-50 rounded-3xl p-8 shadow-lg border-2 border-pet-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(area.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{area.testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{area.testimonial.author}</div>
                    <div className="text-pet-600">{area.name} Residents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pet-500 to-paw-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              🐾 Ready to Join Happy {area.name} Pet Families? 🏡
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the difference professional pet waste removal makes for your family and pets!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pet-50 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now: (555) 123-4567</span>
              </a>
              <a
                href="/pet/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pet-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <PetFooter />
    </div>
  );
};

export default PetAreaDetail;
