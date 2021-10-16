import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import invest from "../assets/media/investyieldLogo.svg";
import uploadimg from "../assets/images/uploadImg.svg";
import avatar from "../assets/images/icon/avatar-01.jpg";
import leftArrow from "../assets/images/left-arrow.svg";
import "../assets/css/theme.css";
import "../assets/vendor/css-hamburgers/hamburgers.css";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";

const Header = ({ username }) => {
  const location = useLocation().pathname.split("/")[2];

  const [scroll, setScroll] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  return (
    // <!-- HEADER MOBILE-->
    <>
      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" href="/index.html">
                <img src={invest} alt="investYield" />
              </a>
              <button className="hamburger hamburger--slider" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <nav className="navbar-mobile">
          <div className="container-fluid">
            <ul className="navbar-mobile__list list-unstyled">
              <li className="has-sub">
                <a
                  class="js-arrow d-flex align-items-center active"
                  href="/app"
                >
                  <i data-feather="home" class="mr-3"></i>Home
                </a>
              </li>
              <li>
                <a href="" class="js-arrow d-flex align-items-center">
                  <i data-feather="shield" class="mr-3"></i>Savings
                </a>
              </li>
              <li>
                <a href="" class="js-arrow d-flex align-items-center">
                  <i data-feather="activity" class="mr-3"></i>Investments
                </a>
              </li>
              <li>
                <a href="" class="js-arrow d-flex align-items-center">
                  <i data-feather="file" class="mr-3"></i>Blog
                </a>
              </li>
              <li>
                <a href="" class="js-arrow d-flex align-items-center">
                  <i data-feather="user" class="mr-3"></i>Account
                </a>
              </li>
              <li>
                <a href="" class="text-danger d-flex align-items-center">
                  <i data-feather="log-out" class="mr-3"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* // <!-- END HEADER MOBILE--> */}
      {/* <!-- HEADER DESKTOP--> */}
      <header
        className={`header-desktop ${
          scroll ? "header-desktop-active" : "null"
        }`}
      >
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="header-wrap">
              {location !== "dashboard" ? (
                <Link
                  to="/app/dashboard"
                  className="d-flex no-decor align-items-center"
                >
                  <img src={leftArrow} className="img-fluid" alt="left-arrow" />
                  <span className="px-2 text-dark">Home</span>
                </Link>
              ) : (
                <Link
                  to="/app/stash"
                  className="au-btn au-btn-icon iy-btn-primary d-flex align-items-center justify-contents-center text-white"
                >
                  Stash
                </Link>
              )}

              {/* <MenuBar/> */}

              <div className="header-button">
                <div className="account-wrap">
                  <div className="account-item clearfix js-item-menu">
                    <div className="content">
                      <a
                        className="py-12 js-acc-btn"
                        href="/app/account/myportfolio"
                      >
                        {username.name}
                        <p>Click to view portfolio</p>
                      </a>
                    </div>
                    <div className="image">
                      <a
                        className="py-12 js-acc-btn"
                        href="/app/account/myportfolio"
                      >
                        <img src={uploadimg} alt="John Doe" />
                      </a>
                    </div>
                    <div className="account-dropdown js-dropdown">
                      <div className="info clearfix">
                        <div className="image">
                          <a href="/">
                            <img src={avatar} alt="John Doe" />
                          </a>
                        </div>
                        <div className="content">
                          <h5 className="name">
                            <a href="/">john doe</a>
                          </h5>
                          <span className="email">johndoe@example.com</span>
                        </div>
                      </div>
                      <div className="account-dropdown__body">
                        <div className="account-dropdown__item">
                          <a href="/">
                            <i className="zmdi zmdi-account"></i>Account
                          </a>
                        </div>
                        <div className="account-dropdown__item">
                          <a href="/">
                            <i className="zmdi zmdi-settings"></i>Setting
                          </a>
                        </div>
                        <div className="account-dropdown__item">
                          <a href="/">
                            <i className="zmdi zmdi-money-box"></i>Billing
                          </a>
                        </div>
                      </div>
                      <div className="account-dropdown__footer">
                        <a href="/">
                          <i className="zmdi zmdi-power"></i>Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER DESKTOP--> */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Header);
