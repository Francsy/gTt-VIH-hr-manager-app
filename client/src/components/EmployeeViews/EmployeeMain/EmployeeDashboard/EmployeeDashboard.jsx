import React from "react";
import FichajeCard from "./FichajeCard"
import EmployeeAccesosCard from "./EmployeeAccesosCard"
import InfoCard from "./InfoCard"
import EmployeesEventsCard from "./EventsCard"

const EmployeeDashboard = () => {
  return <div className="employee-dashboard">
    <FichajeCard />
    <EmployeeAccesosCard />
    <InfoCard />
    <EmployeesEventsCard />
  </div>;
};

export default EmployeeDashboard;
