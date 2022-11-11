// import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SellerSign from "./components/sign/SellerSign";
import BuyerSign from "./components/sign/BuyerSign";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";
import AddProduct from "./components/Admin/AddProduct";
import GetCart from "./components/Products/GetCart";
import Checkout from "./components/Products/Checkout";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<SellerSign />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/buyer/sign" element={<BuyerSign />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/cart" element={<GetCart />} />
      <Route path="/product/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
