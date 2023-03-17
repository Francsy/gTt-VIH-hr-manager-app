import React from "react";
import { Link } from "react-router-dom";

const ViewsSelector = () => {

  return <div>
    <h1>Elige como quieres entrar:</h1>
    <Link to="/user">
      <button>Empleado</button>
    </Link>
    <Link to="/admin">
      <button>Administrador</button>
    </Link>
  </div>;
};

export default ViewsSelector;
