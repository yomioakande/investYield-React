import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dateConv } from "../../helpers";
const CreateSavings4 = () => {
  const coreDetails = JSON.parse(localStorage.getItem("core"));
  const [core, setCore] = useState(coreDetails);
  console.log(core);

  const main1 =
    new Date(core.endDate).getTime() - new Date(core.startDate).getTime();
  const numOfDays = main1 / (1000 * 3600 * 24);

  const currencyVal = (number) =>
    new Intl.NumberFormat(core.ccyCode === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: core.ccyCode === "1" ? "NGN" : "USD",
    }).format(number);

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
                            ₦ 5,000.00 / daily
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
                              {currencyVal(core.amount)}
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
                  <h4 className="text-blue">
                    Select a payment method to proceed
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-50">
                    <div className="payment-selection">
                      <input type="radio" name="select" id="option-1" />
                      <input type="radio" name="select" id="option-2" />
                      <input type="radio" name="select" id="option-3" />
                      <label for="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span className="px-2">5366 **** **** **09</span>
                      </label>
                      <label for="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span className="px-2">Pay with Stash</span>
                      </label>
                      <label for="option-3" className="option option-3">
                        <div className="dot"></div>
                        <span className="px-2">Pay with bank transfer</span>
                      </label>
                      <div className="mt-4">
                        <button className="btn btn-resend-otp">
                          ADD A NEW CARD
                        </button>
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
                                NEXT
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

export default CreateSavings4;
