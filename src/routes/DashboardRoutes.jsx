import React from "react"; // Suspense
import {
  // Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DashboardLayout from "../Layout/index";
import Main from "../Layout/Main";
import StashIndexPage from "../Layout/Stash/index";
import StashBreakdown from "../Layout/Stash/Breakdown";

import Savings from "../Layout/Savings/Savings";
import CreateSavings from "../Layout/Savings/CreateSavings";
import CreateSavings2 from "../Layout/Savings/CreateSavings2";
import CreateSavings3 from "../Layout/Savings/CreateSavings3";
import CreateSavings4 from "../Layout/Savings/CreateSavings4";
import CardOTP from "../Layout/Savings/Otp";

import GroupMainPage from "../Layout/Group/index";
import Group1 from "../Layout/Group/Group1";
import Group2 from "../Layout/Group/Group2";
import Group3 from "../Layout/Group/Group3";
import Group4 from "../Layout/Group/Group4";
import JoinGroup1 from "../Layout/Group/JoinGroup1";
import JoinGroup2 from "../Layout/Group/JoinGroup2";
import PublicGroup from "../Layout/Group/PublicGroup";
import Account from "../Layout/Account/Index";
import Support from "../Layout/Account/Support";
import Beneficiary from "../Layout/Account/Beneficiary";
import ChangePassword from "../Layout/Account/ChangePassword";
import linkCard from "../Layout/Account/LinkCard";
import Refer from "../Layout/Account/Refer";
import MyPortfolio from "../Layout/Account/MyPorfolio";
import myProfile from "../Layout/Account/Profile";
import myCard from "../Layout/Account/Card/index";
import Transfer from "../Layout/Account/Transfer/Index";

import SingleSavings from "../Layout/Savings/SingleSavings";
import Withdraw from "../Layout/Account/Withdraw/index";

import myPurse from "../Layout/myPurse/index";
import myPurse2 from "../Layout/myPurse/MyPurse2";
import myPurse3 from "../Layout/myPurse/MyPurse3";
import myPurse4 from "../Layout/myPurse/MyPurse4";
import fundPurse2 from "../Layout/FundPurse2";
import BreakdownFund from "../Layout/BreakdownFund";
import Blog from "../Layout/Blog/index";
import SingleBlog from "../Layout/Blog/Main";
import Help from "../Layout/FeedBack";
import SecondOTPScreen from "../Layout/Savings/Otp2"

import { PrivateRoute } from "./PrivateRoutes";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <PrivateRoute exact path="/app/dashboard" component={Main} />
        <PrivateRoute exact path="/app/help" component={Help} />
        <PrivateRoute path="/app/stash/breakdown" component={StashBreakdown} />


        <PrivateRoute path="/app/otpwithdraw" component={SecondOTPScreen} />
        
        <PrivateRoute path="/app/stash/otp/:id" component={CardOTP} />
        <PrivateRoute path="/app/stash" component={StashIndexPage} />
        <PrivateRoute path="/app/savings/create" component={CreateSavings} />
        <PrivateRoute
          path="/app/savings/create2/:id"
          component={CreateSavings2}
        />
        <PrivateRoute
          path="/app/savings/create3/:id"
          component={CreateSavings3}
        />
        <PrivateRoute path="/app/savings/create4" component={CreateSavings4} />
        <PrivateRoute path="/app/savings/otp/id" component={CardOTP} />

        <PrivateRoute path="/app/savings/mypurse" component={myPurse} />
        <PrivateRoute path="/app/savings/pursestep1" component={myPurse2} />
        <PrivateRoute path="/app/savings/pursestep2" component={myPurse3} />
        <PrivateRoute path="/app/savings/pursestep3" component={myPurse4} />
        <PrivateRoute path="/app/savings/mypurse" component={myPurse} />
        <PrivateRoute path="/app/savings/fundpurse" component={fundPurse2} />
        <PrivateRoute
          path="/app/savings/fundpursebreakdown"
          component={BreakdownFund}
        />
        <PrivateRoute path="/app/savings" component={Savings} />

        <PrivateRoute path="/app/singlesavings/:id" component={SingleSavings} />

        <PrivateRoute
          path="/app/groupsavings/joingroup1/:id"
          component={JoinGroup1}
        />
        <PrivateRoute
          path="/app/groupsavings/joingroup2"
          component={JoinGroup2}
        />
        <PrivateRoute path="/app/groupsavings" component={GroupMainPage} />
        <PrivateRoute path="/app/groupsavings1/:id" component={Group1} />
        <PrivateRoute path="/app/groupsavings2" component={Group2} />
        <PrivateRoute path="/app/groupsavings3" component={Group3} />
        <PrivateRoute path="/app/groupsavings4" component={Group4} />
        <PrivateRoute path="/app/publicgroup" component={PublicGroup} />
        <PrivateRoute path="/app/blog/:id" component={SingleBlog} />
        <PrivateRoute path="/app/blog" component={Blog} />

        <PrivateRoute exact path="/app/account" component={Account} />

        <PrivateRoute exact path="/app/account/transfer" component={Transfer} />
        <PrivateRoute exact path="/app/account/withdraw" component={Withdraw} />
        <PrivateRoute exact path="/app/help" component={Help} />

        <PrivateRoute
          exact
          path="/app/account/myportfolio"
          component={MyPortfolio}
        />
        <PrivateRoute path="/app/account/support" component={Support} />
        <PrivateRoute path="/app/account/beneficiary" component={Beneficiary} />
        <PrivateRoute path="/app/account/linkcard" component={linkCard} />
        <PrivateRoute path="/app/account/profile" component={myProfile} />
        <PrivateRoute
          path="/app/account/changepassword"
          component={ChangePassword}
        />
        <PrivateRoute path="/app/account/mycard" component={myCard} />
        <PrivateRoute path="/app/account/refer" component={Refer} />

        <Redirect from="/app" to="/app/dashboard" />
      </Switch>
    </DashboardLayout>
    // </Suspense>
  );
};

export default DashboardRoutes;
