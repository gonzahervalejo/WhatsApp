import React from "react";
import "./ChatScreen.css";
import Dashboard from "../Components/Chat/Dashboard/Dashboard";
import AgregarMensaje from "../Components/Chat/AgregarMensaje/AgregarMensaje";
import ChatHeader from "../Components/Chat/ChatHeader/ChatHeader";
import ListaMensajes from "../Components/Chat/ListaMensajes/ListaMensajes";
import Mensajes from ".././Mensajes.json";
import { useState } from "react";

const ChatScreen = () => {
  const [nuevosMensajes, setNuevosMensajes] = useState(Mensajes);

  const agregarMensaje = (nuevoMensaje) => {
    setNuevosMensajes([...nuevosMensajes, nuevoMensaje]);
  };

  return (
    <div className="containerPhone">
      <Dashboard />
      <div className="phone">
        <ChatHeader />
        <div className="listaMensajes">
          <ListaMensajes mensajes={nuevosMensajes} />
        </div>
        <div className="agregarMensaje">
          <AgregarMensaje agregarMensaje={agregarMensaje} />
        </div>
      </div>
    </div>
  );
};
export default ChatScreen;
