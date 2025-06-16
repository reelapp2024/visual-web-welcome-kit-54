
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HVACHeader from '../components/HVACHeader';
import HVACCTA from '../components/HVACCTA';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACProcess from '../components/HVACProcess';
import HVACBeforeAfter from '../components/HVACBeforeAfter';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACRelatedServices from '../components/HVACRelatedServices';
import HVACServiceAreas from '../components/HVACServiceAreas';
import HVACFooter from '../components/HVACFooter';
import { Wind, Phone } from 'lucide-react';
import { httpFile } from "../../../config.js";
import humanizeString from "../../../extras/stringUtils.js";

const HVACServiceDetail = () => {
  let { serviceName: urlServiceName } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [serviceImage, setServiceImage] = useState("");
  const [ProjectBaseImage, setProjectBaseImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceId, setServiceId] = useState("");

  const location = useLocation();
  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "684a89807771b19c131ff5e7";
  
  // Get area name from navigation state
  const areaName = location.state?.areaname || '';
  const displayLocationText = areaName ? ` in ${areaName}` : '';
  
  const displayServiceName = humanizeString(urlServiceName) || 'HVAC Installation';

  useEffect(() => {
    if (areaName) {
      localStorage.setItem("locaitonname", areaName);
    }
  }, [areaName]);

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

  const displayServiceDescription = serviceDetails?.service_description || 'Professional HVAC installation and repair services with energy-efficient systems and expert technicians. Licensed and insured contractors.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-blue-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${ProjectBaseImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/85 to-blue-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Wind className="w-8 h-8 text-blue-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}{displayLocationText}</h1>
              </div>
              <p className="text-xl text-red-100 mb-8">
                {displayServiceDescription}{displayLocationText ? ` Professional service available ${displayLocationText}.` : ''}
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-400" />
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

      <HVACAboutUs />
      <HVACProcess />
      <HVACBeforeAfter />
      <HVACCTA />
      <HVACWhyChooseUs />
      <HVACGuarantee />
      <HVACCTA />
      <HVACRelatedServices />
      <HVACServiceAreas />
      <HVACFooter />
    </div>
  );
};

export default HVACServiceDetail;
