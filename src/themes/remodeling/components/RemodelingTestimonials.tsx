
import React from 'react';
import { Star, Quote } from 'lucide-react';

const RemodelingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      text: "Our kitchen remodel exceeded all expectations! The team was professional, clean, and delivered exactly what they promised. We love our new space!",
      project: "Kitchen Remodel"
    },
    {
      name: "Mike Chen",
      location: "Westside",
      rating: 5,
      text: "The bathroom renovation was completed on time and within budget. The attention to detail and quality of work is outstanding. Highly recommend!",
      project: "Bathroom Renovation"
    },
    {
      name: "Emily Rodriguez",
      location: "Uptown",
      rating: 5,
      text: "From design to completion, the entire process was smooth and professional. Our new kitchen is the heart of our home now!",
      project: "Complete Kitchen Overhaul"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our remodeling services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Quote className="text-violet-600 mb-4" size={32} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-violet-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
                <div className="text-violet-600 text-sm font-medium">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingTestimonials;
