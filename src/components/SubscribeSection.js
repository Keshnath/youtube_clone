import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { API_KEY } from "../utils/constants";

const SubscribeSection = ({ channelId }) => {
  const [aboutChannel, setAboutChannel] = useState([]);

  const dispatch = useDispatch();
  const CHANNEL_DETAILS_API =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    channelId +
    "&key=" +
    API_KEY;

  const { snippet, statistics } = aboutChannel[0] || {};
  const { thumbnails } = snippet || {};

  const channelDetails = async () => {
    const data = await fetch(CHANNEL_DETAILS_API);
    const json = await data.json();
    setAboutChannel(json.items);
  };

  useEffect(() => {
    dispatch(closeMenu());
    channelDetails();
    return () => dispatch(toggleMenu());
  }, []);

  return (
    <div>
      <h1>This is Discription</h1>
      <div className="mt-5 flex justify-between">
        <div className="flex">
          <div>
            <img
              className="rounded-full border border-gray-300 h-10 w-10 mt-1"
              alt="logo"
              src={thumbnails?.default?.url}
            />
          </div>

          <div className="ml-3">
            <h1 className="font-medium">{snippet?.title}</h1>
            <h1 className="text-xs">
              {statistics?.subscriberCount} subsrciber
            </h1>
          </div>
          <div>
            <button className="p-2 w-24 ml-6 mt-1 rounded-l-full rounded-r-full bg-black text-white font-semibold ">
              Subsrcibe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
