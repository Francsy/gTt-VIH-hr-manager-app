import React from "react";
import ProfileImg from "../../../assets/profile-employee.png";
const EmployeeHeader = () => {
  return (
    <header>
      <div className="header-employee">
        <button>
          <img src={ProfileImg} alt="" />
          Nombre empleado
        </button>
      </div>
    </header>
  );
};

export default EmployeeHeader;
