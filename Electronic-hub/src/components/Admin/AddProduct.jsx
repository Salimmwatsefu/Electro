import React from "react";
import AdminNavbar from "./Navbar";

const AddProduct = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid add-product">
        <div className="container">
          <h5 className="mb-3">Add A Product</h5>
          <form>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Product Image</label>
            </div>
            <div class="form-floating mb-3 ">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Product Price</label>
            </div>
            <div class="form-floating  mb-3">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                required
              >
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label for="floatingSelect">Product Category</label>
            </div>
            <div class="form-floating  mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword mb-3">Product Stock</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                required
              ></textarea>
              <label for="floatingTextarea">Description</label>
            </div>

            <button className="btn btn-primary btn-md">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
