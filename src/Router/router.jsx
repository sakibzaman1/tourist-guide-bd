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
import AllStories from '../Components/AllStories';
import Dashboard from '../Dashboard/Dashboard';
import DashHome from '../Dashboard/DashHome';
import MyProfile from '../Dashboard/MyProfile';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import MyBookings from '../Dashboard/MyBookings';
import MyWishlist from '../Dashboard/MyWishlist';

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
                loader: ()=> fetch(`http://localhost:5000/packages`)
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/packages/${params.id}`)
            },
            {
                path: '/typeOfTour/:type',
                element: <TypeOfTour></TypeOfTour>,
                loader: ()=> fetch(`http://localhost:5000/packages`)
            },
            {
                path: '/guideDetails/:name',
                element: <GuideDetails></GuideDetails>,
                loader: ()=> fetch(`http://localhost:5000/guides`)
            },
            {
                path: '/allStories',
                element: <AllStories></AllStories>,
                loader: ()=> fetch(`http://localhost:5000/stories`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome></DashHome>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: 'myWishlist',
                element: <MyWishlist></MyWishlist>
            }
        ]
    }
])

export default router;