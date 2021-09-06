import { userConstants } from "../constants";
import { userService } from "../../services";
import { alertActions } from "./alertActions";

export const usersActions = {
  login,
  logout,
  register,
  register2,
  register3,
  register4,
  resend,
  getInfo,
  bvnReg,
  confirmBvnReg,
  postFeedBack,
  deleteData,
  getFrequency,
  createCore,
  createStash,
  getTargetValue,
  postImageBase64,
};

function login(body) {
  return async (dispatch) => {
    dispatch(request());
    const signIn = await userService.login(body);
    const { data, success, messages } = signIn;

    if (success === true) {
      const d = new Date();
      const expires_at = d.getTime() + 1 * 60 * 60 * 1000;
      // const expires_at = data.expiresIn + now;

      let user = {
        name: data.name,
        expiresAt: expires_at,
        refreshToken: data.refreshToken,
        token: data.token,
      };

      localStorage.setItem("user", JSON.stringify(user));

      function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
      }
      // dispatch(success(data));
      window.location.href = "/app/dashboard";
    } else {
      dispatch(failure(messages[0]));
      // dispatch(alertActions.errorLogIn(messages[0]));
      // dispatch(failure(data));
    }
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }

  // function success(user) {
  //   return { type: userConstants.LOGIN_SUCCESS, payload: user };
  // }
  function failure(message) {
    return { type: userConstants.LOGIN_FAILURE, payload: message };
  }
}

//LOGOUT ACTION
function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

//REGISTER ACTION
function register(user, apiUrl, nextRoute, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.register1(user, apiUrl);

    const { data, success, messages } = register;

    //FIRST SIGNUP
    if (success === true) {
      dispatch(successReg(messages));
      console.log(register);
      if (
        apiUrl === "/api/v1/identity/resetpasswordtoken" ||
        apiUrl === "/api/v1/identity/register"
      ) {
        localStorage.setItem("userReg", JSON.stringify(data));
      }

      if (apiUrl === "/api/vi/identity/resetpassword") {
        func();
      }

      window.location.href = nextRoute;
      return;
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function request() {
  return { type: userConstants.REGISTER_REQUEST };
}
function successReg(message) {
  return { type: userConstants.REGISTER_SUCCESS, payload: message };
}
function failure(message) {
  return { type: userConstants.REGISTER_FAILURE, payload: message };
}

function register2(user, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.register1(user, apiUrl);

    const { success, messages } = register;

    if (
      apiUrl === "/api/v1/identity/validateregistrationotp" &&
      success === true
    ) {
      window.location.href = nextRoute;
      dispatch(alertActions.clear());
      return;
    } else {
      dispatch(failure(messages));
    }
  };
}

function register3(user, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.register1(user, apiUrl);

    const { data, success, messages } = register;

    //THIRD SIGNUP
    if (apiUrl === "/api/v1/identity/createpassword" && success === true) {
      const d = new Date();
      const now = d.getTime();
      const expires_at = data.expiresIn + now;

      let user = {
        name: data.name,
        expiresAt: expires_at,
        refreshToken: data.refreshToken,
        token: data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = nextRoute;
      return;
    } else {
      dispatch(failure(messages));
    }
  };
}

function register4(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/pin" && success === true) {
      func();
      // window.location.href = nextRoute;
    } else {
      dispatch(failure(messages));
    }
  };
}

function postImageBase64(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/util/fileupload" && success === true) {
      func();
      dispatch(successReg(messages));
      return data;
    } else {
      dispatch(failure(messages));
    }
  };
}

function resend(resendObj, apiUrl) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.register1(resendObj, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/util/resendotp" && success === true) {
      dispatch(successReg(data?.challenge));
    } else {
      dispatch(failure(messages));
    }
  };
}

function bvnReg(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/bvn" && success === true) {
      dispatch(successReg(data?.challenge));
      func();
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function confirmBvnReg(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.putData(obj, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/bvn" && success === true) {
      dispatch(successReg(data?.challenge));
      func();
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function createStash(obj1, obj2, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj1, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/stash" && success === true) {
      dispatch(successReg(data?.reference));
      localStorage.setItem("stash", JSON.stringify({ ...obj1, ...obj2 }));
      window.location.href = nextRoute;
      // func();
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function createCore(obj, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/coreaccount" && success === true) {
      dispatch(successReg(data?.reference));
      localStorage.setItem("core", JSON.stringify(obj));
      window.location.href = nextRoute;
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function postFeedBack(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/util/feedback" && success === true) {
      dispatch(successReg(data));

      func();
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

// //RESET PASSWORD 1
// if (apiUrl === "/api/v1/identity/resetpasswordtoken" && success === true) {
//   localStorage.setItem("id", JSON.stringify(data?.id));
//   window.location.href = nextRoute;
//   return;
// } else {
//   dispatch(alertActions.error(messages));
// }

// //RESET PASSWORD 2
// if (
//   apiUrl === "/api/v1/identity/validateresetpasswordtoken" &&
//   success === true
// ) {
//   window.location.href = nextRoute;
//   return;
// } else {
//   dispatch(alertActions.error(messages));
// }

// if (apiUrl === "/api/v1/identity/resetpassword" && success === true) {
//   //custom alert message
//   window.location.href = nextRoute;
//   return;
// } else {
//   dispatch(alertActions.error(messages));
// }
//   };

// }

function getInfo(apiUrl) {
  return async (dispatch) => {
    const getAll = await userService.getData(apiUrl);

    const { data, success, messages } = getAll;

    if (apiUrl === "/api/v1/user/summary" && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }

    if (apiUrl && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }
  };
}

//

function getFrequency(apiUrl, firstQ, secondQ) {
  return async (dispatch) => {
    const getAll = await userService.getFreq(apiUrl, firstQ, secondQ);

    const { data, success, messages } = getAll;

    if (apiUrl === "/api/v1/util/productinterest" && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }

    if (apiUrl && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }
  };
}

function getTargetValue(apiUrl, firstQ, secondQ, thirdQ, fourthQ) {
  return async (dispatch) => {
    const getAll = await userService.getTargetValue(
      apiUrl,
      firstQ,
      secondQ,
      thirdQ,
      fourthQ
    );

    const { data, success, messages } = getAll;

    if (apiUrl === "/api/v1/util/future_value" && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }

    if (apiUrl && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
    }
  };
}

function deleteData(apiUrl, id) {
  return async (dispatch) => {
    dispatch(request());

    const deleteId = await userService.deleteData(apiUrl, id);
    const { data, success, messages } = deleteId;

    if (apiUrl && success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
      dispatch(failure(messages));
    }
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  // function success(id) {
  //   return { type: userConstants.DELETE_SUCCESS, id };
  // }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

// function request() {
//   return { type: userConstants.GETALL_REQUEST };
// }
// function success(users) {
//   return { type: userConstants.GETALL_SUCCESS, users };
// }
// function failure(error) {
//   return { type: userConstants.GETALL_FAILURE, error };
// }
