import React from "react";
import VideoContainer from "./VideoContainer";
import Buttons from "./Buttons";
const MainContainer = () => {
  return (
    <div className="box-border">
      <Buttons />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
