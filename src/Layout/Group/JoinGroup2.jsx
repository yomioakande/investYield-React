import React from "react";
import { Link } from "react-router-dom";
const JoinGroup2 = () => {
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
                      <p className="font-weight-bold">Abuja Hikers July 2021</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Group members save:</p>
                      <p className="font-weight-bold">₦ 5,000.00 / daily</p>
                    </div>
                    <div className="savings-breakdown-row text-black">
                      <p>Interest rate:</p>
                      <p className="font-weight-bold">10% per annum</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Start Date</p>
                      <p className="font-weight-bold">12 - February - 2021</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>End Date:</p>
                      <p className="font-weight-bold">12 - December - 2021</p>
                    </div>

                    <div className="savings-breakdown-row text-black">
                      <p>Target Amount:</p>
                      <p className="font-weight-bold">₦ 1,515,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex flex-column">
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
                          <span>5366 **** **** **09</span>
                        </label>
                      </div>
                      <div className="pay-method-radio mt-4">
                        <input id="radio2" name="radio" type="radio" />
                        <label for="radio2">
                          <span>Pay with myPurse</span>
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
                          href="#"
                          className="au-btn-outline d-flex justify-content-center align-items-center"
                        >
                          Add a Card
                        </a>
                      </div>

                      <div className="row justify-content-end">
                        <div className="col-lg-8 mt-5">
                          <div className="d-flex justify-content-between">
                            <div className="col-lg-6 px-0">
                              <Link to="/app/groupsavings/joingroup1"
                                // href="#"
                                className="au-btn iy-btn-secondary text-danger"
                              >
                                Cancel
                              </Link>
                            </div>
                            <div className="col-lg-6 px-0">
                              <a href="#" className="au-btn iy-btn-primary">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroup2;
