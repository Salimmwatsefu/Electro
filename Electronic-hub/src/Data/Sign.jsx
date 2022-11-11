import { url } from "../context/CartContext";
import axios from "axios";

const AddBuyer = async (post, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    axios
      .post(`${url}/buyers`, post)
      .then((data) => localStorage.setItem("buyer", JSON.stringify(data.data)))
      .then(() => navigate("/product"));
  } catch (error) {
    console.log(error);
  }
};

const logInBuyer = async (post, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    axios
      .post(`${url}/login`, post)
      .then((data) => localStorage.setItem("buyer", JSON.stringify(data.data)))
      .then(() => navigate("/product"));
  } catch (error) {
    console.log(error);
  }
};
const logInAdmin = async (post, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    axios
      .post(`${url}/loginseller`, post)
      .then((data) => localStorage.setItem("admin", JSON.stringify(data.data)))
      .then(() => navigate("/admin/orders"));
  } catch (error) {
    console.log(error);
  }
};
export { AddBuyer, logInBuyer, logInAdmin };
