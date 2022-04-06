import React from "react";
import "@styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="container-CA">
        <h1 className="title-CA">Create Account</h1>
        <form action="/" className="form-CA">
          <div>
            <label htmlFor="name" className="label-CA">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="input-CA input-name-CA"
            />
            <label htmlFor="email" className="label-CA">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label-CA">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input-CA input-password-CA"
            />
          </div>
          <input
            type="submit"
            value="Create"
            className="primary-button-CA login-button-CA"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
