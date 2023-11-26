import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center my-auto min-h-screen'>
            <h1 className='text-7xl'>Error 404</h1>
            <Link to='/'><h1 className='mt-6 text-red-600'>Go to Home</h1></Link>
        </div>
    );
};

export default ErrorPage;