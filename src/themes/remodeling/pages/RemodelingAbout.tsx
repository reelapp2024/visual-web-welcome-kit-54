
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';
import RemodelingTestimonials from '../components/RemodelingTestimonials';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';

const RemodelingAbout = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make prioritizes our customers' satisfaction and happiness."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We use only the finest materials and proven techniques in every project."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every detail of your remodeling project."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teamwork",
      description: "Our skilled craftsmen work together to deliver exceptional results."
    }
  ];

  const usps = [
    "15+ Years of Experience",
    "Licensed & Insured",
    "Free Design Consultation",
    "100% Satisfaction Guarantee",
    "Quality Materials Only",
    "Transparent Pricing"
  ];

  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Remodeling Company
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Transforming kitchens and bathrooms with expert craftsmanship and innovative design
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in kitchen and bathroom remodeling, we've helped hundreds of homeowners transform their spaces into beautiful, functional areas they love. Our journey began with a simple mission: to provide exceptional remodeling services that exceed expectations while delivering outstanding value and craftsmanship.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              What started as a small family business has grown into a trusted name in home remodeling, but we've never lost sight of our core values: quality workmanship, honest communication, and customer satisfaction above all else.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RemodelingCTA />

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-full">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">To provide exceptional kitchen and bathroom remodeling services that exceed our clients' expectations while delivering outstanding value, quality craftsmanship, and personalized attention to every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-3 rounded-full">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the most trusted and respected remodeling company in our region, known for transforming houses into dream homes through innovative design and exceptional craftsmanship.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Our Values & Core Beliefs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique selling propositions that set us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mr-4"></div>
                  <span className="font-semibold text-gray-900">{usp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RemodelingTestimonials />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingAbout;
