import React, { useEffect, useState } from 'react';
import MuiCard from '../MuiCard';

const Stories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/stories`)
          .then((res) => res.json())
          .then((data) => setStories(data));
      }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                stories.slice(0,4).map(story=> <MuiCard key={story.id} story={story}></MuiCard>)
            }
        </div>
    );
};

export default Stories;