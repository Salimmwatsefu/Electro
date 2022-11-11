import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { deleteOrder } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";

const OrdersList = () => {
  const navigate = useNavigate();
  const { orders } = useContext(CartContext);

  const onDelete = (id) => {
    deleteOrder(id, navigate);
  };
  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid text-center checkout-product p-5">
        <div className="container  ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Buyer Email</th>
                <th scope="col">Delivery Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.buyer_name}</td>
                  <td>{order.product_name}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-1"
                      onClick={() => onDelete(order.id)}
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

export default OrdersList;
