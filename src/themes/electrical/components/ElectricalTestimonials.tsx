
import React from 'react';
import { Star, Quote } from 'lucide-react';

const ElectricalTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown District",
      rating: 5,
      text: "Amazing service! They responded to our electrical emergency within 20 minutes and had our power restored quickly. Professional, knowledgeable, and fairly priced.",
      service: "Emergency Electrical Repair"
    },
    {
      name: "Mike Chen",
      location: "Greenwood Heights", 
      rating: 5,
      text: "Upgraded our entire electrical panel and added outlets throughout the house. The work was clean, professional, and they explained everything clearly. Highly recommend!",
      service: "Panel Upgrade & Installation"
    },
    {
      name: "Jennifer Williams",
      location: "Oak Valley",
      rating: 5,
      text: "They installed new GFCI outlets in our kitchen and bathrooms. The electricians were punctual, courteous, and left everything clean. Great experience overall!",
      service: "GFCI Outlet Installation"
    },
    {
      name: "Robert Davis",
      location: "Pine Ridge",
      rating: 5,
      text: "Called them for flickering lights issue. They diagnosed the problem quickly and fixed it the same day. Fair pricing and excellent customer service.",
      service: "Electrical Troubleshooting"
    },
    {
      name: "Lisa Martinez",
      location: "Maple Grove",
      rating: 5,
      text: "Needed whole house surge protection after lightning strike. They installed everything professionally and explained how to protect our electronics in the future.",
      service: "Surge Protection Installation"
    },
    {
      name: "David Thompson",
      location: "Riverside District",
      rating: 5,
      text: "Excellent electrical inspection service before buying our home. They found several safety issues that saved us thousands. Very thorough and professional.",
      service: "Electrical Safety Inspection"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our electrical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-300" />
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-amber-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-gray-600 text-sm">({testimonial.rating}.0)</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="bg-white rounded-lg p-3 border border-amber-200">
                <span className="text-amber-700 font-medium text-sm">Service: {testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Customers</h3>
            <p className="text-xl mb-6 text-yellow-100">
              Experience the quality electrical service that our customers rave about. Call us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:5551234567"
                className="bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Estimate: (555) 123-4567
              </a>
              <div className="flex items-center text-yellow-100">
                <div className="flex mr-2">{renderStars(5)}</div>
                <span>Rated 5.0 Stars by Our Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalTestimonials;
