
import React from 'react';
import { useParams } from 'react-router-dom';
import TreeHeader from '../components/TreeHeader';
import Footer from '../../../components/Footer';
import { Phone, CheckCircle, Star, Clock, Shield, Award } from 'lucide-react';

const TreeServiceDetail = () => {
  const { slug } = useParams();
  
  const services = {
    'tree-removal': {
      name: 'Tree Removal',
      description: 'Safe and efficient removal of dangerous, diseased, or unwanted trees',
      longDescription: 'Our certified arborists provide professional tree removal services for residential and commercial properties. We handle everything from small ornamental trees to large, hazardous trees that pose a risk to your property.',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: [
        'Safe removal of trees of any size',
        'Hazardous tree assessment and removal',
        'Storm-damaged tree removal',
        'Complete debris cleanup',
        'Stump grinding available',
        'Emergency same-day service'
      ]
    },
    'tree-trimming': {
      name: 'Tree Trimming & Pruning',
      description: 'Professional pruning and trimming to maintain tree health and appearance',
      longDescription: 'Proper tree trimming and pruning is essential for maintaining healthy, beautiful trees. Our ISA-certified arborists use industry-standard techniques to enhance your trees\' health, safety, and aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: [
        'Crown thinning and shaping',
        'Deadwood removal',
        'Structural pruning for safety',
        'Fruit tree pruning',
        'Ornamental tree care',
        'Seasonal maintenance programs'
      ]
    },
    'stump-grinding': {
      name: 'Stump Grinding',
      description: 'Complete stump removal and grinding services',
      longDescription: 'Don\'t let unsightly tree stumps ruin your landscape. Our professional stump grinding service completely removes stumps below ground level, allowing you to replant or redesign your outdoor space.',
      image: 'https://images.unsplash.com/photo-1566995541428-c0f17de86a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: [
        'Complete stump removal',
        'Below-ground grinding',
        'Wood chip cleanup or mulch option',
        'Root system grinding',
        'Site restoration',
        'Same-day service available'
      ]
    },
    'emergency-tree-service': {
      name: 'Emergency Tree Service',
      description: '24/7 emergency response for storm damage and hazardous trees',
      longDescription: 'When storms strike or trees become hazardous, you need immediate professional help. Our emergency tree service is available 24/7 to handle dangerous situations and prevent further property damage.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: [
        '24/7 emergency response',
        'Storm damage cleanup',
        'Fallen tree removal',
        'Power line clearance',
        'Insurance claim assistance',
        'Rapid response team'
      ]
    },
    'tree-health-assessment': {
      name: 'Tree Health Assessment',
      description: 'Professional diagnosis and treatment of tree diseases',
      longDescription: 'Our certified arborists provide comprehensive tree health assessments to identify diseases, pest infestations, and structural problems. Early detection and treatment can save your valuable trees.',
      image: 'https://images.unsplash.com/photo-1518335935020-cfd9c7d1264b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: [
        'Disease diagnosis and treatment',
        'Pest identification and control',
        'Soil analysis and improvement',
        'Nutritional assessment',
        'Risk assessment reports',
        'Preventive care programs'
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-forest-50 to-nature-50">
      <TreeHeader />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 to-nature-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Award size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Arborists</h3>
              <p className="text-gray-600">ISA certified professionals</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Clock size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">Quick response available</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Shield size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete liability coverage</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl">
              <Star size={48} className="text-forest-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Customer satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive {service.name.toLowerCase()} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-forest-500 to-nature-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Transparent Pricing
          </h2>
          <div className="bg-gradient-to-br from-forest-50 to-nature-50 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle size={48} className="text-forest-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimates</h3>
                <p className="text-gray-600">No charge for on-site assessments</p>
              </div>
              <div className="text-center">
                <Shield size={48} className="text-forest-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">Upfront pricing with no surprises</p>
              </div>
              <div className="text-center">
                <Clock size={48} className="text-forest-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick response when you need it</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
              >
                Get Free Estimate: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-forest-600 to-nature-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact our certified arborists today for professional {service.name.toLowerCase()} services
          </p>
          <a 
            href="tel:5551234567"
            className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-400 hover:to-nature-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            <Phone className="mr-2" size={20} />
            Call Now: (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreeServiceDetail;
