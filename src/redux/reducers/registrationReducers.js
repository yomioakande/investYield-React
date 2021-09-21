import { userConstants } from "../constants";

export function registration(
  state = { loading: false, message: "", alertType: "", user: "" },
  action
) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true, loading: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        alertType: "alert-success",
        // message:action.user,
        // user: action.user,
        message: action.payload,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        alertType: "alert-danger",
        message: action.payload,
      };
    default:
      return state;
  }
}
