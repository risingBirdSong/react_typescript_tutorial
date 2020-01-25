import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Todo = () => {
  return (
    <ul>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <p>placeholder</p>
    </div>
  );
};
export { Todo, TodoItem };
