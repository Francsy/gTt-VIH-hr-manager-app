import React, { useContext } from "react";
import { checkUserContext } from "../../../../../context/checkUserContext";

const FichajeCard = () => {
  const { userHours} = useContext(checkUserContext)


  return <div className="fichaje-card">
    <div>
      <h1>Fichaje</h1>
      <p>Tienes ({userHours}) horas extra acumuladas.</p>
    </div>
    <div>
      <h2>0 h 2 m</h2>
      <p>Jornada de hoy</p>
      <button>Comenzar</button>
    </div>
  </div>;
};

export default FichajeCard;
