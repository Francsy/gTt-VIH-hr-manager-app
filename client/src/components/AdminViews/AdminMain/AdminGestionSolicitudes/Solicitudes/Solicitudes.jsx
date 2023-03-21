import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import IconEdit from "../../../../../assets/icon-edit.svg";
import { BsSearch } from "react-icons/bs";

const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/api/admin/getallrequests");
      console.log(res.data)
      setSolicitudes(res.data);
    };
    getUsers();
  }, []);

  const changeDateFormat = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  
  return (
    <div className="personal-container">
      <label className="search-label">
        <BsSearch className="personal-icon"/>
        <div className="input-container">
          <input className="personal-search" type="text" placeholder="Buscar" />
          <Link to="/admin/solicitudes/nueva-solicitud" class="personal-add-button">
        <button>+ Crear solicitud</button>
      </Link>
        </div>
      </label>{" "}
      
      {solicitudes.length > 0 ? (
        <table className="personal-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre y Apellido</th>
              <th>Tiempo</th>
              <th>Motivo</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((solicitud) => (
              <tr key={uuidv4()}>
                <td>{changeDateFormat(solicitud.fecha_solicitud)}</td>
                <td>{solicitud.Usuario.nombre} {solicitud.Usuario.apellido1}</td>
                <td>{solicitud.duracion}</td>
                <td>{solicitud.motivo}</td>
                <td>{solicitud.revisado ? (solicitud.aprobado ? 'Aprobado': 'Rechazado') : 'Pendiente' }</td>
                <td>
                  <Link
                    to={`/admin/solicitudes/revisar-solicitud/${solicitud.solicitud_id}`}
                  >
                    <img src={IconEdit} alt="" />
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Solicitudes;
