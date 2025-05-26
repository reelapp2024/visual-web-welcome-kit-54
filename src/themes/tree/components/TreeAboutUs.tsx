
import React from 'react';
import { Leaf, Users, Award, Shield, Clock, CheckCircle } from 'lucide-react';

const TreeAboutUs = () => {
  const stats = [
    { number: "5000+", label: "Trees Removed", icon: Leaf },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Emergency Service", icon: Clock },
    { number: "100%", label: "Satisfaction Rate", icon: CheckCircle }
  ];

  const features = [
    {
      icon: Shield,
      title: "Certified Arborists",
      description: "Our team consists of ISA certified arborists with extensive knowledge of tree care and safety protocols."
    },
    {
      icon: Users,
      title: "Experienced Crew",
      description: "Over 15 years of combined experience in tree removal, trimming, and emergency response services."
    },
    {
      icon: Award,
      title: "Fully Licensed & Insured",
      description: "Complete licensing and comprehensive insurance coverage for your peace of mind and property protection."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Organic Flow */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Leaf size={200} className="text-forest-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-nature-500">TreeCare Pro</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-forest-500 to-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in professional tree care services. We combine expertise, safety, and environmental responsibility to keep your property beautiful and secure.
          </p>
        </div>

        {/* Curved Stats Section */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-50 to-nature-50 transform -skew-y-1 rounded-3xl"></div>
            <div className="relative z-10 py-12 px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-nature-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Story & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Growing Excellence Since 2008
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a passion for tree care and environmental stewardship, TreeCare Pro has grown from a small local business to the region's most trusted tree service company.
              </p>
              <p>
                Our commitment to safety, quality, and customer satisfaction has earned us thousands of happy customers and a reputation for excellence that speaks for itself.
              </p>
              <p>
                We don't just remove trees – we care for your entire landscape, ensuring the health and beauty of your outdoor spaces for generations to come.
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="tel:5551234567"
                className="inline-flex items-center bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-forest-50 to-nature-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-nature-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-forest-600 to-nature-600 p-12 text-center text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To provide exceptional tree care services while preserving the natural beauty of our community. 
              We believe every tree has value, and every customer deserves the highest level of professional service.
            </p>
          </div>
          <div className="absolute -top-20 -right-20 opacity-10">
            <Leaf size={200} />
          </div>
          <div className="absolute -bottom-20 -left-20 opacity-10">
            <Leaf size={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeAboutUs;
