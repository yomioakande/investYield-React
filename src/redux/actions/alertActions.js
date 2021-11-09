import { alertConstants } from "../constants";

export const alertActions = {
  request,
  success,
  error,
  clear,
};

function request() {
  return { type: alertConstants.REQUEST };
}

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR, message: "" };
}
