
import React from 'react';
import { useParams } from 'react-router-dom';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { Home, Wrench, RotateCcw, Zap, Search, Shield, CheckCircle, Phone, Clock, Award } from 'lucide-react';

const RoofingServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const services = {
    'roof-installation': {
      icon: Home,
      title: 'Professional Roof Installation',
      description: 'Complete new roof installation services using premium materials and expert craftsmanship.',
      longDescription: 'Our professional roof installation service provides you with a brand new roof built to last. We use only the highest quality materials and follow industry best practices to ensure your new roof protects your home for decades to come.',
      features: [
        'Premium roofing materials',
        'Expert installation techniques',
        'Complete tear-off and replacement',
        'Updated ventilation systems',
        'Comprehensive warranty coverage',
        'Detailed cleanup service'
      ],
      process: [
        'Free consultation and estimate',
        'Material selection and ordering',
        'Professional installation',
        'Quality inspection and cleanup'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'roof-repair': {
      icon: Wrench,
      title: 'Expert Roof Repair Services',
      description: 'Professional roof repair services for leaks, storm damage, and general maintenance needs.',
      longDescription: 'Our skilled technicians can handle any roof repair, from minor leak fixes to major storm damage restoration. We use quality materials and proven techniques to restore your roof\'s integrity.',
      features: [
        'Leak detection and repair',
        'Shingle replacement',
        'Flashing repair and replacement',
        'Storm damage restoration',
        'Emergency repair services',
        'Preventive maintenance'
      ],
      process: [
        'Thorough roof inspection',
        'Damage assessment and estimate',
        'Professional repair work',
        'Quality assurance check'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'roof-replacement': {
      icon: RotateCcw,
      title: 'Complete Roof Replacement',
      description: 'Full roof replacement services when repair is no longer cost-effective.',
      longDescription: 'When your roof has reached the end of its useful life, our complete replacement service gives you a fresh start with modern materials and updated techniques.',
      features: [
        'Complete roof removal',
        'New underlayment installation',
        'Modern roofing materials',
        'Improved ventilation systems',
        'Updated gutters and downspouts',
        'Comprehensive warranty'
      ],
      process: [
        'Comprehensive roof assessment',
        'Material selection consultation',
        'Complete roof replacement',
        'Final inspection and warranty'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'emergency-roof-service': {
      icon: Zap,
      title: '24/7 Emergency Roof Service',
      description: 'Round-the-clock emergency roofing services for storm damage and urgent repairs.',
      longDescription: 'When disaster strikes, our emergency response team is ready 24/7 to protect your property from further damage and begin immediate repairs.',
      features: [
        '24/7 emergency response',
        'Storm damage assessment',
        'Emergency tarping services',
        'Water damage prevention',
        'Insurance claim assistance',
        'Rapid permanent repairs'
      ],
      process: [
        'Emergency call and dispatch',
        'Immediate damage assessment',
        'Emergency protection measures',
        'Permanent repair scheduling'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'roof-inspection': {
      icon: Search,
      title: 'Professional Roof Inspection',
      description: 'Comprehensive roof assessments to identify potential issues before they become problems.',
      longDescription: 'Our detailed roof inspections help you understand your roof\'s condition and plan for future maintenance needs. We provide thorough reports with recommendations.',
      features: [
        'Comprehensive visual inspection',
        'Detailed photo documentation',
        'Written inspection report',
        'Maintenance recommendations',
        'Insurance claim support',
        'Annual inspection programs'
      ],
      process: [
        'Schedule inspection appointment',
        'Thorough roof examination',
        'Detailed report preparation',
        'Recommendations discussion'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'roof-maintenance': {
      icon: Shield,
      title: 'Roof Maintenance Services',
      description: 'Preventive maintenance services to extend your roof\'s lifespan and prevent costly repairs.',
      longDescription: 'Regular maintenance is key to maximizing your roof\'s lifespan. Our maintenance programs keep your roof in optimal condition year-round.',
      features: [
        'Regular maintenance schedules',
        'Preventive repair services',
        'Gutter cleaning and maintenance',
        'Seasonal inspections',
        'Minor repair services',
        'Maintenance documentation'
      ],
      process: [
        'Initial roof assessment',
        'Custom maintenance plan',
        'Scheduled service visits',
        'Ongoing condition monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
        <RoofingHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The requested service could not be found.</p>
            <a href="/roofing/services" className="bg-gradient-to-r from-slate-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-slate-400 hover:to-orange-400 transition-all">
              View All Services
            </a>
          </div>
        </div>
        <RoofingFooter />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
              </div>
              <p className="text-xl text-slate-100 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Call Now: (555) 123-4567
                </a>
                <a
                  href="/roofing/contact"
                  className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.longDescription}</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Award size={32} className="text-orange-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">20+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                  <div className="text-center">
                    <Shield size={32} className="text-orange-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Licensed</p>
                    <p className="text-sm text-gray-600">& Bonded</p>
                  </div>
                  <div className="text-center">
                    <Clock size={32} className="text-orange-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">24/7</p>
                    <p className="text-sm text-gray-600">Emergency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Contact Elite Roofing Pro today for your free estimate and professional {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
            <a
              href="/roofing/contact"
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <RoofingFooter />
    </div>
  );
};

export default RoofingServiceDetail;
