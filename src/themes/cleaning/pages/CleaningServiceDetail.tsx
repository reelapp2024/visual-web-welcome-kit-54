import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
import { httpFile } from "../../../config.js";
import humanizeString from "../../../extras/stringUtils.js";

// Import Font Awesome (if not already included in your project)
import '@fortawesome/fontawesome-free/css/all.min.css';

interface CleaningServiceDetailProps {
  serviceId?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceImage?: string;
}

const CleaningServiceDetail = ({ serviceName, serviceDescription }: CleaningServiceDetailProps) => {
  let { serviceName: urlServiceName } = useParams();

  const [projectOurProcess, setprojectOurProcess] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [serviceImage, setServiceImage] = useState("");
  const [ProjectBaseImage, setProjectBaseImage] = useState("");
  const [stepProcess, setStepProcess] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const savedSiteId = localStorage.getItem("currentSiteId");
  let projectId = savedSiteId || "683da559d48d4721c48972d5";
  const location = useLocation();
  const navigate = useNavigate();
  const serviceId = location.state?.serviceId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_service", { serviceId });

        if (data.service) {
          setServiceDetails(data.service);
          setServiceImage(data.service.images?.[0]?.url || "");
          setProjectBaseImage(data.service.images?.[2]?.url || "");
          setStepProcess(data.service.steps_process || []);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo) {
          setprojectOurProcess(data.projectInfo.ourProcessSection);
          setPhoneNumber(data.aboutUs.phone);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  console.log(stepProcess, "service stepProcess");

  serviceName = humanizeString(serviceName);

  const displayServiceName = serviceName || urlServiceName || 'Residential Cleaning';
  const displayServiceDescription = serviceDescription || 'Professional home cleaning services for every room with eco-friendly products and trained staff. Same-day booking and satisfaction guaranteed.';
  const displayServiceImage = serviceImage || 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />

      {/* Service Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `${ProjectBaseImage}`,
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
                <h1 className="text-4xl md:text-5xl font-bold">{displayServiceName}</h1>
              </div>

              <div className="flex items-center mb-4">

                <p className="text-xl text-green-100 mb-8">
                  <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />

                  <span className="text-lg">{displayServiceDescription}</span>
                </p>

              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-400" />
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

      {/* <CleaningAboutUs /> */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined 4-step process ensures you get professional cleaning service from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stepProcess.length > 0 ? (
              stepProcess.map((step, index) => {
                // Log warning if iconClass is missing
                if (!step.iconClass) {
                  console.warn(`Missing iconClass for step ${index + 1}:`, step);
                }

                return (
                  <div key={index} className="text-center relative group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-xl group-hover:scale-110 transition-all duration-300">
                      {index + 1}
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                      <div
                        className={`bg-gradient-to-br ${step.gradient || 'from-gray-400 to-gray-600'
                          } rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <i className={`${step.iconClass || 'fas fa-star'} text-4xl text-green-500`}></i>
                        {/* Changed icon color to green-500 */}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.stepName || 'Step'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.serviceDescription || 'No description available.'}
                      </p>
                    </div>

                    {/* Arrow for desktop */}
                    {index < stepProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-green-300 z-20">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-600 col-span-4">
                No process steps available.
              </p>
            )}
          </div>
        </div>
      </section>
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