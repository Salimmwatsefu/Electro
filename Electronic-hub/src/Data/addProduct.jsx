import axios from "axios";
import { url } from "../context/CartContext";

const addProduct = async (post) => {
  try {
    axios.post(`${url}/products`, post).then((data) => console.log(data.data));
  } catch (error) {
    console.log(error);
  }
};

export { addProduct };
