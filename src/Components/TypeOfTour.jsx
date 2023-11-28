// import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import TourPackageCard from './TourPackageCard';

// import { AuthContext } from '../Providers/AuthProvider';

const TypeOfTour = () => {

  const [loading, setLoading] = useState(true);

    // const {goToTop} = useContext(AuthContext);
    const loadedTours = useLoaderData();
    const {type} = useParams();
    console.log(type);

    const filteredPackages = loadedTours.filter(tour=> tour?.tourType.toLowerCase() === type.toLowerCase());
    console.log(filteredPackages);

    useEffect(() => {
      // Simulate loading delay with setTimeout
      const delay = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the time as needed
  
      // Cleanup function
      return () => clearTimeout(delay);
    }, []); // Empty dependency array ensures this effect runs once on mount
  
    if (loading) {
      return  <div className='min-h-screen flex items-center justify-center'>
      <span className="loading loading-ring loading-lg"></span>
   </div> // Render your loading spinner while data is being loaded
    }

    // const {_id, image, tourType, tripTitle, tourPlan, price, aboutTour, tourGuides} = filteredPackage;

    return (


      <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {
            filteredPackages?.map(tourPackage=> <TourPackageCard key={tourPackage._id} tourPackage={tourPackage}></TourPackageCard>)
          }
        </div>
      </div>

      //   <div>
      //   <div className="card w-96 bg-base-100 shadow-2xl">
      //     <figure>
      //       <img className="h-56 w-full"
      //         src={image}
      //         alt="Shoes"
      //       />
      //     </figure>
      //     <div className="card-body px-0 pt-10">
      //       <h2 className="text-xl font-bold mb-4">
      //         {tripTitle} <br />
      //         <div className="badge px-4 py-2 bg-slate-200 mt-6">{tourType}</div>
      //       </h2>

      //       <p>{aboutTour}</p>
            
      //       <div className="card-actions items-center justify-end mt-10">
      //       <p className="h-10 text-2xl">$ <span className="font-Ephesis text-2xl text-green-600 font-bold">{price}</span></p>
      //         <Link onClick={goToTop} to={`/packageDetails/${_id}`}><div className="badge badge-outline mr-2 hover:scale-x-110 transition-transform">View Package</div></Link>
      //         {/* <div className="hover:scale-110 transition-transform"><Link><FaHeart  size={20} color="red"></FaHeart ></Link></div> */}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
};

export default TypeOfTour;