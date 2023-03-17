import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";

const AdminMain = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        {/* EJEMPLO DE RUTA ANIDADA QUE NO SEA LA BASE => <Route path="dashboard" element={<AdminDashboard />} /> */}

      </Routes>
    </main>
  );
};

export default AdminMain;
