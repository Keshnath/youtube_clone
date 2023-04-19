import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Head() {
  const dispatch = useDispatch();
  function toggleMenuHandler(){
    dispatch(toggleMenu());
  }
  return (
    <div className="h-14 shadow-lg grid grid-flow-col items-center">
      <div className="flex col-span-1">
        <img
          className="h-8 ml-2 cursor-pointer"
          alt="menu"
          src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
          onClick={()=>toggleMenuHandler()}
        />
        <img
          className="h-8 ml-4"
          alt="youtube-logo"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className="">
        <input
          type="text"
          className="w-[29rem] h-8 rounded-l-full border border-gray-300 pl-2 "
          placeholder="Search ..."
        />
        <button className="rounded-r-full border border-gray-300 h-8 pr-2">
          Search
        </button>
      </div>
      <div className="flex justify-end mr-5">
        <img
          className="h-6 mr-5 mt-1"
          alt="notification-icon"
          src="https://www.vhv.rs/dpng/d/436-4367231_notification-icon-png-notification-icon-white-background-transparent.png"
        />
        <img
          alt="User"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          className="h-8"
        />
      </div>
    </div>
  );
}

export default Head;
