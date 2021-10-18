import React from "react";
// import { Link } from "react-router-dom";
import PayModel from "../Stash/PayModel";
import { dateConv } from "../../helpers";
const JoinGroup2 = () => {
  let data = JSON.parse(sessionStorage.getItem("publicGroup"));

  const currencyVal = (number) =>
    new Intl.NumberFormat(data.ccy === 1 ? "en-NG" : "en-US", {
      style: "currency",
      currency: data.ccy === 1 ? "NGN" : "USD",
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
      <div className="section__content section__content--p30 pb-4">
        <div className="container-fluid">
          <div className="row rg-4 mt-4">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="au-card px-0 flex-grow-1">
                <div className="au-card-inner">
                  <div className="px-4 px-lg-5">
                    <h3 className="title-2 tm-b-5">Savings Breakdown</h3>
                  </div>

                  <div className="savings-breakdown p-4 px-lg-5">
                    <div className="savings-breakdown-row text-black">
                      <p>Group Name</p>
                      <p className="font-weight-bold">{data?.name}</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Group members save:</p>
                      <p className="font-weight-bold">
                        {currencyVal(data?.cntr_amt)} /{" "}
                        {convertfreq(data?.freq)}
                      </p>
                    </div>
                    <div className="savings-breakdown-row text-black">
                      <p>Interest rate:</p>
                      <p className="font-weight-bold">10% per annum</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Start Date</p>
                      <p className="font-weight-bold">
                        {dateConv(data?.start)}
                      </p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>End Date:</p>
                      <p className="font-weight-bold">
                        {dateConv(data?.tgtDate)}
                      </p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Target Amount:</p>
                      <p className="font-weight-bold">
                        {currencyVal(data?.target)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PayModel transId={data?.publicGroupRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroup2;
