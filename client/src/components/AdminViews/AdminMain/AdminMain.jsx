import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";

const AdminMain = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Welcome to Admin Dashboard!</h1>} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </main>
  );
};

export default AdminMain;
