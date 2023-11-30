import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-100 py-4 px-10'>
            <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold text-blue-500 mb-4">Tourist Guide Blog</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.ibb.co/9nsFRf9/dhaka3.jpg" alt="Blog Post Image" className="mb-4 rounded-md"/>
            <h2 className="text-xl font-bold text-blue-500 mb-2">Exploring Hidden Gems in Dhaka</h2>
            <p className="text-gray-700 mb-4">Discover the lesser-known wonders of Italy beyond the tourist hotspots. From charming villages to scenic landscapes, this guide takes you off the beaten path.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>

      
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.ibb.co/KXvP2W8/ctg2.jpg" alt="Blog Post Image" className="mb-4 rounded-md"/>
            <h2 className="text-xl font-bold text-blue-500 mb-2">A Foodie's Guide to Street Food in Chattogram</h2>
            <p className="text-gray-700 mb-4">Embark on a culinary adventure through the bustling streets of Southeast Asia. From savory delights to sweet treats, explore the vibrant world of street food.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>

      
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.ibb.co/4RWNxF6/chittagong.jpg" alt="Blog Post Image" className="mb-4 rounded-md"/>
            <h2 className="text-xl font-bold text-blue-500 mb-2">Hiking Trails for Nature Enthusiasts</h2>
            <p className="text-gray-700 mb-4">Uncover the beauty of nature with our guide to breathtaking hiking trails. Whether you're a seasoned trekker or a beginner, these trails offer stunning views and serenity.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
    </div>
</div>
        </div>
    );
};

export default Blogs;