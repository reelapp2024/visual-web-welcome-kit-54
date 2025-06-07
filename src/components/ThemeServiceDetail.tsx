
import React from 'react';
import { useParams } from 'react-router-dom';
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

const ThemeServiceDetail = () => {
  const params = useParams();
  
  // Determine location and service from URL params
  let location = '';
  let serviceName = '';
  
  if (params.countryname && params.statename && params.cityname && params.localareaname) {
    location = `${params.cityname}, ${params.statename}`;
    serviceName = params.localareaname;
  } else if (params.countryname && params.statename && params.cityname) {
    location = `${params.statename}`;
    serviceName = params.cityname;
  } else if (params.countryname && params.statename) {
    location = params.countryname;
    serviceName = params.statename;
  } else if (params.countryname && params.servicename) {
    location = params.countryname;
    serviceName = params.servicename;
  } else if (params.slug) {
    serviceName = params.slug;
  }

  const locationProps = {
    location,
    serviceName
  };

  switch (currentTheme) {
    case 'cleaning':
      return <CleaningServiceDetail {...locationProps} />;
    case 'plumbing':
      return <PlumbingServiceDetail {...locationProps} />;
    case 'roofing':
      return <RoofingServiceDetail {...locationProps} />;
    case 'hvac':
      return <HVACServiceDetail {...locationProps} />;
    case 'painting':
      return <PaintingServiceDetail {...locationProps} />;
    default:
      return <CleaningServiceDetail {...locationProps} />;
  }
};

export default ThemeServiceDetail;
