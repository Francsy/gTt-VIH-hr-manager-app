import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";

const AdminMain = () => {
  return (
    <main>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </main>
  );
};

export default AdminMain;
