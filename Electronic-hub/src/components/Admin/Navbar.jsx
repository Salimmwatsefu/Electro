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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>Electronics Hub</h4>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav admin me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5 className="nav-link">Welcome Admin</h5>
              </li>
              <li className="nav-item">
                <Link to="/admin/add-product" className="links nav-link">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/products" className="links nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/orders" className="links nav-link">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/buyers" className="links nav-link">
                  Buyers
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn-danger btn btn-md nav-link"
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
