import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    youtubeApiCall();
  }, []);
  const youtubeApiCall = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setvideos(json.items);
    // console.log(json)
  };

  return (
    <div className="flex flex-wrap ml-14">
      {videos.map((e) => (
        <Link to={"/watch?="+e.id}><VideosCard key={e.id} info={e} /></Link>
        
      ))}
    </div>
  );
}

export default VideoContainer;
