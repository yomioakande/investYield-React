import React from "react";

const Unique= () => {
  return (
    <>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="au-card">
                <div className="au-card-inner">
                  <h4 className="text-blue">
                    Let’s help you save for a new home or rent
                  </h4>
                  <div className="small-red-line"></div>

                  <div className="mt-5">
                    <form action="">
                      <div className="mt-4">
                        <div className="form-group">
                          <label className="text-blue font-sm">
                            Start your goal with a befitting name
                          </label>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="text-field-profile"
                              placeholder="e.g Raymond's house"
                            />
                            <label
                              for="firstName"
                              className="font-sm position-absolute"
                              style={{left:"15px", top:"15%"}}
                            >
                              Goal Name
                            </label>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="text-blue weight-500">
                            What currency would you like to save in?
                          </label>
                          <div className="row">
                            {/* <div className="col-lg-6 col-xl-4">
                              <div className="form-group">
                                <label className="radio">
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="MADAME"
                                  />
                                  <span className="w-100 text-center">
                                    $US Dollars
                                  </span>
                                </label>
                              </div>
                            </div> */}
                            <div className="col-lg-6 col-xl-4">
                              <div className="form-group">
                                <label className="radio">
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="MONSIEUR"
                                  />
                                  <span className="text-center">₦ Naira</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <label for="Amount" className="text-blue weight-500">
                            Set a target amount for your home goal
                          </label>
                          <input
                            type="text"
                            className="text-field"
                            placeholder="Target Amount"
                          />
                        </div>

                        <div className="form-group">
                          <h5 className="text-blue">Choose a start date</h5>
                          <input type="date" className="text-field mt-2" />
                        </div>

                        <div className="form-group">
                          <h5 className="text-blue">Choose a target date</h5>
                          <input type="date" className="text-field mt-2" />
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
                                <a href={"/app/savings/create3"} className="btn login-submit">
                                  NEXT
                                </a>
                              </div>
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

export default Unique;
