import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { deleteOrder } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";
import Sidebar from "./Sidebar";

const OrdersList = () => {
  const navigate = useNavigate();
  const { orders } = useContext(CartContext);

  const onDelete = (id) => {
    deleteOrder(id, navigate);
  };
  return (
    <div>
      <AdminNavbar />
      <div className=""><Sidebar /></div>
      <div className=" container-fluid text-center checkout-product p-5 ml-28">
        <div className="container w-9/12 ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Buyer Email</th>
                <th scope="col">Delivery Address</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.buyer_name}</td>
                  <td>{order.product_name}</td>
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
