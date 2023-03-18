import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom"
import ArrowLeft from "../../../../../assets/arrow-left.svg"
import axios from 'axios';



const AddNewEmployee = () => {

  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido1 = e.target.apellido1.value;
    const apellido2 = e.target.apellido2.value;
    const telefono = e.target.telefono.value;
    const email = e.target.email.value;
    const categoria = e.target.categoria.value;
    const jornada = e.target.jornada.value;
    const password = e.target.password.value
    const passwordCheck = e.target.passwordCheck.value

    if (nombre && apellido1 && email && categoria && jornada && password && passwordCheck) {
      if (password === passwordCheck) {
        try {
          const res = await axios.post('/admin/createuser', {
            nombre,
            apellido1,
            apellido2,
            telefono,
            email,
            categoria,
            jornada,
            password
          });
          setMessage(res.data.message)
          setTimeout(() => {
            navigate("/admin/personal")
          }, 2000);
          
        } catch (error) {
          setMessage("Este usuario ya existe") //A mejoorar desde el back para que la respuesta específica este mejorada
        }
      } else {
        setMessage('Las contraseñas deben ser iguales')
      }
    } else {
      setMessage('Faltan algunos campos requeridos')
      
    }
  }





  return <div><Link to="/admin/personal"><button><img src={ArrowLeft} alt="" /></button></Link>
    <h1>Nuevo empleado:</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Nombre*</label>
      <input type="text" name="nombre" />
      <label htmlFor="apellido1">Primer apellido*</label>
      <input type="text" name="apellido1" />
      <label htmlFor="apellido2">Segundo apellido</label>
      <input type="text" name="apellido2" />
      <label htmlFor="telefono">Teléfono</label>
      <input type="number" name="telefono" />
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" />
      <label htmlFor="jornada">Jornada*</label>
      <select name="jornada">
        <option value="">--Selecciona--</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
      </select>
      <label htmlFor="categoria">Categoría*</label>
      <select name="categoria">
        <option value="">--Selecciona--</option>
        <option value="admin">Admin</option>
        <option value="empleado">Empleado</option>
      </select>
      <label htmlFor="password">Contraseña*</label>
      <input type="password" name="password" />
      <label htmlFor="passwordCheck">Repite la contraseña*</label>
      <input type="password" name="passwordCheck" />
      <input type="submit" value="Crear empleado" />
    </form>
    {message ? <p>{message}</p> : <></>}
  </div>;
};

export default AddNewEmployee;