
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { currentTheme } from '../App';
import humanizeString from '../extras/stringUtils.js';

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
  const { locationName } = useParams();
  const location = useLocation();
  
  // If locationName exists in URL, format it for display
  const formattedLocationName = locationName ? humanizeString(locationName) : '';

  switch (currentTheme) {
    case 'cleaning':
      return <CleaningServiceDetail locationFromUrl={formattedLocationName} />;
    case 'plumbing':
      return <PlumbingServiceDetail locationFromUrl={formattedLocationName} />;
    case 'roofing':
      return <RoofingServiceDetail locationFromUrl={formattedLocationName} />;
    case 'hvac':
      return <HVACServiceDetail locationFromUrl={formattedLocationName} />;
    case 'painting':
      return <PaintingServiceDetail locationFromUrl={formattedLocationName} />;
    default:
      return <CleaningServiceDetail locationFromUrl={formattedLocationName} />;
  }
};

export default ThemeServiceDetail;
