import React from "react";

const ChatMessages = ({name , message}) => {
  return (
      <div className="">
        <div className="flex items-center ">
          <img
            alt="User"
            src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            className="h-8"
          />
          <span className="p-2 font-semibold">{name}</span>
          <span className="p-2 break-words">{message}</span>
        </div>
      </div>
    
  );
};

export default ChatMessages;
