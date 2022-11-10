import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import productCart from "../../Data/cart";
import ProductNavbar from "./Navbar";

function GetCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(productCart.getCart);
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const newTotal = items.map((item) => {
    const newprice = quantity * item.product.price;
    return newprice;
  });

  const sumTotal = newTotal.reduce((a, b) => a + b, 0);
  useEffect(() => {
    setTotal(sumTotal);
  }, [quantity]);

  const onEmptyCart = () => {
    productCart.emptyCart(() => {
      navigate("/product");
    });
    setCart(0);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  console.log(newTotal);
  return (
    <div>
      <ProductNavbar />
      <div className="container-fluid products p-5">
        <div className="container mt-5 p-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            {items.map((item) => (
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      src={item.product.image}
                      className="img-fluid"
                      alt="..."
                    />
                  </th>
                  <td>{item.product.name.toLowerCase()}</td>
                  <td>ksh. {item.product.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <h5 className="text-center mt-3">Total: ksh {total} </h5>
          <div className="text-center m-2">
            <button className="btn btn-warning btn-md m-2">Checkout</button>
            <button className="btn btn-danger btn-md m-2" onClick={onEmptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCart;
