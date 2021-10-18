import { alertConstants } from "../constants";

export const alertActions = {
  success,
  error,
  clear,
  successLogIn,
  errorLogIn,

};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR, message: "" };
}
function successLogIn(message) {
  return { type: alertConstants.LOGIN_SUCCESS, message };
}


function errorLogIn(message) {
  return { type: alertConstants.LOGIN_ERROR, message };
}


