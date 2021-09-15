import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dateConv } from "../../helpers";

import { connect } from "react-redux";
import { usersActions } from "../../redux";
const CreateSavings4 = (props) => {
  const [finalVal, setFinalVal] = useState("");
  const core = JSON.parse(sessionStorage.getItem("core"));
  console.log(core);

  console.log(core.ccyCode);
  useEffect(() => {
    const get = async () => {
      const getFinalValue = await props.getTargetValue(
        "/api/v1/util/future_value",
        core.target,
        core.frequency,
        "0201",
        core.ccyCode
      );
      console.log(getFinalValue);
      setFinalVal(getFinalValue.value);
    };

    get();
    // eslint-disable-next-line
  }, []);

  const main1 =
    new Date(core.endDate).getTime() - new Date(core.startDate).getTime();
  const numOfDays = main1 / (1000 * 3600 * 24);

  const currencyVal = (number) =>
    new Intl.NumberFormat(core.ccyCode === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: core.ccyCode === "1" ? "NGN" : "USD",
    }).format(number);

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

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row mt-50">
            <div className="col-lg-6 flex-column flex-grow-1">
              <div className="au-card h-100">
                <div className="au-card-inner">
                  <h4 className="text-blue">Savings Breakdown</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-50">
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td className="no-border-top">
                            Your group is saving:
                          </td>
                          <td className="text-right no-border-top">
                            {currencyVal(core.amount)}/
                            {convertfreq(core.frequency)}
                          </td>
                        </tr>
                        <tr>
                          <td>Interest rate:</td>
                          <td className="text-right">10% per annum</td>
                        </tr>
                        <tr>
                          <td>Start Date:</td>
                          <td className="text-right">
                            {dateConv(core.startDate)}
                          </td>
                        </tr>
                        <tr>
                          <td>End Date:</td>
                          <td className="text-right">
                            {dateConv(core.endDate)}
                          </td>
                        </tr>
                        <tr>
                          <td>Amount of days:</td>
                          <td className="text-right">{numOfDays} days</td>
                        </tr>
                        <tr>
                          <td>Target Amount:</td>
                          <td className="text-right">
                            {currencyVal(core.target)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 light-green-div">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Proposed Total Earnings:</td>
                            <td className="text-right">
                              {currencyVal(finalVal)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex-column flex-grow-1">
              <div className="au-card h-100">
                <div className="au-card-inner">
                  <h4 className="text-blue">Pay with bank transfer</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-50">
                    <div className="payment-selection">
                      <div class="bank-details">
                        <p>Account Name:</p>
                        <h4>investYield Limited</h4>
                      </div>
                      <div class="bank-details">
                        <p>Account Number:</p>
                        <h3>0119876908</h3>
                      </div>
                      <div class="bank-details">
                        <p>Bank:</p>
                        <h4>investYield Limited</h4>
                      </div>
                      <div className="row mt-50 align-items-center justify-content-end">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6">
                              <button className="btn btn-cancel text-danger">
                                Cancel
                              </button>
                            </div>
                            <div className="col-lg-6">
                              <Link
                                to="/app/savings/otp"
                                className="btn login-submit"
                              >
                                I've Transferred
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps, actionCreators)(CreateSavings4);

// export default
