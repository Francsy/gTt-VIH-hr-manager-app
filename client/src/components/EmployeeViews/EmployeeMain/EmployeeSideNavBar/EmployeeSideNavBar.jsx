import React from "react";
import { Link } from "react-router-dom"
const EmployeeSideNavBar = () => {
  return <nav>
    <Link to="/user">&nbsp;Inicio</Link>
    <Link to="/user">&nbsp;Solicitudes</Link>
    <Link to="/user">&nbsp;Tareas</Link>
    <Link to="/user">&nbsp;Agenda</Link>
    <Link to="/user">&nbsp;Gastos&nbsp;</Link>
    <Link to="/user">&nbsp;Mi perfil</Link>
    <Link to="/" ><button>Cerrar sesión</button></Link>

  </nav>;
};

export default EmployeeSideNavBar;
