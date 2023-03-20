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
    <div class="personal-container">
      <label class="search-label">
        <BsSearch className="personal-icon"/>
        <div class="input-container">
          <input class="personal-search" type="text" placeholder="Buscar" />
          <a href="/admin/personal/nuevo-empleado" class="personal-add-button">
        <button>+ Añadir trabajador</button>
      </a>
        </div>
      </label>{" "}
      
      {trabajadores.length > 0 ? (
        <table class="personal-table">
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
                  <a
                    href={`/admin/personal/actualizar-empleado/${trabajador.usuario_id}`}
                  >
                    <img src={IconEdit} alt="" />
                  </a>
                  <a>
                    <button className="">Detalle</button>
                  </a>
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
