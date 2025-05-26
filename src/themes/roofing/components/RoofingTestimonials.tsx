
import React from 'react';
import { Star, Quote } from 'lucide-react';

const RoofingTestimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Davis",
      location: "Highland Park",
      rating: 5,
      text: "Elite Roofing Pro replaced our entire roof after storm damage. The quality of work and attention to detail was outstanding. Highly recommend!"
    },
    {
      name: "Robert Wilson",
      location: "Summit Ridge",
      rating: 5,
      text: "Emergency roof repair was handled quickly and professionally. They prevented further water damage and completed the permanent fix the next day."
    },
    {
      name: "Maria Garcia",
      location: "Valley View",
      rating: 5,
      text: "From estimate to completion, the entire process was smooth and professional. Our new roof looks amazing and the crew cleaned up perfectly."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by homeowners and businesses throughout the region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="text-slate-500 mr-2" size={20} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-orange-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Our Happy Customers
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoofingTestimonials;
