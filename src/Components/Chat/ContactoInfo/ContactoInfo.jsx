import React from "react";
import "./ContactoInfo.css";

const ContactoInfo = ({ contacto, onClose }) => {
  return (
    <div className="contactoInfoContainer">
      <button className="closeButton" onClick={onClose}>
        X
      </button>
      <div className="contactoInfoContent">
        <img
          src={contacto.foto}
          alt={`${contacto.nombre}'s photo`}
          className="contactoInfoPhoto"
        />
        <h2 className="contactoInfoName">{contacto.nombre}</h2>
        <span className="contactoInfoNumber">+3242342856</span>
        <ul className="contactoInfoList">
          <li>Disponible</li>
          <li>Archivos, enlaces y documentos</li>
          <li>Mensajes destacados</li>
          <li>Silenciar notificaciones</li>
          <li>Mensajes temporales</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactoInfo;
