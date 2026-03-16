import React from "react";
import { CouterContext } from "../context/Counter";
import { useContext } from "react";
const Count = () => {
  const counterContext = useContext(CouterContext);
  return (
    <div>
      <button onClick={() => {counterContext.setCount(counterContext.count + 1);}}>
        Increament
      </button>


      <button onClick={() => {counterContext.setCount(counterContext.count - 1);}}>
        Decreament
      </button>
    </div>
  );
};

export default Count;
