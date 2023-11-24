import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import overview from '../assets/videos/overview.mp4'

const TravelTab = () => {
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
      Welcome to [Your Tourist Guide Website], your gateway to the enchanting destination of [Destination]. Immerse yourself in the allure of this diverse locale with our expertly curated guides that showcase the rich tapestry of history, culture, and natural beauty. From must-visit attractions and culinary delights to handpicked accommodation options and practical travel tips, our user-friendly platform is designed to inspire and inform every traveler. Whether you seek adventure, relaxation, or cultural exploration, find personalized itineraries, insider insights, and the essential information needed to make your journey through [Destination] truly unforgettable. Start your exploration now with [Your Tourist Guide Website] and let the wonders of travel unfold before you.
      </p>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelTab;
