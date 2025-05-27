
import React from 'react';
import { ChefHat, Bath, Wrench, Palette, Lightbulb, Droplets } from 'lucide-react';

const RemodelingServices = () => {
  const services = [
    {
      icon: <ChefHat size={48} />,
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations with custom cabinetry, countertops, and modern appliances.",
      features: ["Custom Cabinets", "Granite Countertops", "Appliance Installation", "Kitchen Islands"]
    },
    {
      icon: <Bath size={48} />,
      title: "Bathroom Remodeling",
      description: "Luxury bathroom renovations from simple updates to complete overhauls.",
      features: ["Tile Installation", "Vanity Replacement", "Walk-in Showers", "Modern Fixtures"]
    },
    {
      icon: <Wrench size={48} />,
      title: "Custom Cabinetry",
      description: "Handcrafted custom cabinets designed to maximize storage and style.",
      features: ["Custom Design", "Quality Materials", "Soft-Close Hardware", "Perfect Fit"]
    },
    {
      icon: <Palette size={48} />,
      title: "Design Consultation",
      description: "Professional design services to help you visualize your dream space.",
      features: ["3D Renderings", "Material Selection", "Color Coordination", "Space Planning"]
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Lighting Design",
      description: "Modern lighting solutions to enhance the beauty and functionality of your space.",
      features: ["LED Installation", "Under-Cabinet Lighting", "Ambient Lighting", "Smart Controls"]
    },
    {
      icon: <Droplets size={48} />,
      title: "Plumbing Updates",
      description: "Complete plumbing services for your kitchen and bathroom remodeling projects.",
      features: ["Fixture Installation", "Pipe Relocation", "Water Lines", "Drain Systems"]
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Remodeling Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your kitchen and bathroom remodeling project with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-violet-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingServices;
