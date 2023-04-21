import React from "react";

function VideosCard({ info }) {
  if (info != undefined) {
    const { snippet, statistics  } = info;
    const { channelTitle, thumbnails, title  } = snippet;

    return (
      <div className="w-80 m-5 shadow-lg rounded-lg">
        <img className="rounded-lg" alt="Thumbnail" src={thumbnails.medium.url} />
        <h1 className="font-semibold">{title}</h1>
        <h2 className="mt-1 text-inherit">{channelTitle}</h2>
        <h2>{statistics.viewCount} views</h2>
      </div>
    );
  }
}

export default VideosCard;
