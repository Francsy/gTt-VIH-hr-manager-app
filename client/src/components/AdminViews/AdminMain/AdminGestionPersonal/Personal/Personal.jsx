import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import IconEdit from "../../../../../assets/icon-edit.svg"

const Personal = () => {

  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(()=> {
    const getUsers = async () => {
      const res = await axios.get('/api/admin/getallusers')
      setTrabajadores(res.data)
    }
    getUsers()
  } , [])




  return <div>
    <input type="text" placeholder="Buscar"></input><Link to="/admin/personal/nuevo-empleado"><button>+ Añadir trabajador</button></Link>    <table>
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
        {trabajadores.map(trabajador => (
          <tr key={trabajador.id}>
            <td>{trabajador.fecha_alta_contrato}</td>
            <td>{trabajador.nombre}</td>
            <td>{trabajador.apellido1}</td>
            <td>{trabajador.jornada_laboral} hrs</td>
            <td></td>
            <td><Link to={`/admin/personal/actualizar-empleado/${trabajador.usuario_id}`}><img src={IconEdit} alt="" /></Link></td>
          </tr>
        ))}
         
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

  </div>;
};

export default Personal;
