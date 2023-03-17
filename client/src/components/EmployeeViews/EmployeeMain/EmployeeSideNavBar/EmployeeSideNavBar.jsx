import React from "react";
import { Link } from "react-router-dom"
const EmployeeNavBar = () => {
  return <nav>
    <Link to="/user">&nbsp;Inicio</Link>
    <Link to="/user">&nbsp;Perfil</Link>
    <Link to="/user">&nbsp;Solicitudes</Link>
    <Link to="/user">&nbsp;Tareas</Link>
    <Link to="/user">&nbsp;Agenda</Link>
    <Link to="/user">&nbsp;Gastos&nbsp;</Link>
    <Link to="/" ><button>Cerrar sesión</button></Link>

  </nav>;
};

export default EmployeeNavBar;
