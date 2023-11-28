import axios from 'axios';
// import React from 'react';

const axiosSecure = axios.create({
    baseURL: "https://tourist-guide-server-seven.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;