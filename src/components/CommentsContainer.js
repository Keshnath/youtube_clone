import React from "react";
import Comments from "./Comments";
import { COMMENTS_DATA } from "../utils/constants";

const CommentsList = ({ data }) => {
  return (
    <div className="">
      {data.map((e, ind) => (
        <div key={ind} className="">
          <div className="bg-gray-100 m-1 rounded-lg shadow-md ">
            <Comments data={e} />
          </div>
          <div className=" ml-5 ">
            <CommentsList data={e.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl text-bold mb-5">Comments : </h1>
      <CommentsList data={COMMENTS_DATA} />
    </div>
  );
};

export default CommentsContainer;
