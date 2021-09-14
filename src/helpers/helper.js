import * as Yup from "yup";
import { userService } from "../services/usersService";

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(sessionStorage.getItem("user"));
  const d = new Date();
  const now = d.getTime();
  const isExpiry = now > user.expiresAt ? true : false;

  if (isExpiry) {
    const getRef = async () => {
      let user = JSON.parse(sessionStorage.getItem("user"));

      const refreshObj = {
        token: user.token,
        refreshToken: user.refreshToken,
      };

      const data = await userService.register1(
        refreshObj,
        "/api/v1/identity/refresh"
      );
      // console.log(data);

      const expires_at = d.getTime() + 1 * 60 * 60 * 1000;
      user = {
        name: data.data.name,
        expiresAt: expires_at,
        refreshToken: data.data.refreshToken,
        token: data.data.token,
      };
      sessionStorage.setItem("user", JSON.stringify(user));
      return { Authorization: "Bearer " + user.token };
    };

    getRef();
  } else {
    return { Authorization: "Bearer " + user.token };
  }
}

export const addAsterik = (strn) => {
  let cap = ("+234" + strn?.toString()).split("");
  cap.splice(7, 4, "*", "*", "*", "*");
  return cap.join("");
};

export const isLogin = () => {
  const token = JSON.parse(sessionStorage.getItem("user"));

  if (token && token.token) {
    return true;
  }

  return false;
};

export const Schema = Yup.object().shape({
  password: Yup.string().required("This field is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

//DATE FORMATTER

export function dateConv(CurrentDate) {
  let date = new Date(CurrentDate);
  let year = date.getFullYear();
  // let hh = date.getHours();
  // let sec = date.getSeconds();
  // let min = date.getMinutes();
  let m = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = m[date.getMonth()];
  let dt = date.getDate();
  if (dt < 10) {
    dt = "0" + dt;
  }

  return [`${dt}-${month}-${year}`];
}

//CURRENCY FORMATTER
