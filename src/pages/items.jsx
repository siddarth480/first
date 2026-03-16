import React from "react";
import Item from "../pages/item";
import Cart from "./cart";

const item = [
  { item: "MacBook Pro", price: 100000 },
  { item: "Lenovo ThinkPad", price: 85000 },
  { item: "Asus ROG", price: 120000 },
  { item: "Apple MacBook Air", price: 95000 },
  { item: "Dell Inspiron", price: 75000 },
  { item: "HP Pavilion", price: 72000 },
  { item: "Acer Aspire 7", price: 78000 },
  { item: "Lenovo IdeaPad", price: 68000 },
  { item: "Asus VivoBook", price: 65000 },
];

const Items = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
      }}
    >
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
      }}>
        {item.map((items) => {
          return <Item item={items.item} price={items.price} />;
        })}
      </div>
      <div>
        
        <Cart />
      </div>
    </div>
  );
};

export default Items;
