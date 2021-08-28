import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePageHeader from "../components/LandingHeader.jsx";
import HomePage from "../components/LandingPage";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Faq from "../components/Faq";
import HomePageFooter from "../components/LandingFooter";
import Footer from "../components/Footer";
export const HomePageRoutes = () => {
  return (
    <Router>
      <HomePageHeader />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/home">
          {<Redirect to="/" />}
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <HomePageFooter />
    </Router>
  );
};

export const ContactUsPage = () => {
  return (
    <>
      <HomePageHeader />
      <ContactUs />
      <Footer />
    </>
  );
};
