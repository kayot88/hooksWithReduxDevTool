import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodoAction: (state, { payload }) => {
      state.todos.push(addTodo(payload));
    },
    completeTodo: (state, { payload }) => {
      state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return (todo.complete = !todo.complete);
        }
        return state.todos;
      });
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
  },
});

const addTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};
export const { addTodoAction, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
