import React from "react";
import IconEdit from "../../../../../assets/icon-edit.svg"

const Personal = () => {
  return <div>
    <input type="text" placeholder="Buscar"></input><button>+ Añadir trabajador</button>
    <table>
    <table>
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
        {/* {trabajadores.map(trabajador => (
          <tr key={trabajador.id}>
            <td>{trabajador.fecha}</td>
            <td>{trabajador.nombre}</td>
            <td>{trabajador.apellido}</td>
            <td>{trabajador.jornada}</td>
            <td>{trabajador.notificacion}</td>
            <td><button></button></td>
          </tr>
        ))} */}
         
          <tr key="1">
            <td>22/12/1991</td>
            <td>Fran</td>
            <td>Hdez</td>
            <td>Full-time</td>
            <td></td>
            <td><img src={IconEdit} alt="" /></td>
          </tr>
      
      </tbody>
    </table>

    </table>
  </div>;
};

export default Personal;
