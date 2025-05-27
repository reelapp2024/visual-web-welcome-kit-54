
import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

const ElectricalFAQ = () => {
  const faqs = [
    {
      question: "What constitutes an electrical emergency?",
      answer: "Electrical emergencies include power outages, sparking outlets, burning smells from electrical panels, exposed wires, and any situation where electrical safety is compromised. If you smell burning or see sparks, call us immediately."
    },
    {
      question: "How do I know if my electrical panel needs upgrading?",
      answer: "Signs include frequent circuit breaker trips, flickering lights, burning smells, scorch marks around outlets, or if your panel is over 20 years old. Modern homes typically need 200-amp service to handle today's electrical demands safely."
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "Yes, all our electricians are state-licensed, bonded, and insured. We maintain comprehensive liability insurance and workers' compensation coverage for your protection and peace of mind."
    },
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "We offer 24/7 emergency electrical service with typical response times of 30-60 minutes depending on your location. Our emergency hotline is always staffed by real people, not answering machines."
    },
    {
      question: "Do you provide warranties on electrical work?",
      answer: "Yes, we provide a comprehensive 1-year warranty on all electrical work, covering both parts and labor. This warranty ensures your peace of mind and demonstrates our confidence in our quality workmanship."
    },
    {
      question: "What's included in an electrical safety inspection?",
      answer: "Our inspection includes checking your electrical panel, testing GFCI outlets, inspecting visible wiring, checking grounding systems, testing smoke detectors, and providing a detailed report with recommendations for any safety improvements."
    },
    {
      question: "Can you help with electrical code compliance?",
      answer: "Absolutely. We stay current with all local and national electrical codes. We can bring your electrical system up to code and provide the necessary permits and inspections for compliance."
    },
    {
      question: "How much does electrical work typically cost?",
      answer: "Costs vary based on the scope of work. We provide free estimates for all projects and transparent pricing. Emergency service calls start at a base rate, and we'll always give you a quote before beginning work."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Electrical FAQ
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our electrical services, safety, and what to expect when you call us.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-amber-50 transition-colors duration-200">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-6 h-6 text-amber-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 border-t border-amber-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-yellow-100 mb-6">
              Our electrical experts are standing by to answer your questions and provide free estimates.
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-3" size={20} />
              Call Expert Electricians: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalFAQ;
