
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Home, Zap, Droplet, Hammer, Shield, CheckCircle, Star, Phone } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: { [key: string]: any } = {
    'general-repairs': {
      icon: <Wrench className="w-16 h-16" />,
      title: "General Repairs",
      description: "Comprehensive repair services for all your household needs with professional expertise and quality materials.",
      gradient: "from-electric-500 to-electric-600",
      features: [
        "Door and window repairs",
        "Wall patching and painting touch-ups",
        "Cabinet and furniture fixes",
        "Appliance installation and repair",
        "Weatherproofing and sealing",
        "General maintenance tasks"
      ]
    },
    'home-maintenance': {
      icon: <Home className="w-16 h-16" />,
      title: "Home Maintenance",
      description: "Regular maintenance services to keep your property in top condition year-round.",
      gradient: "from-lime-500 to-lime-600",
      features: [
        "Seasonal maintenance checks",
        "HVAC filter replacement",
        "Gutter cleaning and maintenance",
        "Pressure washing services",
        "Landscaping and yard care",
        "Preventive maintenance schedules"
      ]
    },
    'electrical-services': {
      icon: <Zap className="w-16 h-16" />,
      title: "Electrical Services",
      description: "Licensed electrical work performed by certified professionals for safety and compliance.",
      gradient: "from-brand-500 to-brand-600",
      features: [
        "Outlet and switch installation",
        "Circuit breaker repairs",
        "Light fixture installation",
        "Electrical panel upgrades",
        "Wiring and rewiring services",
        "Emergency electrical repairs"
      ]
    },
    'plumbing-services': {
      icon: <Droplet className="w-16 h-16" />,
      title: "Plumbing Services",
      description: "Professional plumbing solutions for residential and commercial properties.",
      gradient: "from-electric-600 to-brand-500",
      features: [
        "Leak detection and repair",
        "Drain cleaning and unclogging",
        "Faucet and fixture installation",
        "Water heater services",
        "Pipe repair and replacement",
        "Emergency plumbing services"
      ]
    },
    'handyman-services': {
      icon: <Hammer className="w-16 h-16" />,
      title: "Handyman Services",
      description: "Skilled craftsmanship for various home improvement and repair projects.",
      gradient: "from-brand-600 to-electric-500",
      features: [
        "Carpentry and woodwork",
        "Tile and flooring installation",
        "Deck and fence repairs",
        "Assembly services",
        "Interior and exterior painting",
        "Custom home improvements"
      ]
    },
    'emergency-services': {
      icon: <Shield className="w-16 h-16" />,
      title: "Emergency Services",
      description: "24/7 emergency response for urgent repairs that can't wait.",
      gradient: "from-lime-600 to-brand-500",
      features: [
        "24/7 emergency response",
        "Water damage mitigation",
        "Electrical emergency repairs",
        "Plumbing emergency fixes",
        "Storm damage repairs",
        "Same-day service available"
      ]
    }
  };

  const service = serviceData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen font-poppins">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Service Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const guarantees = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "100% Satisfaction",
      description: "We guarantee your complete satisfaction or we'll make it right"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Materials",
      description: "We use only high-quality materials and tools for lasting results"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your service needs"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Call or message us to describe your service needs"
    },
    {
      number: "02",
      title: "Free Estimate",
      description: "We provide a detailed, no-obligation quote"
    },
    {
      number: "03",
      title: "Schedule Service",
      description: "Choose a convenient time that works for you"
    },
    {
      number: "04",
      title: "Expert Work",
      description: "Our professionals complete the job efficiently"
    },
    {
      number: "05",
      title: "Quality Check",
      description: "We ensure everything meets our high standards"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl w-32 h-32 flex items-center justify-center mx-auto mb-8 text-white shadow-2xl`}>
              {service.icon}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {service.description}
            </p>
            <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              What We Include
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white shadow-xl`}>
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p className="text-gray-900 text-center font-semibold text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              Our Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We stand behind our work with comprehensive guarantees for your peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 text-center">
                <div className="bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined 5-step process ensures quality service from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-electric-500 to-electric-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-xl group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 pt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-brand-300 z-20">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-500 to-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-electric-100 mb-8 leading-relaxed">
            Don't wait for problems to get worse. Contact us now for professional {service.title.toLowerCase()}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Call (555) 123-4567
            </button>
            <button className="bg-white hover:bg-gray-100 text-electric-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
