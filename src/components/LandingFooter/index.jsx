import React from "react";
import "../../assets/css/style.css";
import logoBig from "../../assets/images/logoBig.svg";
import googlePlayIcon from "../../assets/images/googlePlayIcon.svg";
import appleStoreIcon from "../../assets/images/appleStoreIcon.svg";

const Index = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-topDiv p-5 mt-5">
          <div className="">
            <h5 className="footer-topDiv-header text-center">
              What are you still waiting for?
            </h5>
            <p className="footer-topDiv-p text-center mt-3">
              Download the app on your mobile device now.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <div className="col-lg-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="/">
                      <img
                        src={googlePlayIcon}
                        className="img-fluid"
                        alt="Google play"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <img
                        src={appleStoreIcon}
                        className="img-fluid"
                        alt="Apple store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-80">
          <div className="row justify-content-between">
            <div className="col-lg-3 mt-3">
              <img src={logoBig} className="img-fluid" alt="logo" />
              <p className="footer-bottom-p">Save Small. Live Large </p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 mt-4">
                  <h5 className="footer-bottom-header">Company</h5>
                  <div className="mt-3 d-flex flex-column">
                    <a href="/" className="footer-bottom-links">
                      About us
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Blog
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Careers
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Terms and Conditions
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Privacy Policy
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <h5 className="footer-bottom-header">Products</h5>
                  <div className="mt-3 d-flex flex-column">
                    <a href="/" className="footer-bottom-links">
                      Savings
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Investment
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Group Savings
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Stash
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <h5 className="footer-bottom-header">Support</h5>
                  <div className="mt-3 d-flex flex-column">
                    <a href="/" className="footer-bottom-links">
                      +234 818 024 8942
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      support@investyield.ng
                    </a>
                    <a href="/" className="mt-3 footer-bottom-links">
                      No 1, Dr Adewale Oshin Street, Off Chief Collins, Off Fola
                      Osibo Street, Lekki Phase 1, Lagos.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <p className="copyright-text">
                2020 investYield All Rights Reserved
              </p>
              <p className="font-x-sm mt-2 base-color">
                InvestYield is a property of RevenueBull Technologies Limited, a
                company duly registered with CAC with RC Number 1691483.
                investYield provides financial services under a Cooperative
                license with a registration number LSCS 17462. Both investYield
                and RevenueBull Technologies Limited are legal entities in
                Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
