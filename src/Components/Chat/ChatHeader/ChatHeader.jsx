import React from "react";
import "./ChatHeader.css";
import { IoSearchOutline } from "react-icons/io5";

const ChatHeader = ({ nombre, foto }) => {
  const imagenDeMarcador = "url/to/placeholder-image.png";
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img
          src={foto || imagenDeMarcador}
          alt={nombre}
          className="contactImage"
        />
        <span className="contactName">{nombre}</span>
      </div>
      <div className="headerRight">
        <IoSearchOutline size={30} className="icon" />
      </div>
    </div>
  );
};

export default ChatHeader;
