import React, { useState } from "react";
import "./ChatHeader.css";
import { IoSearchOutline } from "react-icons/io5";
import ContactoInfo from "../ContactoInfo/ContactoInfo";

const ChatHeader = ({ nombre, foto }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenInfo = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft" onClick={handleOpenInfo}>
        <img src={foto} alt={`${nombre}'s photo`} className="chatHeaderPhoto" />
        <div className="chatHeaderName">{nombre}</div>
      </div>
      <div className="headerRight">
        <IoSearchOutline size={30} className="icon" />
      </div>
      {showInfo && (
        <ContactoInfo contacto={{ nombre, foto }} onClose={handleCloseInfo} />
      )}
    </div>
  );
};

export default ChatHeader;
