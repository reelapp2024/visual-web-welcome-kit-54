
import React from 'react';
import { Thermometer, Wind, Settings, Zap, Wrench, Snowflake, ArrowRight, Phone } from 'lucide-react';

const HVACServices = () => {
  const services = [
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Air Conditioning Repair",
      description: "Expert AC repair and maintenance services for optimal cooling performance.",
      features: ["Emergency Repairs", "System Diagnostics", "Preventive Maintenance"],
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/ac-repair",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Heating System Repair",
      description: "Professional furnace and heating system repair and installation services.",
      features: ["Furnace Repair", "Heat Pump Service", "Boiler Maintenance"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/heating-repair",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "HVAC Installation",
      description: "Complete HVAC system installation and replacement services.",
      features: ["New Installations", "System Upgrades", "Ductwork"],
      image: "https://images.unsplash.com/photo-1585177606728-7731b6f45a7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/hvac-installation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Duct Cleaning",
      description: "Professional air duct cleaning and ventilation services.",
      features: ["Air Duct Cleaning", "Ventilation Service", "Air Quality"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/duct-cleaning",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Thermostat Services",
      description: "Smart thermostat installation and programming services.",
      features: ["Smart Thermostats", "Programming", "Energy Savings"],
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/thermostat-services",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Emergency HVAC",
      description: "24/7 emergency HVAC repair and maintenance services.",
      features: ["24/7 Service", "Emergency Repairs", "Fast Response"],
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/hvac/services/emergency-hvac",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Complete HVAC
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive heating, 
            ventilation, and air conditioning solutions that keep you comfortable year-round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${service.color} rounded-2xl p-4 shadow-2xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a 
                    href="tel:5551234567"
                    className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-slate-800 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Need Help Choosing the Right Service?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our HVAC experts are standing by to help you find the perfect solution for your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Call for Free Consultation
                </a>
                <a 
                  href="/hvac/services"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACServices;
