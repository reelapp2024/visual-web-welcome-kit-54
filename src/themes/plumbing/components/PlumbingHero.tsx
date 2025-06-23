
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpFile } from '../../../config.js';
import PlumbingLoader from '../components/PlumbingLoader';
import DynamicIcon from '../../../extras/DynamicIcon.js';

interface Feature {
  serialno: number;
  iconName: string;
  title: string;
  subtitle: string;
}

export default function PlumbingHero() {
  const navigate = useNavigate();
  const [projectCategory, setProjectCategory] = useState('');
  const [welcomeLine, setWelcomeLine] = useState('');
  const [projectSlogan, setProjectSlogan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handle site ID from query params
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('siteId');
  if (site && localStorage.getItem('currentSiteId') !== site) {
    localStorage.setItem('currentSiteId', site);
  }
  const projectId = localStorage.getItem('currentSiteId') || '68593752dd530358b97f0a3f';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post('/webapp/v1/my_site', {
          projectId,
          pageType: 'home',
          reqFrom: 'plumbingHero'
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setWelcomeLine(data.projectInfo.welcomeLine);
          setProjectSlogan(data.projectInfo.projectSlogan);
          setPhoneNumber(data.aboutUs.phone);
          setFeatures(data.projectInfo.heroFeatures || []);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching hero data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  if (isLoading) {
    return <PlumbingLoader />;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {welcomeLine || `Professional ${projectCategory} Services`}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {projectSlogan || `Expert plumbing solutions with 24/7 emergency service. Licensed, insured, and trusted by thousands of satisfied customers.`}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl"
            >
              <DynamicIcon iconName="Phone" className="w-6 h-6" />
              <span>Call Now: {phoneNumber}</span>
            </a>
            
            <button
              onClick={() => navigate('/contact')}
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl border border-white/30"
            >
              <DynamicIcon iconName="Calendar" className="w-6 h-6" />
              <span>Schedule Service</span>
            </button>
          </div>
          
          {/* Features */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    <DynamicIcon iconName={feature.iconName} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}
