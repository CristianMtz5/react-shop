import React from "react";
import "@styles/SendEmail.scss";
import yardSale from "@logos/logo_yard_sale.svg";
import iconsEmail from "@icons/email.svg";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container-SE">
        <img src={ yardSale } alt="logo" className="nav-logo-SE" />
        <h1 className="title-SE">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={ iconsEmail } alt="email" />
        </div>
        <button className="primary-button-SE login-button-SE">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
