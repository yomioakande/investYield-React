import React from "react";
import {
  BrowserRouter as Router,
  Route,
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
const AuthRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/auth/login">
          <LogIn />
        </Route>
        <Route exact path="/auth">
          {<Redirect to="/auth/login" />}
        </Route>
        <Route exact path="/auth/signup1">
          <First />
        </Route>
        <Route exact path="/auth/signup2">
          <Second />
        </Route>
        <Route exact path="/auth/signup3">
          <Third />
        </Route>
        <Route exact path="/auth/signup4">
          <Fourth />
        </Route>
        <Redirect from="*" to="/homepage" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AuthRoutes;
