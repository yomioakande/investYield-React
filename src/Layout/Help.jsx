import React, { useState } from "react";

const Help = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h3 className="text-blue">Let’s help you save better</h3>
                  <div className="small-red-line"></div>
                  <div className="mt-5">
                    <>
                      {active === "1" ? (
                        <form action="">
                          <div className="mt-4">
                            <h5>
                              We would like some information from which will
                              help suggest better savings options tailored for
                              you.
                            </h5>
                            <div className="mt-5">
                              <label className="text-blue weight-500">
                                How frequently do you think of saving money?
                              </label>
                              <div className="form-group">
                                <input
                                  type="checkbox"
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-1"
                                  value="value1"
                                />
                                <label for="styled-checkbox-1">Daily</label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  type="checkbox"
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-2"
                                  value="value2"
                                />
                                <label for="styled-checkbox-2">Weekly</label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-3"
                                  type="checkbox"
                                  value="value3"
                                />
                                <label for="styled-checkbox-3">Monthly</label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-4"
                                  type="checkbox"
                                  value="value4"
                                />
                                <label for="styled-checkbox-4">Quarterly</label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-5"
                                  type="checkbox"
                                  value="value5"
                                />
                                <label for="styled-checkbox-5">Never</label>
                              </div>
                            </div>
                            <div className="row mt-50 align-items-center justify-content-end">
                              <div className="col-lg-5">
                                <div className="">
                                  <button
                                    onClick={() => setActive("2")}
                                    className="btn login-submit"
                                  >
                                    NEXT
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      ) : active === "2" ? (
                        <form action="">
                          <div className="mt-4">
                            <h5>
                              We would like some information from which will
                              help suggest better savings options tailored for
                              you.
                            </h5>
                            <div className="mt-5">
                              <label className="text-blue weight-500">
                                How much do you earn monthly in Naira?
                              </label>
                              <div className="form-group">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-1"
                                  type="checkbox"
                                  value="value1"
                                />
                                <label for="styled-checkbox-1">
                                  #60 100,000
                                </label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-2"
                                  type="checkbox"
                                  value="value2"
                                />
                                <label for="styled-checkbox-2">
                                  100,000 - 250,000
                                </label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-3"
                                  type="checkbox"
                                  value="value3"
                                />
                                <label for="styled-checkbox-3">
                                  251,000 - 500,000
                                </label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-4"
                                  type="checkbox"
                                  value="value4"
                                />
                                <label for="styled-checkbox-4">
                                  501,000 - 1,000,000
                                </label>
                              </div>
                              <div className="form-group mt-1">
                                <input
                                  name="interval"
                                  className="styled-checkbox"
                                  id="styled-checkbox-5"
                                  type="checkbox"
                                  value="value5"
                                />
                                <label for="styled-checkbox-5">
                                  &gt 1,000,000
                                </label>
                              </div>
                            </div>
                            <div className="row mt-50 align-items-center justify-content-end">
                              <div className="col-lg-8">
                                <div className="row align-items-center">
                                  <div className="col-lg-6">
                                    <button
                                      onClick={() => setActive("1")}
                                      className="btn  text-green"
                                    >
                                      PREVIOUS
                                    </button>
                                  </div>
                                  <div className="col-lg-6">
                                    <button
                                      onClick={() => setActive("3")}
                                      className="btn login-submit"
                                    >
                                      NEXT
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      ) : active === "3" ? (
                        <>
                          <form action="">
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What percentage of your monthly pay do you
                                  spend on expenses monthly?
                                </label>
                                <div className="form-group">
                                  <input
                                    type="checkbox"
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-1"
                                    value="value1"
                                  />
                                  <label for="styled-checkbox-1">
                                    &#60 10%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-2"
                                    type="checkbox"
                                    value="value2"
                                  />
                                  <label for="styled-checkbox-2">
                                    11 - 25%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-3"
                                    type="checkbox"
                                    value="value3"
                                  />
                                  <label for="styled-checkbox-3">
                                    26 - 50%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-4"
                                    type="checkbox"
                                    value="value4"
                                  />
                                  <label for="styled-checkbox-4">
                                    51 - 80%
                                  </label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-5"
                                    type="checkbox"
                                    value="value5"
                                  />
                                  <label for="styled-checkbox-5">100%</label>
                                </div>
                              </div>
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("2")}
                                        className="btn text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        className="btn login-submit"
                                        onClick={() => setActive("4")}
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                      ) : active === "4" ? (
                        <>
                          {" "}
                          <form action="">
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What percentage of your montly pay do you
                                  think you can save?
                                </label>
                                <div className="form-group">
                                  <input
                                    type="checkbox"
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-1"
                                    value="value1"
                                  />
                                  <label for="styled-checkbox-1">10%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-2"
                                    type="checkbox"
                                    value="value2"
                                  />
                                  <label for="styled-checkbox-2">25%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-3"
                                    type="checkbox"
                                    value="value3"
                                  />
                                  <label for="styled-checkbox-3">50%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-4"
                                    type="checkbox"
                                    value="value4"
                                  />
                                  <label for="styled-checkbox-4">75%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-5"
                                    type="checkbox"
                                    value="value5"
                                  />
                                  <label for="styled-checkbox-5">90%</label>
                                </div>
                              </div>
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("3")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("5")}
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                      ) : active === 5 ? (
                        <>
                          <form action="">
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  Do you think you are saving enough money
                                  towards your retirement?
                                </label>
                                <div className="form-group">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-1"
                                    type="checkbox"
                                    value="value1"
                                  />
                                  <label for="styled-checkbox-1">Yes</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-2"
                                    type="checkbox"
                                    value="value2"
                                  />
                                  <label for="styled-checkbox-2">No</label>
                                </div>
                              </div>
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("4")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("6")}
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                      ) : active === 6 ? (
                        <>
                          <form action="">
                            <div className="mt-4">
                              <h5>
                                We would like some information from which will
                                help suggest better savings options tailored for
                                you.
                              </h5>
                              <div className="mt-5">
                                <label className="text-blue weight-500">
                                  What is your networth growth projection in 12
                                  months from now?
                                </label>
                                <div className="form-group">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-1"
                                    type="checkbox"
                                    value="value1"
                                  />
                                  <label htmlFor="styled-checkbox-1">15%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-2"
                                    type="checkbox"
                                    value="value2"
                                  />
                                  <label for="styled-checkbox-2">30%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-3"
                                    type="checkbox"
                                    value="value3"
                                  />
                                  <label for="styled-checkbox-3">60%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-4"
                                    type="checkbox"
                                    value="value4"
                                  />
                                  <label for="styled-checkbox-4">85%</label>
                                </div>
                                <div className="form-group mt-1">
                                  <input
                                    name="interval"
                                    className="styled-checkbox"
                                    id="styled-checkbox-5"
                                    type="checkbox"
                                    value="value5"
                                  />
                                  <label for="styled-checkbox-5">100%</label>
                                </div>
                              </div>
                              <div className="row mt-50 align-items-center justify-content-end">
                                <div className="col-lg-8">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <button
                                        onClick={() => setActive("5")}
                                        className="btn  text-green"
                                      >
                                        PREVIOUS
                                      </button>
                                    </div>
                                    <div className="col-lg-6">
                                      <button
                                        disabled
                                        className="btn login-submit"
                                      >
                                        NEXT
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                      ) : null}
                    </>
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

export default Help;
