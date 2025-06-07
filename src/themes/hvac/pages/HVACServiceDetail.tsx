
import React from 'react';
import { useParams } from 'react-router-dom';
import HVACHeader from '../components/HVACHeader';
import HVACCTA from '../components/HVACCTA';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACProcess from '../components/HVACProcess';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACServices from '../components/HVACServices';
import HVACServiceAreas from '../components/HVACServiceAreas';
import HVACFooter from '../components/HVACFooter';
import { Thermometer, Phone } from 'lucide-react';
import { humanizeSlug } from '../../../extras/slug';

interface HVACServiceDetailProps {
  location?: string;
  serviceName?: string;
}

const HVACServiceDetail: React.FC<HVACServiceDetailProps> = ({ location, serviceName }) => {
  const { slug } = useParams();
  
  const displayServiceName = serviceName ? humanizeSlug(serviceName) : (slug ? humanizeSlug(slug) : 'HVAC Repair');
  const displayLocation = location ? humanizeSlug(location) : '';
  
  const pageTitle = displayLocation 
    ? `Professional ${displayServiceName} Services in ${displayLocation}`
    : `Professional ${displayServiceName} Services`;

  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-indigo-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Thermometer className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                {displayLocation 
                  ? `24/7 ${displayServiceName.toLowerCase()} services in ${displayLocation} for heating, cooling, and ventilation systems. Licensed technicians and emergency response.`
                  : `24/7 ${displayServiceName.toLowerCase()} services for heating, cooling, and ventilation systems. Licensed technicians and emergency response.`
                }
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={pageTitle}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <HVACAboutUs />
      <HVACProcess />
      <HVACCTA />
      <HVACWhyChooseUs />
      <HVACGuarantee />
      <HVACCTA />
      <HVACServices />
      <HVACServiceAreas />
      <HVACFooter />
    </div>
  );
};

export default HVACServiceDetail;
