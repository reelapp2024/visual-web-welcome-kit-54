
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TreeFAQ = () => {
  const faqs = [
    {
      question: "How much does tree removal cost?",
      answer: "Tree removal costs vary based on size, location, and complexity. We provide free estimates and competitive pricing. Factors include tree height, proximity to structures, and cleanup requirements."
    },
    {
      question: "Do you offer emergency tree services?",
      answer: "Yes! We provide 24/7 emergency tree services for storm damage, fallen trees, and hazardous situations. Our rapid response team can handle urgent tree removal safely."
    },
    {
      question: "Are your arborists certified?",
      answer: "All our arborists are ISA (International Society of Arboriculture) certified and have extensive training in tree care, safety procedures, and proper equipment use."
    },
    {
      question: "Do you clean up after tree removal?",
      answer: "Absolutely! Our service includes complete cleanup and debris removal. We'll leave your property clean and ready to use, with all wood chips and branches properly disposed of."
    },
    {
      question: "How long does tree removal take?",
      answer: "Most tree removals are completed in a few hours to a full day, depending on size and complexity. We'll provide an estimated timeline during your free consultation."
    },
    {
      question: "Do you provide stump grinding services?",
      answer: "Yes, we offer professional stump grinding services to completely remove tree stumps below ground level, allowing you to replant or use the area for other purposes."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-forest-50 to-nature-50 font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our tree care services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-forest-50 transition-colors">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our tree care experts are ready to help with any questions about your specific needs
            </p>
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeFAQ;
