import React from "react";
import "./ChatScreen.css";
import AgregarMensaje from "../Components/Chat/AgregarMensaje/AgregarMensaje";
import ChatHeader from "../Components/Chat/ChatHeader/ChatHeader";
import ListaMensajes from "../Components/Chat/ListaMensajes/ListaMensajes";
import { useState, useEffect } from "react";

const ChatScreen = ({ chatId }) => {
  const [mensajes, setMensajes] = useState([]);
  const [contactoActual, setContactoActual] = useState({
    nombre: "",
    foto: "",
  });

  useEffect(() => {
    const cargarMensajes = async () => {
      const response = await fetch("/Chats.json");
      const chats = await response.json();
      const chatActual = chats.find((chat) => chat.id === chatId);
      if (chatActual) {
        setContactoActual({ nombre: chatActual.nombre, foto: chatActual.foto });
      }
      const mensajesResponse = await fetch(`/${chatActual.mensajes}`);
      const mensajesData = await mensajesResponse.json();
      setMensajes(mensajesData);
    };

    cargarMensajes();
  }, [chatId]);

  const agregarMensaje = (nuevoMensaje) => {
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
  };

  return (
    <div className="chatScreen">
      <ChatHeader nombre={contactoActual.nombre} foto={contactoActual.foto} />
      <div className="listaMensajes">
        <ListaMensajes mensajes={mensajes} />
      </div>
      <div className="agregarMensaje">
        <AgregarMensaje agregarMensaje={agregarMensaje} />
      </div>
    </div>
  );
};
export default ChatScreen;
