import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import overview from "../assets/videos/overview.mp4";
import TourPackageCard from "./TourPackageCard";
import TravelGuide from "./TravelGuide";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const TravelTab = () => {
  const {goToTop} = useContext(AuthContext);
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    fetch(`https://tourist-guide-server-seven.vercel.app/packages`)
      .then((res) => res.json())
      .then((data) => setTourPackages(data));
  }, []);

  return (
    <div className="mt-20">
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <div className="lg:flex items-center mt-10">
            <video autoPlay muted loop className="w-full h-96">
              <source src={overview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className=" text-xl lg:ml-10 font-Ephesis p-6 font-medium">
              Welcome to [Your Tourist Guide Website], your gateway to the
              enchanting destination of [Destination]. Immerse yourself in the
              allure of this diverse locale with our expertly curated guides
              that showcase the rich tapestry of history, culture, and natural
              beauty. From must-visit attractions and culinary delights to
              handpicked accommodation options and practical travel tips, our
              user-friendly platform is designed to inspire and inform every
              traveler. Whether you seek adventure, relaxation, or cultural
              exploration, find personalized itineraries, insider insights, and
              the essential information needed to make your journey through
              [Destination] truly unforgettable. Start your exploration now with
              [Your Tourist Guide Website] and let the wonders of travel unfold
              before you.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {tourPackages.slice(0, 3).map((tourPackage) => (
              <TourPackageCard
                key={tourPackage._id}
                tourPackage={tourPackage}
              ></TourPackageCard>
            ))}
          </div>

          <Link onClick={goToTop} to='/allPackages'>
            <button className="hover:scale-110 transition-transform bg-gradient-to-r from-green-700 to-green-900 text-white rounded-full px-4 text-lg mt-10">
              All Packages
            </button>
          </Link>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Language</th>
                    <th></th>
                  </tr>
                </thead>
                {tourPackages.map((tourPackage) => (
                  <TravelGuide
                    key={tourPackage._id}
                    tourPackage={tourPackage}
                  ></TravelGuide>
                ))}
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelTab;
