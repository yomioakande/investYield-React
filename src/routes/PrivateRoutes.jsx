import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../helpers//helper";
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/auth/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/app/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
//  default PrivateRoute;
