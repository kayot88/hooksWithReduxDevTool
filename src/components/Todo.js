import React from "react";
import { actions } from "./withOutRedux";
const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: actions.COMPLETE_TODO, payload: { id: todo.id } });
          console.log("todo.id", todo.id);
        }}
      >
        Complete
      </button>
      <button
        onClick={() => {
          dispatch({ type: actions.REMOVE_TODO, payload: { id: todo.id } });
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
