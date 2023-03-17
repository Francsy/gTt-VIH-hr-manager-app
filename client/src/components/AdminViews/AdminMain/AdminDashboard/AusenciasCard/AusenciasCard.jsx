import React from "react";
import profileAdmin from "../../../../../assets/profile-admin.png"
import profileEmployee from "../../../../../assets/profile-employee.png"

const AusenciasCard = () => {
  return <div>
    <h2>Próximas ausencias</h2>
    <table>
    <thead>
        <tr>
          <th>Hoy</th>
          <th>Próximas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          
              <img src={profileEmployee} alt=""/>
          
          </td>
          <td>
          <img src={profileAdmin} alt="" />
            
          </td>
        </tr>
      </tbody>
    </table>
    </div>;

};

export default AusenciasCard;
