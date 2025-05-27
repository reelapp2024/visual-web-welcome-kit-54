
import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';

const ElectricalBeforeAfter = () => {
  const projects = [
    {
      title: "Panel Upgrade Project",
      before: "Old 100-amp electrical panel with outdated breakers",
      after: "Modern 200-amp panel with AFCI/GFCI protection",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Increased electrical capacity", "Enhanced safety features", "Code compliant installation"]
    },
    {
      title: "Kitchen Electrical Renovation",
      before: "Limited outlets and old wiring in kitchen",
      after: "GFCI protected outlets and under-cabinet lighting",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Multiple GFCI outlets", "LED under-cabinet lighting", "Dedicated appliance circuits"]
    },
    {
      title: "Whole House Rewiring",
      before: "1960s aluminum wiring throughout home",
      after: "Complete copper wiring with modern safety standards",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Fire safety improvement", "Insurance compliance", "Increased home value"]
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Electrical Projects Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference professional electrical work makes. From safety upgrades to complete renovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  <Zap size={16} className="inline mr-2" />
                  Professional Work
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Before:</h4>
                    <p className="text-red-700 text-sm">{project.before}</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">After:</h4>
                    <p className="text-green-700 text-sm">{project.after}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle size={16} className="text-amber-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Upgrade Your Electrical System?</h3>
            <p className="text-xl mb-6 text-yellow-100">
              Contact us for a free consultation and see how we can improve your electrical safety and efficiency.
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-3" size={20} />
              Get Free Estimate: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalBeforeAfter;
