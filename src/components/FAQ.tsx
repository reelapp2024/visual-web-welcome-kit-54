
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We provide local services throughout the metropolitan area and surrounding communities. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes! We provide 24/7 emergency services for urgent repairs and issues. Call us anytime at (555) 123-4567 for immediate assistance."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. All our technicians are fully licensed professionals, and we carry comprehensive insurance coverage for your protection and peace of mind."
    },
    {
      question: "How quickly can you respond to service calls?",
      answer: "For emergency calls, we typically respond within 1-2 hours. For scheduled appointments, we offer same-day or next-day service based on availability."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free, no-obligation estimates for all our services. Contact us to schedule your free consultation and quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, check, and all major credit cards. Payment is typically due upon completion of services unless other arrangements are made."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes, we stand behind all our work with a 100% satisfaction guarantee. If you're not completely satisfied, we'll make it right."
    },
    {
      question: "Can I schedule recurring maintenance services?",
      answer: "Absolutely! We offer flexible scheduling for regular maintenance services to keep your property in excellent condition year-round."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services, 
            process, and what to expect when you choose us.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our friendly team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Call (555) 123-4567
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
