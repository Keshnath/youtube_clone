import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { nameGenerate, textGenerator } from "../utils/helper";

const LIveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  console.log(chatMessages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: nameGenerate(),
          message: textGenerator(25),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="border border-black h-[498px] ml-10 mr-16 rounded-lg bg-gray-100 p-4 shadow-md overflow-scroll flex flex-col-reverse ">
      {chatMessages.map((e, i) => (
        <ChatMessages key={i} name={e.name} message={e.message} />
      ))}
    </div>
  );
};

export default LIveChat;
