
import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { httpFile } from "../../../config.js";

const PlumbingAboutUs = () => {
  const [projectCategory, setProjectCategory] = useState("");
  const [projectName, setProjectName] = useState("");
  const [aboutUsDescription, setAboutUsDescription] = useState("");
  const [aboutUsStats, setAboutUsStats] = useState([]);

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "68593752dd530358b97f0a3f";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "plumbingAboutUs"
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setProjectName(data.projectInfo.projectName);
          setAboutUsDescription(data.aboutUs.description);
          setAboutUsStats(data.aboutUs.stats || []);
        }
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  const defaultStats = [
    { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award className="w-6 h-6" />, number: "25+", label: "Years Experience" },
    { icon: <CheckCircle className="w-6 h-6" />, number: "50,000+", label: "Jobs Completed" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Emergency Service" }
  ];

  const stats = aboutUsStats.length > 0 ? aboutUsStats : defaultStats;

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              About {projectName || "ProFlow Plumbing"}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {aboutUsDescription || `With over 25 years of experience in the ${projectCategory} industry, we've built our reputation on quality workmanship, reliable service, and customer satisfaction.`}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-lg">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-lg">24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-lg">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-lg">Upfront Pricing, No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional plumber at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbingAboutUs;
