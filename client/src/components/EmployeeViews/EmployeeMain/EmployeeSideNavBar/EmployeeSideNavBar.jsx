import React from "react";
import { Link } from "react-router-dom"

import HomeIcon from "../../../../assets/home.svg"
import InboxIcon from "../../../../assets/inbox.svg"
import CalendarIcon from "../../../../assets/calendar.svg"
import CoinsIcon from "../../../../assets/coins.svg"
import CheckIcon from "../../../../assets/check.svg"
import SmileIcon from "../../../../assets/smile.svg"
import LogOutIcon from "../../../../assets/log-out.svg"



const EmployeeSideNavBar = () => {
  return <nav>
    <Link to="/user"><img src={HomeIcon} alt="" />&nbsp;Inicio</Link>
    <Link to="/user"><img src={InboxIcon} alt="" />&nbsp;Solicitudes</Link>
    <Link to="/user"><img src={CheckIcon} alt="" />&nbsp;Tareas</Link>
    <Link to="/user"><img src={CalendarIcon} alt="" />&nbsp;Agenda</Link>
    <Link to="/user"><img src={CoinsIcon} alt="" />&nbsp;Gastos&nbsp;</Link>
    <Link to="/user"><img src={SmileIcon} alt="" />&nbsp;Mi perfil</Link>
    <Link to="/" ><img src={LogOutIcon} alt="" />&nbsp;Cerrar sesión</Link>

  </nav>;
};

export default EmployeeSideNavBar;
