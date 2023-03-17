import React from "react";
import { Link } from "react-router-dom"

const AdminNavBar = () => {
  return <nav>
    <Link to="/admin">Panel Admin</Link>
    <Link to="/admin/select">Selección de sesión</Link>
  </nav>;
};

export default AdminNavBar;
