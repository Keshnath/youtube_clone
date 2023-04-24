import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";
import useVideosApi from "../utils/useVideosApi";

function VideoContainer() {
  const videos = useVideosApi();

  return (
    <div className="flex flex-wrap ml-14">
      {videos.map((e, ind) => (
        <Link
          to={"/watch?v=" + e.id + "&channelId=" + e.snippet.channelId}
          key={e.id}
        >
          <VideosCard info={e} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
