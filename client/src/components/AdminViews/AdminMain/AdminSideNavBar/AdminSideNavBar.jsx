import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { unauthenticateAdmin } from '../../../../redux/slices/authSlice';
import axios from 'axios';




import HomeIcon from "../../../../assets/home.svg"
import UsersIcon from "../../../../assets/users.svg"
import InboxIcon from "../../../../assets/inbox.svg"
import LayersIcon from "../../../../assets/layers.svg"
import CalendarIcon from "../../../../assets/calendar.svg"
import CoinsIcon from "../../../../assets/coins.svg"
import ClockIcon from "../../../../assets/clock.svg"
import EditIcon from "../../../../assets/edit.svg"
import ChecksIcon from "../../../../assets/checks.svg"
import CheckIcon from "../../../../assets/check.svg"
import PagesIcon from "../../../../assets/pages.svg"
import SmileIcon from "../../../../assets/smile.svg"
import LogOutIcon from "../../../../assets/log-out.svg"


const AdminSideNavBar = () => {

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



  return <nav>
    <Link to="/admin"><img src={HomeIcon} alt="" />&nbsp;Inicio</Link>
    <Link to="/admin/personal"><img src={UsersIcon} alt="" />&nbsp;Personal</Link>
    <Link to="/admin"><img src={InboxIcon} alt="" />&nbsp;Solicitudes</Link>
    <Link to="/admin"><img src={LayersIcon} alt="" />&nbsp;Gestiones</Link>
    <Link to="/admin"><img src={CalendarIcon} alt="" />&nbsp;Agenda</Link>
    <Link to="/admin"><img src={CoinsIcon} alt="" />&nbsp;Gastos</Link>
    <Link to="/admin"><img src={ClockIcon} alt="" />&nbsp;Horarios</Link>
    <Link to="/admin"><img src={EditIcon} alt="" />&nbsp;Informes</Link>
    <Link to="/admin"><img src={ChecksIcon} alt="" />&nbsp;Permisos</Link>
    <Link to="/admin"><img src={CheckIcon} alt="" />&nbsp;Tareas</Link>
    <Link to="/admin"><img src={PagesIcon} alt="" />&nbsp;Nóminas</Link>
    <Link to="/admin"><img src={SmileIcon} alt="" />&nbsp;Mi perfil</Link>
    <button onClick={logout} ><img src={LogOutIcon} alt="" />&nbsp;Cerrar sesión</button>
  </nav>;
};

export default AdminSideNavBar;
