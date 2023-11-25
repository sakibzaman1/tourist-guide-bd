import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PackageDetails = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const { image, tourType, tripTitle, tourPlan, price, aboutTour, tourGuides } =
    tourPackages;
  console.log(tourPackages);

  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);

  useEffect(() => {
    fetch(`/tourPackages.json`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((tourPackage) => tourPackage.id === idInt);
        setTourPackages(filtered);
      });
  }, []);

  return (
    <div>
      {tourPackages.map((tourPackage) => (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={tourPackage.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{tourPackage.tripTitle}</h1>
              <p className="py-6">{tourPackage.aboutTour}</p>
              <div>
                {tourPackage.tourPlan.map((activity, index) => (
                  <p key={index} className="mb-4 text-xl ">
                    {activity}
                  </p>
                ))}
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageDetails;
