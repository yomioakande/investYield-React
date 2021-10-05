import { userConstants } from "../constants";
import { userService } from "../../services";
import { alertActions } from "./alertActions";
// import { useErrorHandler } from "react-error-boundary";

export const usersActions = {
  login,
  logout,
  register,
  register2,
  register3,
  register4,
  resend,
  getInfo,
  getDebitCards,
  bvnReg,
  confirmBvnReg,
  addCard,
  payPurse,
  payCard,
  getPaginateTransact,
  postFeedBack,
  deleteData,
  getFrequency,
  createCore,
  createStash,
  getTargetValue,
  getAccounts,
  postImageBase64,
  resetAlerts,
};

function login(body) {
  return async (dispatch) => {
    dispatch(request());
    const signIn = await userService.login(body);
    const { data, success, messages } = signIn;

    if (success === true) {
      const d = new Date();
      const expires_at = d.getTime() + 1 * 60 * 60 * 1000;

      let user = {
        name: data.name,
        expiresAt: expires_at,
        refreshToken: data.refreshToken,
        token: data.token,
      };

      sessionStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/app/dashboard";
    } else {
      dispatch(failure(messages[0]));
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
        sessionStorage.setItem("userReg", JSON.stringify(data));
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
      sessionStorage.setItem("user", JSON.stringify(user));
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
    const { success, messages } = register;
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
    console.log("tems", register);
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
    console.log(register);
    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/bvn" && success === true) {
      dispatch(successReg(data?.challenge));
      func();
    }

    if (apiUrl === "/api/v1/user/profile" && success === true) {
      dispatch(successReg());
      func();
    } else if (success === true) {
      func();
      dispatch(successReg(messages));
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function createStash(obj1, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj1, apiUrl);

    const { data, success, messages } = register;
    if (apiUrl === "/api/v1/user/stash" && success === true) {
      dispatch(successReg(data?.reference));
      console.log(register);
      sessionStorage.setItem(
        "stash",
        JSON.stringify({ ...obj1, stashRef: data?.reference })
      );
      window.location.href = nextRoute;
    }

    if (apiUrl === "/api/v1/user/my_purse" && success === true) {
      dispatch(successReg(data?.reference));
      console.log(data, "purse");
      console.log(messages);
      sessionStorage.setItem(
        "mainPurseObj",
        JSON.stringify({ ...obj1, myPurseRef: data?.reference })
      );
      window.location.href = nextRoute;
    }

    if (apiUrl === "/api/v1/user/group_savings" && success === true) {
      dispatch(successReg(data?.reference));
      console.log(register, "groupsavingsRef");
      sessionStorage.setItem(
        "mainGroupObj",
        JSON.stringify({ ...obj1, groupRef: data?.reference })
      );
      window.location.href = nextRoute;
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
      sessionStorage.setItem(
        "core",
        JSON.stringify({ ...obj, coreRef: data?.reference })
      );
      window.location.href = nextRoute;
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function payPurse(obj, apiUrl,func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { data, success, messages } = register;
    if (success === true) {
      dispatch(successReg(data?.reference));
      func()
      // sessionStorage.setItem("core", JSON.stringify(obj));
      // window.location.href = nextRoute;
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function payCard(obj, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { data, success, messages } = register;

    console.log(register);
    if (success === true) {
      console.log("df", data);
      // dispatch(successReg(data?.reference));
      sessionStorage.setItem(
        "transferObj",
        JSON.stringify({ ...obj, challengeId: data.id })
      );
      window.location.href = `${nextRoute}/${data.id}`;
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
    } else if (
      apiUrl === "/api/v1/user/resolve_beneficiary" &&
      success === true
    ) {
      console.log(data);
      sessionStorage.setItem("addBenef", JSON.stringify({ ...data, ...obj }));
      dispatch(successReg(messages));
      func(true);
    } else if (apiUrl === "/api/v1/user/beneficiary" && success === true) {
      console.log(data);
      dispatch(successReg());
      func();
    } else if (apiUrl && success === true) {
      console.log(data);
      func();
      dispatch(successReg(messages));
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function getDebitCards(apiUrl) {
  return async (dispatch) => {
    dispatch(request());
    const getAll = await userService.getData(apiUrl);
    const { data, success, messages } = getAll;
    if (success === true) {
      // dispatch(successReg());
      return data;
    } else {
      dispatch(failure(messages));
    }
  };
}

function getInfo(apiUrl) {
  return async (dispatch) => {
    // const handleError=useErrorHandler();
    dispatch(request());
    const getAll = await userService.getData(apiUrl);
    const { data, success, messages } = getAll;
    console.log("accounts", data);
    if (apiUrl && success === true) {
      dispatch(successReg());
      // handleError(messages)
      return data;
    } else {
      dispatch(failure(""));
      dispatch(alertActions.error(messages));
    }
  };
}

function getPaginateTransact(apiUrl, pageNumber, pageSize) {
  return async (dispatch) => {
    dispatch(request());
    const getAll = await userService.getPaginateTransact(
      apiUrl,
      pageNumber,
      pageSize
    );
    const { data, success, messages } = getAll;

    if (apiUrl && success === true) {
      dispatch(successReg());
      return data;
    } else {
      dispatch(failure(""));
      dispatch(alertActions.error(messages));
    }
  };
}

function getAccounts(apiUrl, accountCode) {
  return async (dispatch) => {
    dispatch(request());
    const getAll = await userService.getAccounts(apiUrl, accountCode);
    const { data, success, messages } = getAll;
    console.log("data", getAll);
    if (success === true) {
      dispatch(successReg());
      return data;
    } else {
      dispatch(failure(""));
      dispatch(alertActions.error(messages));
    }
  };
}

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
      console.log(data);
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

function deleteData(apiUrl, obj, func) {
  return async (dispatch) => {
    dispatch(request());

    const deleteId = await userService.deleteData(apiUrl, obj);
    const { data, success, messages } = deleteId;
    console.log(deleteId);
    if (apiUrl && success === true) {
      console.log(obj, apiUrl);
      func();
      return data;
    } else {
      dispatch(alertActions.error(messages));
      dispatch(failure(messages));
    }
  };

  // function request(id) {
  //   return { type: userConstants.DELETE_REQUEST, id };
  // }
  // // function success(id) {
  // //   return { type: userConstants.DELETE_SUCCESS, id };
  // // }
  // function failure(id, error) {
  //   return { type: userConstants.DELETE_FAILURE, id, error };
  // }
}

function addCard() {
  return async (dispatch) => {
    dispatch(request());
    const getCard = await userService.getData("/api/v1/user/card_url").then();
    console.log(getCard);
    window.location.href = getCard?.data?.authUrl;
  };
}

function resetAlerts() {
  return (dispatch) => {
    dispatch(successReg(""));
    dispatch(failure(""));
    dispatch(alertActions.clear(""));
  };
}
