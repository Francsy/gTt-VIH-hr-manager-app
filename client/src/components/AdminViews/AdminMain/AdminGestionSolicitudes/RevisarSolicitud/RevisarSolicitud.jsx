import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ArrowLeft from "../../../../../assets/arrow-left.svg"


const RevisarSolicitud = () => {
  const navigate = useNavigate()
  const [solicitud, setSolicitud] = useState({})
  const [render, setRender] = useState(false)
  

  const { id } = useParams()
  useEffect(() => {
    const getRequest = async (id) => {
      const res = await axios.get(`/api/admin/getrequest/${id}`)
      setSolicitud(res.data)
      setRender(true)
      console.log(res.data)
    }
    getRequest(id)
    // eslint-disable-next-line
  }, [])

  const allowRequest = async () => {
    try {
      await axios.get(`/api/admin/allowrequest/${id}`)
      navigate("/admin/solicitudes")
      
    } catch (error) {
      console.log(error)
    }

  }

  const rejectRequest = async () => {
    try {
      await axios.get(`/api/admin/rejectrequest/${id}`)
      navigate("/admin/solicitudes")
      
    } catch (error) {
      console.log(error)

    }
  }


  return <div>
    {render ?
    <>
    <Link to="/admin/solicitudes"><button><img src={ArrowLeft} alt="" /></button></Link>

    <h1>Solicitudes / Bandeja de entrada / Aprobación</h1>
    <h2>Datos solicitud:</h2>
    <div>
      <h3>Nombre:</h3>
      <p>{solicitud.Usuario.nombre}</p>
    </div>
    <div>
      <h3>Apellidos:</h3>
      <p>{solicitud.Usuario.apellido1} {solicitud.Usuario.apellido2}</p>
    </div>
    <div>
      <h3>Motivos:</h3>
      <p>{solicitud.motivo}</p>
    </div>
    {solicitud.fecha_inicio ?
      <div>
        <h3>Fecha inicio:</h3>
        <p>{solicitud.fecha_inicio}</p>
      </div> : <></>}
    {solicitud.fecha_inicio ?
      <div>
        <h3>Hora inicio:</h3>
        <p>{solicitud.hora_inicio}</p>
      </div> : <></>}
      {solicitud.fecha_fin ?
      <div>
        <h3>Fecha fin:</h3>
        <p>{solicitud.fecha_fin}</p>
      </div> : <></>}
      {solicitud.hora_fin ?
      <div>
        <h3>Fecha fin:</h3>
        <p>{solicitud.hora_fin}</p>
      </div> : <></>}
      <div>
      <h3>Comentario:</h3>
      <p>{solicitud.comentarios}</p>
    </div>
    <div>
      <h3>Jornada:</h3>
      <p>{solicitud.Usuario.jornada_laboral}</p>
    </div>
    <div>
      <h3>Categoríaa:</h3>
      <p>{solicitud.Usuario.categoria}</p>
    </div>
    <button onClick={allowRequest}>Aprobar</button>
    <button onClick={rejectRequest}>Rechazar</button>
  </>
    : 
    <p>Cargando...</p>
  }
  </div>
};

export default RevisarSolicitud;
