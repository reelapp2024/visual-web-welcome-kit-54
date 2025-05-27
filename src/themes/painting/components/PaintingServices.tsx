
import React from 'react';
import { Paintbrush, Home, Building, Palette, Brush, Droplets } from 'lucide-react';

const PaintingServices = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Interior Painting",
      description: "Professional interior painting for homes and businesses with premium paints and perfect finishes.",
      features: ["Color consultation", "Wall preparation", "Premium paints", "Clean finish work"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Exterior Painting",
      description: "Durable exterior painting services that protect and beautify your property against the elements.",
      features: ["Weather-resistant paints", "Surface preparation", "Trim and detail work", "Power washing"],
      image: "https://images.unsplash.com/photo-1572783509178-c2e65b35d1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Color Consultation",
      description: "Expert color advice and design consultation to help you choose the perfect colors for your space.",
      features: ["Professional color matching", "Design trends", "Sample testing", "Lighting considerations"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Cabinet Painting",
      description: "Transform your kitchen and bathroom cabinets with professional cabinet painting and refinishing.",
      features: ["Cabinet preparation", "Primer and paint", "Hardware reinstallation", "Smooth finish"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: "Specialty Finishes",
      description: "Decorative painting techniques including texture, faux finishes, and artistic wall treatments.",
      features: ["Texture painting", "Faux finishes", "Accent walls", "Decorative techniques"],
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Staining & Sealing",
      description: "Professional wood staining and sealing services for decks, fences, and exterior wood surfaces.",
      features: ["Wood preparation", "Stain application", "Sealing protection", "Maintenance plans"],
      image: "https://images.unsplash.com/photo-1504148455328-4eef30ca2def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From interior refreshes to exterior makeovers, we provide comprehensive painting 
            services with premium materials and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2 shadow-lg">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/painting/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 w-full text-center block transform hover:scale-105"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingServices;
