import React, { useState, useEffect } from "react";
import PayModel from "./Stash/PayModel";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../redux/actions";
import withdrawal from "../assets/images/withdrawFundIcon.svg";
import { nairaCurrencyVal } from "../helpers/helper";
const BreakdownFund = (props) => {
  const [bankDetails, setBankDetails] = useState({});
  const [loading, setloading] = useState(false);
  const getFundDetails = JSON.parse(sessionStorage.getItem("fundPurse"));

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
                          Tap this tab to add your Account details for Withdrawl
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="au-card px-0 mt-4 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Stash Breakdown</h3>
                  </div>

                  <div className="savings-breakdown p-4 px-lg-5">
                    {/* <div className="savings-breakdown-row text-black">
                      <p>Name of Purse Account:</p>
                      <p className="font-weight-bold">
                      {getFundDetails?.accountName}
                      </p>
                    </div> */}
                    <div className="savings-breakdown-row text-black">
                      <p>You are saving:</p>
                      <p className="font-weight-bold">
                        {nairaCurrencyVal(getFundDetails?.amount)}
                        {/* {currencyVal(purse.amount)}/{convertfreq(purse.crFreq)} */}
                      </p>
                    </div>

                    {/* <div className="savings-breakdown-row text-black">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <>
              <PayModel transId={getFundDetails?.fundPurseRef} />
              {/* <PayModel transId={purse.myPurseRef} /> */}
            </>
          </div>
        </div>
      </div>

      {/* <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row rg-4 mt-4">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="au-card px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Fund myPurse Breakdown</h3>
                  </div>

                  <div className="savings-breakdown p-4 px-lg-5">
                    <div className="savings-breakdown-row text-black">
                      <p>You are saving:</p>
                      <p className="font-weight-bold">
                        {nairaCurrencyVal(getFundDetails?.amount)}
                      </p>
                    </div> */}
      {/*   
                      <div className="savings-breakdown-row text-black">
                        <p>Interest Rate</p>
                        <p className="font-weight-bold">
                          {stashfreq.rate}% per annum
                        </p>
                      </div>
  
                      <div className="savings-breakdown-row text-black">
                        <p>Start Date</p>
                        <p className="font-weight-bold">{startDate}</p>
                      </div>
  
                      <div className="savings-breakdown-row text-black">
                        <p>End Date:</p>
                        <p className="font-weight-bold">{nextDate}</p>
                      </div>
  
                      <div className="savings-breakdown-row text-black">
                        <p>Amount of Days:</p>
                        <p className="font-weight-bold">{stashfreq.tenor.name}</p>
                      </div>
  
                      <div className="savings-breakdown-row text-black">
                        <p>Proposed Target Amount:</p>
                        <p className="font-weight-bold">
                          {currencyVal(targetValue?.value)}
                        </p>
                      </div> */}
      {/* </div>
                </div>
              </div>
            </div>
            <PayModel transId={getFundDetails?.fundPurseRef} />
          </div>
        </div>
      </div> */}
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

export default connect(mapStateToProps, actionCreators)(BreakdownFund);

// export default ;
