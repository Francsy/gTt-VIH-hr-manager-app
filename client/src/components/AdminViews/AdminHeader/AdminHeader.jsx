import React from "react";
import ProfileImg from "../../../assets/profile-admin.png"
const AdminHeader = () => {
  return (
    <header>
      <div className="header-admin">
        <button>
          <img src={ProfileImg} alt="" />
          Nombre empleado
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
