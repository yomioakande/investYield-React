import React from "react";
import { Link } from "react-router-dom";
import { dateConv, nairaCurrencyVal } from "../../helpers";
const SingleSavings = (props) => {
  const data = props.location.state.data;

  const currencyVal = (number) =>
    new Intl.NumberFormat(data?.currency?.code === "NGN" ? "en-NG" : "en-US", {
      style: "currency",
      currency: data?.currency?.code === "NGN" ? "NGN" : "USD",
    }).format(number);

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h2 className="text-black">{data?.name}</h2>
                  <p className="text-black">Individual Savings</p>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="mt-3">
                        <img
                          src={data?.image}
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>
                      <div className="saving-progress mt-5">
                        <div className="saving-progress-actual"></div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-green">
                          {currencyVal(data?.contribution)}
                          {/* #5,012.12 */}
                          <span className="text-blue">
                            /{currencyVal(data?.target)}{" "}
                          </span>
                        </h4>
                        <p>Savings balance</p>
                      </div>

                      <div
                        className="mt-4 d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <h4 className="text-green" style={{ color: "#cecece" }}>
                          Interest accrued:
                        </h4>
                        <p
                          style={{ color: "#000" }}
                        >{`${data?.interestAccrued}%`}</p>
                      </div>
                      <div
                        className="mt-4 d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <h4 className="text-green" style={{ color: "#cecece" }}>
                          Target end date:
                        </h4>
                        <p style={{ color: "#000" }}>
                          {dateConv(data?.maturityDate)}
                        </p>
                      </div>
                      <div
                        className="mt-4 d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <h4 className="text-green" style={{ color: "#cecece" }}>
                          Contribution:
                        </h4>
                        <p style={{ color: "#000" }}>
                          {nairaCurrencyVal(data?.contribution)}
                        </p>
                      </div>
                      <div
                        className="mt-4 d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <h4 className="text-green" style={{ color: "#cecece" }}>
                          Amount:
                        </h4>
                        <p style={{ color: "#000" }}>
                          {nairaCurrencyVal(data?.target)}
                        </p>
                      </div>

                      <div className="row mt-4 align-items-center justify-content-end">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6">
                              {/* <button className="btn btn-previous text-green">
                                    PREVIOUS
                                  </button> */}
                            </div>
                            <div className="col-lg-6">
                              <Link
                                to="/app/dashboard"
                                className="btn login-submit"
                              >
                                PREVIOUS
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default SingleSavings;
