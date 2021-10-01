import React from "react";
import withdrawal from "../../assets/images/withdrawFundIcon.svg";
import "../../assets/css/theme.css";
import "../../assets/css/style.css";
import { dateConv } from "../../helpers";
import PayModel from "../Stash/PayModel";

const MyPurse4 = () => {
  const purse = JSON.parse(sessionStorage.getItem("mainPurseObj"));

  const currencyVal = (number) =>
    new Intl.NumberFormat(purse.ccyCode === "1" ? "en-NG" : "en-US", {
      style: "currency",
      currency: purse.ccyCode === "1" ? "NGN" : "USD",
    }).format(number);

  // console.log(new Date("2021-09-22").getDay());

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
  // console.log(daysToWeeks(purse.drPct, purse.drFreq, purse.drDate));

  return (
    <>
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="au-card">
                <div className="au-card-inner">
                  <a href="*" className="d-flex align-items-center">
                    <img
                      src={withdrawal}
                      className="img-fluid"
                      alt="Funds Withdrawal"
                    />
                    <div className="px-2">
                      <p className="text-blue weight-600">
                        Your funds will be withdrawn into your Access bank
                        account (0765325698). Tap to change
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="au-card px-0 mt-4 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Stash Breakdown</h3>
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
            {/* transId={} */}
              <PayModel />
            </>
            {/* <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="au-card position-relative px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Select a payment method</h3>
                  </div>
                  <div className="px-4 px-lg-5 mt-5">
                    <form action="">
                      <div className="pay-method-radio">
                        <input id="radio1" name="radio" type="radio" />
                        <label for="radio1">
                          <span>Pay with Card</span>
                        </label>
                      </div>
                      <div className="pay-method-radio mt-4">
                        <input id="radio2" name="radio" type="radio" />
                        <label for="radio2">
                          <span>Pay with myPurse - Vibe Cash</span>
                        </label>
                      </div>
                      <div className="pay-method-radio mt-4">
                        <input id="radio3" name="radio" type="radio" />
                        <label for="radio3">
                          <span>Pay with Bank Transfer</span>
                        </label>
                      </div>

                      <div className="form-group mt-4">
                        <a
                          href="*"
                          className="au-btn-outline d-flex justify-content-center align-items-center"
                        >
                          Add a Card
                        </a>
                      </div>

                      <div className="row justify-content-end">
                        <div className="col-lg-8 mt-5">
                          <div className="d-flex justify-content-between">
                            <div className="col-lg-6 px-0">
                              <a
                                href="*"
                                className="au-btn iy-btn-secondary text-danger"
                              >
                                Cancel
                              </a>
                            </div>
                            <div className="col-lg-6 px-0">
                              <a href="*" className="au-btn iy-btn-primary">
                                NEXT
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPurse4;
