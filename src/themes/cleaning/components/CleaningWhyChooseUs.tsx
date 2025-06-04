
import React, {useState,useEffect} from 'react';
import { Shield, Clock, Award, Users, CheckCircle, Sparkles } from 'lucide-react';
import { httpFile } from "../../../config.js";

const CleaningWhyChooseUs = () => {

    const [projectCategory, setProjectCategory] = useState("");
    const [projectName, setprojectName] = useState("");
  const [projectWhyChooseUs, setprojectWhyChooseUs] = useState([]);

  
    const savedSiteId = localStorage.getItem("currentSiteId");
    const projectId = savedSiteId || "683da559d48d4721c48972d5";
    console.log(projectId, "This is project id in services section");

      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await httpFile.post("/webapp/v1/my_site", {
              projectId,
              pageType: "home",
            });
    
            if (data.projectInfo && data.projectInfo.serviceType) {
              setProjectCategory(data.projectInfo.serviceType);
              setprojectName(data.projectInfo.projectName);
              setprojectWhyChooseUs(data.projectInfo.whyChooseUsSection);
             
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [projectId]);


  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Same Day Bookings",
      description: "Last-minute cleaning needs? No problem. Book our services the same day you call.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Bonded & Insured",
      description: "All our cleaners are fully bonded, insured, and background-checked for your protection.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "10+ Years Experience",
      description: "Over a decade of professional cleaning experience serving our community.",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Trained Team",
      description: "Professional, uniformed cleaners who treat your property with respect and care.",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all cleaning services with quality assurance.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Eco-Friendly Products",
      description: "Safe, non-toxic cleaning products that are gentle on your family and pets.",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Why Choose {projectName}?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose us, you're choosing quality, reliability, and exceptional service 
            that's backed by years of experience and thousands of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectWhyChooseUs.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {feature.icon}

                 

                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningWhyChooseUs;
