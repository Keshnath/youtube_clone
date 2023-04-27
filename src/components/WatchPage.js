import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import SubscribeSection from "./SubscribeSection";
import LIveChat from "./LIveChat";

function WatchPage() {
  const [video] = useSearchParams();
  const [channelData] = useSearchParams();
  const channelId = channelData.get("channelId");

  // if(video.get('v') === null){
  //   return (<MainContainer/>)
  // }
  return (
    <div className="m-8 ml-16 flex flex-col w-full  ">
      <div className="flex">
        <div className="">
          <iframe
            width="885"
            height="498"
            src={
              "https://www.youtube.com/embed/" + video.get("v") + "?&autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <SubscribeSection channelId={channelId} />
          </div>
          <div className="mt-6">
            <CommentsContainer />
          </div>
        </div>
        <div className="w-full">
          <LIveChat />
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
