import React from 'react';
import { Helmet } from 'react-helmet-async';
import bgImage from '../../assets/Banner/sundarban.jpg'

const Community = () => {
    return (
        <div className='bg-slate-100 py-4 px-10 min-h-screen relative' style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover', // This property makes the background image cover the entire container
            backgroundPosition: 'center', // This property centers the background image
            backgroundRepeat: 'no-repeat', // This property prevents the background image from repeating
        }}>
            {/* Background overlay with blur effect */}
            <div className="absolute inset-0 bg-black opacity-60 blur-md"></div>
            
            {/* Content */}
            <div className="container text-white mx-auto mt-8 relative z-10">
                <Helmet>
                    <title>Tourist Guide BD | COMMUNITY</title>
                </Helmet>
                <h1 className="text-3xl font-bold text-green-500 mb-4">Welcome to the Tourist Guide Community!</h1>
                <p className="mb-4">Discover and share your travel experiences with fellow explorers in the Tourist Guide community. Whether you're a seasoned traveler or planning your first adventure, this is the place to connect, learn, and inspire.</p>
                <p className="mb-4">Our community is a vibrant hub where you can:</p>
                <ul className="pl-6 mb-4">
                    <li className="">Share travel tips and insights</li>
                    <li className="">Ask and answer questions about destinations</li>
                    <li className="">Connect with like-minded travelers</li>
                    <li className="">Participate in discussions and forums</li>
                    <li className="">Stay updated on the latest travel trends</li>
                </ul>
                <p className="">Join us on this exciting journey of exploration and make your travel experiences even more memorable!</p>
            </div>
        </div>
        
    );
};

export default Community;