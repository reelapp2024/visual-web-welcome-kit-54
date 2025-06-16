
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingBeforeAfter from '../components/PlumbingBeforeAfter';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingRelatedServices from '../components/PlumbingRelatedServices';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingFooter from '../components/PlumbingFooter';
import { Wrench, Phone } from 'lucide-react';
import { httpFile } from "../../../config.js";
import humanizeString from "../../../extras/stringUtils.js";

const PlumbingServiceDetail = () => {
  let { serviceName: urlServiceName } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [serviceImage, setServiceImage] = useState("");
  const [ProjectBaseImage, setProjectBaseImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceId, setServiceId] = useState("");

  const location = useLocation();
  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "684a89807771b19c131ff5e7";
  
  // Get location name from navigation state or localStorage
  const locationName = location.state?.locationName || localStorage.getItem("locaitonname") || '';
  const displayLocationText = locationName ? ` in ${locationName}` : '';
  
  const displayServiceName = humanizeString(urlServiceName) || 'Plumbing Repair';

  useEffect(() => {
    if (locationName) {
      localStorage.setItem("locaitonname", locationName);
    }
  }, [locationName]);

  useEffect(() => {
    const fetchServiceId = async () => {
      if (displayServiceName) {
        try {
          const { data } = await httpFile.post("/webapp/v1/fetch_service_by_name_and_project", {
            projectId,
            serviceName: displayServiceName,
          });

          if (data?.serviceId) {
            setServiceId(data.serviceId);
          }
        } catch (error) {
          console.error("Error fetching service ID:", error);
        }
      }
    };

    fetchServiceId();
  }, [projectId, urlServiceName]);

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceId) return;

      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_service", { serviceId });

        if (data.service) {
          setServiceDetails(data.service);
          setServiceImage(data.service.images?.[0]?.url || "");
          setProjectBaseImage(data.service.images?.[2]?.url || "");
        }
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceData();
  }, [serviceId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.aboutUs) {
          setPhoneNumber(data.aboutUs.phone);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  const displayServiceDescription = serviceDetails?.service_description || 'Professional plumbing services for homes and businesses with 24/7 emergency response. Licensed plumbers with years of experience.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${ProjectBaseImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-cyan-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}{displayLocationText}</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                {displayServiceDescription}{displayLocationText ? ` Professional service available ${displayLocationText}.` : ''}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Call Now: {phoneNumber}</span>
              </div>
            </div>
            <div>
              <img
                src={displayServiceImage}
                alt={displayServiceName}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PlumbingAboutUs />
      <PlumbingProcess />
      <PlumbingBeforeAfter />
      <PlumbingCTA />
      <PlumbingWhyChooseUs />
      <PlumbingGuarantee />
      <PlumbingCTA />
      <PlumbingRelatedServices />
      <PlumbingServiceAreas />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingServiceDetail;
