import React from "react";

const SellerSign = () => {
  return (
    <div className="container sign">
      <div className="card sign-card">
        <i className="fa-sharp fa-solid fa-lock lock-icon"></i>
        <h4 className="mb-3">Electronics Hub</h4>

        <h6 className="mb-3">Admin Login</h6>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="btn btn-md btn-primary mb-3">Sign In</div>
      </div>
    </div>
  );
};

export default SellerSign;
