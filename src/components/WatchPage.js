import React, { useEffect } from "react";
import { redirect, useSearchParams } from "react-router-dom";
import { batch, useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import MainContainer from "./MainContainer";

function WatchPage() {
  const [video] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

    return () => dispatch(toggleMenu());
  }, []);

  // if(video.get('v') === null){
  //   return (<MainContainer/>)
  // }

  return (
    <div className="m-8 ml-16">
      <iframe
        width="885"
        height="498"
        src={"https://www.youtube.com/embed/" + video.get("v") + "?&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
