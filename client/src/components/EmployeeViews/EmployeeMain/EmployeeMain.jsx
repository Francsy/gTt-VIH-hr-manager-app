// MainLayout.js
import React from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import EmployeeDashboard from './EmployeeDashboard';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <EmployeeSideNavBar />
      <EmployeeDashboard />
    </div>
  );
};

export default MainLayout;
