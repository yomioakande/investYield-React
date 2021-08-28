import React from "react";
import {
  // Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DashboardLayout from "../Layout/index";
import Main from "../Layout/Main";
import Savings from "../Layout/Savings";
import PrivateRoute from "./PrivateRoutes";
const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <PrivateRoute exact path="/app/dashboard" component={Main} />
        <PrivateRoute path="/app/savings" component={Savings} />
        <Redirect from = "/app" to="/app/dashboard"/>
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
