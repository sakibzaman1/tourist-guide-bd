import React, { useContext, useEffect, useState } from "react";
import MuiCard from "../MuiCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Stories = () => {
  const { goToTop } = useContext(AuthContext);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/stories`)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {stories.slice(0, 4).map((story) => (
          <MuiCard key={story._id} story={story}></MuiCard>
        ))}
      </div>
      <Link onClick={goToTop} to="/allStories">
        <button className="hover:scale-110 transition-transform bg-gradient-to-r from-green-700 to-green-900 text-white rounded-full px-4 text-lg mt-10">
          All Stories
        </button>
      </Link>
    </div>
  );
};

export default Stories;
