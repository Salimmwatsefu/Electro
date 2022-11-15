import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addProduct } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    image: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(formData, navigate);
    console.log(formData);
  };
  return (
    <div>
       
      <AdminNavbar />

      <div className=""><Sidebar /></div>
      
      <div className="container-fluid add-product">
        <div className="container">
          <h5 className="mb-3 text-lg font-bold text-red-800">Add A Product</h5>
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                name="image"
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Product Image</label>
            </div>
            <div className="form-floating mb-3 ">
              <input
                onChange={handleChange}
                name="price"
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Product Price</label>
            </div>
            <div className="form-floating  mb-3">
              <select
                onChange={handleChange}
                name="category"
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                required
              >
                <option selected>Select Category</option>
                <option value="Televisions">Tvs</option>
                <option value="Laptops">Laptops</option>
                <option value="phones">Phones</option>
              </select>
              <label for="floatingSelect">Product Category</label>
            </div>
            <div className="form-floating  mb-3">
              <input
                onChange={handleChange}
                name="stock"
                type="number"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword mb-3">Product Stock</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                onChange={handleChange}
                name="description"
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                required
              ></textarea>
              <label for="floatingTextarea">Description</label>
            </div>

            <button className="btn btn-primary btn-md bg-red-700 hover:bg-red-900">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
