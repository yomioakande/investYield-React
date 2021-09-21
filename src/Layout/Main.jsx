import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dashboard from "../assets/images/dashboard_card_bg.jpg";
import retirement from "../assets/images/Savingsplan/retirementplan.svg";
import homeplan from "../assets/images/Savingsplan/homeplan.svg";
import emergency from "../assets/images/Savingsplan/emergencyplan.svg";
import personalplan from "../assets/images/Savingsplan/personalplan.svg";
import stash from "../assets/images/Stash/plus2.svg";
import challenge from "../assets/images/savingschallenge.svg";
import "../assets/css/theme.css";
import CardTransfer from "./common/CardTransfer";
import Plan from "./common/Plan";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import Modal1 from "./Modal";
import Loader from "../common/Loader";
import Purse from "./common/myPurse";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./transitions.css";
import "swiper/swiper-bundle.min.css";

const Main = (props) => {
  const [summaryInfo, setSummaryInfo] = useState({});
  const [modalInOpen, setModalInOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [todoList, setTodoList] = useState({});
  const [hide, setHide] = useState(false);
  // const [loading, setloading] = useState(false);

  const modalToggle = () => {
    setModalInOpen(true);
  };

  const close = () => {
    setModalInOpen(false);
  };

  const hider = () => {
    setHide(!hide);
  };

  useEffect(() => {
    (async function dataInfo() {
      // setloading(true);
      const data = await props.getData("/api/v1/user/summary").then();
      const transactionsData = await props
        .getData("/api/v1/user/transaction")
        .then();
      const todo = await props.getData("/api/v1/user/todo").then();
      // const getMyStash=await getData("api/v1/user/stash").then();
      setTodoList(todo);
      todo.bvnConfirmed !== true &&
        setTimeout(() => {
          setModalInOpen(true);
        }, 2000);
      setTransactions(transactionsData);
      setSummaryInfo(data);
      // setloading(false);
    })();
    // eslint-disable-next-line
  }, []);


  console.log("props", props.loading);
  return (
    <>
      {props.loading && <Loader />}
      {/*MAIN CONTENT */}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <a
              href="/app"
              className="col-lg-4 col-md-6 d-flex flex-column mb-4"
            >
              <div className="au-card au-card--bg-blue flex-grow-1">
                <div className="bg-card-img">
                  <img
                    className="h-100 w-100"
                    src={dashboard}
                    alt="dashboard"
                  />
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Balance
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    ₦
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    {summaryInfo.totAmt}
                  </h3>
                </div>
              </div>
            </a>
            <a href="/" className="col-lg-4 col-md-6 d-flex flex-column mb-4">
              <div className="au-card au-card--bg-savings flex-grow-1">
                <div className="bg-card-img">
                  <img
                    className="h-100 w-100"
                    src={dashboard}
                    alt="dashboard"
                  />
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Dollars
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    $
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    {summaryInfo.totDollar}
                  </h3>
                </div>
              </div>
            </a>
            <a
              href="/app"
              className="col-lg-4 col-md-6 d-flex flex-column mb-4"
            >
              <div className="au-card au-card--bg-investment flex-grow-1">
                <div className="bg-card-img">
                  <img
                    className="h-100 w-100"
                    src={dashboard}
                    alt="dashboard"
                  />
                </div>
                <h5 className="text-white text-center mb-2 money-card-header">
                  Total Naira
                </h5>
                <div className="d-flex align-items-start justify-content-center">
                  <p className="text-white text-center money-card-sign mr-1">
                    ₦
                  </p>
                  <h3 className="text-white text-center money-card-body">
                    {summaryInfo.totNaira}
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
                    <Link to="/app/savings/create" className="au-btn-link">
                      View more
                    </Link>
                  </div>

                  <div className="row px-3 cg-3 mt-4">
                    <Plan
                      image={retirement}
                      nameClass={"au-card-bg-retirement"}
                      planName={"Retirement Savings Plan"}
                    />
                    <Plan
                      image={homeplan}
                      nameClass={"au-card-bg-homeplan"}
                      planName={"Home Savings Plan"}
                    />

                    <Plan
                      image={emergency}
                      nameClass={"au-card-bg-emergency h-100"}
                      planName={"Emergency Savings Plan"}
                    />

                    <Plan
                      image={personalplan}
                      nameClass={"au-card-personalplan"}
                      planName={"Create A Savings Plan"}
                    />
                  </div>
                </div>
              </div>

              <div className="au-card mt-4">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="title-2">myPurse</h3>
                    <Link to="/app/savings/mypurse" className="au-btn-link">
                      View more
                    </Link>
                  </div>

                  <div className="row px-3 cg-3 mt-4">
                    <Link
                      to="/app/savings/mypurse"
                      className="card-box d-flex flex-column mb-4"
                    >
                      <div className="au-card-purse au-card-bg-create-purse flex-grow-1">
                        <div className="au-card-elements">
                          <img src={stash} alt="new" />
                          <p className="text-green">Create A New Purse</p>
                        </div>
                      </div>
                    </Link>

                    <Purse
                      namePurse={"Vibe Cash"}
                      purseAmount={"5,024.12"}
                      nameClass={"au-card-bg-vibe-cash"}
                      hider={hider}
                      hide={hide}
                    />

                    <Purse
                      namePurse={"Food Cash"}
                      purseAmount={"50.00"}
                      nameClass={"au-card-bg-food-cash"}
                      hider={hider}
                      hide={hide}
                    />

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
                    <a href="/app" className="au-btn-link">
                      View more
                    </a>
                  </div>
                  <div className="au-message-list">
                    {transactions && transactions.length > 0 ? (
                      transactions.map((single, index) => {
                        return (
                          <CardTransfer
                            descr={single?.descr}
                            transactionId={single?.reference}
                            date={single?.date}
                            amount={single?.value}
                            value={single?.type}
                          />
                        );
                      })
                    ) : (
                      <p className="text-danger py-3 text-3xl fw-bolder">
                        No transactions recorded yet
                      </p>
                    )}
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
                          {!todoList.bvnConfirmed && (
                            <Link
                              onClick={() => modalToggle()}
                              className="text px-0 mx-0"
                            >
                              <h5 className="name">Link your BVN</h5>
                              <p>Gain access to more features</p>
                            </Link>
                          )}
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="au-message__item">
                      {!todoList?.riskProfiled && (
                        <div className="au-message__item-inner px-2 py-2">
                          <Link
                            to="/app/help"
                            className="au-message__item-text"
                          >
                            <div className="text px-0 mx-0">
                              <h5 className="name">
                                Let us help you save better
                              </h5>
                              <p>
                                Fill in some details and help us suggest better
                                saving options for you
                              </p>
                            </div>
                          </Link>

                          <div className="au-message__item-time mt-0">
                            <span>
                              <i data-feather="chevron-right"></i>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="au-message__item">
                      <div className="au-message__item-inner px-2 py-2">
                        <div className="au-message__item-text">
                          {!todoList.cardLinked && (
                            <button
                              style={{ textAlign: "left" }}
                              onClick={async () => await props.addCard().then()}
                              className="text px-0 mx-0"
                            >
                              <h5 className="name">Link your card</h5>
                              <p>
                                Link your debit card for faster saving options.
                              </p>
                            </button>
                          )}
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
                          {!todoList.savingsCreated && (
                            <Link
                              to="/app/savings/create"
                              className="text px-0 mx-0"
                            >
                              <h5 className="name">
                                Make your first Core savings
                              </h5>
                              <p>
                                Choose a savings option and fund it to start
                                saving.
                              </p>
                            </Link>
                          )}
                        </div>
                        <div className="au-message__item-time mt-0">
                          <span>
                            <i data-feather="chevron-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="au-message__item">
                      {!todoList?.withdrawalAccount && (
                        <div className="au-message__item-inner px-2 py-2">
                          <Link
                            to="/app/account"
                            className="au-message__item-text"
                          >
                            <div className="text px-0 mx-0">
                              <h5 className="name">Add withdrawal Account</h5>
                              <p>
                                Add a withdrawal account for faster withdrawal
                                option.
                              </p>
                            </div>
                          </Link>

                          <div className="au-message__item-time mt-0">
                            <span>
                              <i data-feather="chevron-right"></i>
                            </span>
                          </div>
                        </div>
                      )}
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
                      <a href="/" className="au-btn-link">
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>Copyright © 2021 investYield. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CSSTransition
        in={modalInOpen}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={500}
      >
        <Modal1 close={close} />
      </CSSTransition>
      <ToastContainer autoClose={1000} hideProgressBar />
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading } = state.registration;
  return { alert, username, loading };
};

const actionCreators = {
  getData: usersActions.getInfo,
  addCard: usersActions.addCard,
};

export default connect(mapStateToProps, actionCreators)(Main);
