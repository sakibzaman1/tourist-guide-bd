import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MuiCard from './MuiCard';

const AllStories = () => {


    const loadedStories = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {loadedStories?.map((story) => (
          <MuiCard key={story._id} story={story}></MuiCard>
        ))}
      </div>
        </div>
    );
};

export default AllStories;