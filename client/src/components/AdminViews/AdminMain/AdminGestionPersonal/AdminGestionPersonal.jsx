import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Personal from "./Personal";
import GestionHoras from "./GestionHoras";
import GestionAusencias from "./GestionAusencias";

const AdminGestionPersonal = () => {
  return <div>
    <Link to="/admin/personal"><button>Personal</button></Link>
    <Link to="/admin/personal/gestion-horas"><button>Gestión de horas</button></Link>
    <Link to="/admin/personal/gestion-ausencias"><button>Gestión de ausencias</button></Link>
    <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="gestion-horas" element={<GestionHoras />} />
        <Route path="gestion-ausencias" element={<GestionAusencias />} />
      </Routes>
  </div>;
};

export default AdminGestionPersonal;
