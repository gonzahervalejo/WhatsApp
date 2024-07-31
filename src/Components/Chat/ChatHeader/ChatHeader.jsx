import React from "react";
import "./ChatHeader.css";
import { IoSearchOutline } from "react-icons/io5";

const ChatHeader = () => {
  return (
    <div className="headerContainer">
      <div className="headerRight">
        <IoSearchOutline size={30} className="icon" />
      </div>
    </div>
  );
};
export default ChatHeader;
