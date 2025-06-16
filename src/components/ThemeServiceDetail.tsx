
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
  serviceImage1?: string;
  serviceImage2?: string;
  locationName?: string;
}

const ThemeServiceDetail = () => {
  const { serviceName } = useParams();
  const location = useLocation();
  const serviceData = location.state as ServiceDetailProps;

  const props = {
    serviceId: serviceData?.serviceId,
    serviceName: serviceName || serviceData?.serviceName,
    serviceDescription: serviceData?.serviceDescription,
    serviceImage: serviceData?.serviceImage,
    serviceImage1: serviceData?.serviceImage1,
    serviceImage2: serviceData?.serviceImage2,
    locationName: serviceData?.locationName
  };

  switch (currentTheme) {
    case 'cleaning':
      return <CleaningServiceDetail />;
    case 'plumbing':
      return <PlumbingServiceDetail />;
    case 'roofing':
      return <RoofingServiceDetail />;
    case 'hvac':
      return <HVACServiceDetail />;
    case 'painting':
      return <PaintingServiceDetail />;
    default:
      return <CleaningServiceDetail />;
  }
};

export default ThemeServiceDetail;
