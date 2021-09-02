import { alertConstants } from "../constants";

export const alertActions = {
  success,
  error,
  clear,
  successLogIn,
  errorLogIn,
  // successRegister1,
  // successRegister2,
  // successRegister3,
  // successRegister4,
  // errorRegister1,
  // errorRegister2,
  // errorRegister3,
  // errorRegister4,
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
// function successRegister1(message) {
//   return { type: alertConstants.REGISTER1_SUCCESS, message };
// }
// function successRegister2(message) {
//   return { type: alertConstants.REGISTER2_SUCCESS, message };
// }
// function successRegister3(message) {
//   return { type: alertConstants.REGISTER3_SUCCESS, message };
// }

// function successRegister4(message) {
//   return { type: alertConstants.REGISTER4_SUCCESS, message };
// }

function errorLogIn(message) {
  return { type: alertConstants.LOGIN_ERROR, message };
}

// function errorRegister1(message) {
//   return { type: alertConstants.REGISTER1_ERROR, message };
// }
// function errorRegister2(message) {
//   return { type: alertConstants.REGISTER2_ERROR, message };
// }
// function errorRegister3(message) {
//   return { type: alertConstants.REGISTER3_ERROR, message };
// }

// function errorRegister4(message) {
//   return { type: alertConstants.REGISTER4_ERROR, message };
// }
