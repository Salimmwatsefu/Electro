import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { deleteBuyer, deleteProduct } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";
import { NumericFormat } from "react-number-format";
import Sidebar from "./Sidebar";

const BuyersList = () => {
  const navigate = useNavigate();
  const { buyers } = useContext(CartContext);

  const onDelete = (id) => {
    deleteBuyer(id, navigate);
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
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {buyers.map((buyer) => (
              <tbody key={buyer.id}>
                <tr>
                  <td>{buyer.id}</td>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-1"
                      onClick={() => onDelete(buyer.id)}
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

export default BuyersList;
