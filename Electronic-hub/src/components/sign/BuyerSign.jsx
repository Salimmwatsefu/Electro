import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddBuyer } from "../../Data/Sign";
import "./sign.css";
const BuyerSign = () => {
  const initialState = { name: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AddBuyer(formData, setIsLoading, navigate);
  };
  return (
    <div className="container sign">
      <div className="card sign-card">
        <i className="fa-sharp fa-solid fa-lock lock-icon"></i>
        <h4 className="mb-3">Electronics Hub</h4>
        {isSignUp ? (
          <>
            <h6 className="mb-3">Buyer Registration</h6>
            <form onSubmit={onSubmit}>
              <div class="form-floating mb-3">
                <input
                  onChange={handleChange}
                  required
                  name="name"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  onChange={handleChange}
                  required
                  name="password"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              {isLoading ? (
                <button className="btn btn-md btn-primary mb-3" disabled>
                  Signing
                </button>
              ) : (
                <button className="btn btn-md btn-primary mb-3">Sign Up</button>
              )}

              <p>
                Already have an account?{" "}
                <div
                  className="btn btn-secondary-outline btn-md"
                  onClick={switchMode}
                >
                  Sign In
                </div>
              </p>
            </form>
          </>
        ) : (
          <>
            <h6 className="mb-3">Buyer Login</h6>
            <form onSubmit={onSubmit}>
              <div class="form-floating mb-3">
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              {isLoading ? (
                <button className="btn btn-md btn-primary mb-3" disabled>
                  Signing
                </button>
              ) : (
                <button className="btn btn-md btn-primary mb-3">Sign In</button>
              )}
              <p>
                Already have an account?{" "}
                <div
                  className="btn btn-secondary-outline btn-md"
                  onClick={switchMode}
                >
                  Sign Up
                </div>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyerSign;
