// import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SellerSign from "./components/sign/SellerSign";
import BuyerSign from "./components/sign/BuyerSign";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller/sign" element={<SellerSign />} />
      <Route path="/buyer/sign" element={<BuyerSign />} />
    </Routes>
  );
};

export default App;
