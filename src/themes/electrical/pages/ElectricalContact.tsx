
import React from 'react';
import ElectricalHeader from '../components/ElectricalHeader';
import ElectricalCTA from '../components/ElectricalCTA';
import ElectricalFooter from '../components/ElectricalFooter';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const ElectricalContact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Hotline",
      info: "(555) 123-4567",
      description: "24/7 emergency electrical services available",
      gradient: "from-red-500 to-red-600",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      info: "info@electricpro.com",
      description: "For non-emergency inquiries and estimates",
      gradient: "from-amber-500 to-yellow-500",
      action: "Email Us"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <ElectricalHeader />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Our Electrical Experts
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Get in touch for all your electrical needs - emergency service available 24/7
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 text-center">
                <div className={`bg-gradient-to-br ${method.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-xl font-semibold text-gray-700 mb-3">{method.info}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Clock className="w-12 h-12 text-amber-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Service Hours
                </h2>
              </div>
              <div className="space-y-4">
                {serviceHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-12 h-12 text-amber-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Our Location
                </h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span>123 Main Street, Metro City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-600 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-600 mr-3" />
                  <span>info@electricpro.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ElectricalCTA />
      <ElectricalFooter />
    </div>
  );
};

export default ElectricalContact;
