import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/style.css";
import logo from "../../assets/images/logo.svg";
const Index = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light nav-edit">
        <div className="container">
          <NavLink to="/" className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item nav-menu-padding">
                <a href="/" className="nav-link menus text-dark">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item nav-menu-padding">
                <NavLink to="/aboutus" className="nav-link menus text-dark">
                  About us
                </NavLink>
              </li>
              <li className="nav-item nav-menu-padding">
                <NavLink
                  to="/contactus"
                  className="nav-link menus text-dark"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item nav-menu-padding">
                <NavLink to="/faq" className="nav-link menus text-dark">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item nav-menu-padding nav-margin-top">
                <a
                  href="/auth/login"
                  className="btn btn-login px-4 menus nav-link"
                >
                  Login
                </a>
              </li>
              <li className="nav-item nav-menu-padding nav-margin-top">
                <a
                  href="auth/signup1"
                  className="btn btn-create-account px-4 menus nav-link"
                >
                  Create an Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;
