import React from "react";
import profileAdmin from "../../../../../assets/profile-admin.png";
import profileEmployee from "../../../../../assets/profile-employee.png";

const AusenciasCard = () => {
  return (
    <div className="card">
      <h2 className="card-title">Próximas ausencias</h2>
      <table className="card-table">
        <thead>
          <tr>
            <th>Hoy</th>
            <th>Próximas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="card-cell">
              <img src={profileEmployee} alt="Empleado" />
            </td>
            <td className="card-cell">
              <img src={profileAdmin} alt="Administrador" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AusenciasCard;
