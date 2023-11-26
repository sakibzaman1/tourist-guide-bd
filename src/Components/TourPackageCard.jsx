import React, { useContext } from "react";
import { FaHeart  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { motion } from "framer-motion"

const TourPackageCard = ({tourPackage}) => {

  const {goToTop} = useContext(AuthContext);
const {id, image, tourType, tripTitle, tourPlan, price, aboutTour, tourGuides} = tourPackage;

  return (
    <motion.div whileHover={{ scale: 0.9 }} className="cursor-pointer">
      <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img className="h-56 w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-0 pt-10">
          <h2 className="text-xl font-bold mb-4">
            {tripTitle} <br />
            <div className="badge px-4 py-2 bg-slate-200 mt-6">{tourType}</div>
          </h2>
          
          <div className="card-actions items-center justify-end mt-10">
          <p className="h-10 text-2xl">$ <span className="font-Ephesis text-2xl text-green-600 font-bold">{price}</span></p>
            <Link onClick={goToTop} to={`/packageDetails/${id}`}><div className="badge badge-outline mr-2 hover:scale-x-110 transition-transform">View Package</div></Link>
            <div className="hover:scale-110 transition-transform"><Link><FaHeart  size={20} color="red"></FaHeart ></Link></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TourPackageCard;

/*
https://i.ibb.co/4RWNxF6/chittagong.jpg
https://i.ibb.co/rpwDVkf/dhaka.jpg
*/