import React from "react";
import "@styles/NewPassword.scss";
import yardSale from "@logos/logo_yard_sale.svg";

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={ yardSale }alt="logo" className="nav-logo-NP" />
        <h1 className="title-NP">Create a new password</h1>
        <p className="subtitle-NP">Enter a new password for yue account</p>
        <form action="/" className="form-NP">
          <label htmlFor="password" className="label-NP">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input-NP input-password-NP"
          />
          <label htmlFor="new-password" className="label-NP">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input-NP input-password-NP"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button-NP login-button-NP"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
