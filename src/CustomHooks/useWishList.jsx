import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const useWishList = () => {
    const {user} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const {refetch, data: wishListedPackage= []} = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/wishList?email=${user.email}`);
            return res.data;
        }
    })

    return [wishListedPackage, refetch];
};

export default useWishList;