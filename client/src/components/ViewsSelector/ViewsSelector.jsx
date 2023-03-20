import React from "react";
import { Link } from "react-router-dom";
import { FiUserCheck, FiUser } from "react-icons/fi";

const ViewsSelector = () => {
  return (
    <div className="container">
      <img
        src="https://pbs.twimg.com/profile_images/733194621589827584/0G4zcdJO_400x400.jpg"
        alt="Texto alternativo"
        className="logo"
      />
      <div className="button-container">
        <Link to="/admin" className="link">
          <button className="btn-empleado">
            <FiUser className="icon" /> <span>Administrador</span>
          </button>
        </Link>
        <Link to="/user" className="link">
          <button className="btn-admin">
            <FiUserCheck className="icon-empleado" /> <span>Empleado</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewsSelector;
