import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlicer";
import messReducer from "../reducers/snackbarSlicer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  //automatically combine your slice reducers,
  //adds whatever Redux middleware you supply,
  //includes redux-thunk by default, and enables use of the Redux DevTools Extension
  reducer: {
    todos: todoReducer,
    message: messReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
