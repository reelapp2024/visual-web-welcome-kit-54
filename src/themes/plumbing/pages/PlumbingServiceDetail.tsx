
import React from 'react';
import { useParams } from 'react-router-dom';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingBeforeAfter from '../components/PlumbingBeforeAfter';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingRelatedServices from '../components/PlumbingRelatedServices';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingFooter from '../components/PlumbingFooter';
import { Wrench, Phone } from 'lucide-react';

interface PlumbingServiceDetailProps {
  serviceId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceImage?: string;
}

const PlumbingServiceDetail = ({ serviceId, serviceName, serviceDescription, serviceImage }: PlumbingServiceDetailProps) => {
  const { serviceName: urlServiceName } = useParams();
  
  const displayServiceName = serviceName || urlServiceName || 'Plumbing Repair';
  const displayServiceDescription = serviceDescription || 'Professional plumbing services for homes and businesses with 24/7 emergency response. Licensed plumbers with years of experience.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-cyan-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                {displayServiceDescription}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div>
              <img
                src={displayServiceImage}
                alt={displayServiceName}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PlumbingAboutUs />
      <PlumbingProcess />
      <PlumbingBeforeAfter />
      <PlumbingCTA />
      <PlumbingWhyChooseUs />
      <PlumbingGuarantee />
      <PlumbingCTA />
      <PlumbingRelatedServices />
      <PlumbingServiceAreas />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingServiceDetail;
