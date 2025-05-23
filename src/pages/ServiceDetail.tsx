
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Home, Zap, Droplet, Hammer, Shield, CheckCircle, Star, Phone, Clock, Award, Users, MapPin, DollarSign } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: { [key: string]: any } = {
    'general-repairs': {
      icon: <Wrench className="w-16 h-16" />,
      title: "General Repairs",
      description: "Comprehensive repair services for all your household needs with professional expertise and quality materials.",
      gradient: "from-electric-500 to-electric-600",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop",
          description: "Kitchen Cabinet Repair"
        },
        {
          before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop",
          description: "Door Frame Restoration"
        }
      ],
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
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Garden Maintenance"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop",
          description: "Home Exterior Cleaning"
        }
      ],
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
      image: "https://images.unsplash.com/photo-1621905251189-08b45249ff49?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558002038-bb4237b54e5c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1621905251189-08b45249ff49?q=80&w=400&auto=format&fit=crop",
          description: "Electrical Panel Upgrade"
        },
        {
          before: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
          description: "Modern Light Installation"
        }
      ],
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
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=400&auto=format&fit=crop",
          description: "Bathroom Plumbing Repair"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Kitchen Sink Installation"
        }
      ],
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
      image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=400&auto=format&fit=crop",
          description: "Custom Carpentry Work"
        },
        {
          before: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Home Improvement Project"
        }
      ],
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
      image: "https://images.unsplash.com/photo-1544985361-b420d7a77140?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558002038-bb4237b54e5c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1544985361-b420d7a77140?q=80&w=400&auto=format&fit=crop",
          description: "Emergency Storm Damage Repair"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1621905251189-08b45249ff49?q=80&w=400&auto=format&fit=crop",
          description: "Emergency Electrical Fix"
        }
      ],
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing service! They fixed my electrical issues quickly and professionally. Highly recommend!",
      location: "Downtown Area",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Fast, reliable, and affordable. They completed my home repairs on time and within budget.",
      location: "Suburban District",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Professional team with excellent attention to detail. My home looks better than ever!",
      location: "City Center",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Licensed Professionals",
      description: "Fully certified and licensed"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Emergency",
      description: "Available round the clock"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "500+ Happy Customers",
      description: "Trusted by local community"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Local Business",
      description: "Serving your neighborhood"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl w-32 h-32 flex items-center justify-center mb-8 text-white shadow-2xl`}>
                {service.icon}
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </button>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Response time: Under 30 minutes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm font-bold text-gray-900">500+ Happy Customers</p>
                <p className="text-xs text-gray-600">Trusted Local Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white shadow-xl`}>
                  {badge.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              Before & After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See the amazing transformations we've delivered for our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.beforeAfter.map((project: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={project.before} alt="Before" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt="After" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.description}</h3>
                  <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (555) 123-4567
                  </button>
                </div>
              </div>
            ))}
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
            Transparent Pricing
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 text-lime-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Hidden Fees</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get upfront pricing with detailed estimates. We believe in transparent costs with no surprise charges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-500">Free</div>
                <div className="text-sm text-gray-600">Estimates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-500">No</div>
                <div className="text-sm text-gray-600">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">Fixed</div>
                <div className="text-sm text-gray-600">Price Guarantee</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-600 to-electric-600 bg-clip-text text-transparent mb-6">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.comment}"</p>
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

      {/* Emergency Banner */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl font-bold text-white">Emergency Service Available</h2>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            Don't let problems escalate! We're available 24/7 for emergency repairs.
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            Emergency Call: (555) 123-4567
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-500 to-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-electric-100 mb-8 leading-relaxed">
            Don't wait for problems to get worse. Contact us now for professional {service.title.toLowerCase()}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
