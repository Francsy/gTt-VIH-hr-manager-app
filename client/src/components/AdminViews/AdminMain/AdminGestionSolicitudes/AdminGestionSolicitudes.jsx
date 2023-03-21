import React from "react";
import {Routes, Route} from "react-router-dom";
import Solicitudes from "./Solicitudes";
import CrearSolicitud from "./CrearSolicitud"
import RevisarSolicitud from "./RevisarSolicitud"
const AdminGestionSolicitudes = () => {
  return <div>
  <Routes>
      <Route path="/" element={<Solicitudes />} />
      <Route path="nueva-solicitud" element={< CrearSolicitud/>} />
      <Route path="revisar-solicitud/:id" element={<RevisarSolicitud />} />
    </Routes>
</div>;
};

export default AdminGestionSolicitudes;


