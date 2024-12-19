import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart {totalCartItems}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
