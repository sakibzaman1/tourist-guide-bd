import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import './router.css'
import Register from '../Pages/Register/Register';
import PackageDetails from '../Components/PackageDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ()=> fetch(`/tourPackages.json`)
            }
        ]
    }
])

export default router;