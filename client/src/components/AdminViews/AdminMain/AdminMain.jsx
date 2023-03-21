import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import AdminSideNavBar from "./AdminSideNavBar";
import AdminGestionPersonal from "./AdminGestionPersonal"
import AdminGestionSolicitudes from "./AdminGestionSolicitudes"

const AdminMain = () => {
  return (
    <main className="admin-main-layout">
      <AdminSideNavBar/>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="personal/*" element={<AdminGestionPersonal />} />
        <Route path="solicitudes/*" element={<AdminGestionSolicitudes />} />
      </Routes>
    </main>
  );
};

export default AdminMain;
