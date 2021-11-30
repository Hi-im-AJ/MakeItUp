import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/qweqwe">404</Link>
    </div>
  );
};

export default Navbar;
