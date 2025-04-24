import React, { useContext, useEffect, useState } from "react";
import MuiCard from "../MuiCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Stories = () => {
  const { goToTop } = useContext(AuthContext);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`https://tourist-guide-server-seven.vercel.app/stories`)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className=" mx-auto px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
        {stories.slice(0, 5).map((story) => (
          <MuiCard key={story._id} story={story}></MuiCard>
        ))}
      </div>
      <div className="flex mx-auto text-center relative right-1/2 left-1/2">
      <Link onClick={goToTop} to="/allStories" className="">
        <button className="hover:scale-110 transition-transform bg-gradient-to-r from-green-700 to-green-900 text-white rounded-full px-4 text-lg mt-10 text-center">
          All Stories
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Stories;
