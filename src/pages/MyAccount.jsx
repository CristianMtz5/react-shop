import React from "react";
import "@styles/MyAccount.scss";
import yardSale from "@logos/logo_yard_sale.svg";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        {/* <img src={yardSale} alt="logo" className="nav-logo-MA" /> */}
        <h1 className="title-MA">My account</h1>
        <form action="/" className="form-MA">
          <div>
            <label htmlFor="name" className="label-MA">
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className="label-MA">
              Email
            </label>
            <p className="value">camilayokoo@gmail.com</p>
            <label htmlFor="password" className="label-MA">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button-MA login-button-MA"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
