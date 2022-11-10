// import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SellerSign from "./components/sign/SellerSign";
import BuyerSign from "./components/sign/BuyerSign";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";
import AddProduct from "./components/Admin/AddProduct";
import Cart from "./components/Cart/Cart";
//import OrderDetails from "./components/Orders/OrderDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<SellerSign />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/buyer/sign" element={<BuyerSign />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element ={<Cart />} />
    </Routes>
  );
};

export default App;
