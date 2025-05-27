
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RemodelingFAQ = () => {
  const faqs = [
    {
      question: "How long does a typical kitchen remodel take?",
      answer: "A typical kitchen remodel takes 4-8 weeks, depending on the scope of work. Minor updates may take 2-3 weeks, while complete overhauls can take 8-12 weeks."
    },
    {
      question: "Do you handle permits for remodeling projects?",
      answer: "Yes, we handle all necessary permits for your remodeling project. We're familiar with local building codes and will ensure your project meets all requirements."
    },
    {
      question: "Can I live in my home during the remodel?",
      answer: "Yes, in most cases you can stay in your home during the remodel. We work to minimize disruption and can set up temporary kitchen facilities when needed."
    },
    {
      question: "What's included in your remodeling estimate?",
      answer: "Our estimates include all labor, materials, permits, and cleanup. We provide detailed breakdowns so you know exactly what's included in your project cost."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we work with several financing partners to offer competitive rates and flexible payment options for your remodeling project."
    },
    {
      question: "What warranty do you provide on your work?",
      answer: "We provide a comprehensive warranty on all workmanship and installations. Material warranties are provided by manufacturers."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our remodeling services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-violet-100 rounded-lg">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-violet-50 rounded-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default RemodelingFAQ;
