import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
      <Link to="/landing">Landing</Link>

    </nav>
  );
};

export default Navbar;
