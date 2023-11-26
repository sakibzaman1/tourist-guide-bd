import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourPackageCard from '../../Components/TourPackageCard';

const AllPackages = () => {


    const tourPackages = useLoaderData();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {
          tourPackages.map(tourPackage=> <TourPackageCard key={tourPackage.id} tourPackage={tourPackage}></TourPackageCard>)
        }
      </div>
    );
};

export default AllPackages;