
import React from 'react';
import { Search, PenTool, Hammer, CheckCircle } from 'lucide-react';

const RemodelingProcess = () => {
  const steps = [
    {
      icon: <Search size={48} />,
      title: "Consultation & Planning",
      description: "We start with a detailed consultation to understand your vision, needs, and budget.",
      details: ["In-home consultation", "Needs assessment", "Budget planning", "Timeline discussion"]
    },
    {
      icon: <PenTool size={48} />,
      title: "Design & Selection",
      description: "Our design team creates detailed plans and helps you select materials and finishes.",
      details: ["3D design renderings", "Material selection", "Color coordination", "Permit acquisition"]
    },
    {
      icon: <Hammer size={48} />,
      title: "Construction & Installation",
      description: "Our skilled craftsmen bring your vision to life with quality workmanship.",
      details: ["Professional demolition", "Skilled installation", "Quality control", "Clean workspace"]
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Final Inspection & Handover",
      description: "We ensure everything meets our high standards before the final walkthrough.",
      details: ["Quality inspection", "Client walkthrough", "Warranty information", "Maintenance tips"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Remodeling Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven process to ensure your remodeling project is completed on time, on budget, and exceeds your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mb-6">
                <div className="text-violet-600 mb-6 flex justify-center">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-violet-600 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="text-left space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingProcess;
