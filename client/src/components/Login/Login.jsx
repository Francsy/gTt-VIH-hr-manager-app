import React from "react";
import '../../styles/componets/Login.css'
import {CiUser} from 'react-icons/ci'

import {CiUnlock} from 'react-icons/ci';
import axios from 'axios';
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/login', {
        logEmail: username,
        logPassword: password
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="container">
<img src="https://pbs.twimg.com/profile_images/733194621589827584/0G4zcdJO_400x400.jpg" alt="Texto alternativo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="usuario_label">
        <div className="user-label"><CiUser className="icon"/>Usuario: </div>        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
        </label>
        <label>
        <div><CiUnlock className="icon"/>Contraseña: </div>
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
