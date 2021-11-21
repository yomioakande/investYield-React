import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withdrawal from "../../assets/images/withdrawFundIcon.svg";
import "../../assets/css/theme.css";
import "../../assets/css/style.css";
import { dateConv } from "../../helpers";
import PayModel from "../Stash/PayModel";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import Loader from "../../common/Loader";
const MyPurse4 = (props) => {
  const [bankDetails, setBankDetails] = useState({});
  const [loading, setloading] = useState(false);
  const dataInfo = async () => {
    setloading(true);
    const account = await props.getAccount("/api/v1/user/bankaccount").then();
    setBankDetails({ ...account });
    setloading(false);
  };
  useEffect(() => {
    dataInfo();
    //eslint-disable-next-line
  }, []);

  const purse = JSON.parse(sessionStorage.getItem("mainPurseObj"));

  const currencyVal = (number) =>
    new Intl.NumberFormat(purse.ccyCode === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: purse.ccyCode === "1" ? "NGN" : "USD",
    }).format(number);

  const convertDebitFreq = (freq) => {
    if (freq === "7") {
      return "Every Week";
    } else if (freq === "14") {
      return "Every Two Weeks";
    } else if (freq === "30") {
      return "Every Month";
    } else return `on ${freq}`;
  };

  const convertfreq = (freq) => {
    if (freq === "1") {
      return "daily";
    } else if (freq === "7") {
      return "weekly";
    } else if (freq === "30") {
      return "monthly";
    } else if (freq === "0") {
      return "once";
    } else return null;
  };

  function daysToWeeks(percent, freq1, freq2) {
    if (purse.drFreq !== "001") {
      return `${percent}%/ ${convertDebitFreq(freq1)}`;
    } else {
      return `${percent}% ${convertDebitFreq(dateConv(freq2))}`;
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="au-card">
                <div className="au-card-inner">
                  <Link
                    to="/app/account/mycard"
                    className="d-flex align-items-center"
                  >
                    <img
                      src={withdrawal}
                      className="img-fluid"
                      alt="Funds Withdrawal"
                    />
                    <div className="px-2">
                      {Object.keys(bankDetails).length > 0 ? (
                        <p className="text-blue weight-600">
                          {`Your funds will be withdrawn into your
                          ${bankDetails?.bName}
                          account (${bankDetails?.number}). Tap to change
                          `}
                        </p>
                      ) : (
                        <p>
                          Tap this tab to add your Account details for
                          Withdrawal
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="au-card px-0 mt-4 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Purse Breakdown</h3>
                  </div>

                  <div className="savings-breakdown p-4 px-lg-5">
                    <div className="savings-breakdown-row text-black">
                      <p>You are saving:</p>
                      <p className="font-weight-bold">
                        {currencyVal(purse.amount)}/{convertfreq(purse.crFreq)}
                      </p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Interest Rate</p>
                      <p className="font-weight-bold">5% per annum</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Start Date</p>
                      <p className="font-weight-bold">
                        {dateConv(purse.startDate)}
                      </p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Autowithdrawal:</p>
                      <p className="font-weight-bold">
                        {purse.autoWithdraw === "true"
                          ? daysToWeeks(purse.drPct, purse.drFreq, purse.drDate)
                          : "False"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <>
              <PayModel transId={purse.myPurseRef} />
            </>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading, alertType, message } = state.registration;
  return { alert, username, message, alertType, loading };
};

const actionCreators = {
  getAccount: usersActions.getInfo,
};

export default connect(mapStateToProps, actionCreators)(MyPurse4);
