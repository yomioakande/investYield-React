import * as Yup from "yup";
import { userService } from "../services/usersService";

export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem("user"));

  const d = new Date();
  const now = d.getTime();

  const isExpiry = now > user.expiresAt ? true : false;

  if (isExpiry) {
    
    const getRef = async () => {
      
      const data = await userService.register1(
        { token: user.token, refreshToken: user.refreshToken },
        "/api/v1/identity/refresh"
      );

      const expires_at = data.expiresIn + now;
      let user = {
        name: data.name,
        expiresAt: expires_at,
        refreshToken: data.refreshToken,
        token: data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
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
  const token = JSON.parse(localStorage.getItem("user"));

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
