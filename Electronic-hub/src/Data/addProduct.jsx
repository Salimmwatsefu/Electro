import axios from "axios";
import { url } from "../context/CartContext";

const addProduct = async (post, navigate) => {
  try {
    axios
      .post(`${url}/products`, post)
      .then((data) => console.log(data.data))
      .then(() => navigate("/admin/products"));
  } catch (error) {
    console.log(error);
  }
};
const addOrder = async (post, setCart, navigate) => {
  try {
    axios
      .post(`${url}/orders`, post)
      .then((data) => console.log(data.data))
      .then(() => alert("Confirm order"))
      .then(() => localStorage.removeItem("cart"))
      .then(() => setCart(0))
      .then(() => navigate("/product"));
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (id, navigate) => {
  try {
    axios
      .delete(`${url}/products/${id}`)
      .then((data) => console.log(data.data))
      .then(() => navigate(0));
  } catch (error) {
    console.log(error);
  }
};
const deleteBuyer = (id, navigate) => {
  try {
    axios
      .delete(`${url}/buyers/${id}`)
      .then((data) => console.log(data.data))
      .then(() => navigate(0));
  } catch (error) {
    console.log(error);
  }
};
const deleteOrder = (id, navigate) => {
  try {
    axios
      .delete(`${url}/order/${id}`)
      .then((data) => console.log(data.data))
      .then(() => navigate(0));
  } catch (error) {
    console.log(error);
  }
};

export { addProduct, addOrder, deleteProduct, deleteBuyer, deleteOrder };
