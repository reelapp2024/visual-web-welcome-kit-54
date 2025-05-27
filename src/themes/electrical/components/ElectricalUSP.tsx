
import React from 'react';
import { Zap, Shield, Clock, Award, DollarSign, Users } from 'lucide-react';

const ElectricalUSP = () => {
  const usps = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Response",
      description: "Electrical emergencies don't wait for business hours. Neither do we.",
      benefit: "Peace of mind knowing help is always available"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed electricians with comprehensive insurance coverage.",
      benefit: "Complete protection for you and your property"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "1-Year Warranty",
      description: "All electrical work backed by our comprehensive warranty.",
      benefit: "Confidence in the quality of our workmanship"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "Upfront pricing with no hidden fees or surprise charges.",
      benefit: "Know exactly what you'll pay before work begins"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "15+ years of electrical expertise serving the community.",
      benefit: "Skilled professionals you can trust"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Same-Day Service",
      description: "Most electrical repairs completed the same day you call.",
      benefit: "Minimal disruption to your daily routine"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white font-poppins relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-6">
            Why Choose Our Electrical Services?
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Discover what sets us apart from other electrical contractors and why customers choose us for their electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {usp.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {usp.title}
              </h3>
              
              <p className="text-yellow-100 mb-4 leading-relaxed">
                {usp.description}
              </p>
              
              <div className="bg-white/5 border border-white/20 rounded-lg p-3">
                <p className="text-yellow-200 text-sm font-medium">
                  ✓ {usp.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-yellow-100">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-yellow-100">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-yellow-100">Emergency Service</div>
              </div>
            </div>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-3" size={20} />
              Call Our Expert Electricians: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalUSP;
