
import React from 'react';
import { useParams } from 'react-router-dom';
import PetHeader from '../components/PetHeader';
import PetFooter from '../components/PetFooter';
import { Calendar, Zap, Shield, Home, Sparkles, Users, CheckCircle, Heart } from 'lucide-react';

const PetServiceDetail = () => {
  const { slug } = useParams();

  const services = {
    'weekly-cleanup': {
      icon: Calendar,
      title: 'Weekly Cleanup Service',
      description: 'Regular scheduled pet waste removal to keep your yard consistently clean and healthy.',
      emoji: '📅',
      features: [
        'Reliable weekly schedule',
        'Weather-resistant service',
        'Pet-safe sanitization',
        'Flexible scheduling options',
        'Eco-friendly disposal'
      ],
      process: [
        'Schedule your preferred day',
        'Our team arrives on time',
        'Thorough waste removal',
        'Area sanitization',
        'Clean, fresh yard'
      ]
    },
    'one-time-service': {
      icon: Zap,
      title: 'One-Time Deep Clean',
      description: 'Perfect for special events, new home moves, or when you need a fresh start.',
      emoji: '⚡',
      features: [
        'Immediate service available',
        'Deep cleaning process',
        'Complete waste removal',
        'Odor elimination',
        'Same-day availability'
      ],
      process: [
        'Call for immediate service',
        'Quote provided over phone',
        'Rapid response team',
        'Comprehensive cleanup',
        'Spotless results'
      ]
    },
    'sanitization': {
      icon: Shield,
      title: 'Area Sanitization',
      description: 'Complete disinfection and deodorizing service for maximum cleanliness.',
      emoji: '🛡️',
      features: [
        'Pet-safe disinfectants',
        'Odor neutralization',
        'Bacteria elimination',
        'Safe for children',
        'Long-lasting freshness'
      ],
      process: [
        'Initial assessment',
        'Waste removal',
        'Deep sanitization',
        'Odor treatment',
        'Final inspection'
      ]
    },
    'yard-maintenance': {
      icon: Home,
      title: 'Yard Maintenance',
      description: 'Keep your entire outdoor space pristine and enjoyable for your family.',
      emoji: '🏡',
      features: [
        'Complete yard care',
        'Regular maintenance',
        'Preventive treatments',
        'Landscape protection',
        'Family-friendly results'
      ],
      process: [
        'Yard evaluation',
        'Customized plan',
        'Regular maintenance',
        'Ongoing monitoring',
        'Beautiful results'
      ]
    },
    'odor-control': {
      icon: Sparkles,
      title: 'Odor Control Solutions',
      description: 'Advanced odor elimination using safe, effective treatment methods.',
      emoji: '✨',
      features: [
        'Advanced odor technology',
        'Long-lasting results',
        'Safe formulations',
        'Instant improvement',
        'Guaranteed effectiveness'
      ],
      process: [
        'Odor assessment',
        'Treatment selection',
        'Application process',
        'Monitoring results',
        'Fresh environment'
      ]
    },
    'multi-pet-service': {
      icon: Users,
      title: 'Multi-Pet Household Service',
      description: 'Special rates and customized service for families with multiple pets.',
      emoji: '👥',
      features: [
        'Volume discounts',
        'Customized frequency',
        'Multiple pet expertise',
        'Flexible scheduling',
        'Cost-effective solutions'
      ],
      process: [
        'Multi-pet assessment',
        'Custom service plan',
        'Volume pricing',
        'Tailored schedule',
        'Happy pet family'
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen font-poppins bg-gradient-to-br from-pet-50 to-paw-50">
        <PetHeader />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found 🐾</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
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
        <div className="absolute top-10 left-10 text-4xl animate-bounce">{service.emoji}</div>
        <div className="absolute bottom-10 right-10 text-3xl text-pet-300 animate-bounce delay-1000">🐾</div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <service.icon size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Features 🌟</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-pet-50 rounded-xl p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process 🔄</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-paw-500 to-pet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pet-500 to-paw-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="animate-pulse" size={32} />
              <h2 className="text-4xl font-bold">Ready to Get Started? 🐾</h2>
              <Heart className="animate-pulse" size={32} />
            </div>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of happy pet families who trust us with their yard care needs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pet-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📞 Call Now: (555) 123-4567
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

export default PetServiceDetail;
