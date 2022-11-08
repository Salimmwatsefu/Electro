import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h4>Electronics Hub</h4>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ">
            <Link to="/buyer/sign">
              <button class="btn btn-outline-success">Register</button>
            </Link>
            <Link to="/buyer/sign">
              <button class="btn btn-outline-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
