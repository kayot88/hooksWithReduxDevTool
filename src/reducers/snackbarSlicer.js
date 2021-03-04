import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "snack",
  initialState: {
    message: "",
  },
  reducers: {
    getMessage: () => {},
    showMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { getMessage, showMessage } = messageSlice.actions;
export default messageSlice.reducer;
