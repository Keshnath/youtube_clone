import { YOUTUBE_VIDEOS_API } from "./constants";
import { useState, useEffect } from "react";

const useVideosApi = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    youtubeApiCall();
  }, []);
  const youtubeApiCall = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setvideos(json.items);
  };
  return videos;
};
export default useVideosApi;
