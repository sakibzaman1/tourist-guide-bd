import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MuiCard from './MuiCard';

const AllStories = () => {


    const loadedStories = useLoaderData();

    return (
        <div>
          <h1 className='text-3xl font-Ephesis mb-10'>All The Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loadedStories?.map((story) => (
          <MuiCard key={story._id} story={story}></MuiCard>
        ))}
      </div>
        </div>
    );
};

export default AllStories;