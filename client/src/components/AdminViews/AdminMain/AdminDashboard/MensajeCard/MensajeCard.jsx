import React from "react";
import BellRing from "../../../../../assets/bell-ring.svg";

const MensajeCard = () => {
  return (
    <div className="card">
      <h1>Hola Nombre!</h1>
      <div className="card-body">
        <img src={BellRing} alt="" />
        <p>Tienes (0) solicitudes pendientes</p>
      </div>
    </div>
  );
};

export default MensajeCard;
