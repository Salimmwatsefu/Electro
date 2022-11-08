import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid banner">
        <h5>All Electronics under one place</h5>
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
