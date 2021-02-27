import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../reducers/todoSlicer";
import Todo from "./Todo";

function WithReduxToolkit() {

  const [name, setName] = useState("");
  // console.log("todos", todos);
  const dispatch = useDispatch();
  
  const { todos } = useSelector((state) => state.todos);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(name));
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

export default WithReduxToolkit;
