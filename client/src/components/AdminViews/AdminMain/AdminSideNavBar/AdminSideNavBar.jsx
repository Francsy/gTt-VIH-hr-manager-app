import React from "react";
import { Link } from "react-router-dom"

const AdminSideNavBar = () => {
  return <nav>
    <Link to="/admin">&nbsp;Inicio</Link>
    <Link to="/admin/personal">&nbsp;Personal</Link>
    <Link to="/admin">&nbsp;Solicitudes</Link>
    <Link to="/admin">&nbsp;Gestiones</Link>
    <Link to="/admin">&nbsp;Agenda</Link>
    <Link to="/admin">&nbsp;Gastos</Link>
    <Link to="/admin">&nbsp;Horarios</Link>
    <Link to="/admin">&nbsp;Informes</Link>
    <Link to="/admin">&nbsp;Permisos</Link>
    <Link to="/admin">&nbsp;Tareas</Link>
    <Link to="/admin">&nbsp;Nóminas</Link>
    <Link to="/admin">&nbsp;Mi perfil</Link>
    <Link to="/admin/select">&nbsp;Selección de sesión&nbsp;</Link>
    <Link to="/" ><button>Cerrar sesión</button></Link>
  </nav>;
};

export default AdminSideNavBar;
