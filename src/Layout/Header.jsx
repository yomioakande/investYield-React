import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import invest from "../assets/media/investyieldLogo.svg";
import uploadimg from "../assets/images/uploadImg.svg";
import avatar from "../assets/images/icon/avatar-01.jpg";
import leftArrow from "../assets/images/left-arrow.svg";
import "../assets/css/theme.css";
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import MenuBar from "./MenuBar"
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

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
                  <span className="px-2 text-dark">Back</span>
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
                      <img src={uploadimg} alt="John Doe" />
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
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
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
