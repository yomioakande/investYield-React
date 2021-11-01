import React, { useState, useEffect } from "react";
import { dateConv } from "../../helpers";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import PayModel from "./PayModel";
const Breakdown = (props) => {
  const [targetValue, setTargetValue] = useState("");
  const stash = JSON.parse(sessionStorage.getItem("stash"))
  const stashfreq = JSON.parse(sessionStorage.getItem("stashfreq"))
  let date = new Date();
  //START DATE
  const startDate = dateConv(date);
  // NEXT DATE
  let df = date.setDate(date.getDate() + Number(stash.frequency));
  const nxt = new Date(df);
  const nextDate = dateConv(nxt);
  useEffect(() => {
    (async function dataInfo() {
      const getTargetValue = await props.getTargetValue(
        "/api/v1/util/future_value",
        stash.amount,
        stashfreq.tenor.code,
        "0103",
        stash.ccyCode
      );
      setTargetValue(getTargetValue);
    })();
    //eslint-disable-next-line
  }, [stash.amount, stashfreq.tenor.code, stash.ccyCode]);

  const currencyVal = (number) =>
    new Intl.NumberFormat(stash.ccyCode === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: stash.ccyCode === "1" ? "NGN" : "USD",
    }).format(number);

  return (
    <>
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row rg-4 mt-4">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="au-card px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Stash Breakdown</h3>
                  </div>

                  <div className="savings-breakdown p-4 px-lg-5">
                    <div className="savings-breakdown-row text-black">
                      <p>You are saving:</p>
                      <p className="font-weight-bold">
                        {currencyVal(stash.amount)}
                      </p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Interest Rate</p>
                      <p className="font-weight-bold">
                        {stashfreq.rate}%{/* % per annum */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PayModel transId={stash?.stashRef} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loggingIn, loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  getTargetValue: usersActions.getTargetValue,
};

export default connect(mapStateToProps, actionCreators)(Breakdown);
