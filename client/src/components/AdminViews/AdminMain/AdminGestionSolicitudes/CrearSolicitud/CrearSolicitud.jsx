import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../../../../assets/arrow-left.svg";
import axios from "axios";

const CrearSolicitud = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const fechaInicio = e.target.fechaInicio.value;
    const fechaFin = e.target.fechaFin.value;
    const motivo = e.target.motivo.value;
    const comment = e.target.comment.value;

    if (email && fechaInicio && fechaFin && motivo && comment) {
      try {
        const res = await axios.post("/api/admin/createrequest", {
          email,
          fechaInicio,
          fechaFin,
          motivo,
          comment,
        });
        setMessage(res.data.message);
      } catch (error) {
        setMessage("Error al crear solicitud"); //A mejoorar desde el back para que la respuesta específica este mejorada
      }
    } else {
      setMessage("Faltan algunos campos requeridos");
    }
  };

  return (
    <div className="solicitud-container">
      <div className="solicitud-header">
        <Link to="/admin/solicitudes">
          <button className="arrow">
            <img src={ArrowLeft} alt="" />
          </button>
        </Link>

        <h1>Solicitudes / Bandeja de entrada / Crear solicitud</h1>
      </div>
      {/* <h2 className="solicitud-title">Datos solicitud:</h2> */}
      <form className="solicitud-form" onSubmit={handleSubmit}>
        <div className="fisrt-lane">
          <label htmlFor="email">Dirección de Email:</label>
          <input type="email" name="email" />
          <label htmlFor="fechaInicio">Fecha/ Hora Inicio:</label>
          <input type="datetime-local" name="fechaInicio" />
          <label htmlFor="fechaFin">Fecha/ Hora Fin:</label>
          <input type="datetime-local" name="fechaFin" />
        </div>
        <div className="second-lane">
          <label htmlFor="motivo">Motivo Ausencia:</label>
          <select name="motivo">
            <option value="">--Selecciona--</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Ausencias">Ausencias</option>
            <option value="Otro">Otro</option>
          </select>
          </div>

          <label htmlFor="comment">Agregar comentario:</label>
          <textarea
            className="textarea-solicitud"
            name="comment"
            maxLength="165"
          />
        <div className="button-container">
          <input className="submit-btn" type="submit" value="Crear solicitud" />
        </div>
      </form>
      {message ? <p>{message}</p> : <></>}
    </div>
  );
};

export default CrearSolicitud;
