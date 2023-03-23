import React, {useContext} from "react";
import { checkUserContext } from "../../../../../context/checkUserContext";

const InfoCard = () => {
  const { userHours} = useContext(checkUserContext)

  return <div className="info-card">
    <h1>Información de interés:</h1>
    <h2>Dispones de:</h2>
    <p>5 días de vacaciones</p>
    <p>{Math.floor(userHours)} horas extras a consumir antes del: 17-10-2023</p>
  </div>;
};

export default InfoCard;
