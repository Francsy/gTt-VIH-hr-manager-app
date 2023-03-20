import React, {useContext} from "react";
import BellRing from "../../../../../assets/bell-ring.svg"
import { checkAdminContext } from "../../../../../context/checkAdminContext";


const MensajeCard = () => {
  const { adminName } = useContext(checkAdminContext)

  return <div>
    <h1>Hola {adminName}!</h1>
    <div>
      <img src={BellRing} alt="" />
      <p>Tienes (0) solicitudes pendientes</p>
    </div>
  </div>;
};

export default MensajeCard;
