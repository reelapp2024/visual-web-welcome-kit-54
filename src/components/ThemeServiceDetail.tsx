
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { currentTheme } from '../App';

// Cleaning Theme
import CleaningServiceDetail from '../themes/cleaning/pages/CleaningServiceDetail';

// Plumbing Theme
import PlumbingServiceDetail from '../themes/plumbing/pages/PlumbingServiceDetail';

// Roofing Theme
import RoofingServiceDetail from '../themes/roofing/pages/RoofingServiceDetail';

// HVAC Theme
import HVACServiceDetail from '../themes/hvac/pages/HVACServiceDetail';

// Painting Theme
import PaintingServiceDetail from '../themes/painting/pages/PaintingServiceDetail';

interface ServiceDetailProps {
  serviceId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceImage?: string;
}

const ThemeServiceDetail = () => {
  const { serviceName } = useParams();
  const location = useLocation();
  const serviceData = location.state as ServiceDetailProps;

  const props = {
    serviceId: serviceData?.serviceId,
    serviceName: serviceName || serviceData?.serviceName,
    serviceDescription: serviceData?.serviceDescription,
    serviceImage: serviceData?.serviceImage
  };

  switch (currentTheme) {
    case 'cleaning':
      return <CleaningServiceDetail {...props} />;
    case 'plumbing':
      return <PlumbingServiceDetail {...props} />;
    case 'roofing':
      return <RoofingServiceDetail {...props} />;
    case 'hvac':
      return <HVACServiceDetail {...props} />;
    case 'painting':
      return <PaintingServiceDetail {...props} />;
    default:
      return <CleaningServiceDetail {...props} />;
  }
};

export default ThemeServiceDetail;
