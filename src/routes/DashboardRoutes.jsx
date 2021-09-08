import React,{Suspense} from "react";
import {
  // Route,
  Switch,
  Redirect
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
import ChangePassword from "../Layout/Account/ChangePassword";
import linkCard from "../Layout/Account/LinkCard";
import Refer from "../Layout/Account/Refer"

import myProfile from "../Layout/Account/Profile";
import myPurse from "../Layout/myPurse/index";
import myPurse2 from "../Layout/myPurse/MyPurse2"
import myPurse3 from "../Layout/myPurse/MyPurse3"
import myPurse4 from "../Layout/myPurse/MyPurse4"

import Blog from "../Layout/Blog/index"
import SingleBlog from "../Layout/Blog/Main"
import Help from "../Layout/Help";

import { PrivateRoute } from "./PrivateRoutes";

// const myProfile = React.lazy(() => import('../Layout/Account/Profile')); // Lazy-loaded
const DashboardRoutes = () => {
  return (
    // <Suspense  fallback={<h1>Loading posts...</h1>}>
    <DashboardLayout>
      <Switch>
      {/* <Suspense fallback={<h1>Loading posts...</h1>}>
        <myProfile/>
      </Suspense> */}
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
        <PrivateRoute path="/app/savings/pursestep1" component={myPurse2} />
        <PrivateRoute path="/app/savings/pursestep2" component={myPurse3} />
       <PrivateRoute path="/app/savings/pursestep3" component={myPurse4} />
        <PrivateRoute path="/app/savings/mypurse" component={myPurse} /> 

        <PrivateRoute path="/app/savings" component={Savings} />
        <PrivateRoute path="/app/account/support" component={Support} />
        <PrivateRoute path="/app/account/beneficiary" component={Beneficiary} />
        <PrivateRoute path="/app/account/linkcard" component={linkCard} />

        <PrivateRoute path="/app/blog/:id" component={SingleBlog} />
        <PrivateRoute path="/app/blog" component={Blog} />

        <PrivateRoute exact path="/app/account" component={Account} />
        <PrivateRoute path="/app/account/profile" component={myProfile} />
        <PrivateRoute path="/app/account/changepassword" component={ChangePassword} />
        <PrivateRoute path="/app/account/refer" component={Refer} />

        <Redirect from="/app" to="/app/dashboard" />
      </Switch>
    </DashboardLayout>
    // </Suspense>
  );
};

export default DashboardRoutes;
