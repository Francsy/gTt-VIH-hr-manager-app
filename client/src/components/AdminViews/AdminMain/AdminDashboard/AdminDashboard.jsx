import React, { useEffect } from "react";
import MensajeCard from "./MensajeCard";
import AdminAccesosCard from "./AdminAccesosCard"
import AusenciasCard from "./AusenciasCard";
import EventsCard from "../../../EmployeeViews/EmployeeMain/EmployeeDashboard/EventsCard"

import { useDispatch } from "react-redux";
import { unauthenticateAdmin } from '../../../../redux/slices/authSlice'
import axios from "axios";



const AdminDashboard = () => {

  const dispatch = useDispatch()

  const logout = async () => {
    try {

      await axios.get('/api/logout')
      dispatch(unauthenticateAdmin())
      localStorage.removeItem('isAuth')
      localStorage.removeItem('isAdmin')

    }catch (e){
      console.log(e)
    }
  }

  const checkAdminAuth = async () => {
    try {
      const res = await axios.get('api/admin/check')
      console.log(res.data.message)
    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    checkAdminAuth()
    // eslint-disable-next-line
  }, [])



  return <div className="admin-dashboard">
    <MensajeCard />
    <AdminAccesosCard />
    <AusenciasCard />
    <EventsCard />
  </div>;
};

export default AdminDashboard;
