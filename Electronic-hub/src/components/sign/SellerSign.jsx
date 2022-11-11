import React, { useState } from "react";
import { useNavigate } from "react-router";
import { logInAdmin } from "../../Data/Sign";

const SellerSign = () => {
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    logInAdmin(formData, setIsLoading, navigate);
  };
  console.log(formData);
  return (
    <div className="container sign">
      <div className="card sign-card">
        <i className="fa-sharp fa-solid fa-lock lock-icon"></i>
        <h4 className="mb-3">Electronics Hub</h4>

        <h6 className="mb-3">Admin Login</h6>
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              required
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              required
              name="password"
              type="password"
              className="form-control"
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
            <button className="btn btn-md btn-primary mb-3">Sign In</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SellerSign;
