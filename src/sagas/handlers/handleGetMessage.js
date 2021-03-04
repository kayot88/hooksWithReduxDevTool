import { call, put } from "redux-saga/effects";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { showMessage } from "../../reducers/snackbarSlicer.js";
import { getMessageRequest } from "../requests/message.js";

export function* handleGetMessage() {
  try {
    const response = yield call(getMessageRequest);
    const { data } = response;
    yield put(showMessage(data.name));
  } catch (error) {
    console.log("error", error);
  }
}
