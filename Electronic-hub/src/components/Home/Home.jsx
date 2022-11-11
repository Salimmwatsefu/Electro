import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid banner">
        <div className="card p-5 banner-title">
          <h5>All Electronics under one place</h5>
        </div>
      </div>
      <div className="container-fluid services">
        <div className="container">
          <h5 className="text-center mb-5">Services</h5>
          <div className="row padding">
            <div className="col-lg-4">
              <div className="card">
                <i className="fa-solid fa-truck icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Delivery</h5>
                  <p className="card-text">
                    Just make order and we shall provide delivery services to
                    your doorstep within the shortest time possible
                  </p>
                  <button className="btn btn-outline-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <i className="fa-solid fa-laptop icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Market</h5>
                  <p className="card-text">
                    With our large market ,we get quality products from all over
                    the world from reliable supplies and this has made us unique
                    in terms of products and services we offer
                  </p>
                  <button className="btn btn-outline-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <i className="fa-sharp fa-solid fa-lock icon text-center"></i>
                <div className="card-body">
                  <h5 className="card-title">Warranty</h5>
                  <p className="card-text">
                    We provide 1 year warranty for all our products that is
                    subject to terms and conditions attached in the warranty
                    attached to our products
                  </p>
                  <button className="btn btn-outline-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about">
        <div className="container">
          <div className="row padding">
            <div className="col-lg-6">
              <img
                src="http://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h5 className="text-center mb-4">About Us</h5>
              <p className="lead text-center">
                Electronic hub is your trusted partner in all things Electronic
                We pride ourselves as the only online platform specialized with
                electronic products ,we provide affordable,quality and original
                products that are in line with the latest technology Our core
                business is to provide products ,expert advice or tailor made
                solutions,there is no doubt we are the solutions when it comes
                with electronic products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
