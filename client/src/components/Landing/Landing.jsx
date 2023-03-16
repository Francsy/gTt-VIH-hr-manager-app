import React from "react";

const Landing = () => {
  return <>
  <div>
    <h1>LANDING PAGE</h1>
    <input
        type="text"
        value={""}
        placeholder="Buscar..."
      />  
    </div>
    <div> 
    <button>Personal</button>
    <button>Solicitudes</button>
    <button>Gestiones</button>
    <button>Agenda</button>
    <button>Gastos</button>
    </div> 
  
  <div>
    <button>Resgistro del trabajador</button>
    <button>Resgistro del ausencias</button>
  </div>
 
  </>;
};

export default Landing;
