import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const displayCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cartIcon">
      <button onClick={displayCart}>show cart</button>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
