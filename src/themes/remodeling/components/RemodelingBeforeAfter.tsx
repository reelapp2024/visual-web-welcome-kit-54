
import React from 'react';

const RemodelingBeforeAfter = () => {
  const projects = [
    {
      title: "Modern Kitchen Transformation",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      description: "Complete kitchen remodel with custom cabinets and granite countertops"
    },
    {
      title: "Luxury Bathroom Renovation",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      description: "Master bathroom renovation with walk-in shower and modern fixtures"
    },
    {
      title: "Kitchen Island Addition",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      description: "Added a beautiful kitchen island with breakfast bar and storage"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Before & After Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations we've created for our satisfied clients.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{project.title}</h3>
                <p className="text-gray-600 text-center mb-8">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Before</h4>
                    <img 
                      src={project.before} 
                      alt="Before remodeling" 
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">After</h4>
                    <img 
                      src={project.after} 
                      alt="After remodeling" 
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingBeforeAfter;
