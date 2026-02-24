import React from "react";
import Button from "../components/button";
import TodoItem from "../components/todoItem";

function Home({ todos }) {
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
    </div>
  );
}

export default Home;
