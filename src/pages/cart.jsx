import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h1>Cart Items</h1>

      {cart &&
        cart.items.map((item) => {
          return (
            <div style={{border:"1px solid", marginBottom:"10px", display:"block", marginLeft:"40px", borderRadius:"10px"}}>
              <h2>{item.item}</h2>
              <h2>{item.price}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
