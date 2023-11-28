import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoIosShareAlt } from "react-icons/io";

const StoryDetails = () => {


    const loadedStory= useLoaderData();
    console.log(loadedStory);

    return (
        <div className='bg-base-200'>
            <h1 className='text-black font-Ephesis text-5xl mb-4 pt-10'>{loadedStory?.visitedPlaceName}</h1>
            <small className='mb-6'>{loadedStory?.date}</small>
           <div className="hero">
            
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
   
    <img src={loadedStory?.visitedPlaceImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <div className="avatar mb-4 online">
  <div className="w-24 rounded-full">
    <img src={loadedStory?.travelerImage} />
  </div>
</div>
      <h1 className="text-5xl font-bold">{loadedStory?.travelerName}</h1>
      <p className="py-6">{loadedStory?.experience}</p>
      <button className=""><IoIosShareAlt size={40}></IoIosShareAlt></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default StoryDetails;