import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
    case alertConstants.LOGIN_SUCCESS:
      return {
        type: "alert alert-success",
        message: action.message,
      };
    case alertConstants.ERROR:
    case alertConstants.LOGIN_ERROR:
      return {
        type: "alert alert-danger",
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {message:""};
    default:
      return state;
  }
}
