import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoIosShareAlt } from "react-icons/io";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const StoryDetails = () => {


    const loadedStory= useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(loadedStory);
    const fbShareUrl = "https://www.facebook.com/";
    const twitterShareUrl = "https://twitter.com/";
    const pinterestShareUrl = "https://www.pinterest.com/";


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
      <div className={user? `flex items-center gap-2 justify-center` : `hidden`}>
      <button className=""><IoIosShareAlt size={40}></IoIosShareAlt></button>
      <FacebookShareButton url={fbShareUrl}>
      <FacebookIcon size={32} round={true}  />
      </FacebookShareButton>
      <TwitterShareButton url={twitterShareUrl}>
      <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default StoryDetails;