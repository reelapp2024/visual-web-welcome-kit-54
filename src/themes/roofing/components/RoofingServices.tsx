
import React from 'react';
import { Home, Wrench, RotateCcw, Zap, Search, Shield } from 'lucide-react';

const RoofingServices = () => {
  const services = [
    {
      icon: Home,
      title: 'Roof Installation',
      description: 'Complete new roof installation with premium materials',
      link: '/roofing/services/roof-installation'
    },
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Expert repairs for leaks and damage',
      link: '/roofing/services/roof-repair'
    },
    {
      icon: RotateCcw,
      title: 'Roof Replacement',
      description: 'Full roof replacement and upgrades',
      link: '/roofing/services/roof-replacement'
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      description: '24/7 emergency roof repairs',
      link: '/roofing/services/emergency-roof-service'
    },
    {
      icon: Search,
      title: 'Roof Inspection',
      description: 'Comprehensive roof assessments',
      link: '/roofing/services/roof-inspection'
    },
    {
      icon: Shield,
      title: 'Maintenance',
      description: 'Preventive care and upkeep',
      link: '/roofing/services/roof-maintenance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-200 font-poppins relative">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-slate-300 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-orange-300 rotate-12"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 border-4 border-slate-400 -rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Angular Header Design */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-orange-500">Roofing</span> Services
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-12 h-1 bg-slate-500 transform -skew-x-12"></div>
              <div className="w-8 h-1 bg-orange-500 transform skew-x-12"></div>
              <div className="w-16 h-1 bg-slate-400 transform -skew-x-12"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional roofing solutions from licensed contractors with decades of construction expertise
            </p>
          </div>
        </div>

        {/* Staggered Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`group ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}>
              <div className="relative">
                {/* Angular Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-orange-200 transform rotate-3 rounded-2xl group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-l-4 border-slate-500 group-hover:border-orange-500">
                  {/* Angular Icon Design */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-orange-500 transform rotate-12 rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:rotate-45 transition-transform duration-300">
                      <service.icon size={28} className="text-white transform -rotate-12 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <a
                    href={service.link}
                    className="inline-flex items-center text-slate-600 hover:text-orange-500 font-semibold transition-colors group"
                  >
                    Learn More 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-none transform skew-y-1 p-12 shadow-2xl">
            <div className="transform -skew-y-1">
              <h3 className="text-3xl font-bold text-white mb-4">🏠 Professional Roofing Excellence 🔨</h3>
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-12 py-6 rounded-none transform skew-x-12 font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl inline-block"
              >
                <span className="transform -skew-x-12 inline-block">Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingServices;
