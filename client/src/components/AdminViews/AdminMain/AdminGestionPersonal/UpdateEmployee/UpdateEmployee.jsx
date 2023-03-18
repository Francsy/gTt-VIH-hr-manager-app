import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ArrowLeft from "../../../../../assets/arrow-left.svg"


const UpdateEmployee = () => {
  
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [trabajador, setTrabajador] = useState({})
  const { id } = useParams()

  useEffect(()=> {
    const getUser = async (id) => {
      const res = await axios.get(`/api/admin/edituser/${id}`)
      console.log(res.data)
      setTrabajador(res.data)
      console.log(trabajador)
    }
    getUser(id)
  } , [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrabajador({...trabajador, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido1 = e.target.apellido1.value;
    const apellido2 = e.target.apellido2.value;
    const telefono = e.target.telefono.value;
    const email = e.target.email.value;
    const fechaAlta = e.target.fecha_alta_contrato.value;
    const fechaBaja = e.target.fecha_baja_contrato.value;
    const categoria = e.target.categoria.value;
    const jornada = e.target.jornada_laboral.value;
    

    if (nombre && apellido1 && email && categoria && jornada && fechaAlta ) {
      
        try {
          const res = await axios.put(`/api/admin/edituser/${id}`, {
            nombre,
            apellido1,
            apellido2,
            telefono,
            email,
            fechaAlta,
            fechaBaja,
            categoria,
            jornada
          });
          setMessage(res.data.message)
          setTimeout(() => {
            navigate("/admin/personal")
          }, 2500);
          
        } catch (error) {
          setMessage("Este usuario ya existe") //A mejoorar desde el back para que la respuesta específica este mejorada
        }
    
    } else {
      setMessage('Faltan algunos campos requeridos')
      
    }
  }





  return <div><Link to="/admin/personal"><button><img src={ArrowLeft} alt="" /></button></Link>
    <h1>Datos empleado:</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Nombre*</label>
      <input type="text" value={trabajador.nombre} name="nombre" onChange={handleInputChange} />
      <label htmlFor="apellido1" >Primer apellido*</label>
      <input type="text" value={trabajador.apellido1} name="apellido1" onChange={handleInputChange}  />
      <label htmlFor="apellido2">Segundo apellido</label>
      <input type="text" value={trabajador.apellido2} name="apellido2" onChange={handleInputChange}  />
      <label htmlFor="telefono">Teléfono</label>
      <input type="number" value={trabajador.telefono} name="telefono" onChange={handleInputChange}  />
      <label htmlFor="email">Email*</label>
      <input type="email" value={trabajador.email} name="email" onChange={handleInputChange}  />
      <label htmlFor="fechaAlta">Fecha Alta*</label>
      <input type="date" value={trabajador.fecha_alta_contrato} name="fecha_alta_contrato" onChange={handleInputChange} />
      <label htmlFor="fechaBaja">Fecha Baja</label>
      <input type="date"value={trabajador.fecha_baja_contrato} name="fecha_baja_contrato" onChange={handleInputChange}  />
      <label htmlFor="categoria">Categoría*</label>
      <select value={trabajador.categoria} name="categoria" onChange={handleInputChange} >
        <option value="">--Selecciona--</option>
        <option value="Colaborador/a">Colaborador/a</option>
        <option value="TES">TES</option>
        <option value="Administrativo/a">Administrativo/a</option>
        <option value="Informador/a legal">Informador/a legal</option>   
        <option value="Coordinador/a">Coordinador/a</option>
        <option value="Gerente">Gerente</option>
      </select>
      <label htmlFor="jornada">Jornada (nº de horas)*</label>
      <input type="number" value={trabajador.jornada_laboral} name="jornada_laboral" onChange={handleInputChange} />
      
      <input type="submit" value="Guardar" />
      <button>Eliminar</button>
    </form>
    
    {message ? <p>{message}</p> : <></>}
  </div>;
};


export default UpdateEmployee;
