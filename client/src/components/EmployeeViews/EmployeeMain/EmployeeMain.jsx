import React from 'react';
import EmployeeSideNavBar from './EmployeeSideNavBar';
import EmployeeDashboard from './EmployeeDashboard';

const MainLayout = () => {
  return (
    <main className="main-layout">
      <EmployeeSideNavBar />
      <EmployeeDashboard />
    </main>
  );
};

export default MainLayout;
