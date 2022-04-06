import React, {useState} from "react";
import Menu from "@components/Menu";
import "@styles/Header.scss";
import menuIcon from "@icons/icon_menu.svg";
import marcLogo from "@logos/logo_yard_sale.svg";
import shoppingIcon from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={marcLogo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnishings</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingIcon} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
