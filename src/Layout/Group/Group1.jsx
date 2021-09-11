import React from "react";
import { Link } from "react-router-dom";

const Group1 = () => {
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">Create a private savings group</h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue">
                            Start your group with a befitting name
                          </label>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="text-field-profile"
                              placeholder="e.g Abuja Hikers"
                            />
                            <label
                              for="firstName"
                              className="font-sm position-absolute"
                              style={{ left: "15px", top: "15%" }}
                            >
                              Group Name
                            </label>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            What currency would you like to save in?
                          </label>
                          <div className="row cg-3 px-3">
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio1"
                                    name="radio"
                                    type="radio"
                                  />
                                  <label for="radio1">
                                    <span>$ US Dollars</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="w-auto">
                              <div className="form-group">
                                <div className="pay-method-radio">
                                  <input
                                    id="radio2"
                                    name="radio"
                                    type="radio"
                                  />
                                  <label for="radio2">
                                    <span>₦ Naira</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <label className="text-blue">
                            Set a target amount for your home goal
                          </label>
                          <input
                            type="text"
                            className="text-field"
                            placeholder="Target amount"
                          />
                        </div>
                        <div className="form-group mt-4">
                          <label className="text-blue">
                            Choose a target date
                          </label>
                          <input type="date" className="text-field mt-2" />
                        </div>
                        <div className="row mt-4 align-items-center justify-content-end">
                          <div className="col-lg-4">
                            <div className="">
                              <Link
                                to="/app/groupsavings2"
                                className="btn login-submit"
                              >
                                NEXT
                              </Link>
                              {/* <button className="btn login-submit">NEXT</button> */}
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

export default Group1;
