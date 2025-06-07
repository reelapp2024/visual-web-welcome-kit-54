
import React from 'react';
import { useParams } from 'react-router-dom';
import CleaningHeader from '../components/CleaningHeader';
import CleaningCTA from '../components/CleaningCTA';
import CleaningAboutUs from '../components/CleaningAboutUs';
import CleaningProcess from '../components/CleaningProcess';
import CleaningBeforeAfter from '../components/CleaningBeforeAfter';
import CleaningWhyChooseUs from '../components/CleaningWhyChooseUs';
import CleaningGuarantee from '../components/CleaningGuarantee';
import CleaningRelatedServices from '../components/CleaningRelatedServices';
import CleaningServiceAreas from '../components/CleaningServiceAreas';
import CleaningFooter from '../components/CleaningFooter';
import { Sparkles, Phone } from 'lucide-react';
import { humanizeSlug } from '../../../extras/slug';

interface CleaningServiceDetailProps {
  location?: string;
  serviceName?: string;
}

const CleaningServiceDetail: React.FC<CleaningServiceDetailProps> = ({ location, serviceName }) => {
  const { slug } = useParams();
  
  const displayServiceName = serviceName ? humanizeSlug(serviceName) : (slug ? humanizeSlug(slug) : 'Residential Cleaning');
  const displayLocation = location ? humanizeSlug(location) : '';
  
  const pageTitle = displayLocation 
    ? `Professional ${displayServiceName} Services in ${displayLocation}`
    : `Professional ${displayServiceName} Services`;

  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 to-emerald-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
              </div>
              <p className="text-xl text-green-100 mb-8">
                {displayLocation 
                  ? `Professional ${displayServiceName.toLowerCase()} services in ${displayLocation} with eco-friendly products and trained staff. Same-day booking and satisfaction guaranteed.`
                  : `Professional ${displayServiceName.toLowerCase()} services with eco-friendly products and trained staff. Same-day booking and satisfaction guaranteed.`
                }
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-400" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={pageTitle}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CleaningAboutUs />
      <CleaningProcess />
      <CleaningBeforeAfter />
      <CleaningCTA />
      <CleaningWhyChooseUs />
      <CleaningGuarantee />
      <CleaningCTA />
      <CleaningRelatedServices />
      <CleaningServiceAreas />
      <CleaningFooter />
    </div>
  );
};

export default CleaningServiceDetail;
