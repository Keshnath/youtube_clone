import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="shadow-lg pr-28 p-5 cursor-pointer ">
      <div>
        <Link to="/">
          <h1 className="text-lg p-1">Home</h1>
        </Link>

        <h1 className="text-lg p-1">Shorts</h1>
        <h1 className="text-lg p-1">Subscriptions</h1>
      </div>
      <hr className="mt-2 mb-2" />
      <div>
        <h1 className="text-lg p-1">Library</h1>
        <h1 className="text-lg p-1">Your Videos</h1>
        <h1 className="text-lg p-1">History</h1>
      </div>
      <hr className="mt-2 mb-2" />
      <div>
        <h1 className="text-lg p-1">Subscription</h1>
        <ul className="ml-2">
          <li className="m-1">Tilak</li>
          <li className="m-1">The Lallantop</li>
          <li className="m-1">Baby Shark</li>
          <li className="m-1">JavaScript</li>
          <li className="m-1">Roadies</li>
          <li className="m-1">BB ki cines</li>
          <li className="m-1">AajTak</li>
          <li className="m-1">Ndtv</li>
        </ul>
      </div>
      <hr className="mt-2 mb-2" />
    </div>
  );
}

export default Sidebar;
