import { takeLatest } from "redux-saga/effects";
import { getMessage } from "../reducers/snackbarSlicer";
import { handleGetMessage } from "./handlers/handleGetMessage";

export function* watcherSaga() {
  console.log("getMessage.type", getMessage.type);
  yield takeLatest(getMessage.type, handleGetMessage);
}

