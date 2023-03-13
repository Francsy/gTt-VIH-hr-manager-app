import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("Hola")
  }

  return (
    <>
    <h1>LOGIN</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
    </>
  );
}

export default Login
