import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductNavbar = () => {
  const navigate = useNavigate();
  const { cart, setCart, products, setProducts } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("buyer")));

  const onClick = () => {
    localStorage.removeItem("buyer");
    localStorage.removeItem("cart");
    navigate("/");
  };

  const handleChange = (e) => {
    const results = products.filter((product) => {
      if (e.target.value === "") return products;
      return (
        product.name.includes(e.target.value) ||
        product.category.includes(e.target.value)
      );
    });
    setProducts(results);
    setSearch(e.target.value);
  };

  console.log(products);
  return (
    <div>
      <nav className="p-3">
        <div className="container-fluid flex">
          <Link className="links" to="/product">
            <h4 className=" absolute text-red-900 font-extrabold text-2xl">Electro Hub</h4>
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
          <div className="" id="navbarSupportedContent">
            <ul className=" flex ml-96 gap-28">
              <li className="nav-item">
                <h5 className="nav-link">Welcome {user.name}</h5>
              </li>
              <li className="nav-item">
                <input
                  className="form-control me-2 nav-link"
                  type="search"
                  value={search}
                  onChange={handleChange}
                  placeholder="Search for any product"
                  aria-label="Search"
                />{" "}
              </li>

              <li className="nav-item">
                <i
                  className="nav-link fas fa-cart-plus "
                  onClick={() => navigate("/product/cart")}
                >
                  <span className="badge bg-slate-300">{cart}</span>
                </i>
              </li>
              <li className="nav-item">
                <button
                  className="bg-red-700 w-20 h-10 btn btn-md nav-link rounded-lg text-white hover:bg-red-900"
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
