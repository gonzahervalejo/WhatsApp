import React from "react";
import "./App.css";
import ChatScreen from "./Screens/ChatScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export default App;
