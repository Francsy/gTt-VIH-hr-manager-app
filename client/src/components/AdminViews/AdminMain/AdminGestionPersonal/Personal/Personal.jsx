import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import IconEdit from "../../../../../assets/icon-edit.svg";
import { BsSearch } from "react-icons/bs";

const Personal = () => {
  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/api/admin/getallusers");
      setTrabajadores(res.data);
    };
    getUsers();
  }, []);

  const changeDateFormat = (date) => {
    const dateArray = date.split("-");
    const day = dateArray[2];
    const month = dateArray[1];
    const year = dateArray[0];

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="personal-container">
      <label className="search-label">
        <BsSearch className="personal-icon"/>
        <div className="input-container">
          <input className="personal-search" type="text" placeholder="Buscar" />
          <Link to="/admin/personal/nuevo-empleado" class="personal-add-button">
            <button>+ Añadir trabajador</button>
          </Link>
        </div>
      </label>{" "}
      {trabajadores.length > 0 ? (
        <table className="personal-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Jornada</th>
              <th>Notificación</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {trabajadores.map((trabajador) => (
              <tr key={uuidv4()}>
                <td>{changeDateFormat(trabajador.fecha_alta_contrato)}</td>
                <td>{trabajador.nombre}</td>
                <td>{trabajador.apellido1}</td>
                <td>{trabajador.jornada_laboral} hrs</td>
                <td></td>
                <td>
                  <Link
                    to={`/admin/personal/actualizar-empleado/${trabajador.usuario_id}`}
                  >
                    <img className="icon-edit" src={IconEdit} alt="" />
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

export default Personal;
