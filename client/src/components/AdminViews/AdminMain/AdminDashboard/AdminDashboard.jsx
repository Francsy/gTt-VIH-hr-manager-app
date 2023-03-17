import React from "react";
import MensajeCard from "./MensajeCard";
import AdminAccesosCard from "./AdminAccesosCard"
import AusenciasCard from "./AusenciasCard";
import EventsCard from "../../../EmployeeViews/EmployeeMain/EmployeeDashboard/EventsCard"

const AdminDashboard = () => {
  return <div className="admin-dashboard">
    <MensajeCard />
    <AdminAccesosCard />
    <AusenciasCard />
    <EventsCard />
  </div>;
};

export default AdminDashboard;
