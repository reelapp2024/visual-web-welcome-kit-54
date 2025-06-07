
import React from 'react';
import { useParams } from 'react-router-dom';
import RoofingHeader from '../components/RoofingHeader';
import RoofingCTA from '../components/RoofingCTA';
import RoofingAboutUs from '../components/RoofingAboutUs';
import RoofingProcess from '../components/RoofingProcess';
import RoofingBeforeAfter from '../components/RoofingBeforeAfter';
import RoofingWhyChooseUs from '../components/RoofingWhyChooseUs';
import RoofingGuarantee from '../components/RoofingGuarantee';
import RoofingRelatedServices from '../components/RoofingRelatedServices';
import RoofingServiceAreas from '../components/RoofingServiceAreas';
import RoofingFooter from '../components/RoofingFooter';
import { Home, Phone } from 'lucide-react';

interface RoofingServiceDetailProps {
  serviceId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceImage?: string;
}

const RoofingServiceDetail = ({ serviceId, serviceName, serviceDescription, serviceImage }: RoofingServiceDetailProps) => {
  const { serviceName: urlServiceName } = useParams();
  
  const displayServiceName = serviceName || urlServiceName || 'Roof Installation';
  const displayServiceDescription = serviceDescription || 'Professional roof installation and repair services with premium materials and expert craftsmanship. Licensed contractors with decades of experience.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <RoofingHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-600 to-orange-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/85 to-orange-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-orange-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}</h1>
              </div>
              <p className="text-xl text-slate-100 mb-8">
                {displayServiceDescription}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-orange-400" />
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

      <RoofingAboutUs />
      <RoofingProcess />
      <RoofingBeforeAfter />
      <RoofingCTA />
      <RoofingWhyChooseUs />
      <RoofingGuarantee />
      <RoofingCTA />
      <RoofingRelatedServices />
      <RoofingServiceAreas />
      <RoofingFooter />
    </div>
  );
};

export default RoofingServiceDetail;
