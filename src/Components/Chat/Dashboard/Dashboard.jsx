import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ setChatId }) => {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarChats = async () => {
      const response = await fetch("/Chats.json");
      const data = await response.json();
      setChats(data);
    };

    cargarChats();
  }, []);

  const handleChatSelect = (id) => {
    setChatId(id);
    navigate(`/chat/${id}`);
  };

  return (
    <div className="dashboardContainer">
      <div className="section chats">
        <h2>Chats</h2>
        <div className="separator"></div>
        <ul className="chatList">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="chatCard"
              onClick={() => handleChatSelect(chat.id)}
            >
              <img
                src={chat.foto}
                alt={`${chat.nombre}'s photo`}
                className="chatPhoto"
              />
              <div className="chatName">{chat.nombre}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
