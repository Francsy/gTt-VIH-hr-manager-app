import React, {useContext} from "react";
import ProfileImg from "../../../assets/profile-employee.png";
import { checkUserContext } from "../../../context/checkUserContext";


const EmployeeHeader = () => {
  const { userName } = useContext(checkUserContext)


  return (
    <header>
      <div className="header-employee">
        <button>
          <img src={ProfileImg} alt="" />
          {userName}
        </button>
      </div>
    </header>
  );
};

export default EmployeeHeader;
