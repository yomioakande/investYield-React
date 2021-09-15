import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/theme.css";
import challenge from "../../assets/images/savingschallenge.svg";
import plus2 from "../../assets/images/Stash/plus2.svg";
import savings from "../../assets/images/individual-savings-icon.svg";
import group from "../../assets/images/create-new-group-icon.svg";
import blog from "../../assets/images/BlogImg.png";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import Loader from "../../common/Loader";

import Charts from "../Charts";
const Savings = ({ getData }) => {
  const [summaryInfo, setSummaryInfo] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const data = await getData("/api/v1/user/summary").then();
      setSummaryInfo(data);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <h5 className="get-started-header">Savings</h5>
                    <div className="small-red-line"></div>
                    <p className="text-blue mt-3">Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7 col-md-8 d-flex flex-column mb-3">
              <div className="au-card d-flex justify-content-between align-items-center flex-grow-1">
                <div className="au-card-inner w-100">
                  <div className="row align-items-center d-flex justify-content-center">
                    <div className="col-lg-7 profile-cards col-md-6">
                      <Charts summaryInfo={summaryInfo} />
                      <p
                        style={{
                          marginTop: "-6.5rem",
                          color: "#333333",
                          fontStyle: "Comfortaa",
                          textAlign: "center",
                        }}
                        class="chart2-title"
                      >
                        {/* ₦10,000,000.00 */}
                      </p>
                      {/* <canvas id="myChart" width="800" height="550"></canvas> */}
                    </div>
                    <div className="col-lg-5 w-auto profile-cards col-md-4 mt-3">
                      <ul className="pie-text mt-3">
                        <li className="mb-3 text-green">
                          <p>Total Naira Savings</p>
                          {/* <p>₦10,000.00</p> */}
                        </li>
                        <li className="mb-3 text-blue">
                          <p>Total Dollar Savings</p>
                          {/* <p>₦10,000.00</p> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 d-flex flex-column mb-3">
              <div className="au-card position-relative px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">Join a savings challenge</h3>
                  </div>
                  <div className="position-relative wecare-sec mx-4">
                    <div className="swiper-container position-relative wecare-slider">
                      <div className="swiper-wrapper py-2">
                        <div className="swiper-slide">
                          <div className="w-100 h-100">
                            <div className="container h-100">
                              <div className="row h-100 py-3 mb-4">
                                <div className="au-message-list w-100 todolist mt-4">
                                  <img
                                    src={challenge}
                                    className="img-fluid w-100"
                                    alt="join a savings challenge"
                                  />
                                </div>
                                {/* <!-- .col --> */}
                              </div>
                              {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                          </div>
                          {/* <!-- .hero-content-overlay --> */}
                        </div>
                        {/* <!-- .hero-content-wrap --> */}

                        <div className="swiper-slide">
                          <div className="w-100 h-100">
                            <div className="container h-100">
                              <div className="row h-100 py-3 mb-4">
                                <div className="au-message-list w-100 todolist mt-4">
                                  <img
                                    src={challenge}
                                    className="img-fluid w-100"
                                    alt="join a savings challenge"
                                  />
                                </div>
                                {/* <!-- .col --> */}
                              </div>
                              {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                          </div>
                          {/* <!-- .hero-content-overlay --> */}
                        </div>
                        {/* <!-- .hero-content-wrap --> */}
                      </div>
                      {/* <!-- .swiper-wrapper --> */}
                    </div>
                    <div className="d-flex">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="title-2">myPurse</div>
                    <a href="/app/view" className="au-btn-link">
                      View All Purses
                    </a>
                  </div>

                  <div
                    className="row px-3 cg-3 mt-4"
                    style={{ overflowX: "hidden" }}
                  >
                    <Link
                      to="/app/savings/mypurse"
                      className="card-box d-flex flex-column mb-4"
                    >
                      <div className="au-card-purse au-card-bg-create-purse flex-grow-1">
                        <div className="au-card-elements">
                          <img src={plus2} alt="new" />
                          <p className="text-green">Create A New Purse</p>
                        </div>
                      </div>
                    </Link>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-vibe-cash flex-grow-1">
                        <div className="au-card-elements">
                          <p className="mt-1">Vibe Cash</p>
                          <p className="mt-1">₦ 5,024.12</p>
                          <p className="mt-2 purse-link-btn">Hide Balance</p>
                        </div>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-food-cash flex-grow-1">
                        <div className="au-card-elements">
                          <p className="mt-1">Food Cash</p>
                          <p className="mt-1">₦ 0.00</p>
                          <p className="mt-2 purse-link-btn">Hide Balance</p>
                        </div>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-tgif-cash flex-grow-1">
                        <div className="au-card-elements">
                          <p className="mt-1">TGIF Cash</p>
                          <p className="mt-1">₦ 0.00</p>
                          <p className="mt-2 purse-link-btn">Hide Balance</p>
                        </div>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-food-cash flex-grow-1">
                        <div className="au-card-elements">
                          <p className="mt-1">Food Cash</p>
                          <p className="mt-1">₦ 0.00</p>
                          <p className="mt-2 purse-link-btn">Hide Balance</p>
                        </div>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-tgif-cash flex-grow-1">
                        <div className="au-card-elements">
                          <p className="mt-1">TGIF Cash</p>
                          <p className="mt-1">₦ 0.00</p>
                          <p className="mt-2 purse-link-btn">Hide Balance</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="row mt-4">
                    <div className="col-lg-4 d-flex flex-column flex-grow-1">
                      <Link
                        to="/app/stash"
                        className="card-box d-flex flex-column mb-4 w-100"
                      >
                        <div className="au-card-purse au-card-bg-create-stash flex-grow-1">
                          <div className="au-card-elements">
                            <img src={plus2} className="img-fluid" alt="new" />
                            <div className="row justify-content-between align-items-center">
                              <div className="col-lg-9">
                                <p className="text-blue mb-0">
                                  Create New Stash
                                </p>
                                <h6 className="font-sm mt-2">
                                  In a hurry? Save money quickly. Fantastic
                                  returns await you
                                </h6>
                              </div>
                              <div className="col-lg-2">
                                <i className="fa fa-arrow-right text-blue"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 d-flex flex-column flex-grow-1">
                      <Link
                        to="/app/savings/create"
                        className="card-box d-flex flex-column mb-4 w-100"
                      >
                        <div className="au-card-purse au-card-bg-food-cash flex-grow-1">
                          <div className="au-card-elements">
                            <img
                              src={savings}
                              className="img-fluid"
                              alt="new"
                            />
                            <div className="row justify-content-between align-items-center">
                              <div className="col-lg-9">
                                <p className="text-blue mb-0">
                                  Create new individual savings
                                </p>
                                <h6 className="font-sm mt-2">
                                  Save money on your terms. We will reward your
                                  discipline with awesome returns
                                </h6>
                              </div>
                              <div className="col-lg-2">
                                <i className="fa fa-arrow-right text-blue"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 d-flex flex-column flex-grow-1">
                      <Link
                        to="/app/groupsavings"
                        className="card-box d-flex flex-column mb-4 w-100"
                      >
                        <div className="au-card-purse au-card-bg-create-group flex-grow-1">
                          <div className="au-card-elements">
                            <img src={group} className="img-fluid" alt="new" />
                            <div className="row justify-content-between align-items-center">
                              <div className="col-lg-9">
                                <p className="text-light mb-0">
                                  Create new group savings
                                </p>
                                <h6 className="font-sm mt-2 text-light">
                                  Save together and plan group experiences.
                                  Fantastic returns await you
                                </h6>
                              </div>
                              <div className="col-lg-2">
                                <i className="fa fa-arrow-right text-light"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex">
                    <h3 className="title-2">Core Savings</h3>
                  </div>

                  <div className="row mt-4">
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="savings-card-img-box">
                          <img
                            src={blog}
                            className="img-fluid w-100"
                            alt="savings_goal"
                          />
                        </div>
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              Raymond Rent 1
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="savings-card-img-box">
                          <img
                            src={blog}
                            className="img-fluid w-100"
                            alt="savings_goal"
                          />
                        </div>
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              Raymond Rent 1
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="savings-card-img-box">
                          <img
                            src={blog}
                            className="img-fluid w-100"
                            alt="savings_goal"
                          />
                        </div>
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              Raymond Rent 1
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="savings-card-img-box">
                          <img
                            src={blog}
                            className="img-fluid w-100"
                            alt="savings_goal"
                          />
                        </div>
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              Abuja Hikers July 2021
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="au-card-inner mt-4">
                  <div className="d-flex">
                    <h3 className="title-2">Stash</h3>
                  </div>

                  <div className="row mt-4">
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              90 Days Stash
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                    >
                      <div className="savings-card-box d-flex flex-column">
                        <div className="p-4 detail-div">
                          <div className="">
                            <h5 className="text-blue weight-600">
                              90 Days Stash
                            </h5>
                            <div className="saving-progress mt-3">
                              <div className="saving-progress-actual"></div>
                            </div>
                            <div className="mt-3">
                              <h5 className="text-green">
                                ₦5,024.12{" "}
                                <span className="text-blue"> / ₦1,000,000</span>
                              </h5>
                              <p className="font-sm-sm mt-2">Savings balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  // const loading = state.authentication.loading;
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(Savings);
