
import React from 'react';
import InteractiveMap from './InteractiveMap';

interface Location {
  name: string;
  coordinates: [number, number];
  type: 'country' | 'state' | 'city' | 'local';
}

interface PlumbingAreaMapProps {
  centerCoordinates: [number, number];
  zoom: number;
  locations: Location[];
  areaName: string;
  areaType: 'country' | 'state' | 'city' | 'local';
  className?: string;
}

const PlumbingAreaMap: React.FC<PlumbingAreaMapProps> = ({
  centerCoordinates,
  zoom,
  locations,
  areaName,
  areaType,
  className = ''
}) => {
  return (
    <InteractiveMap
      centerCoordinates={centerCoordinates}
      zoom={zoom}
      locations={locations}
      areaName={areaName}
      areaType={areaType}
      className={className}
      theme="plumbing"
    />
  );
};

export default PlumbingAreaMap;
