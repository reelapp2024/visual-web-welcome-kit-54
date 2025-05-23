import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Home, Recycle, Building, Sofa, Trash, CheckCircle, Star, Phone, Clock, Award, Users, MapPin, DollarSign, Shield } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: { [key: string]: any } = {
    'residential-junk-removal': {
      icon: <Truck className="w-16 h-16" />,
      title: "Residential Junk Removal",
      description: "Complete household junk removal including furniture, appliances, and debris with same-day service available.",
      gradient: "from-electric-500 to-electric-600",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=400&auto=format&fit=crop",
          description: "Living Room Cleanout"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop",
          description: "Garage Cleanout"
        }
      ],
      features: [
        "Furniture and appliance removal",
        "Household clutter cleanup",
        "Basement and attic cleanouts",
        "Same-day service available",
        "Eco-friendly disposal",
        "No hidden fees"
      ]
    },
    'commercial-cleanouts': {
      icon: <Building className="w-16 h-16" />,
      title: "Commercial Cleanouts",
      description: "Professional office cleanouts, retail space clearing, and commercial waste removal services.",
      gradient: "from-lime-500 to-lime-600",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558002038-bb4237b54e5c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=400&auto=format&fit=crop",
          description: "Office Space Cleanout"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Retail Space Clearing"
        }
      ],
      features: [
        "Office furniture removal",
        "Retail equipment disposal",
        "Document shredding services",
        "After-hours service available",
        "Licensed commercial hauling",
        "Free estimates"
      ]
    },
    'estate-cleanouts': {
      icon: <Home className="w-16 h-16" />,
      title: "Estate Cleanouts",
      description: "Compassionate estate and foreclosure cleanout services with respectful handling of belongings.",
      gradient: "from-brand-500 to-brand-600",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=400&auto=format&fit=crop",
          description: "Complete Estate Cleanout"
        },
        {
          before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Property Preparation"
        }
      ],
      features: [
        "Sensitive estate handling",
        "Donation coordination",
        "Full property cleanouts",
        "Foreclosure cleanup",
        "Respectful service",
        "Quick turnaround"
      ]
    },
    'furniture-removal': {
      icon: <Sofa className="w-16 h-16" />,
      title: "Furniture Removal",
      description: "Safe removal and disposal of old furniture and appliances with eco-friendly recycling options.",
      gradient: "from-electric-600 to-brand-500",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?q=80&w=400&auto=format&fit=crop",
          description: "Old Furniture Removal"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Appliance Removal"
        }
      ],
      features: [
        "Heavy furniture removal",
        "Appliance disposal",
        "Mattress and box spring removal",
        "Recycling coordination",
        "Safe lifting techniques",
        "Damage-free removal"
      ]
    },
    'construction-debris': {
      icon: <Recycle className="w-16 h-16" />,
      title: "Construction Debris",
      description: "Construction waste removal and renovation cleanup services for contractors and homeowners.",
      gradient: "from-brand-600 to-electric-500",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558002038-bb4237b54e5c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop",
          description: "Construction Cleanup"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Renovation Debris Removal"
        }
      ],
      features: [
        "Drywall and lumber removal",
        "Concrete and brick disposal",
        "Roofing material cleanup",
        "Contractor partnerships",
        "Proper waste sorting",
        "Timely pickup schedules"
      ]
    },
    'yard-waste-removal': {
      icon: <Trash className="w-16 h-16" />,
      title: "Yard Waste Removal",
      description: "Tree limbs, leaves, brush, and landscaping debris hauling with eco-friendly disposal methods.",
      gradient: "from-lime-600 to-brand-500",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=800&auto=format&fit=crop",
      beforeAfter: [
        {
          before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=400&auto=format&fit=crop",
          description: "Yard Cleanup"
        },
        {
          before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=400&auto=format&fit=crop",
          after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
          description: "Storm Debris Removal"
        }
      ],
      features: [
        "Tree branch removal",
        "Leaf and brush cleanup",
        "Storm debris clearing",
        "Landscaping waste disposal",
        "Composting services",
        "Seasonal cleanup"
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
          <p className="text-gray-600 mt-4">The service you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-8"
          >
            Return Home
          </button>
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
      title: "Quality Service",
      description: "We use only professional equipment and follow best practices"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your junk removal needs"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Call us to describe what needs to be removed"
    },
    {
      number: "02",
      title: "Free Estimate",
      description: "We provide an upfront, no-obligation quote"
    },
    {
      number: "03",
      title: "Schedule Pickup",
      description: "Choose a convenient time, including same-day service"
    },
    {
      number: "04",
      title: "We Haul It",
      description: "Our team safely removes everything from your property"
    },
    {
      number: "05",
      title: "Eco-Friendly Disposal",
      description: "We recycle and donate items whenever possible"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing junk removal service! They cleaned out my entire garage quickly and professionally. Highly recommend!",
      location: "Downtown Area",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Fast, reliable, and affordable. They hauled away all my old furniture on the same day I called.",
      location: "Suburban District",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Professional team with excellent service. They even swept up after removing everything!",
      location: "City Center",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Licensed Haulers",
      description: "Fully certified and licensed"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Same-Day Service",
      description: "Available 7 days a week"
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
                  <span>Same-day service available</span>
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
                <div className="text-3xl font-bold text-brand-500">Same</div>
                <div className="text-sm text-gray-600">Day Service</div>
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
            <h2 className="text-3xl font-bold text-white">Same-Day Service Available</h2>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            Need junk removed today? We offer same-day pickup for urgent cleanouts!
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: (555) 123-4567
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-500 to-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Clear Out Your Space?
          </h2>
          <p className="text-xl text-electric-100 mb-8 leading-relaxed">
            Don't let junk pile up any longer. Contact us now for professional {service.title.toLowerCase()}!
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
