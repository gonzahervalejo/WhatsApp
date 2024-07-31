import React from "react";
import "./Mensaje.css";

const Mensaje = ({ autor, texto, estado, dia, hora }) => {
  const claseMensaje = autor === "yo" ? "mensaje-yo" : "mensaje-otro";
  return (
    <div className={`mensaje ${claseMensaje}`}>
      <ul>
        <li>
          <strong>{autor}:</strong> {texto}
        </li>
        <li>{estado}</li>
        <li>
          {dia} - {hora}
        </li>
      </ul>
    </div>
  );
};

export default Mensaje;
