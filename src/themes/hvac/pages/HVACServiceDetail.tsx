
import React from 'react';
import { useParams } from 'react-router-dom';
import HVACHeader from '../components/HVACHeader';
import HVACCTA from '../components/HVACCTA';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACProcess from '../components/HVACProcess';
import HVACBeforeAfter from '../components/HVACBeforeAfter';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACRelatedServices from '../components/HVACRelatedServices';
import HVACServiceAreas from '../components/HVACServiceAreas';
import HVACFooter from '../components/HVACFooter';
import { Thermometer, Phone } from 'lucide-react';

interface HVACServiceDetailProps {
  serviceId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceImage?: string;
}

const HVACServiceDetail = ({ serviceId, serviceName, serviceDescription, serviceImage }: HVACServiceDetailProps) => {
  const { serviceName: urlServiceName } = useParams();
  
  const displayServiceName = serviceName || urlServiceName || 'Emergency HVAC';
  const displayServiceDescription = serviceDescription || '24/7 emergency HVAC services for system failures, no heat/no cooling situations, and urgent repairs. Fast response times guaranteed with expert technicians.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-4">
                <Thermometer className="w-8 h-8 text-red-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}</h1>
              </div>
              <p className="text-xl text-orange-100 mb-8">
                {displayServiceDescription}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src={displayServiceImage}
                alt={displayServiceName}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <HVACAboutUs />
      <HVACProcess />
      <HVACBeforeAfter />
      <HVACCTA />
      <HVACWhyChooseUs />
      <HVACGuarantee />
      <HVACCTA />
      <HVACRelatedServices />
      <HVACServiceAreas />
      <HVACFooter />
    </div>
  );
};

export default HVACServiceDetail;
