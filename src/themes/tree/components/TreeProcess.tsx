
import React from 'react';
import { Phone, Calendar, Truck, CheckCircle } from 'lucide-react';

const TreeProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Call for Estimate',
      description: 'Contact us for a free, no-obligation quote for your tree care needs.'
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      description: 'We arrange a convenient time that works with your schedule.'
    },
    {
      icon: Truck,
      title: 'Professional Service',
      description: 'Our certified arborists perform safe, efficient tree care services.'
    },
    {
      icon: CheckCircle,
      title: 'Complete Cleanup',
      description: 'We clean up all debris and leave your property spotless.'
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins relative overflow-hidden">
      {/* Organic flowing background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute top-20 left-10 w-64 h-64 text-forest-100 opacity-30" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,50 Q30,20 50,30 Q70,10 80,40 Q90,70 70,80 Q50,90 30,70 Q10,80 20,50 Z" />
        </svg>
        <svg className="absolute bottom-10 right-20 w-48 h-48 text-nature-100 opacity-40" viewBox="0 0 100 100" fill="currentColor">
          <path d="M30,20 Q50,5 70,25 Q85,45 75,65 Q65,85 45,75 Q25,85 15,65 Q5,45 15,25 Q25,5 30,20 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flowing Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Our Tree Service
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-nature-500">
              Naturally Works
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-forest-400 via-nature-400 to-forest-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, organic, and naturally flowing tree care process in harmony with nature
          </p>
        </div>

        {/* Flowing Process Steps */}
        <div className="relative">
          {/* Curved connection path */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-2">
            <svg className="w-full h-full" viewBox="0 0 1200 100">
              <path 
                d="M0,50 Q300,20 600,50 Q900,80 1200,50" 
                stroke="url(#treeGradient)" 
                strokeWidth="4" 
                fill="none"
                className="opacity-60"
              />
              <defs>
                <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="50%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative z-10">
                  {/* Organic icon container */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-forest-500 via-nature-400 to-forest-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <step.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-nature-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    {/* Leaf accent */}
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-forest-300 rounded-full opacity-70 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-forest-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organic CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-300 to-nature-300 rounded-full blur-2xl opacity-40"></div>
            <a
              href="tel:5551234567"
              className="relative bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🌿 Start Your Tree Service Journey 🌲
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeProcess;
