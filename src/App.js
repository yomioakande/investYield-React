import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import './styles/output.css'
// import "./index.css"
import {AuthRoutes,CreatePin} from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import { HomePageRoutes } from "./routes/HomePageRoutes";
import {PrivateRoute,PublicRoute} from "./routes/PrivateRoutes";
import Congrats from "./Layout/Congrats"
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
        {/* <Route exact path="/test"  component={Congrats} /> */}
          {/* <Route exact path="/contactus" component={ContactUs} /> */}
          {/* <Route path="/auth" component={AuthRoutes} /> */}
          <PublicRoute path="/auth" restricted={true} component={AuthRoutes} />
          <PrivateRoute path="/app" component={DashboardRoutes} />
          <Route path="/createpin" component={CreatePin} />
          <Route exact path="/" component={HomePageRoutes} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;