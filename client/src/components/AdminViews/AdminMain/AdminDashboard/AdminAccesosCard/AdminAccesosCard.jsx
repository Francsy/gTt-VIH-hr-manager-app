import React from "react";
import { Link } from "react-router-dom"

import Users from "../../../../../assets/users.svg"
import Inbox from "../../../../../assets/inbox.svg"
import Layers from "../../../../../assets/layers.svg"
import Calendar from "../../../../../assets/calendar.svg"
import Coins from "../../../../../assets/coins.svg"

const AdminAccesosCard = () => {
  return <div>
    <h1>
    Accesos Rápidos
    </h1>
  <div>
  <Link to="/admin">
    <img src={Users} alt="" />
    <p>Personal</p>
  </Link>
</div>
<div>
  <Link to="/admin">
    <img src={Inbox} alt="" />
    <p>Solicitudes</p>
  </Link>
</div>
<div>
  <Link to="/admin">
    <img src={Layers} alt="" />
    <p>Gestiones</p>
  </Link>
</div>
<div>
  <Link to="/admin">
    <img src={Calendar} alt="" />
    <p>Agenda</p>
  </Link>
</div>
<div>
  <Link to="/admin">
    <img src={Coins} alt="" />
    <p>Gastos</p>
  </Link>
</div>
    </div>;
};

export default AdminAccesosCard;
