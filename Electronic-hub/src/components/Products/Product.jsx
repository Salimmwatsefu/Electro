import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import productCart from "../../Data/cart";
import ProductNavbar from "./Navbar";

const Product = () => {
  const navigate = useNavigate();
  const { cart, setCart, products, isLoading } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setCartDetails(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);
  const inCart = [];

  if (cartDetails !== null) {
    cartDetails.map((product) => {
      inCart.push(product.product.id);
    });
  }

  const onAddToCart = (item) => {
    productCart.addItem(item);
    setCart(cart + 1);
  };
  const onRemoveFromCart = (index) => {
    navigate("/product/cart");
  };
  console.log(cartDetails);
  return (
    <div>
      <ProductNavbar />
      {isLoading ? (
        "loading..."
      ) : (
        <div className="container-fluid products">
          <div className="container">
            <div className="row padding">
              <div className="col-lg-3 mb-3">
                <div className="card">
                  <ul className="categories text-center">
                    <button class="btn btn-outline-secondary btn-md mb-3">
                      Laptops
                    </button>
                    <br />
                    <button class="btn btn-outline-secondary btn-md mb-3">
                      Phones
                    </button>
                    <br />
                    <button class="btn btn-outline-secondary btn-md mb-3">
                      Televisions
                    </button>
                    <br />
                    <button class="btn btn-outline-secondary btn-md mb-3">
                      Remotes
                    </button>
                    <br />
                    <button class="btn btn-outline-secondary btn-md mb-3">
                      Tablets
                    </button>
                  </ul>
                </div>
              </div>
              {products.map((product, index) => (
                <div className="col-lg-3 mb-3">
                  <div className="card text-center mb-3">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.name.toLowerCase()}
                      </h5>
                      {/* <p className="card-text">{product.description}</p> */}
                      <h6 className="mb-2 mt-2">Price: Ksh. {product.price}</h6>
                      {inCart.includes(product.id) ? (
                        <button
                          className="btn btn-success btn-md"
                          onClick={() => onRemoveFromCart(index)}
                        >
                          view cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary btn-md"
                          onClick={() => onAddToCart(product)}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
