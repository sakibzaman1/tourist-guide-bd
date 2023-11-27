import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import { AuthContext } from '../Providers/AuthProvider';

const TypeOfTour = () => {

    const {goToTop} = useContext(AuthContext);
    const loadedTours = useLoaderData();
    const {type} = useParams();
    console.log(type);

    const filteredPackage = loadedTours.find(tour=> tour?.tourType.toLowerCase() === type.toLowerCase());
    console.log(filteredPackage);

    const {_id, image, tourType, tripTitle, tourPlan, price, aboutTour, tourGuides} = filteredPackage;

    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-2xl">
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

            <p>{aboutTour}</p>
            
            <div className="card-actions items-center justify-end mt-10">
            <p className="h-10 text-2xl">$ <span className="font-Ephesis text-2xl text-green-600 font-bold">{price}</span></p>
              <Link onClick={goToTop} to={`/packageDetails/${_id}`}><div className="badge badge-outline mr-2 hover:scale-x-110 transition-transform">View Package</div></Link>
              {/* <div className="hover:scale-110 transition-transform"><Link><FaHeart  size={20} color="red"></FaHeart ></Link></div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default TypeOfTour;