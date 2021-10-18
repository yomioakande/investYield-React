import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dashboard from "../assets/images/dashboard_card_bg.jpg";
import retirement from "../assets/images/Savingsplan/retirementplan.svg";
import homeplan from "../assets/images/Savingsplan/homeplan.svg";
import emergency from "../assets/images/Savingsplan/emergencyplan.svg";
import personalplan from "../assets/images/Savingsplan/personalplan.svg";
import stash from "../assets/images/Stash/plus2.svg";
import "../assets/css/theme.css";
import CardTransfer from "./common/CardTransfer";
import Plan from "./common/Plan";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import Modal1 from "./Modal";
import Loader from "../common/Loader";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./transitions.css";
import "swiper/swiper-bundle.min.css";
import { nairaCurrencyVal, dollarCurrencyVal } from "../helpers/helper";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./FallBack";
import FundPurse from "./FundPurse1";
import JoinSavings from "./JoinSavings";
import familyIcon from "../assets/images/familyIcon.svg";
import tgifIcon from "../assets/images/TGIFIcon.svg";
import dinnerDateIcon from "../assets/images/dinnerDateIcon.svg";
import movies from "../assets/images/movies1.svg";
import shoppingIcon from "../assets/images/shoppingIcon.svg";
import entertainIcon from "../assets/images/entertainmentIcon.svg";


const Main = (props) => {
  const [summaryInfo, setSummaryInfo] = useState({});
  const [modalInOpen, setModalInOpen] = useState(false);
  const [modalInOpen1, setModalInOpen1] = useState(false);
  const [transactions, setTransactions] = useState([]);
  // const [coreAccounts, setCoreAccounts] = useState([]);
  const [purseAccounts, setPurseAccounts] = useState([]);

  const [todoList, setTodoList] = useState({});
  // const [hidden, setHidden] = useState({});
  const modalToggle = () => {
    setModalInOpen(true);
  };
  // const modalToggle1 = () => {
  //   setModalInOpen1(true);
  // };

  const close = () => {
    setModalInOpen(false);
  };

  const close1 = () => {
    setModalInOpen1(false);
  };

  // const toggleHide = (index) => {
  //   setHidden({ ...hidden, [index]: !hidden[index] });
  // };

  const getTransactions = async () => {
    const data = await props.getData("/api/v1/user/transaction").then();
    setTransactions(data);
  };

  useEffect(() => {
    (async function dataInfo() {
      const data = await props.getData("/api/v1/user/summary").then();
      const transactionsData = await props
        .getPaginateTransact("/api/v1/user/transaction", "1", "5")
        .then();
      const todo = await props.getData("/api/v1/user/todo").then();

      const myPurseAccounts = await props
        .getAccounts("/api/v1/user/accountbyproduct", "0106")
        .then();
      setSummaryInfo(data);
      setTodoList(todo);
      setPurseAccounts(myPurseAccounts);


      todo.bvnConfirmed !== true &&
        setTimeout(() => {
          setModalInOpen(true);
        }, 2000);
      setTransactions(transactionsData);
    })();
    // eslint-disable-next-line
  }, []);

  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };

  return (
    <>
      {props.loading && <Loader />}
      {/*MAIN CONTENT */}
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
              <a
                href="#0"
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
                    <h3 className="text-white text-center money-card-body">
                      {nairaCurrencyVal(summaryInfo?.totAmt)}
                    </h3>
                  </div>
                </div>
              </a>
              <a
                href="#0"
                className="col-lg-4 col-md-6 d-flex flex-column mb-4"
              >
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
                    <h3 className="text-white text-center money-card-body">
                      {dollarCurrencyVal(summaryInfo.totDollar)}
                    </h3>
                  </div>
                </div>
              </a>
              <a
                href="#0"
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
                    <h3 className="text-white text-center money-card-body">
                      {nairaCurrencyVal(summaryInfo.totNaira)}
                    </h3>
                  </div>
                </div>
              </a>
            </ErrorBoundary>
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
                    {/* <Link to="/app/savings/mypurse" className="au-btn-link">
                      View more
                    </Link> */}
                  </div>
                  <div>
                    <div className="row px-3 cg-3 mt-4">
                      <div
                        style={{
                          width: "100vw",
                          overflowX: "scroll",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        <Link
                          to="/app/savings/mypurse"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column flex-grow-1 mb-4"
                        >
                          <div className="au-card-purse au-card-bg-create-purse flex-grow-1">
                            <div className="au-card-elements">
                              <img src={stash} alt="new" />
                              <p className="text-green">Create A New Purse</p>
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/app/savings/pursestep1/Family"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column flex-grow-1 mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-retirement h-100 px-3">
                            <img src={familyIcon} alt="Food Tray" />
                            <p className="text-green">Family</p>
                          </div>
                        </Link>

                        <Link
                          to="/app/savings/pursestep1/TGIF"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-homeplan flex-grow-1 px-3">
                            <img src={tgifIcon} alt="TGIF" />
                            <p className="text-blue">TGIF</p>
                          </div>
                        </Link>
                        <Link
                          to="/app/savings/pursestep1/Dinner Date"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-emergency flex-grow-1 px-3">
                            <img src={dinnerDateIcon} alt="Dinner Date" />
                            <p className="text-stash">Dinner date</p>
                          </div>
                        </Link>
                        <Link
                          to="/app/savings/pursestep1/Movies"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-movie flex-grow-1 px-3">
                            <img src={movies} alt="Shopping" />
                            <p className="text-movie">Movies</p>
                          </div>
                        </Link>
                        <Link
                          to="/app/savings/pursestep1/Shopping"
                          className="col-xl-3 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-wedding flex-grow-1 px-3">
                            <img src={shoppingIcon} alt="Family" />
                            <p className="text-movie">Shopping</p>
                          </div>
                        </Link>
                        <Link
                          to="/app/savings/pursestep1/Entertaiment"
                          className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column mb-4"
                        >
                          <div className="au-card-smaller au-card-bg-family flex-grow-1 px-3">
                            <img src={entertainIcon} alt="Celebration" />
                            <p className="text-stash3">Entertainment</p>
                          </div>
                        </Link>

                        {/* {purseAccounts.map((single, index) => {
                          return (
                            <Purse
                              modalToggle={modalToggle1}
                              key={index}
                              index={index}
                              id={single.id}
                              currency={single.currency?.code}
                              namePurse={single.name}
                              purseAmount={single.contribution}
                              nameClass={single.nameClass}
                              toggleHide={toggleHide}
                              hidden={hidden}
                            />
                          );
                        })} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="au-card mt-4">
                <div className="au-card-inner recent-activities">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="title-2">Recent Activities</h3>
                    <button
                      onClick={() => getTransactions()}
                      className="au-btn-link"
                    >
                      View All
                    </button>
                  </div>
                  <div
                    className="au-message-list"
                    style={{ height: "50vh", overflowY: "scroll" }}
                  >
                    {transactions && transactions.length > 0 ? (
                      transactions.map((single, index) => {
                        return (
                          <CardTransfer
                            key={index}
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
                        {!todoList.cardLinked && (
                          <div className="au-message__item-text">
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
                          </div>
                        )}
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
                            to="/app/account/mycard#pills-withdrawalAccount"
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
                <JoinSavings />
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
      <CSSTransition
        in={modalInOpen1}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={500}
      >
        <FundPurse close={close1} />
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
  getAccounts: usersActions.getAccounts,
  getPaginateTransact: usersActions.getPaginateTransact,
};

export default connect(mapStateToProps, actionCreators)(Main);
