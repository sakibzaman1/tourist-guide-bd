import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion } from "framer-motion"

const TourType = () => {
  const {goToTop} = useContext(AuthContext);
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    fetch(`/tourPackages.json`)
      .then((res) => res.json())
      .then((data) => setTourPackages(data));
  }, []);

  return (


    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hZqpjGt/bd.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <h1 className="text-center text-3xl font-Ephesis text-white py-6 hidden lg:flex">Find a Tour</h1>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      {tourPackages?.map((tour) => (
        <motion.div whileHover={{ scale: 1.2 }}>
         <Link onClick={goToTop} to={`/typeOfTour/${tour?.tourType}`}>
         <div className="card relative rounded-full">
            <figure>
              <img className="h-44 "
                src={tour.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="card-title my-auto mx-auto text-white">{tour.tourType}</h2>
            </div>
          </div>
         </Link>
        </motion.div>
      ))}
    </div>
</div>

  
  );
};

export default TourType;

/* 
https://i.ibb.co/19F3vrV/coxs-bazar.jpg
https://i.ibb.co/58Wzh53/kuakata.jpg
https://i.ibb.co/wgSywNc/rangamati.jpg
https://i.ibb.co/DCk2G8f/sajek.jpg
https://i.ibb.co/whSQMr2/sunamganj.jpg
https://i.ibb.co/CvV3bzF/bagerhat.jpg
https://i.ibb.co/XbJhDCy/bandarban.jpg
https://i.ibb.co/0Chy2kx/barisal.jpg
https://i.ibb.co/jZ2J75h/srimangal.jpg
*/
