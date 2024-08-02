import React from "react";
import "./ChatScreen.css";
import Dashboard from "../Components/Chat/Dashboard/Dashboard";
import AgregarMensaje from "../Components/Chat/AgregarMensaje/AgregarMensaje";
import ChatHeader from "../Components/Chat/ChatHeader/ChatHeader";
import ListaMensajes from "../Components/Chat/ListaMensajes/ListaMensajes";
import { useState, useEffect } from "react";

const ChatScreen = () => {
  const [mensajes, setMensajes] = useState([]);
  const [chatId, setChatId] = useState(1);
  const [contactoActual, setContactoActual] = useState({
    nombre: "",
    foto: "",
  });

  useEffect(() => {
    const cargarMensajes = async () => {
      const response = await fetch("/Chats.json");
      console.log(response);
      const chats = await response.json();
      console.log(chats);
      const chatActual = chats.find((chat) => chat.id === chatId);
      console.log(chatActual);
      if (chatActual) {
        setContactoActual({ nombre: chatActual.nombre, foto: chatActual.foto });
      }
      const mensajesResponse = await fetch(`/${chatActual.mensajes}`);
      console.log(mensajesResponse);
      const mensajesData = await mensajesResponse.json();
      console.log(mensajesData);
      setMensajes(mensajesData);
    };

    cargarMensajes();
  }, [chatId]);

  const agregarMensaje = (nuevoMensaje) => {
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
  };

  return (
    <div className="containerPhone">
      <Dashboard setChatId={setChatId} />
      <div className="phone">
        <ChatHeader nombre={contactoActual.nombre} foto={contactoActual.foto} />
        <div className="listaMensajes">
          <ListaMensajes mensajes={mensajes} />
        </div>
        <div className="agregarMensaje">
          <AgregarMensaje agregarMensaje={agregarMensaje} />
        </div>
      </div>
    </div>
  );
};
export default ChatScreen;
