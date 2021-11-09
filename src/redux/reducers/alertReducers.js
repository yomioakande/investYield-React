import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.REQUEST:
      return {
        loading: true,
      };
    case alertConstants.SUCCESS:
      return {
        type: "alert alert-success",
        message: action.message,
        loading: false,
      };
    case alertConstants.ERROR:
      return {
        type: "alert alert-danger",
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {
        message: "",
        type: "",
        loading: false,
      };
    default:
      return state;
  }
}
