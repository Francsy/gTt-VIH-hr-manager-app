import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unauthenticateAdmin } from '../../../../redux/slices/authSlice'

import axios from 'axios';



import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


import HomeIcon from "../../../../assets/home.svg";
import InboxIcon from "../../../../assets/inbox.svg";
import CalendarIcon from "../../../../assets/calendar.svg";
import CoinsIcon from "../../../../assets/coins.svg";
import CheckIcon from "../../../../assets/check.svg";
import SmileIcon from "../../../../assets/smile.svg";
import LogOutIcon from "../../../../assets/log-out.svg";



const EmployeeSideNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const dispatch = useDispatch()

  const logout = async () => {
    await axios.get('/api/logout')
    dispatch(unauthenticateAdmin())
    localStorage.removeItem('isAuth')
    localStorage.removeItem('isAdmin')
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
        <Link to="/user">
          <img src={HomeIcon} alt="" />
          &nbsp;Inicio
        </Link>
        <Link to="/user">
          <img src={InboxIcon} alt="" />
          &nbsp;Solicitudes
        </Link>
        <Link to="/user">
          <img src={CheckIcon} alt="" />
          &nbsp;Tareas
        </Link>
        <Link to="/user">
          <img src={CalendarIcon} alt="" />
          &nbsp;Agenda
        </Link>
        <Link to="/user">
          <img src={CoinsIcon} alt="" />
          &nbsp;Gastos&nbsp;
        </Link>
        <Link to="/user">
          <img src={SmileIcon} alt="" />
          &nbsp;Mi perfil
        </Link>
        <button onClick={logout}>
          <img src={LogOutIcon} alt="" />
          &nbsp;Cerrar sesión
        </button>
      </nav>
    </>
  );
};

export default EmployeeSideNavBar;
