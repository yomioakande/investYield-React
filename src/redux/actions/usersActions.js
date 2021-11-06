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
  getPortfolio,
  resetAlerts,
  getGroupCode,
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
      dispatch(successReg(messages));
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
    const { success, messages } = register;
    if (apiUrl === "/api/v1/util/resendotp" && success === true) {
      dispatch(successReg(messages));
    } else {
      dispatch(failure(messages));
    }
  };
}

function bvnReg(obj, apiUrl, func) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);

    const { success, messages } = register;
    if (apiUrl === "/api/v1/user/bvn" && success === true) {
      dispatch(successReg(messages));
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

    const { success, messages } = register;
    if (apiUrl === "/api/v1/user/bvn" && success === true) {
      dispatch(successReg(messages));
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

      sessionStorage.setItem(
        "stash",
        JSON.stringify({ ...obj1, stashRef: data?.reference })
      );
      window.location.href = nextRoute;
    }

    if (apiUrl === "/api/v1/user/my_purse" && success === true) {
      dispatch(successReg(data?.reference));

      sessionStorage.setItem(
        "mainPurseObj",
        JSON.stringify({ ...obj1, myPurseRef: data?.reference })
      );
      window.location.href = nextRoute;
    }

    if (apiUrl === "/api/v1/user/group_savings" && success === true) {
      dispatch(successReg(data?.transId));

      sessionStorage.setItem(
        "mainGroupObj",
        JSON.stringify({ ...obj1, groupRef: data?.transId })
      );
      window.location.href = nextRoute;
    }
    if (apiUrl === "/api/v1transfer/FundExistingPurse" && success === true) {
      dispatch(successReg(data?.transId));

      sessionStorage.setItem(
        "fundPurse",
        JSON.stringify({ ...obj1, fundPurseRef: data?.reference })
      );
      window.location.href = nextRoute;
    }
    if (apiUrl === "/api/v1/user/join_group_savings" && success === true) {
      dispatch(successReg(data?.transId));

      sessionStorage.setItem(
        "publicGroup",
        JSON.stringify({ ...obj1, publicGroupRef: data?.transId })
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
    } else if (success === true) {
      console.log(data);
      dispatch(successReg(data?.reference));

      sessionStorage.setItem(
        "transferObj",
        JSON.stringify({ challengeId: data.id })
      );

      window.location.href = nextRoute;
    } else {
      dispatch(failure(messages));
      return;
    }
  };
}

function payPurse(obj, apiUrl, func, fail) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { success, messages } = register;
    if (success === true) {
      dispatch(successReg());
      func();
    } else {
      dispatch(failure(messages));
      fail(messages);
      return;
    }
  };
}

function payCard(obj, apiUrl, nextRoute) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.postData(obj, apiUrl);
    const { data, success, messages } = register;

    if (success === true) {
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
      sessionStorage.setItem("addBenef", JSON.stringify({ ...data, ...obj }));
      dispatch(successReg(messages));
      func(true);
    } else if (apiUrl === "/api/v1/user/beneficiary" && success === true) {
      dispatch(successReg());
      func();
    } else if (apiUrl && success === true) {
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
      return data;
    } else {
      dispatch(failure(messages));
    }
  };
}

function getInfo(apiUrl) {
  return async (dispatch) => {
    dispatch(request());
    const getAll = await userService.getData(apiUrl);
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
    if (success === true) {
      dispatch(successReg());
      return data;
    } else {
      dispatch(failure(""));
      dispatch(alertActions.error(messages));
    }
  };
}

function getGroupCode(apiUrl, code, func) {
  return async (dispatch) => {
    dispatch(request());
    const getAll = await userService.getGroupCode(apiUrl, code);
    const { data, success, messages } = getAll;

    if (success === true) {
      dispatch(successReg());
      func();
      return data;
    } else {
      dispatch(failure(messages));
      // dispatch(alertActions.error(messages));
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

    if (apiUrl && success === true) {
      func();
      return data;
    } else {
      dispatch(alertActions.error(messages));
      dispatch(failure(messages));
    }
  };
}

function addCard() {
  return async (dispatch) => {
    dispatch(request());
    const getCard = await userService.getData("/api/v1/user/card_url").then();
    window.open(getCard?.data?.authUrl, "_blank");
    dispatch(successReg());
    // window.location.href = getCard?.data?.authUrl;
  };
}

function getPortfolio(apiUrl) {
  return async (dispatch) => {
    dispatch(request());
    const register = await userService.getPortfolio(apiUrl);

    const { data, success, messages } = register;

    if (success === true) {
      return data;
    } else {
      dispatch(alertActions.error(messages));
      dispatch(failure(messages));
    }
  };
}

function resetAlerts() {
  return (dispatch) => {
    dispatch(successReg(""));
    dispatch(failure(""));
    dispatch(alertActions.clear(""));
  };
}
