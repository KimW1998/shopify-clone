import React from "react";
import "./Player.css";

import Body from "./Body";
import Sidebar from "./SideBar";
import Footer from "./footer";

function Player({ spotify }: any) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
