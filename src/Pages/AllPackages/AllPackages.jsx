import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourPackageCard from '../../Components/TourPackageCard';
import { Helmet } from 'react-helmet-async';

const AllPackages = () => {


    const tourPackages = useLoaderData();

    return (
        <div>
          <Helmet>
                <title>Tourist Guide BD | ALL PACKAGES</title>
            </Helmet>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {
          tourPackages.map(tourPackage=> <TourPackageCard key={tourPackage.id} tourPackage={tourPackage}></TourPackageCard>)
        }
      </div>
        </div>
    );
};

export default AllPackages;