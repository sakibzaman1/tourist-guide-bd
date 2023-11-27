import React, { useContext } from 'react';
import useBookings from '../CustomHooks/useBookings';
import { AuthContext } from '../Providers/AuthProvider';

const DashHome = () => {
    const {user} = useContext(AuthContext);
    const [bookings] = useBookings();

    return (
        <div>
            <h1 className='text-4xl mb-20'>{user?.displayName}</h1>
            <h1 className='text-4xl font-Ephesis'>My Total Bookings :  <span className='font-Roboto'>{bookings?.length}</span></h1>
        </div>
    );
};

export default DashHome;