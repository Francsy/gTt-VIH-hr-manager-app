import React from "react";
import ProfileImg from "../../../assets/profile-admin.png"
const AdminHeader = () => {
  return <header>
    <div><button><img src={ProfileImg} alt="" />Nombre admin</button></div>
  </header>;
};

export default AdminHeader;
