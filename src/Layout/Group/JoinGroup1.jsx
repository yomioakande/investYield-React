import React from "react";
import {Link} from "react-router-dom";
const JoinGroup1 = () => {
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Decide how you want the group to save
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="form-group mt-4">
                        <label className="text-blue">Choose a start date</label>
                        <input type="date" className="text-field mt-2" />
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          How often would you like members to save?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio1"
                                  name="radio-frequency"
                                  type="radio"
                                  checked
                                />
                                <label for="radio1">
                                  <span>Daily</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio2"
                                  name="radio-frequency"
                                  type="radio"
                                />
                                <label for="radio2">
                                  <span>Weekly</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio3"
                                  name="radio-frequency"
                                  type="radio"
                                />
                                <label for="radio3">
                                  <span>Monthly</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio4"
                                  name="radio-frequency"
                                  type="radio"
                                />
                                <label for="radio4">
                                  <span>One Time</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-blue weight-500">
                          Would you like members to earn interest?
                        </label>
                        <div className="row cg-3 px-3">
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-yes"
                                  name="radio-earn"
                                  type="radio"
                                  checked
                                />
                                <label for="radio-earn-yes">
                                  <span>Yes, I would</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto">
                            <div className="form-group">
                              <div className="pay-method-radio">
                                <input
                                  id="radio-earn-no"
                                  name="radio-earn"
                                  type="radio"
                                />
                                <label for="radio-earn-no">
                                  <span>No, I don’t want interest</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label className="text-blue">
                          The amount for members to save daily to meet the
                          target amount at the target date is:
                        </label>
                        <div className="form-group position-relative">
                          <input
                            type="text"
                            className="text-field-profile"
                            value="₦ 5,000.00"
                            readonly
                          />
                          <label
                            for="firstName"
                            className="font-sm position-absolute"
                            style={{left:"15px", top:"15%"}}
                          >
                            Amount
                          </label>
                        </div>
                      </div>
                      <div className="row mt-4 align-items-center justify-content-end">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6">
                              <button className="btn btn-previous text-green">
                                PREVIOUS
                              </button>
                            </div>
                            <div className="col-lg-6">
                              <Link to="/app/groupsavings/joingroup2" className="btn login-submit">NEXT</Link>
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

export default JoinGroup1;
