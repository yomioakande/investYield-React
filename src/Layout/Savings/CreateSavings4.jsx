import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { dateConv } from "../../helpers";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import PayModel from "../Stash/PayModel";
const CreateSavings4 = (props) => {
  const [finalVal, setFinalVal] = useState("");
  const [freqOptions, setFreqOptions] = useState([]);
  // eslint-disable-next-line
  const [loading, setloading] = useState(false);
  const core = JSON.parse(sessionStorage.getItem("core"));

  useEffect(() => {
    const get = async () => {
      const getFinalValue = await props.getTargetValue2(
        "/api/v1/util/future_value",
        core.target,
        core.frequency,
        "0201",
        core.ccyCode,
        core.endDate,
        core.startDate
      );
      setFinalVal(getFinalValue?.value || null);
    };
    get();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    (async function dataInfo() {
      setloading(true);
      const datas = await props
        .getFrequency("/api/v1/util/productinterest", "0201", 1)
        .then();
      const { interest } = datas;
      console.log(interest);
      setFreqOptions(interest);
      setloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const main1 =
    new Date(core.endDate).getTime() - new Date(core.startDate).getTime();
  const numOfDays = main1 / (1000 * 3600 * 24);

  const filterInterest = freqOptions.filter((value, _index) => {
    return numOfDays >= value.tenor.minDays && numOfDays <= value.tenor.maxDays
      ? value.rate
      : null;
  });

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
                          <td className="text-right">
                            {filterInterest[0]?.rate}% per annum
                          </td>
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

            <PayModel transId={core?.coreRef} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { alert, loading, alertType, message };
};

const actionCreators = {
  getTargetValue2: usersActions.getTargetValue2,
  getFrequency: usersActions.getFrequency,
};

export default connect(mapStateToProps, actionCreators)(CreateSavings4);

// export default
