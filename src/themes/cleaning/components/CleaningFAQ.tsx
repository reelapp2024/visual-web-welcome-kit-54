
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CleaningFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What cleaning products do you use?",
      answer: "We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. All our products are EPA-approved and biodegradable."
    },
    {
      question: "How do you price your cleaning services?",
      answer: "Our pricing is based on the size of your space, type of cleaning needed, and frequency of service. We provide free, no-obligation quotes for all residential and commercial cleaning services."
    },
    {
      question: "Are your cleaners insured and bonded?",
      answer: "Yes, all our cleaning professionals are fully bonded, insured, and background-checked. This provides complete protection for your property and peace of mind for you."
    },
    {
      question: "Can I schedule same-day cleaning service?",
      answer: "Yes! We offer same-day cleaning services based on availability. Contact us early in the day for the best chance of scheduling same-day service."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with our service, we'll return within 24 hours to re-clean any areas at no additional charge."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you don't need to be home during the cleaning. Many of our clients provide us with a key or access code. All our cleaners are trusted, bonded professionals."
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions about our cleaning services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningFAQ;
