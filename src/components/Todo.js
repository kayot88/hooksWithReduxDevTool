import React from "react";
import { completeTodo, removeTodo } from "../reducers/todoSlicer";
const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch(completeTodo({ id: todo.id }));
        }}
      >
        Complete
      </button>
      <button onClick={() => dispatch(removeTodo({id: todo.id}))}>Remove</button>
    </div>
  );
};

export default Todo;
