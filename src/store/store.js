import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlicer";
const store = configureStore({
  //automatically combine your slice reducers,
  //adds whatever Redux middleware you supply,
  //includes redux-thunk by default, and enables use of the Redux DevTools Extension
  reducer: { todos: todoReducer },
});


export default store;