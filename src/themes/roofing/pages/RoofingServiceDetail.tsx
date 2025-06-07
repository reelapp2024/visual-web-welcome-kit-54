
import React from 'react';
import { useParams } from 'react-router-dom';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import RoofingAboutUs from '../components/RoofingAboutUs';
import RoofingProcess from '../components/RoofingProcess';
import RoofingWhyChooseUs from '../components/RoofingWhyChooseUs';
import RoofingGuarantee from '../components/RoofingGuarantee';
import RoofingServiceAreas from '../components/RoofingServiceAreas';
import RoofingServices from '../components/RoofingServices';
import { Home, Phone } from 'lucide-react';
import { humanizeSlug } from '../../../extras/slug';

interface RoofingServiceDetailProps {
  location?: string;
  serviceName?: string;
}

const RoofingServiceDetail: React.FC<RoofingServiceDetailProps> = ({ location, serviceName }) => {
  const { slug } = useParams();
  
  const displayServiceName = serviceName ? humanizeSlug(serviceName) : (slug ? humanizeSlug(slug) : 'Roof Repair');
  const displayLocation = location ? humanizeSlug(location) : '';
  
  const pageTitle = displayLocation 
    ? `Professional ${displayServiceName} Services in ${displayLocation}`
    : `Professional ${displayServiceName} Services`;

  return (
    <div className="min-h-screen font-poppins">
      <RoofingHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-orange-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
              </div>
              <p className="text-xl text-orange-100 mb-8">
                {displayLocation 
                  ? `Professional ${displayServiceName.toLowerCase()} services in ${displayLocation} with licensed contractors and quality materials. Free estimates and warranty included.`
                  : `Professional ${displayServiceName.toLowerCase()} services with licensed contractors and quality materials. Free estimates and warranty included.`
                }
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-orange-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={pageTitle}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <RoofingAboutUs />
      <RoofingProcess />
      <RoofingWhyChooseUs />
      <RoofingGuarantee />
      <RoofingServices />
      <RoofingServiceAreas />
      <RoofingFooter />
    </div>
  );
};

export default RoofingServiceDetail;
