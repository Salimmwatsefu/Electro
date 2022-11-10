import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductNavbar = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const onClick = () => {
    localStorage.removeItem("buyer");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="links" to="/product">
            <h4>Electronics Hub</h4>
          </Link>

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
            <ul className="navbar-nav search me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <input
                  className="form-control me-2 nav-link"
                  type="search"
                  placeholder="Search for any product"
                  aria-label="Search"
                />{" "}
              </li>

              <li className="nav-item">
                <i
                  className="nav-link fas fa-cart-plus "
                  onClick={() => navigate("/product/cart")}
                >
                  <span className="badge bg-secondary">{cart}</span>
                </i>
              </li>
              <li className="nav-item">
                <button
                  className="btn-danger btn btn-md nav-link"
                  onClick={onClick}
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

export default ProductNavbar;
