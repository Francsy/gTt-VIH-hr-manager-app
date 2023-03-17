import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import AdminSideNavBar from "./AdminSideNavBar";

const AdminMain = () => {
  return (
    <main>
      <AdminSideNavBar/>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        {/* EJEMPLO DE RUTA ANIDADA QUE NO SEA LA BASE => <Route path="dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </main>
  );
};

export default AdminMain;
