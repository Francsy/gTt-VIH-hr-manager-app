import React, { useState } from "react";
import { Link } from "react-router-dom"
import ArrowLeft from "../../../../../assets/arrow-left.svg"
import axios from 'axios';

const CrearSolicitud = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const fechaInicio = e.target.fechaInicio.value;
    const fechaFin = e.target.fechaFin.value;
    const motivo = e.target.motivo.value;
    const comment = e.target.comment.value;


    if (email && fechaInicio && fechaFin && motivo && comment) {

      try {
        const res = await axios.post('/api/admin/createrequest', {
          email,
          fechaInicio,
          fechaFin,
          motivo,
          comment
        });
        setMessage(res.data.message)
        

      } catch (error) {
        setMessage("Error al crear solicitud") //A mejoorar desde el back para que la respuesta específica este mejorada
      }

    } else {
      setMessage('Faltan algunos campos requeridos')

    }
  }


  return <div> <Link to="/admin/solicitudes"><button><img src={ArrowLeft} alt="" /></button></Link>

    <h1>Solicitudes / Bandeja de entrada / Crear solicitud</h1>
    <h2>Datos solicitud:</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" />
      <label htmlFor="fechaInicio">Fecha y Hora Inicio*</label>
      <input type="datetime-local" name="fechaInicio" />
      <label htmlFor="fechaFin">Fecha y Hora Fin*</label>
      <input type="datetime-local" name="fechaFin" />
      <label htmlFor="motivo">Motivo*</label>
      <select name="motivo">
        <option value="">--Selecciona--</option>
        <option value="Vacaciones">Vacaciones</option>
        <option value="Ausencias">Ausencias</option>
        <option value="Otro">Otro</option>
      </select>
      <label htmlFor="comment">Agregar comentario*</label>
      <textarea name="comment" maxLength="165" />
      <input type="submit" value="Crear solicitud"/>
    </form>
    {message ? <p>{message}</p> : <></>}


  </div>;
};

export default CrearSolicitud;
