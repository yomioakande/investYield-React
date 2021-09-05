import React from "react";
import {
  // Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DashboardLayout from "../Layout/index";
import Main from "../Layout/Main";
import StashIndexPage from "../Layout/Stash/index";
import StashBreakdown from "../Layout/Stash/Breakdown";
import StashOtp from "../Layout/Stash/Otp";
import Savings from "../Layout/Savings/Savings";
import CreateSavings from "../Layout/Savings/CreateSavings";
import CreateSavings2 from "../Layout/Savings/CreateSavings2";
import CreateSavings3 from "../Layout/Savings/CreateSavings3";
import CreateSavings4 from "../Layout/Savings/CreateSavings4";
import CreateSavingsOTP from "../Layout/Savings/Otp";
import Account from "../Layout/Account/Index";
import Support from "../Layout/Account/Support";
import Beneficiary from "../Layout/Account/Beneficiary";
import linkCard from "../Layout/Account/LinkCard";

import myProfile from "../Layout/Account/Profile";
import myPurse from "../Layout/myPurse/index";
import Help from "../Layout/Help";

import { PrivateRoute } from "./PrivateRoutes";
const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <PrivateRoute exact path="/app/dashboard" component={Main} />
        <PrivateRoute exact path="/app/help" component={Help} />
        <PrivateRoute path="/app/stash/breakdown" component={StashBreakdown} />
        <PrivateRoute path="/app/stash/confirmotp" component={StashOtp} />
        <PrivateRoute path="/app/stash" component={StashIndexPage} />
        <PrivateRoute path="/app/savings/create" component={CreateSavings} />
        <PrivateRoute
          path="/app/savings/create2/:id"
          component={CreateSavings2}
        />
        <PrivateRoute path="/app/savings/create3" component={CreateSavings3} />
        <PrivateRoute path="/app/savings/create4" component={CreateSavings4} />
        <PrivateRoute path="/app/savings/otp" component={CreateSavingsOTP} />

        <PrivateRoute path="/app/savings/mypurse" component={myPurse} />

        <PrivateRoute path="/app/savings" component={Savings} />
        <PrivateRoute path="/app/account/support" component={Support} />
        <PrivateRoute path="/app/account/beneficiary" component={Beneficiary} />
        <PrivateRoute path="/app/account/linkcard" component={linkCard} />

        <PrivateRoute exact path="/app/account" component={Account} />

        <PrivateRoute path="/app/account/profile" component={myProfile} />

        <Redirect from="/app" to="/app/dashboard" />
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
