import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { deleteProduct } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";
import { NumericFormat } from "react-number-format";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useContext(CartContext);

  const onDelete = (id) => {
    deleteProduct(id, navigate);
  };
  return (
    <div>
      <AdminNavbar />
      <div className=""><Sidebar /></div>
      <div className="container-fluid text-center checkout-product p-5 ml-28">
        <div className="container w-9/12 ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product.id}>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <NumericFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"ksh"}
                    />
                  </td>
                  <td>
                    <button
                      className="btn bg-red-700 hover:bg-red-900 text-white btn-sm m-1"
                      onClick={() => onDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
