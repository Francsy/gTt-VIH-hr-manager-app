import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AdminSideNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const dispatch = useDispatch();

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

  return (
    <>
    <nav className={`sidenavbar ${isNavOpen ? "open" : "closed"}`}>
      <img
      src={"https://pbs.twimg.com/profile_images/733194621589827584/0G4zcdJO_400x400.jpg"}
      alt="Logo"
      className={`logo-img ${!isNavOpen ? "closed" : ""}`} // Añadir la clase 'closed' al logo cuando el sidenavbar esté cerrado
    />      <button onClick={toggleNav} className="toggle-nav-button">
        {isNavOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </button>
      <Link to="/admin">
        <img src={HomeIcon} alt="" />
        &nbsp;Inicio
      </Link>
      <Link to="/admin/personal">
        <img src={UsersIcon} alt="" />
        &nbsp;Personal
      </Link>
      <Link to="/admin/solicitudes">
        <img src={InboxIcon} alt="" />
        &nbsp;Solicitudes
      </Link>
      <Link to="/admin">
        <img src={LayersIcon} alt="" />
        &nbsp;Gestiones
      </Link>
      <Link to="/admin">
        <img src={CalendarIcon} alt="" />
        &nbsp;Agenda
      </Link>
      <Link to="/admin">
        <img src={CoinsIcon} alt="" />
        &nbsp;Gastos
      </Link>
      <Link to="/admin">
        <img src={ClockIcon} alt="" />
        &nbsp;Horarios
      </Link>
      <a href="https://informemensualgtt.nicepage.io/">
        <img src={EditIcon} alt="" />
        &nbsp;Informes
      </a>
      <Link to="/admin">
        <img src={ChecksIcon} alt="" />
        &nbsp;Permisos
      </Link>
      <Link to="/admin">
        <img src={CheckIcon} alt="" />
        &nbsp;Tareas
      </Link>
      <Link to="/admin">
        <img src={PagesIcon} alt="" />
        &nbsp;Nóminas
      </Link>
      <Link to="/admin">
        <img src={SmileIcon} alt="" />
        &nbsp;Mi perfil
      </Link>
      <button onClick={logout} className="logout-button">
        <img src={LogOutIcon} alt="" />
        &nbsp;Cerrar sesión
      </button>
    </nav>
    </>
  );

};

export default AdminSideNavBar;
