import React, { useState } from "react";
import invest from "../assets/media/investyieldLogo.svg";
import johndoe from "../assets/images/icon/avatar-01.jpg";
import avatar from "../assets/images/icon/avatar-01.jpg";
// import "../assets/css/theme.css";
const Header = () => {
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
                <img src={invest} alt="InvestYield" />
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
                <a className="js-arrow" href="/">
                  <i className="fas fa-tachometer-alt"></i>Dashboard
                </a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a href="index.html">Dashboard 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Dashboard 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Dashboard 3</a>
                  </li>
                  <li>
                    <a href="index4.html">Dashboard 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="chart.html">
                  <i className="fas fa-chart-bar"></i>Charts
                </a>
              </li>
              <li>
                <a href="table.html">
                  <i className="fas fa-table"></i>Tables
                </a>
              </li>
              <li>
                <a href="form.html">
                  <i className="far fa-check-square"></i>Forms
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  <i className="fas fa-calendar-alt"></i>Calendar
                </a>
              </li>
              <li>
                <a href="map.html">
                  <i className="fas fa-map-marker-alt"></i>Maps
                </a>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="/">
                  <i className="fas fa-copy"></i>Pages
                </a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forget-pass.html">Forget Password</a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a className="js-arrow" href="/">
                  <i className="fas fa-desktop"></i>UI Elements
                </a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a href="button.html">Button</a>
                  </li>
                  <li>
                    <a href="badge.html">Badges</a>
                  </li>
                  <li>
                    <a href="tab.html">Tabs</a>
                  </li>
                  <li>
                    <a href="card.html">Cards</a>
                  </li>
                  <li>
                    <a href="alert.html">Alerts</a>
                  </li>
                  <li>
                    <a href="progress-bar.html">Progress Bars</a>
                  </li>
                  <li>
                    <a href="modal.html">Modals</a>
                  </li>
                  <li>
                    <a href="switch.html">Switchs</a>
                  </li>
                  <li>
                    <a href="grid.html">Grids</a>
                  </li>
                  <li>
                    <a href="fontawesome.html">Fontawesome Icon</a>
                  </li>
                  <li>
                    <a href="typo.html">Typography</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* // <!-- END HEADER MOBILE--> */}
      {/* <!-- HEADER DESKTOP--> */}
      <header className={`header-desktop ${scroll? "header-desktop-active":"null"}`}>
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="header-wrap">
              <a href="/" className="au-btn au-btn-icon iy-btn-primary d-flex align-items-center justify-contents-center text-white">
                Stash
              </a>
              <div className="header-button">
                <div className="noti-wrap">
                  <div className="noti__item js-item-menu">
                    <i className="zmdi zmdi-notifications"></i>
                    <span className="quantity">3</span>
                    <div className="notifi-dropdown js-dropdown">
                      <div className="notifi__title">
                        <p>You have 3 Notifications</p>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c1 img-cir img-40">
                          <i className="zmdi zmdi-email-open"></i>
                        </div>
                        <div className="content">
                          <p>You got a email notification</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c2 img-cir img-40">
                          <i className="zmdi zmdi-account-box"></i>
                        </div>
                        <div className="content">
                          <p>Your account has been blocked</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c3 img-cir img-40">
                          <i className="zmdi zmdi-file-text"></i>
                        </div>
                        <div className="content">
                          <p>You got a new file</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__footer">
                        <a href="/">All notifications</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-wrap">
                  <div className="account-item clearfix js-item-menu">
                    <div className="image">
                      <img src={johndoe} alt="John Doe" />
                    </div>
                    <div className="content">
                      <a className="js-acc-btn" href="/">
                        john doe
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

export default Header;
