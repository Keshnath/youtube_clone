import React from "react";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className=" flex">
      <div className="m-3">
        <img
          className="h-6 w-6"
          alt="user"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
        />
      </div>

      <div>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <h1 className="break-words">{text}</h1>
      </div>
    </div>
  );
};

export default Comments;
