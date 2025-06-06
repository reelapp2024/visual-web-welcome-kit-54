
import React, { useEffect, useState } from 'react';
import { httpFile } from "../../../config.js";
import { Award, Users, Clock, Shield } from 'lucide-react';

const CleaningAboutUs = () => {
  const [aboutImage, setaboutImage] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "683da559d48d4721c48972d5";

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Years Experience",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "3K+",
      label: "Happy Customers",
      color: "text-emerald-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "Same Day",
      label: "Booking Available",
      color: "text-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction Guarantee",
      color: "text-emerald-600"
    }
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setProjectDescription(data.projectInfo.description)
          setaboutImage(data.projectInfo.images[0].url)

        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);



  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Professional {projectCategory} Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {projectDescription}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Professional cleaners at work"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Bonded & Insured</div>
                  <div className="text-gray-600 text-sm">Your Property Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningAboutUs;
