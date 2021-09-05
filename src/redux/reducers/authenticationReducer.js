import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user")) || null;
const initialState = user ? { loggedIn: true, loading: false, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
        alertType:"alert-danger",
        message:action.payload
        
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        user: {},
        alertType:"alert-danger",
        message:action.payload
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
