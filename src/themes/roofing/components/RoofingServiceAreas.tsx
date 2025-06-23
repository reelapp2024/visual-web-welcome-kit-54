
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { httpFile } from "../../../config.js";
import { MapPin, Clock, Shield } from 'lucide-react';
import { slugify } from "../../../extras/slug";

const RoofingServiceAreas = () => {
  const [projectCategory, setProjectCategory] = useState("");
  const [welcomeLine, setWelcomeLine] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [UpcomingPage, setUpcomingPage] = useState("");
  const [locations, setLocations] = useState([]);

  // Handle site ID from query params
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get("siteId");

  if (site) {
    const currentSiteId = localStorage.getItem("currentSiteId");
    if (currentSiteId !== site) {
      localStorage.setItem("currentSiteId", site);
    }
  }

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = savedSiteId || "68593752dd530358b97f0a3f";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "roofingServicesAreas"
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setWelcomeLine(data.projectInfo.welcomeLine);
          setPhoneNumber(data.aboutUs.phone);
          setUpcomingPage(data.upcomingPage);
          setLocations(data.locations);
        }

        console.log(data.slug, "data.slug")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  console.log(locations, "locations");

  const getNextPage = () => {
    if (UpcomingPage === 'country') return 'States';
    if (UpcomingPage === 'state') return 'Cities';
    if (UpcomingPage === 'city') return 'Local Areas';
    if (UpcomingPage === 'local') return 'whole areas';
    return '';
  };

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional {projectCategory} services throughout Our availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-slate-500 to-orange-500 rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-slate-500 mr-3" />
                  <span>Response time: Extreme</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-orange-500 mr-3" />
                  <span>100% Original services</span>
                </div>
              </div>

              <Link
                to={{
                  pathname: `/${area.slug}`,
                }}
                state={{
                  id: area.location_id,
                  projectId,
                  UpcomingPage,
                  nextPage: getNextPage(),
                  locationName: area.name,
                  sortname: area.sortname,
                  _id: area._id,
                }}
                className="mt-6 w-full bg-gradient-to-r from-slate-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-orange-700 transition-all duration-300 inline-block text-center"
              >
                See Areas
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingServiceAreas;
