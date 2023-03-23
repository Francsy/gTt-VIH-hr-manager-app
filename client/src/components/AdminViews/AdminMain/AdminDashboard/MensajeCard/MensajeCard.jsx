
import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import BellRing from "../../../../../assets/bell-ring.svg";
import { checkAdminContext } from "../../../../../context/checkAdminContext";
import { Link } from 'react-router-dom';



const MensajeCard = () => {
  const { adminName } = useContext(checkAdminContext)
  const [pending, setPending] = useState('')

  useEffect(() => {
    const getPendingLength = async () => {
      const res = await axios.get(`/api/admin/pendingrequests`)
      setPending(res.data.length.toString())
    }
    getPendingLength()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card">
      <h1>Hola {adminName}!</h1>
      <div className="card-body">
        <Link to="/admin/solicitudes">
          <img src={BellRing} alt="" />
          <p>Tienes ({pending}) solicitudes pendientes</p>
        </Link>
      </div>
    </div>
  );
};

export default MensajeCard;
