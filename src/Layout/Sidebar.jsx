import React from "react";
import { NavLink } from "react-router-dom";
import investYield from "../assets/media/investyieldLogo.svg";
import "../assets/css/theme.css";
import { Home, Shield, Activity, File, User, LogOut } from "react-feather";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";

const Sidebar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* // <!-- MENU SIDEBAR--> */}

      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <NavLink to="/">
            <img src={investYield} alt="investYield" />
          </NavLink>
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li className="mt-2 mb-3">
                <NavLink
                  className="js-arrow"
                  activeClassName="activelink"
                  to="/app/dashboard"
                >
                  <Home className="mr-3" />
                  Home
                </NavLink>
              </li>
              <li className="has-sub mb-3">
                <NavLink
                  className="js-arrow"
                  activeClassName="activelink"
                  to="/app/savings"
                >
                  <Shield className="mr-3" />
                  Savings
                </NavLink>
              </li>
              <li className="mb-3 diasbled-nav">
<<<<<<< HEAD
                <NavLink onClick={handleClick} to="">
=======
                <NavLink to="/app">
>>>>>>> dab07223ebe423e7076511ffea90966693ecb9c1
                  <Activity className="mr-3" />
                  Invest &nbsp; <span className="tdisable"> Coming Soon</span>
                </NavLink>
              </li>
              <li className="has-sub mb-3">
                <NavLink
                  className="js-arrow"
                  activeClassName="activelink"
                  to="/app/blog"
                >
                  <File className="mr-3" />
                  Blog
                </NavLink>
              </li>
              <li className="has-sub mb-3">
                <NavLink
                  className="js-arrow"
                  activeClassName="activelink"
                  to="/app/account"
                >
                  <User className="mr-3" />
                  Account
                </NavLink>
              </li>
              <li className="log-out-btn mb-3">
                <a
                  href="/auth/login"
                  onClick={() => props.logout()}
                  className="js-arrow"
                >
                  <LogOut className="mr-3" />
                  Log Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* // <!-- END MENU SIDEBAR--> */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { alert } = state;
  return { loggingIn, alert };
};

const actionCreators = {
  // register: usersActions.register,
  logout: usersActions.logout,
};

export default connect(mapStateToProps, actionCreators)(Sidebar);
