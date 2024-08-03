import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Chat/Dashboard/Dashboard";
import ChatScreen from "./Screens/ChatScreen";
import "./App.css";

const App = () => {
  const [chatId, setChatId] = useState(null);

  return (
    <div className="appContainer">
      <Dashboard setChatId={setChatId} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="initialScreen">Bienvenido a la aplicación</div>
          }
        />
        {chatId && (
          <Route
            path={`/chat/${chatId}`}
            element={<ChatScreen chatId={chatId} />}
          />
        )}
      </Routes>
    </div>
  );
};

export default App;
