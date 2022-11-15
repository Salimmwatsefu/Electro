import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import productCart from "../../Data/cart";
import ProductNavbar from "./Navbar";
import { NumericFormat } from "react-number-format";

function GetCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(productCart.getCart);
  const { setCart } = useContext(CartContext);
  const handleChange = (event, index) => {
    let updatedCartItems = items;
    if (event.target.value == 0) {
      updatedCartItems[index].quantity = 1;
    } else {
      updatedCartItems[index].quantity = event.target.value;
    }
    setItems([...updatedCartItems]);
    productCart.updateCart(index, event.target.value);
    console.log(items);
  };

  productCart.getCart();
  useEffect(() => {
    getTotal();
  }, [items]);
  const getTotal = () => {
    return items.reduce((a, b) => {
      return parseInt(a) + parseInt(b.quantity) * parseInt(b.product.price);
    }, 0);
  };

  const onEmptyCart = () => {
    productCart.emptyCart(() => {
      navigate("/product");
    });
    setCart(0);
  };
  const onCheckout = () => {
    localStorage.setItem("total price", getTotal());
    navigate("/product/checkout");
  };

  return (
    <div>
      <ProductNavbar />
      <div className="container-fluid products p-5">
        <div className="container mt-5 p-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            {items.map((item, index) => (
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
                  <td>
                    <NumericFormat
                      value={item.product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"ksh"}
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => handleChange(e, index)}
                      required
                      name="quantity"
                      type="number"
                      class="form-control"
                      id="floatingInput"
                      defaultValue={item.quantity}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <h5 className="text-center mt-3">
            Total:{" "}
            <NumericFormat
              value={getTotal()}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"ksh"}
            />{" "}
          </h5>
          <div className="text-center m-2">
            <button className="btn btn-warning btn-md m-2" onClick={onCheckout}>
              Checkout
            </button>
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
