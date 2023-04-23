import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCache } from "../utils/apiCacheSlice";

function Head() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestionsList, setsuggestionsList] = useState([]);
  const [searchDropDown, setSearchDropDown] = useState(false);
  const searchCahce = useSelector((state) => state.ApiCache);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  const searchTextApi = async () => {
    console.log("Apicall -- ", searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setsuggestionsList(json[1]);
    dispatch(
      addCache({
        [searchText]: json[1],
      })
    );
  };

  useEffect(() => {
    /**
     * make api call after every key press due to change of search text(ex. b b k i v i n e s) we are pressing key very slow show
     * it making call and generating decision for all the characters . and with every key press settimeout is created but what if
     * we press the another key during the 200ms wait of settimeout . then we have to clear that old api call and start a new call with new '
     * search text which reduce our api call
     *  this is called as debauncing
     */

    const timer = setTimeout(() => {
      if (searchCahce[searchText]) {
        return setsuggestionsList(searchCahce[searchText]);
      } else {
        searchTextApi();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="h-14 shadow-lg grid grid-flow-col items-center">
      <div className="flex col-span-1">
        <img
          className="h-8 ml-2 cursor-pointer"
          alt="menu"
          src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
          onClick={() => toggleMenuHandler()}
        />

        <img
          className="h-8 ml-4"
          alt="youtube-logo"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className="">
        <div>
          <input
            type="text"
            className="w-[29rem] h-8 rounded-l-full border border-gray-300 px-5 "
            placeholder="Search ..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              setSearchDropDown(true);
            }}
            onBlur={() => {
              setSearchDropDown(false);
            }}
          />
          <button className="rounded-r-full border border-gray-300 h-8 pr-2">
            Search
          </button>
        </div>
        {searchDropDown && (
          <div className=" bg-white ml-2 px-3 w-[28.5rem] rounded-lg shadow-lg absolute">
            <ul>
              {suggestionsList.map((e) => (
                <li className="p-2 hover:bg-gray-300 rounded-lg " key={e}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
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
