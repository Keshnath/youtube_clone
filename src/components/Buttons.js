import React from "react";

function Buttons() {
  const buttonNames = [
    "All",
    "News",
    "Mixes",
    "Music",
    "Live",
    "One piece",
    "JavaScript",
    "Gaming",
    "Market",
  ];
  return (
    <div className="m-3 ">
      {buttonNames.map((e,index) => (
        <button className="m-2 bg-gray-300 rounded-md p-1" key={index}>{e}</button>
      ))}
    </div>
  );
}

export default Buttons;
