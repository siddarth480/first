import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <div
      style={{
        border: "1px dotted",
        margin: "10px",
        padding: "20px",
        borderRadius: "25px",
      }}
    >
      <h2>{props.item}</h2>
      <h3>Price : {props.price}</h3>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { item: props.item, price: props.price },
          ])
        }
        style={{ padding: "10px 20px", borderRadius: "10px" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
