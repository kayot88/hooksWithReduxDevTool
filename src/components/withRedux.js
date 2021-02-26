import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const actions = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
};

const reducer = (todos, { payload, type }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, addTodo(payload.name)];
    case "COMPLETE_TODO":
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "REMOVE_TODO":
      return todos.filter((todo) => todo.id !== payload.id);
    default:
      return todos;
  }
};

const addTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

function WithoutRedux() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default WithoutRedux;
