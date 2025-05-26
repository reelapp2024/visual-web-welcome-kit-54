
import React from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
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
      answer: "Tree removal costs vary based on size, location, and complexity. We provide detailed estimates including all aspects of the job. Factors include tree height, proximity to structures, root system complexity, and disposal requirements."
    },
    {
      question: "Do you offer emergency tree services?",
      answer: "Yes! We provide 24/7 emergency tree services for storm damage, fallen trees, and hazardous situations. Our rapid response team can quickly assess and safely handle urgent tree removal needs."
    },
    {
      question: "What types of trees do you work with?",
      answer: "We work with all types of trees including oak, maple, pine, cedar, and fruit trees. Our certified arborists have experience with both deciduous and evergreen species, ensuring proper care for each tree type."
    },
    {
      question: "How long does tree removal take?",
      answer: "Most tree removals are completed in one day, depending on size and complexity. Large trees near structures may take longer due to careful sectional removal. We'll provide a timeline during your estimate."
    },
    {
      question: "Do you clean up after tree removal?",
      answer: "Absolutely! Complete cleanup is included in our service. We remove all debris, wood chips, and branches, leaving your property clean. We also offer eco-friendly disposal and wood recycling options."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured. Our team consists of ISA certified arborists with comprehensive liability and workers' compensation coverage for your complete protection."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 via-nature-50 to-forest-100 font-poppins relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nature-200/30 rounded-full blur-3xl"></div>
      
      {/* Floating leaves */}
      <div className="absolute top-40 left-20 text-forest-200 animate-bounce">
        <Leaf size={40} />
      </div>
      <div className="absolute bottom-40 right-20 text-nature-200 animate-bounce delay-1000">
        <Leaf size={36} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flowing header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-nature-500">
              Tree Questions
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-forest-400 via-nature-400 to-forest-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our natural tree care services
          </p>
        </div>

        {/* Organic accordion design */}
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-0 overflow-hidden group hover:bg-white/90 transition-all duration-300"
            >
              <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gradient-to-r hover:from-forest-50 hover:to-nature-50 transition-all duration-300 rounded-t-3xl group-hover:text-forest-700">
                <div className="flex items-center">
                  <Leaf className="mr-4 text-forest-500 group-hover:text-nature-500 transition-colors flex-shrink-0" size={20} />
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                <div className="pl-10">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Organic CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-100 to-nature-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-transparent bg-gradient-to-br from-white to-forest-50">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Leaf className="mr-3 text-forest-500" />
                Still Have Tree Questions?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our certified arborists are ready to help with any questions about your tree care needs
              </p>
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                🌿 Call Now: (555) 123-4567 🌲
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeFAQ;
