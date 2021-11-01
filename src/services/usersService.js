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
  getTargetValue,
  getAccounts,
  getPaginateTransact,
  getPortfolio,
  getGroupCode,
};

const baseUrl = process.env.REACT_APP_BACKEND_URL;

async function register1(user, apiUrl) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

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
  sessionStorage.removeItem("user");
}

async function getData(apiUrl) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getPaginateTransact(apiUrl, first, second) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `${baseUrl}${apiUrl}?pageNumber=${first}&pageSize=${second}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getAccounts(apiUrl, accountCode) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `${baseUrl}${apiUrl}?productCode=${accountCode}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getGroupCode(apiUrl, Code) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `${baseUrl}${apiUrl}?Code=${Code}`,
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
      `${baseUrl}${apiUrl}/?code=${firstQ}&ccy=${secondQ}`,
      requestOptions
    );
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getEstimate(apiUrl, firstQ, secondQ, thirdQ, fourthQ, fifthQ) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  try {
    const datas = await fetch(
      `${baseUrl}${apiUrl}?ExpectedReturn=${firstQ}&Frequency=${secondQ}&TargetDate=${thirdQ}&StartDate=${fourthQ}&Product=${fifthQ}`,
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
      `${baseUrl}${apiUrl}?Principal=${firstQ}&Tenor=${secondQ}&Product=${thirdQ}&Currency=${fourthQ}`,
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
      Authorization: authHeader()?.Authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
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
      Authorization: authHeader()?.Authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}

async function getPortfolio(apiUrl) {
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: authHeader()?.Authorization,
      "Content-Type": "application/json",
    },
  
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const datas = await fetch(`${baseUrl}${apiUrl}`, requestOptions);
    const getData = await datas.json();
    return getData;
  } catch (error) {
    return error;
  }
}
