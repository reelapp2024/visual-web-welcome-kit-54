
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Bath, Wrench, Palette, Lightbulb, Droplets } from 'lucide-react';

const RemodelingServices = () => {
  const services = [
    {
      icon: <ChefHat size={48} />,
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations with custom cabinetry, countertops, and modern appliances.",
      features: ["Custom Cabinets", "Granite Countertops", "Appliance Installation", "Kitchen Islands"],
      slug: "kitchen-remodeling",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Bath size={48} />,
      title: "Bathroom Remodeling",
      description: "Luxury bathroom renovations from simple updates to complete overhauls.",
      features: ["Tile Installation", "Vanity Replacement", "Walk-in Showers", "Modern Fixtures"],
      slug: "bathroom-remodeling",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Wrench size={48} />,
      title: "Custom Cabinetry",
      description: "Handcrafted custom cabinets designed to maximize storage and style.",
      features: ["Custom Design", "Quality Materials", "Soft-Close Hardware", "Perfect Fit"],
      slug: "custom-cabinets",
      image: "https://images.unsplash.com/photo-1556909114-4f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Palette size={48} />,
      title: "Design Consultation",
      description: "Professional design services to help you visualize your dream space.",
      features: ["3D Renderings", "Material Selection", "Color Coordination", "Space Planning"],
      slug: "design-consultation",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Lighting Design",
      description: "Modern lighting solutions to enhance the beauty and functionality of your space.",
      features: ["LED Installation", "Under-Cabinet Lighting", "Ambient Lighting", "Smart Controls"],
      slug: "lighting-design",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Droplets size={48} />,
      title: "Plumbing Updates",
      description: "Complete plumbing services for your kitchen and bathroom remodeling projects.",
      features: ["Fixture Installation", "Pipe Relocation", "Water Lines", "Drain Systems"],
      slug: "plumbing-updates",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Our Remodeling Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your kitchen and bathroom remodeling project with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={`/remodeling/services/${service.slug}`}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="text-amber-600 mb-6 ml-6 bg-white p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingServices;
