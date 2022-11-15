import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Features from "./Features";
import Footer from "./Footer";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid banner">
        <div className="hero">
          <h5>Big games need a big screen.</h5>
          <p>LG OLED TVs make you feel like you're watching every game in person. Huge 77, 83, and 88-inch screens showcase big games in breathtaking detail.</p>
          <Link to={"/buyer/sign"}>
          <button className="shop">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="container-fluid services">
        <div className="container">
          <h5 className="text-center top mb-20">SERVICES</h5>
          <div className="row padding">
            <div className="col-lg-4 mb-3">
              <div className="card">
                <i className="fa-solid fa-truck icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Delivery</h5>
                  <p className="card-text">
                    Just make order and we shall provide delivery services to
                    your doorstep within the shortest time possible
                  </p>
                  <Link to="/buyer/sign">
                    <button className="buy-now">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-3">
              <div className="card">
                <i className="fa-solid fa-laptop icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Market</h5>
                  <p className="card-text">
                    With our large market ,we get quality products from all over
                    the world. The world's number one
                  </p>
                  <Link to="/buyer/sign">
                    <button className="buy-now">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-3">
              <div className="card">
                <i className="fa-sharp fa-solid fa-lock icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Warranty</h5>
                  <p className="card-text">
                    We provide 1 year warranty for all our products. Terms and conditions apply for all products.
                  </p>
                  <Link to="/buyer/sign">
                    <button className="buy-now">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center mt-5 text-3xl text-red-900 font-bold">ABOUT US</h5>
      <Features />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
