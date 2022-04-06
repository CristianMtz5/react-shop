import React from "react";
import "@styles/Login.scss";
import yardSale from "@logos/logo_yard_sale.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container-login">
        <img src={yardSale} alt="logo" className="nav-container-logo" />
        <form action="/" className="form-login">
          <label htmlFor="email" className="label-login">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label-login">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
