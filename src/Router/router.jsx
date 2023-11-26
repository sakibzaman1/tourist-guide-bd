import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import './router.css'
import Register from '../Pages/Register/Register';
import PackageDetails from '../Components/PackageDetails';
import AllPackages from '../Pages/AllPackages/AllPackages';
import TypeOfTour from '../Components/TypeOfTour';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import GuideDetails from '../Components/GuideDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/allPackages',
                element: <AllPackages></AllPackages>,
                loader: ()=> fetch(`/tourPackages.json`)
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ()=> fetch(`/tourPackages.json`)
            },
            {
                path: '/typeOfTour/:type',
                element: <TypeOfTour></TypeOfTour>,
                loader: ()=> fetch(`/tourPackages.json`)
            },
            {
                path: '/guideDetails/:name',
                element: <GuideDetails></GuideDetails>
            }
        ]
    }
])

export default router;