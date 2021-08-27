import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthRoutes from "./routes/AuthRoutes";
import Dashboard from "./routes/DashboardRoutes";
function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              {<Redirect to="/homepage" />}
            </Route>
            <Route path="/homepage" component={LandingPage} />
            <Route path="/auth" component={AuthRoutes} />
            <Route path="/app" component={Dashboard} />
          </Switch>
        </Router>
      </React.Fragment>

      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
