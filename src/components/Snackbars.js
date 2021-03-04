import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../reducers/snackbarSlicer";

const Message = () => {
  const dispatch = useDispatch();
  const messState = useSelector((state) => state.message);
  console.log("messState", messState);
  const handleClick = () => {
    dispatch(getMessage());
  };
  return <button onClick={handleClick}>{messState.message} 💩</button>;
};

export default Message;
