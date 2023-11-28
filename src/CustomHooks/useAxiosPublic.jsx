import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: `https://tourist-guide-server-seven.vercel.app`
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;