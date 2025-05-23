
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Area",
      rating: 5,
      text: "Absolutely amazing service! They fixed my plumbing emergency within an hour. Professional, reliable, and affordable. Highly recommended!",
      service: "Emergency Plumbing"
    },
    {
      name: "Mike Rodriguez",
      location: "Suburban District",
      rating: 5,
      text: "Best local service company I've ever worked with. Quick response, fair pricing, and excellent workmanship. Will definitely call again!",
      service: "Electrical Repair"
    },
    {
      name: "Emily Chen",
      location: "City Center",
      rating: 5,
      text: "Professional team that goes above and beyond. They not only fixed the issue but also provided helpful maintenance tips. Outstanding service!",
      service: "Home Maintenance"
    },
    {
      name: "David Thompson",
      location: "East Side",
      rating: 5,
      text: "Called them for an emergency repair and they were at my door in 30 minutes! Quality work and honest pricing. These guys are the real deal.",
      service: "Emergency Service"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-semibold text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-yellow-400 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Join Thousands of Happy Customers!</h3>
            <p className="mb-6 text-black">
              Experience the same quality service that earned us these amazing reviews.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Get Your Free Quote Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
