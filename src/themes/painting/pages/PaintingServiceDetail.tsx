
import React from 'react';
import { useParams } from 'react-router-dom';
import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingProcess from '../components/PaintingProcess';
import PaintingBeforeAfter from '../components/PaintingBeforeAfter';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingServices from '../components/PaintingServices';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import PaintingFooter from '../components/PaintingFooter';
import { Paintbrush, Phone } from 'lucide-react';
import { humanizeSlug } from '../../../extras/slug';

interface PaintingServiceDetailProps {
  location?: string;
  serviceName?: string;
}

const PaintingServiceDetail: React.FC<PaintingServiceDetailProps> = ({ location, serviceName }) => {
  const { slug } = useParams();
  
  const displayServiceName = serviceName ? humanizeSlug(serviceName) : (slug ? humanizeSlug(slug) : 'Interior Painting');
  const displayLocation = location ? humanizeSlug(location) : '';
  
  const pageTitle = displayLocation 
    ? `Professional ${displayServiceName} Services in ${displayLocation}`
    : `Professional ${displayServiceName} Services`;

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Paintbrush className="w-8 h-8 text-purple-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
              </div>
              <p className="text-xl text-purple-100 mb-8">
                {displayLocation 
                  ? `Professional ${displayServiceName.toLowerCase()} services in ${displayLocation} with premium materials and expert color consultation. Free estimates and satisfaction guaranteed.`
                  : `Professional ${displayServiceName.toLowerCase()} services with premium materials and expert color consultation. Free estimates and satisfaction guaranteed.`
                }
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={pageTitle}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PaintingAboutUs />
      <PaintingProcess />
      <PaintingBeforeAfter />
      <PaintingCTA />
      <PaintingWhyChooseUs />
      <PaintingGuarantee />
      <PaintingCTA />
      <PaintingServices />
      <PaintingServiceAreas />
      <PaintingFooter />
    </div>
  );
};

export default PaintingServiceDetail;
