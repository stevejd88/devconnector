import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./actions/types";

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v7();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
