import React from "react";
import {
  BrowserRouter as Router,
  // Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import First from "../components/SignUp/First";
import Second from "../components/SignUp/Second";
import Third from "../components/SignUp/Third";
import Fourth from "../components/SignUp/Fourth";
import Footer from "../components/Footer";
import ForgotPassword from "../components/Forgot/index";
import ForgotToken from "../components/Forgot/Token";
import PasswordForget from "../components/Forgot/Password";
import { PublicRoute } from "./PrivateRoutes";
export const AuthRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute restricted={true} exact path="/auth/login">
          <LogIn />
        </PublicRoute>
        <PublicRoute restricted={true} exact path="/auth">
          {<Redirect to="/auth/login" />}
        </PublicRoute>
        <PublicRoute restricted={true} path="/auth/signup1/:id">
          <First />
        </PublicRoute>
        <PublicRoute restricted={true} path="/auth/signup2">
          <Second />
        </PublicRoute>
        <PublicRoute restricted={true} path="/auth/signup3">
          <Third />
        </PublicRoute>
        {/* <PublicRoute restricted={false} exact path="/auth/signup4">
          <Fourth />
        </PublicRoute> */}
        <PublicRoute restricted={true} path="/auth/forgotpassword">
          <ForgotPassword />
        </PublicRoute>
        <PublicRoute restricted={true} path="/auth/forgottoken">
          <ForgotToken />
        </PublicRoute>
        <PublicRoute restricted={true} path="/auth/createforgotpassword">
          <PasswordForget />
        </PublicRoute>

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

// export default AuthRoutes;

export const CreatePin = () => {
  return (
    <>
      <Fourth />
      <Footer />
    </>
  );
};
