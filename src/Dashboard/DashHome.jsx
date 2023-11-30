import React, { useContext } from 'react';
// import useBookings from '../CustomHooks/useBookings';
import { AuthContext } from '../Providers/AuthProvider';
// import useWishList from '../CustomHooks/useWishList';

const DashHome = () => {
    const {user} = useContext(AuthContext);
    // const [bookings] = useBookings();
    // const [wishListedPackage] = useWishList()

    return (
        <div>
            <h1 className='text-4xl mb-20'><span className='font-Ephesis'>Name :  </span>{user?.displayName}</h1>
            <h1 className='text-4xl mb-20'><span className='font-Ephesis'>Email :  </span>{user?.email}</h1>
            {/* <h1 className='text-4xl font-Ephesis'>My Total Bookings :  <span className='font-Roboto'>{bookings?.length}</span></h1>
            <h1 className='text-4xl font-Ephesis mt-10'>My Wishlisted Items :  <span className='font-Roboto'>{wishListedPackage?.length}</span></h1> */}
        </div>
    );
};

export default DashHome;