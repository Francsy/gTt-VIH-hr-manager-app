import React from "react";
import { Route, Routes } from 'react-router-dom';
import EmployeeDashboard from './EmployeeDashboard'

const EmployeeMain = () => {
  return <main>
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
      </Routes>
    </main>
};

export default EmployeeMain;
