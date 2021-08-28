import React from "react";
import dashboard from "../assets/images/dashboard_card_bg.jpg";
import retirement from "../assets/images/Savingsplan/retirementplan.svg";
import homeplan from "../assets/images/Savingsplan/homeplan.svg";
import emergency from "../assets/images/Savingsplan/emergencyplan.svg";
import personalplan from "../assets/images/Savingsplan/personalplan.svg";
import stash from "../assets/images/Stash/plus2.svg";
import challenge from "../assets/images/savingschallenge.svg";

const Main = () => {
  return (
    <>
      {/* //   <!-- MAIN CONTENT--> */}

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <a href="/" className="col-lg-4 col-md-6 d-flex flex-column mb-4">
              <div className="au-card au-card--bg-blue flex-grow-1">
                <div className="bg-card-img">
                  <img className="h-100 w-100" src={dashboard} alt="dashboard"/>
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Balance
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    ₦
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    500,000.00
                  </h3>
                </div>
              </div>
            </a>
            <a className="col-lg-4 col-md-6 d-flex flex-column mb-4" href="/">
              <div className="au-card au-card--bg-savings flex-grow-1">
                <div className="bg-card-img">
                  <img className="h-100 w-100" src={dashboard} alt="dashboard" />
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Dollars
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    $
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    500.00
                  </h3>
                </div>
              </div>
            </a>
            <a href="/" className="col-lg-4 col-md-6 d-flex flex-column mb-4">
              <div className="au-card au-card--bg-investment flex-grow-1">
                <div className="bg-card-img">
                  <img className="h-100 w-100" src={dashboard} alt="dashboard" />
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Naira
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    ₦
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    250,000.00
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="title-2">Create A Savings Plan</h3>
                    <a href="/" className="au-btn-link">View more</a>
                  </div>

                  <div className="row px-3 cg-3 mt-4">
                    <a className="card-box d-flex flex-column mb-4" href="/">
                      <div className="au-card-smaller au-card-bg-retirement flex-grow-1">
                        <img src={retirement} alt="retirement" />
                        <p className="text-green">Retirement Savings Plan</p>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-homeplan flex-grow-1">
                        <img src={homeplan} alt="home savings plan" />
                        <p className="text-blue">Home Savings Plan</p>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-bg-emergency flex-grow-1">
                        <img src={emergency} alt="emergency stash" />
                        <p className="text-stash">Emergency Savings Plan</p>
                      </div>
                    </a>
                    <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-smaller au-card-personalplan flex-grow-1">
                        <img src={personalplan} alt="your savings plan" />
                        <p className="text-black">Create A Savings Plan</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="au-card mt-4">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="title-2">myPurse</h3>
                    <a href="/" className="au-btn-link">View more</a>
                  </div>

                  <div className="row px-3 cg-3 mt-4">
                  <a href="/" className="card-box d-flex flex-column mb-4">
                      <div className="au-card-purse au-card-bg-create-purse flex-grow-1">
                        <div className="au-card-elements">
                          <img src={stash} alt="new" />
                          <p className="text-green">Create A New Purse</p>
                        </div>
                      </div>
                    </a>
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
                  </div>
                </div>
              </div>

              <div className="au-card mt-4">
                <div className="au-card-inner recent-activities">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="title-2">Recent Activities</h3>
                    <a href="/" className="au-btn-link">View more</a>
                  </div>

                  <div className="au-message-list">
                    <div className="d-flex justify-content-between mt-4 align-items-start">
                      <div className="au-message__item w-100">
                        <div className="au-message__item-inner px-2 py-3 justify-content-between align-items-start">
                          <div className="col-lg-1">
                            <i className="fas fa-caret-up text-green"></i>
                          </div>
                          <div className="au-message__item-text col-lg-8">
                            <div className="text px-0 mx-0">
                              <h5 className="name">
                                Transfer from RAYMOND ADEWOLE [******8907].
                                Transaction ID: XXXXXXXXXXXXXXX
                              </h5>
                              <p className="mt-3">
                                <span className="mr-2">Date:</span>
                                <span>Fri, 04 Sep 2020 15:34:20 GMT</span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="mt-0 col-lg-3 text-right">
                            <h4 className="font-weight-bold text-green">
                              ₦ 5000.00
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4 align-items-start">
                      <div className="au-message__item w-100">
                        <div className="au-message__item-inner px-2 py-3 justify-content-between align-items-start">
                          <div className="col-lg-1">
                            <i className="fas fa-caret-down text-danger"></i>
                          </div>
                          <div className="au-message__item-text col-lg-8">
                            <div className="text px-0 mx-0">
                              <h5 className="name">
                                Transfer from RAYMOND ADEWOLE [******8907].
                                Transaction ID: XXXXXXXXXXXXXXX
                              </h5>
                              <p className="mt-3">
                                <span className="mr-2">Date:</span>
                                <span>Fri, 04 Sep 2020 15:34:20 GMT</span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="mt-0 col-lg-3 text-right">
                            <h4 className="font-weight-bold text-danger">
                              - ₦ 5000.00
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4 align-items-start">
                      <div className="au-message__item w-100">
                        <div className="au-message__item-inner px-2 py-3 justify-content-between align-items-start">
                          <div className="col-lg-1">
                            <i className="fas fa-caret-up text-green"></i>
                          </div>
                          <div className="au-message__item-text col-lg-8">
                            <div className="text px-0 mx-0">
                              <h5 className="name">
                                Transfer from RAYMOND ADEWOLE [******8907].
                                Transaction ID: XXXXXXXXXXXXXXX
                              </h5>
                              <p className="mt-3">
                                <span className="mr-2">Date:</span>
                                <span>Fri, 04 Sep 2020 15:34:20 GMT</span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="mt-0 col-lg-3 text-right">
                            <h4 className="font-weight-bold text-green">
                              ₦ 5000.00
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="au-card px-0">
                <div className="au-card-inner">
                  <div className="px-4">
                    <h3 className="title-2 tm-b-5">To - Do - List</h3>
                  </div>

                  <div className="au-message-list px-4 todolist mt-4">
                    <div className="au-message__item">
                      <div className="au-message__item-inner px-2 py-2">
                        <div className="au-message__item-text">
                          <div className="text px-0 mx-0">
                            <h5 className="name">Link your BVN</h5>
                            <p>Gain access to more features</p>
                          </div>
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="au-message__item">
                      <div className="au-message__item-inner px-2 py-2">
                        <div className="au-message__item-text">
                          <div className="text px-0 mx-0">
                            <h5 className="name">
                              Let us help you save better
                            </h5>
                            <p>
                              Fill in some details and help us suggest better
                              saving options for you
                            </p>
                          </div>
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="au-message__item">
                      <div className="au-message__item-inner px-2 py-2">
                        <div className="au-message__item-text">
                          <div className="text px-0 mx-0">
                            <h5 className="name">Link your card</h5>
                            <p>
                              Link your debit card for faster saving options.
                            </p>
                          </div>
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="au-message__item">
                      <div className="au-message__item-inner px-2 py-2">
                        <div className="au-message__item-text">
                          <div className="text px-0 mx-0">
                            <h5 className="name">
                              Make your first Core savings
                            </h5>
                            <p>
                              Choose a savings option and fund it to start
                              saving.
                            </p>
                          </div>
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="au-card position-relative mt-4 px-0">
                <div className="au-card-inner ">
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
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <a href="/" className="au-btn-link">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>
                  Copyright © 2018 Colorlib. All rights reserved. Template by{" "}
                  <a href="https://colorlib.com">Colorlib</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END MAIN CONTENT-->; */}
    </>
  );
};

export default Main;
