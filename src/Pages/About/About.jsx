import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-100 py-4 px-10'>
            <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold text-blue-500 mb-4">About Tourist Guide</h1>
    
    <p className="text-gray-700 mb-4">Tourist Guide is your ultimate companion in exploring the world. We are dedicated to providing you with comprehensive travel information, expert tips, and a vibrant community to enhance your travel experiences.</p>

    <p className="text-gray-700 mb-4">Our mission is to inspire and assist travelers of all kinds — from adventure enthusiasts seeking adrenaline-pumping activities to leisure seekers looking for serene getaways. With Tourist Guide, embark on a journey of discovery and create memories that last a lifetime.</p>

    <h2 className="text-2xl font-bold text-blue-500 mb-2">What We Offer:</h2>
    <ul className=" pl-6 mb-4">
        <li className="text-gray-700">Comprehensive travel guides for diverse destinations</li>
        <li className="text-gray-700">Insider tips and recommendations from seasoned travelers</li>
        <li className="text-gray-700">A thriving community to share and gain travel insights</li>
        <li className="text-gray-700">Regular updates on travel trends and news</li>
        <li className="text-gray-700">User-friendly tools for planning your next adventure</li>
    </ul>

    <p className="text-gray-700">Tourist Guide is more than just a travel website; it's a platform for connecting with fellow explorers, learning from each other, and creating a global community of passionate travelers. Join us on this exciting journey!</p>
</div>
        </div>
    );
};

export default About;