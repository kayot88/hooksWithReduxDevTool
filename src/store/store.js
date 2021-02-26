import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  //automatically combine your slice reducers,
  //adds whatever Redux middleware you supply,
  //includes redux-thunk by default, and enables use of the Redux DevTools Extension
  reducer: {},
});
