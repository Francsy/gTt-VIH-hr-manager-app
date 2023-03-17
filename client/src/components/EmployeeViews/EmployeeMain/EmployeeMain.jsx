import React from "react";
import { Route, Routes } from 'react-router-dom';
import EmployeeDashboard from './EmployeeDashboard'
import EmployeeSideNavBar from "./EmployeeSideNavBar";

const EmployeeMain = () => {
  return <main>
    <EmployeeSideNavBar />
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
      </Routes>
    </main>
};

export default EmployeeMain;
