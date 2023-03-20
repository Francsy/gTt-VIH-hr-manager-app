import React, {useContext} from "react";
import { checkUserContext } from "../../../../../context/checkUserContext";

const InfoCard = () => {
  const { userHours} = useContext(checkUserContext)

  return <div className="info-card">
    <h1>Información de interés:</h1>
    <h2>Dispones de:</h2>
    <p>X días de vacaciones</p>
    <p>{Math.floor(userHours)} horas extras a consumir antes del: Xfecha</p>
  </div>;
};

export default InfoCard;
