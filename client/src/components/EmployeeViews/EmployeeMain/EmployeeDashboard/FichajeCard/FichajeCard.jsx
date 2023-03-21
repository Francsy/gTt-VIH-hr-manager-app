import React, { useState, useContext, useEffect } from "react";
import { checkUserContext } from "../../../../../context/checkUserContext";
import axios from 'axios'

const FichajeCard = () => {
  const { userHours } = useContext(checkUserContext)

  const [started, setStarted] = useState(false)
  const [time, setTime] = useState('')
  const [ended, setEnded] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const startWorking = async () => {
    try {
      const res = await axios.post('/api/user/startclock')
      console.log(res.data)
      setStarted(true)
    } catch (error) {
      console.log(error)
    }
  }
  const checkWorking = async () => {
    try {
      const res = await axios.get('/api/user/checkclock')
      console.log(res.data)
      if (res.data.message === 'isStarted') {
        setStarted(true)
      } else if (res.data.message === 'isEnded') {
        setEnded(true)
        if (res.data.extraTime <= 0) {
          setIsDisabled(true)
        }
      }
      setTime(res.data.time)

    } catch (error) {
      console.log(error)
    }
  }

  const endWorking = async (req, res) => {
    try {
      const res = await axios.post('/api/user/endclock')
      console.log(res.data)
      if (res.data.message === 'isEnded') {
        setEnded(true)
      }
      setTime(res.data.time)
    } catch (error) {
      console.log(error)
    }
  }

  const createRequest = (e) => {
    e.preventDefault()
    const comment = e.target.comment.value;
    const extraHours = e.target.extra.checked;
    console.log(comment)
    console.log(extraHours)
  }

  useEffect(() => {
    checkWorking()
  }, [])


  return <div className="fichaje-card">
    <div>
      <h1>Fichaje</h1>
      <p>Tienes ({userHours}) horas extra acumuladas.</p>
    </div>
    <div>
      <h2>{time}</h2>
      <p>Jornada de hoy</p>
      {!ended ? (started ? <button onClick={endWorking}>Detener</button> : <button onClick={startWorking}>Comenzar</button>) :
        <form onSubmit={createRequest}>
          <label htmlFor="comment">Agregar comentario*</label>
          <textarea name="comment" maxLength="165" />
          <label>
            <input name="extra" type="checkbox" disabled={isDisabled} />
            Solicitar Hrs Extra
          </label>
          <input type="submit" />
        </form>}
    </div>
  </div>;
};

export default FichajeCard;
