import React from 'react';
import { Helmet } from 'react-helmet-async';
import bgImage from '../../assets/logos/uni-banner.jpg';  // Change to a student-themed background image

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
                    <title>Student Portal | ABOUT</title>
                </Helmet>
                <h1 className="text-3xl font-bold text-blue-700 mb-4">About Student Portal</h1>
                
                <p className="text-gray-100 mb-4">Welcome to the Student Portal, your one-stop solution for managing your academic journey. Our mission is to provide students with the tools and resources they need to succeed in their studies and beyond.</p>
                <p className="text-gray-100 mb-4">This portal aims to empower students by offering easy access to important academic information, including course management, attendance tracking, results, and much more. It's designed to keep students informed and connected with everything they need to thrive in their academic journey.</p>
        
                <h2 className="text-2xl font-bold text-blue-600 mb-2">What We Offer:</h2>
                <ul className=" pl-6 mb-4">
                    <li className="text-gray-100 font-normal">Access to student profiles and academic records</li>
                    <li className="text-gray-100 font-normal">Course enrollment and scheduling tools</li>
                    <li className="text-gray-100 font-normal">Attendance monitoring and reporting</li>
                    <li className="text-gray-100 font-normal">Results tracking and grade overview</li>
                    <li className="text-gray-100 font-normal">Notifications for important academic updates</li>
                </ul>
        
                <p className="text-gray-100">The Student Portal is more than just a website; it's your academic companion. Stay connected, informed, and empowered as you pursue your academic goals. Join the student community today and take the next step in your educational journey!</p>
            </div>
        </div>
    );
};

export default About;
