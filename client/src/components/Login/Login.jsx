import React from "react";
import '../../styles/componets/Login.css'
import { CiUser } from 'react-icons/ci'

import { CiUnlock } from 'react-icons/ci';
import axios from 'axios';
import { useState } from "react";
import { Navigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirection, setRedirection] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('/login', {
        logEmail: email,
        logPassword: password
      });
      const message = res.data.message;
      console.log(message)
      if (message === 'empleadoAccess') {
        setRedirection('/user')
      } else if (message === 'adminAccess') {
        setRedirection('/admin/select')
      } else {
        return alert('Tus credenciales no son correctas')
      }
    } catch (error) {
      console.log(error);
      return alert('Tus credenciales no son correctas')

    }
  }

  return redirection ? <Navigate to={redirection} /> :(
    <>
      <div className="container">
        <img src="https://pbs.twimg.com/profile_images/733194621589827584/0G4zcdJO_400x400.jpg" alt="Texto alternativo" />
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="usuario_label">
            <div className="user-label"><CiUser className="icon" />Email: </div>        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          </label>
          <label>
            <div><CiUnlock className="icon" />Contraseña: </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
          </label>
          <button type="submit" className="button">Iniciar sesión</button>
        </form>
        <a href="/home" className="link">Olvidaste la contraseña</a>
      </div>
    </>
  );

}

export default Login
