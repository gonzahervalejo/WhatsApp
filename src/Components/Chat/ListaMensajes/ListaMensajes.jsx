import React from "react";
import Mensaje from "../Mensaje/Mensaje";

const ListaMensajes = ({ mensajes }) => {
  return (
    <>
      {mensajes.map((mensaje) => (
        <Mensaje
          key={mensaje.id}
          autor={mensaje.autor}
          texto={mensaje.texto}
          estado={mensaje.estado}
          dia={mensaje.dia}
          hora={mensaje.hora}
        />
      ))}
    </>
  );
};

export default ListaMensajes;
