
import React, { useState } from 'react';
import { Plus, Minus, Heart } from 'lucide-react';

const PetFAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      question: "How often do you provide pet waste removal service? 🗓️",
      answer: "We offer weekly service for optimal yard cleanliness. We can also accommodate bi-weekly or one-time cleanups based on your needs and pet situation."
    },
    {
      question: "Is your service safe for my pets? 🐕",
      answer: "Absolutely! We use only pet-safe, eco-friendly cleaning products. Our team is trained to work safely around pets and will never use anything harmful to your furry family members."
    },
    {
      question: "What if my pet is outside during service? 🐾",
      answer: "Our team loves pets! We'll work around your pet's schedule and can provide service while your pet is present. Most pets quickly become comfortable with our friendly staff."
    },
    {
      question: "Do you work in bad weather? 🌧️",
      answer: "We provide service rain or shine! The only exception would be severe weather conditions that pose safety risks. We'll always communicate any schedule changes in advance."
    },
    {
      question: "How much does pet waste removal cost? 💰",
      answer: "Our weekly service starts at affordable rates based on yard size and number of pets. Contact us for a free, personalized quote with no hidden fees."
    },
    {
      question: "Do you handle multiple pets? 👥",
      answer: "Yes! We offer special rates for households with multiple pets. Whether you have one dog or several pets, we'll customize our service to meet your family's needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pet-50 to-paw-100 font-poppins relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-10 left-10 text-3xl text-pet-300 animate-bounce">❓</div>
      <div className="absolute top-20 right-20 text-4xl text-paw-300 animate-bounce delay-1000">🐕</div>
      <div className="absolute bottom-20 left-20 text-3xl text-pet-200 animate-wiggle">💡</div>
      <div className="absolute bottom-10 right-10 text-2xl text-paw-200 animate-wiggle delay-500">🐾</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Playful Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pet Parent <span className="text-transparent bg-clip-text bg-gradient-to-r from-pet-600 to-paw-500">Questions 🤔</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pet-500 to-paw-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Common questions from pet families about our waste removal services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pet-200 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pet-700 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Heart className="text-pet-400 animate-pulse" size={20} />
                    <div className="w-8 h-8 bg-gradient-to-br from-pet-500 to-paw-500 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {openItem === index ? (
                        <Minus size={16} className="text-white" />
                      ) : (
                        <Plus size={16} className="text-white" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItem === index && (
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-pet-200 to-paw-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pet-500 to-paw-500 rounded-3xl p-8 shadow-2xl">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">🐕 Still Have Questions? 🐾</h3>
              <p className="text-pet-100 mb-6">Our pet-loving team is here to help!</p>
              <a
                href="tel:5551234567"
                className="bg-white text-pet-600 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:bg-pet-50 shadow-lg inline-block transform hover:scale-105"
              >
                📞 Call Us Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetFAQ;
