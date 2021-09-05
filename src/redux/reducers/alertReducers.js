import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
    case alertConstants.LOGIN_SUCCESS:
    // case alertConstants.REGISTER1_SUCCESS:
    // case alertConstants.REGISTER2_SUCCESS:
    // case alertConstants.REGISTER3_SUCCESS:
    // case alertConstants.REGISTER4_SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case alertConstants.ERROR:
    case alertConstants.LOGIN_ERROR:
    // case alertConstants.REGISTER1_ERROR:
    // case alertConstants.REGISTER2_ERROR:
    // case alertConstants.REGISTER3_ERROR:
    // case alertConstants.REGISTER4_ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {message:""};
    default:
      return state;
  }
}
