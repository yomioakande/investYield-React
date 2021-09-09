import { authHeader } from "../helpers/helper";

export const userService = {
  login,
  logout,
  register1,
  getData,
  putData,
  postData,
  deleteData,
  getFreq,
  getEstimate,
  getTargetValue
};

async function register1(user, apiUrl) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}
const baseUrl = "https://api-staging.investyield.ng:44377";

async function login(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${baseUrl}/api/v1/identity/login`, requestOptions);
    const getData = await res.json();

    return getData;
  } catch (error) {
    return error;
  }
}

function logout() {
  localStorage.removeItem("user");
}

// function getData(id) {
//   const requestOptions = {
//       method: 'GET',
//       headers: authHeader()
//   };

//   // return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

async function getData(apiUrl, firstQ, secondQ, thirdQ, fourthQ) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getFreq(apiUrl, firstQ, secondQ) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}/?code=${firstQ}&ccy=${secondQ}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getEstimate(apiUrl, firstQ, secondQ, thirdQ, fourthQ) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}?ExpectedReturn=${firstQ}&Frequency=${secondQ}&TargetDate=${thirdQ}&Product=${fourthQ}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getTargetValue(apiUrl, firstQ, secondQ, thirdQ, fourthQ) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}?Principal=${firstQ}&Tenor=${secondQ}&Product=${thirdQ}&Currency=${fourthQ}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function postData(user, apiUrl) {
  const requestOptions = {
    method: "POST",
    headers: {
      // 'Accept': 'application/json',
      Authorization: authHeader()?.Authorization,
      "Content-Type": "application/json",
    },
    // headers: { "Content-Type": "application/json",authHeader() },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function putData(user, apiUrl) {
  const requestOptions = {
    method: "PUT",
    headers: {
      // 'Accept': 'application/json',
      Authorization: authHeader()?.Authorization,
      "Content-Type": "application/json",
    },
    // headers: { "Content-Type": "application/json",authHeader() },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function deleteData(apiUrl, obj) {
  const requestOptions = {
    method: "DELETE",
    headers: {
     Authorization: authHeader()?.Authorization,
     "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  };
  try {
    const datas = await fetch(
      `https://api-staging.investyield.ng:44377${apiUrl}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}
