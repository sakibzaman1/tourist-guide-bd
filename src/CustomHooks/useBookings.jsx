import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';

const useBookings = () => {

    const {user} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const {refetch, data: bookings= []} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/bookings?email=${user.email}`);
            return res.data;
        }
    })

    return [bookings, refetch];
};

export default useBookings;