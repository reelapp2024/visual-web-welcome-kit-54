
import React from 'react';
import InteractiveMap from './InteractiveMap';

interface ServiceMapProps {
  theme: 'plumbing' | 'hvac';
}

const ServiceMap: React.FC<ServiceMapProps> = ({ theme }) => {
  const locations = [
    {
      name: 'Los Angeles',
      coordinates: [-118.2437, 34.0522] as [number, number],
      type: 'city' as const,
      description: 'Downtown service hub with 24/7 emergency response',
      responseTime: '15-30 min'
    },
    {
      name: 'San Francisco',
      coordinates: [-122.4194, 37.7749] as [number, number],
      type: 'city' as const,
      description: 'Bay Area operations center',
      responseTime: '20-35 min'
    },
    {
      name: 'San Diego',
      coordinates: [-117.1611, 32.7157] as [number, number],
      type: 'city' as const,
      description: 'Southern California regional office',
      responseTime: '25-40 min'
    },
    {
      name: 'Sacramento',
      coordinates: [-121.4687, 38.5767] as [number, number],
      type: 'city' as const,
      description: 'Central Valley service center',
      responseTime: '30-45 min'
    },
    {
      name: 'Fresno',
      coordinates: [-119.7871, 36.7378] as [number, number],
      type: 'city' as const,
      description: 'Central California operations',
      responseTime: '35-50 min'
    }
  ];

  const themeConfig = {
    plumbing: {
      title: 'Plumbing Service Areas',
      subtitle: 'Professional plumbing services across California with certified professionals and emergency response teams.',
      areaName: 'California',
      areaType: 'state' as const
    },
    hvac: {
      title: 'HVAC Service Areas',
      subtitle: 'Expert heating, ventilation, and air conditioning services throughout California with 24/7 emergency support.',
      areaName: 'California', 
      areaType: 'state' as const
    }
  };

  const config = themeConfig[theme];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'plumbing' 
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'
          }`}>
            {config.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {config.subtitle}
          </p>
        </div>
        
        <InteractiveMap
          centerCoordinates={[-119.4179, 36.7783]}
          zoom={6}
          locations={locations}
          areaName={config.areaName}
          areaType={config.areaType}
          className="h-[600px] rounded-2xl shadow-2xl"
          theme={theme}
        />
      </div>
    </section>
  );
};

export default ServiceMap;
