import React, { useState } from "react";
import "./AgregarMensaje.css";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const AgregarMensaje = ({ agregarMensaje }) => {
  const [inputState, setInputState] = useState("");

  const handleInputChange = (event) => {
    setInputState(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputState.trim() !== "") {
      const newMessage = {
        autor: "yo",
        texto: inputState,
        estado: "visto",
        dia: "hoy",
        hora: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        id: Date.now(), // Asegúrate de tener un id único
      };
      agregarMensaje(newMessage);
      setInputState("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="inputContainer">
      <div className="iconsInput">
        <BsEmojiLaughingFill size={25} />
        <FiPlus size={25} />
      </div>
      <input
        value={inputState}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="inputMensaje"
        type="text"
        placeholder="Escriba un mensaje"
      />
      <div className="iconsInput">
        <IoSendSharp onClick={handleSendMessage} size={25} />
        <FaMicrophone size={25} />
      </div>
    </div>
  );
};

export default AgregarMensaje;
