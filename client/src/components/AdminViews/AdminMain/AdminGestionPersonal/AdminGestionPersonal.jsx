import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Personal from "./Personal";

import AddNewEmployee from "./AddNewEmployee"
import UpdateEmployee from "./UpdateEmployee"

const AdminGestionPersonal = () => {
  return <div>
   
    <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="nuevo-empleado" element={<AddNewEmployee />} />
        <Route path="actualizar-empleado/:id" element={<UpdateEmployee />} />
      </Routes>
  </div>;
};

export default AdminGestionPersonal;
