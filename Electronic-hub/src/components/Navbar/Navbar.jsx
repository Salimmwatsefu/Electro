import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h4>ElectroHub</h4>
        <Link to={"/buyer/sign"}>
        <button className="bg-red-700 h-10 w-44 rounded-2xl text-white  hover:bg-red-900">Register Here</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
