import React from 'react';
import { Helmet } from 'react-helmet-async';
import bgImage from '../../assets/Banner/sajek.jpg'

const About = () => {
    return (
        <div className='bg-slate-100 py-4 px-10 min-h-screen relative'>
        {/* Background image */}
        <div className='absolute inset-0 bg-cover bg-center'
             style={{ 
                 backgroundImage: `url(${bgImage})`,
                 filter: 'blur(6px)', // Adjust the blur strength as needed
                 zIndex: 1, // Ensure the background stays behind content
             }}>
                <div className="absolute inset-0 bg-black opacity-60 blur-md"></div>
        </div>
    
        {/* Content */}
        <div className="container mx-auto mt-8 relative z-10">
            <Helmet>
                <title>Tourist Guide BD | ABOUT</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-green-700 mb-4">About Tourist Guide</h1>
            
            <p className="text-gray-100 mb-4">Tourist Guide is your ultimate companion in exploring the world. We are dedicated to providing you with comprehensive travel information, expert tips, and a vibrant community to enhance your travel experiences.</p>
            <p className="text-gray-100 mb-4">Our mission is to inspire and assist travelers of all kinds — from adventure enthusiasts seeking adrenaline-pumping activities to leisure seekers looking for serene getaways. With Tourist Guide, embark on a journey of discovery and create memories that last a lifetime.</p>
    
            <h2 className="text-2xl font-bold text-green-600 mb-2">What We Offer:</h2>
            <ul className=" pl-6 mb-4">
                <li className="text-gray-100 font-normal">Comprehensive travel guides for diverse destinations</li>
                <li className="text-gray-100 font-normal">Insider tips and recommendations from seasoned travelers</li>
                <li className="text-gray-100 font-normal">A thriving community to share and gain travel insights</li>
                <li className="text-gray-100 font-normal">Regular updates on travel trends and news</li>
                <li className="text-gray-100 font-normal">User-friendly tools for planning your next adventure</li>
            </ul>
    
            <p className="text-gray-100">Tourist Guide is more than just a travel website; it's a platform for connecting with fellow explorers, learning from each other, and creating a global community of passionate travelers. Join us on this exciting journey!</p>
        </div>
    </div>
    
    );
};

export default About;