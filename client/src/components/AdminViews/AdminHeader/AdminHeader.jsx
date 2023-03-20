import React, {useContext} from "react";
import ProfileImg from "../../../assets/profile-admin.png"
import { checkAdminContext } from "../../../context/checkAdminContext";





const AdminHeader = () => {
  const { adminName } = useContext(checkAdminContext)

  return <header>
    <div><button><img src={ProfileImg} alt="" />{adminName}</button></div>
  </header>;
};

export default AdminHeader;
