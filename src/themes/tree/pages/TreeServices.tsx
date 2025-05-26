
import React from 'react';
import TreeHeader from '../components/TreeHeader';
import Footer from '../../../components/Footer';
import { Trees, Scissors, Zap, Search, Shovel, Shield } from 'lucide-react';

const TreeServices = () => {
  const services = [
    {
      icon: Trees,
      name: 'Tree Removal',
      description: 'Safe and efficient removal of dangerous, diseased, or unwanted trees',
      slug: 'tree-removal',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Scissors,
      name: 'Tree Trimming',
      description: 'Professional pruning and trimming to maintain tree health and appearance',
      slug: 'tree-trimming',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Shovel,
      name: 'Stump Grinding',
      description: 'Complete stump removal and grinding services',
      slug: 'stump-grinding',
      image: 'https://images.unsplash.com/photo-1566995541428-c0f17de86a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Zap,
      name: 'Emergency Tree Service',
      description: '24/7 emergency response for storm damage and hazardous trees',
      slug: 'emergency-tree-service',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Search,
      name: 'Tree Health Assessment',
      description: 'Professional diagnosis and treatment of tree diseases',
      slug: 'tree-health-assessment',
      image: 'https://images.unsplash.com/photo-1518335935020-cfd9c7d1264b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Shield,
      name: 'Tree Protection',
      description: 'Preventive care and protection services for valuable trees',
      slug: 'tree-protection',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tree Care
              <span className="block text-nature-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional tree services from certified arborists
            </p>
            <a 
              href="tel:5551234567"
              className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tree Care Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tree care solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`/tree/services/${service.slug}`}
                      className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href="tel:5551234567"
                      className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                    >
                      Call Now: (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Tree Service?
          </h2>
          <p className="text-xl mb-8">
            Available 24/7 for storm damage, fallen trees, and hazardous tree situations
          </p>
          <a 
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            Emergency Call: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreeServices;
