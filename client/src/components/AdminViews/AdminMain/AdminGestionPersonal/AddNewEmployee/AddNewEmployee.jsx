import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../../../../assets/arrow-left.svg";
import axios from "axios";

const AddNewEmployee = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido1 = e.target.apellido1.value;
    const apellido2 = e.target.apellido2.value;
    const telefono = e.target.telefono.value;
    const email = e.target.email.value;
    const fechaAlta = e.target.fechaAlta.value;
    const fechaBaja = e.target.fechaBaja.value;
    const categoria = e.target.categoria.value;
    const jornada = e.target.jornada.value;

    if (nombre && apellido1 && email && categoria && jornada && fechaAlta) {
      try {
        const res = await axios.post("/api/admin/createuser", {
          nombre,
          apellido1,
          apellido2,
          telefono,
          email,
          fechaAlta,
          fechaBaja,
          categoria,
          jornada,
        });
        setMessage(res.data.message);
        setTimeout(() => {
          navigate("/admin/personal");
        }, 2500);
      } catch (error) {
        setMessage("Este usuario ya existe"); //A mejoorar desde el back para que la respuesta específica este mejorada
      }
    } else {
      setMessage("Faltan algunos campos requeridos");
    }
  };

  return (
    <div className="employee-container">
  <div className="employee-header">
    <Link to="/admin/personal">
      <button className="arrow">
        <img src={ArrowLeft} alt="" />
      </button>
    </Link>
    <h1 className="employee-title">Nuevo empleado:</h1>
  </div>
  <form onSubmit={handleSubmit} className="employee-form">
    <div className="fisrt-lane">
      <label htmlFor="city">Nombre*</label>
      <input type="text" name="nombre" />
      <label htmlFor="apellido1">Primer apellido*</label>
      <input type="text" name="apellido1" />
      <label htmlFor="apellido2">Segundo apellido</label>
      <input type="text" name="apellido2" />
    </div>
    <div className="fisrt-lane">
      <label htmlFor="telefono">Teléfono</label>
      <input type="number" name="telefono" />
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" />
    </div>
    <div className="fisrt-lane">
      <label htmlFor="fechaAlta">Fecha Alta*</label>
      <input type="date" name="fechaAlta" />
      <label htmlFor="fechaBaja">Fecha Baja</label>
      <input type="date" name="fechaBaja" />
      <label htmlFor="categoria">Categoría*</label>
      <select name="categoria">
        <option value="">--Selecciona--</option>
        <option value="Colaborador/a">Colaborador/a</option>
        <option value="TES">TES</option>
        <option value="Administrativo/a">Administrativo/a</option>
        <option value="Informador/a legal">Informador/a legal</option>   
        <option value="Coordinador/a">Coordinador/a</option>
        <option value="Gerente">Gerente</option>
      </select>
      <label htmlFor="jornada">Jornada (nº de horas)*</label>
      <input type="number" name="jornada" />
    </div>
    <div className="button-container">
      <input type="submit" value="Crear empleado" className="btn-guardar btn" />
    </div>
  </form>
  {message ? <p>{message}</p> : <></>}
</div>

  );
};

export default AddNewEmployee;
