
import React from 'react';
import { useParams } from 'react-router-dom';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';
import RemodelingAboutUs from '../components/RemodelingAboutUs';
import RemodelingProcess from '../components/RemodelingProcess';
import RemodelingWhyChooseUs from '../components/RemodelingWhyChooseUs';
import RemodelingGuarantee from '../components/RemodelingGuarantee';
import RemodelingServiceAreas from '../components/RemodelingServiceAreas';
import { CheckCircle, Wrench, Clock, Shield } from 'lucide-react';

const RemodelingServiceDetail = () => {
  const { slug } = useParams();
  
  const relatedServices = [
    { name: "Kitchen Remodeling", slug: "kitchen-remodeling" },
    { name: "Bathroom Remodeling", slug: "bathroom-remodeling" },
    { name: "Custom Cabinets", slug: "custom-cabinets" },
    { name: "Design Consultation", slug: "design-consultation" }
  ];

  const processSteps = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "We discuss your vision, needs, and budget to create the perfect plan."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Design & Planning",
      description: "Our experts create detailed designs and project timelines."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Installation",
      description: "Skilled craftsmen bring your vision to life with quality workmanship."
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
            {slug?.replace('-', ' ')} Service
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Professional {slug?.replace('-', ' ')} services with quality craftsmanship
          </p>
        </div>
      </section>

      <RemodelingAboutUs />
      <RemodelingCTA />

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your project is completed on time and to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Before & After Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations we've completed for our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-155691211${item}-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`Before and After ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-bold">Project {item}</h4>
                      <p className="text-sm">Completed in 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RemodelingCTA />
      <RemodelingWhyChooseUs />
      <RemodelingGuarantee />
      <RemodelingCTA />

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other professional remodeling services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedServices.map((service, index) => (
              <a 
                key={index}
                href={`/remodeling/services/${service.slug}`}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group text-center"
              >
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{service.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RemodelingServiceAreas />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingServiceDetail;
