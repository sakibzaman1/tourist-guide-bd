import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
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
import StoryDetails from '../Components/StoryDetails';
import ManageUsers from '../Dashboard/AdminPanel/ManageUsers';
import AddPackage from '../Dashboard/AdminPanel/AddPackage';
import AdminHome from '../Dashboard/AdminPanel/AdminHome';
import AdminProfile from '../Dashboard/AdminPanel/AdminProfile';
import Blogs from '../Pages/Blogs/Blogs';
import Community from '../Pages/Community/Community';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import GuideProfile from '../Dashboard/GuidePanel/GuideProfile';
import AssignedTours from '../Dashboard/GuidePanel/AssignedTours';
import AdminRoute from '../PrivateRoutes/AdminRoute';

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
                loader: ()=> fetch(`https://tourist-guide-server-seven.vercel.app/packages`)
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({params})=> fetch(`https://tourist-guide-server-seven.vercel.app/packages/${params.id}`)
            },
            {
                path: '/typeOfTour/:type',
                element: <TypeOfTour></TypeOfTour>,
                loader: ()=> fetch(`https://tourist-guide-server-seven.vercel.app/packages`)
            },
            {
                path: '/guideDetails/:name',
                element: <GuideDetails></GuideDetails>,
                loader: ()=> fetch(`https://tourist-guide-server-seven.vercel.app/packages`)
            },
            {
                path: '/allStories',
                element: <AllStories></AllStories>,
                loader: ()=> fetch(`https://tourist-guide-server-seven.vercel.app/stories`)
            },
            {
                path: '/storyDetails/:id',
                element: <StoryDetails></StoryDetails>,
                loader: ({params})=> fetch(`https://tourist-guide-server-seven.vercel.app/stories/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '', // Empty path for the default route
                element: <Navigate to="userHome" />
              },
            {
                path: 'userHome',
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
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'addPackage',
                element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
                path: 'adminProfile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: 'guideProfile',
                element: <GuideProfile></GuideProfile>
            },
            {
                path: 'assignedTours',
                element: <AssignedTours></AssignedTours>
            }
        ]
    }
])

export default router;