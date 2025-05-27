
import React from 'react';
import RemodelingHeader from '../components/RemodelingHeader';
import RemodelingCTA from '../components/RemodelingCTA';
import RemodelingFooter from '../components/RemodelingFooter';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const RemodelingContact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Free Consultation",
      info: "(555) 123-4567",
      description: "Call for your free kitchen & bathroom remodeling consultation",
      gradient: "from-violet-500 to-purple-500",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      info: "info@remodeling.com",
      description: "Send us your project details and ideas",
      gradient: "from-violet-600 to-purple-600",
      action: "Email Us"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
    { day: "Consultations", hours: "Free Estimates Available" }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <RemodelingHeader />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Ready to start your remodeling project? Get in touch with us today!
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
                <Clock className="w-12 h-12 text-violet-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
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
                <MapPin className="w-12 h-12 text-violet-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Our Location
                </h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-violet-600 mr-3" />
                  <span>123 Main Street, Metro City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-violet-600 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-violet-600 mr-3" />
                  <span>info@remodeling.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RemodelingCTA />
      <RemodelingFooter />
    </div>
  );
};

export default RemodelingContact;
