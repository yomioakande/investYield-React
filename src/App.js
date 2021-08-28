import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import { HomePageRoutes, ContactUsPage } from "./routes/HomePageRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/contactus" component={ContactUsPage} />
          <Route path="/auth" component={AuthRoutes} />
          <PrivateRoute path="/app" component={DashboardRoutes} />
          <Route path="/" component={HomePageRoutes} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
