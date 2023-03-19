import React from "react";
import { Link } from "react-router-dom";
import Smile from "../../../../../assets/smile.svg";
import Inbox from "../../../../../assets/inbox.svg";
import Check from "../../../../../assets/check.svg";
import Calendar from "../../../../../assets/calendar.svg";
import Coins from "../../../../../assets/coins.svg";

const EmployeeAccesosCard = () => {
  return (
    <div className="employee-accesos-card">
      <h1>Accesos Rápidos</h1>
      <div className="accesos-items">
        <Link to="/user">
          <img src={Smile} alt="" />
          <p>Mi perfil</p>
        </Link>
        <Link to="/user">
          <img src={Inbox} alt="" />
          <p>Solicitudes</p>
        </Link>
        <Link to="/user">
          <img src={Check} alt="" />
          <p>Tareas</p>
        </Link>
        <Link to="/user">
          <img src={Calendar} alt="" />
          <p>Agenda</p>
        </Link>
        <Link to="/user">
          <img src={Coins} alt="" />
          <p>Gastos</p>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeAccesosCard;
