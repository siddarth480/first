import React, { useContext, useState } from "react";
import Button from "../components/button";
import TodoItem from "../components/todoItem";
import Count from "./count";

import { CouterContext } from "../context/Counter";

function Home({ todos }) {
  const counterState = useContext(CouterContext);
  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "2px solid black",
          width: "300px",
          margin: "20px auto",
        }}
      >
        <ol>
          {todos.map((todo) => (
            <TodoItem key={todo.id} item={todo.name} age={todo.age} />
          ))}
        </ol>


      </div>
        <h2>Count {counterState.count}</h2>


        <Count />
        <Count />
        <Count />
    </div>
  );
}

export default Home;
