import React from "react";
import callIcon from "../../assets/images/callIconBlue.svg";
import mailIcon from "../../assets/images/mailIconBlue.svg";
import locationBlue from "../../assets/images/locationIconBlue.svg";
import FAQ from "../../assets/images/FAQIcon.svg";
import termIcon from "../../assets/images/termsIcon.svg";
import { Link } from "react-router-dom";
const Support = () => {
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">Account</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">Account / Support</p>
                  </div>
                  <div className="col-lg-7 px-0 d-flex justify-content-end flex-wrap">
                    <div className="col-lg-5 mt-2">
                      <Link
                        to="/app/account/transfer"
                        className="btn btn-transfer"
                      >
                        Transfer Funds
                      </Link>
                    </div>
                    <div className="col-lg-5 mt-2">
                      <Link
                        to="/app/account/withdraw"
                        className="btn btn-withdraw"
                      >
                        Withdraw Funds
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card h-100">
                <div className="au-card-inner p-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <p className="text-blue">Phone</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="contactUs-div d-flex align-items-center px-4">
                        <div>
                          <img
                            src={callIcon}
                            className="img-fluid"
                            alt="Call"
                          />
                        </div>
                        <div className="px-3 welcome-p font-rem1">
                          <a href="tel:+2348180248941">+234 818 024 8941</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <p className="text-blue">Email</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="contactUs-div d-flex align-items-center px-4">
                        <div>
                          <img
                            src={mailIcon}
                            className="img-fluid"
                            alt="Mail"
                          />
                        </div>
                        <div className="px-3 welcome-p font-rem1">
                          <a href="mailto:support@investyield.ng">
                            support@investyield.ng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <p className="text-blue">Office Address</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="contactUs-div d-flex align-items-center px-4">
                        <div>
                          <img
                            src={locationBlue}
                            className="img-fluid"
                            alt="Location"
                          />
                        </div>
                        <div className="px-3 welcome-p font-rem1">
                          No 1, Dr Adewale Oshin, Off Prince Bode Adewole, Off
                          Fola Oshibo, Lekki phase 1, Lagos State.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                      <div className="contactUs-div2 d-flex align-items-center px-4">
                        <div>
                          <img src={FAQ} className="img-fluid" alt="Location" />
                        </div>
                        <div className="px-3 font-rem1">
                          Frequently Asked Questions (FAQs)
                        </div>
                      </div>

                      <div className="contactUs-div2 d-flex align-items-center px-4 mt-4">
                        <div>
                          <img
                            src={termIcon}
                            className="img-fluid"
                            alt="Location"
                          />
                        </div>
                        <div className="px-3 font-rem1">
                          Terms and Conditions
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

export default Support;
