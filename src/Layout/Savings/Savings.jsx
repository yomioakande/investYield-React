import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/theme.css";
// import challenge from "../../assets/images/savingschallenge.svg";
import plus2 from "../../assets/images/Stash/plus2.svg";
import savings from "../../assets/images/individual-savings-icon.svg";
import group from "../../assets/images/create-new-group-icon.svg";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import Loader from "../../common/Loader";
import Charts from "../Charts";
import { nairaCurrencyVal, dollarCurrencyVal } from "../../helpers/helper";
import Purse from "../common/myPurse";
import JoinSavings from "../JoinSavings";
import Swal from "sweetalert2";
const Savings = ({ getData, getAccounts, deleteAccount }) => {
  const [summaryInfo, setSummaryInfo] = useState({});
  const [loading, setloading] = useState(false);
  const [coreAccounts, setCoreAccounts] = useState([]);
  const [stashAccounts, setStashAccounts] = useState([]);
  const [purseAccounts, setPurseAccounts] = useState([]);
  const [hidden, setHidden] = useState({});
  const toggleHide = (index) => {
    setHidden({ ...hidden, [index]: !hidden[index] });
  };

  async function dataInfo() {
    setloading(true);
    const data = await getData("/api/v1/user/summary").then();
    const stashAccounts = await getData(
      "/api/v1/user/stash"
      // "0103"
    ).then();
    const coreAccounts = await getAccounts(
      "/api/v1/user/accountbyproduct",
      "0201"
    ).then();
    const myPurseAccounts = await getAccounts(
      "/api/v1/user/accountbyproduct",
      "0106"
    ).then();
    setSummaryInfo(data);
    setStashAccounts(stashAccounts);
    setPurseAccounts(myPurseAccounts);
    setCoreAccounts(coreAccounts);

    sessionStorage.removeItem("stash");
    sessionStorage.removeItem("stashfreq");
    sessionStorage.removeItem("interestList");

    setloading(false);
  }
  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  const terminateStash = (productCode, accountNo, currency) => {
    const obj = {
      productCode,
      accountNo,
      currency,
    };

    const delete1 = () => {
      Swal.fire({
        customClass: {
          title: "swal2-title",
        },
        position: "center",
        icon: "success",
        iconColor: "#003079",
        title: "Account successfully deleted",
        titleColor: "#fff",
        showConfirmButton: false,
        timer: 2000,
      });
    };
    Swal.fire({
      title:
        "A 50% penal charge will be deducted from your accrued interest. Do you wish to proceed?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAccount(obj, "/api/v1/user/Terminate_Savings_Plan", delete1);
        dataInfo();
      } else if (result.isDenied) {
        setloading(false);
        return;
      }
    });
  };

  console.log(coreAccounts, "CORES");

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
                    </div>
                    <div className="col-lg-5 w-auto profile-cards col-md-4 mt-3">
                      <ul className="pie-text mt-3">
                        <li className="mb-3 text-green">
                          <p>Total Naira Savings</p>
                          <p> {nairaCurrencyVal(summaryInfo.totNaira)}</p>
                        </li>
                        <li className="mb-3 text-blue">
                          <p>Total Dollar Savings</p>
                          <p> {dollarCurrencyVal(summaryInfo.totDollar)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 d-flex flex-column mb-3">
              <div className="au-card position-relative px-0 flex-grow-1">
                <JoinSavings />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card">
                <div className="au-card-inner">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="title-2">myPurse</div>
                    {/* <a href="/app/view" className="au-btn-link">
                      View All Purses
                    </a> */}
                  </div>

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
                        className="card-box d-flex flex-column mb-4"
                      >
                        <div className="au-card-purse au-card-bg-create-purse flex-grow-1">
                          <div className="au-card-elements">
                            <img src={plus2} alt="new" />
                            <p className="text-green">Create A New Purse</p>
                          </div>
                        </div>
                      </Link>

                      {purseAccounts.map((single, index) => {
                        return (
                          <Purse
                            key={index}
                            index={index}
                            namePurse={single.name}
                            purseAmount={single.availableBalance}
                            nameClass={single.nameClass}
                            id={single.id}
                            toggleHide={toggleHide}
                            hidden={hidden}
                          />
                        );
                      })}
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
                    <div className="title-2">Create new savings</div>
                  </div>
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
                    {coreAccounts.length > 0 ? (
                      coreAccounts.map((single, index) => {
                        return (
                          <Link
                            key={single?.id}
                            to={{
                              pathname: `/app/singlesavings/${single?.id}`,
                              state: {
                                fromNotifications: true,
                                data: single,
                              },
                            }}
                            // href="#0"
                            className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4"
                          >
                            <div className="savings-card-box d-flex flex-column">
                              <img
                                src={single?.image}
                                className="img-fluid w-100"
                                alt=""
                              />
                              <div className="p-4 detail-div">
                                <div className="">
                                  <div
                                    className="d-flex font-sm-sm"
                                    style={{
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <h5 className="text-blue weight-600">
                                      {single?.name}
                                    </h5>
                                    {single?.isGroup && (
                                      <p
                                        style={{
                                          fontWeight: "900",
                                          padding: ".3rem",
                                          backgroundColor: "#f8f7f7",
                                          color: "#0553C8",
                                        }}
                                      >
                                        Group
                                      </p>
                                    )}
                                  </div>
                                  <div className="progress mt-2">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{
                                        width: `${single?.tenureElapsed}%`,
                                      }}
                                      aria-valuenow={parseInt(
                                        single?.tenureElapsed
                                      )}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="mt-3">
                                    <h5 className="text-green">
                                      {single?.currency.code === "NGN"
                                        ? nairaCurrencyVal(single?.contribution)
                                        : dollarCurrencyVal(
                                            single?.contribution
                                          )}
                                      <span className="text-blue">
                                        {" "}
                                        /{" "}
                                        {single?.currency.code === "NGN"
                                          ? nairaCurrencyVal(single?.target)
                                          : dollarCurrencyVal(single?.target)}
                                      </span>
                                    </h5>
                                    <p className="font-sm-sm mt-2">
                                      Savings balance
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <p>No core Accounts</p>
                    )}
                  </div>
                </div>

                <div className="au-card-inner mt-4">
                  <div className="d-flex">
                    <h3 className="title-2">Stash</h3>
                  </div>

                  <div className="row mt-4">
                    {stashAccounts.length > 0 ? (
                      stashAccounts.map((single, index) => {
                        return (
                          <div className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex flex-column mb-4">
                            <div className="savings-card-box d-flex flex-column">
                              <div className="p-4 detail-div">
                                <div className="">
                                  <h5 className="text-blue weight-600">
                                    {/* 90 Days Stash */}
                                    {single?.name}
                                  </h5>
                                  <div className="saving-progress mt-3">
                                    <div className="saving-progress-actual"></div>
                                  </div>
                                  <div className="mt-3">
                                    <h5 className="text-green">
                                      {nairaCurrencyVal(single?.contribution)}
                                      <span className="text-blue">
                                        {" "}
                                        / {nairaCurrencyVal(single?.target)}
                                      </span>
                                    </h5>
                                    <div className="">
                                      <p className="font-sm-sm mt-2">
                                        Savings balance
                                      </p>

                                      <button
                                        onClick={() =>
                                          terminateStash("0103", single.id, 1)
                                        }
                                        className="font-sm-sm"
                                        style={{
                                          padding: "1rem 0",
                                          color: "red",
                                        }}
                                      >
                                        Terminate Stash
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>No stash accounts</p>
                    )}
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
  return { alert, username };
};

const actionCreators = {
  getData: usersActions.getInfo,
  getAccounts: usersActions.getAccounts,
  deleteAccount: usersActions.confirmBvnReg,
};

export default connect(mapStateToProps, actionCreators)(Savings);
