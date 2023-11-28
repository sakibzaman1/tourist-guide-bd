import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
// import React from 'react';

const axiosSecure = axios.create({
    baseURL: "https://tourist-guide-server-seven.vercel.app"
})

const useAxiosSecure = () => {

    const {logOutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error);
    });


    // 401 and 403

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error)=> {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        if(status === 401 || status === 403){
            await logOutUser();
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;