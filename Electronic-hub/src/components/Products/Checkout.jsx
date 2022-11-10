import React, { useEffect, useState } from "react";
import { addOrder } from "../../Data/addProduct";
import ProductNavbar from "./Navbar";

const Checkout = () => {
  const initialState = {
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("total price"))
  );
  useEffect(() => {
    setTotal(JSON.parse(localStorage.getItem("total price")));
  });
  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      buyer_name: formData.name,
      total: total,
      product_name: `${formData.address}, ${formData.zip}, ${formData.city},${formData.country}`,
    };
    addOrder(post);
  };
  console.log(total);
  return (
    <div>
      <ProductNavbar />
      <div className="container-fluid text-center checkout-product p-5">
        <div className="container  checkout">
          <h5 className="mb-3">Checkout Details</h5>
          <form onSubmit={onSubmit}>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="name"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="email"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>

            <h6>Delivery Address</h6>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="address"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="city"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">City</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="zip"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">ZIP code</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                name="country"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">country</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                value={total}
                name="total"
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                disabled
              />
              <label for="floatingInput">Total</label>
            </div>
            <button className="btn btn-primary btn-md">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
