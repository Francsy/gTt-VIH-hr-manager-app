import React from "react";
import { Link } from "react-router-dom"
import ArrowLeft from "../../../../../assets/arrow-left.svg"


const UpdateEmployee = () => {
  return <div><Link to="/admin/personal"><button><img src={ArrowLeft} alt="" /></button></Link></div>;
};

export default UpdateEmployee;
