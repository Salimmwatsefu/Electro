import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AdminNavbar = () => {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem("admin")));
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  return (
    <div>
      <nav className="flex bg-red-50 ">
        <div className=" flex">
          <h4 className="text-red-900 font-bold text-2xl py-3">Electro Hub</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="flex pl-96 ml-96" id="navbarSupportedContent">
            <ul className=" flex admin mb-2 ml-48">
              <li className="nav-item">
                <button
                  className="bg-red-700 hover:bg-red-900 text-white btn btn-md nav-link w-20 h-8 mt-3"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
