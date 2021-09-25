import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";

const PayModel = ({ getDetails }) => {
  const [active, setActive] = useState(1);
  const [details, setDetails] = useState({});
  useEffect(() => {
    (async function () {
      const data = await getDetails("/api/v1/user/virtual_acct");
      console.log("tems orange", data);
      setDetails(data);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {active === 1 ? (
        <>
          {" "}
          <div className="col-lg-6 col-md-6 d-flex flex-column">
            <div className="au-card position-relative px-0 flex-grow-1">
              <div className="au-card-inner">
                <div className="px-4 px-lg-5">
                  <h3 className="title-2 tm-b-5">Select a payment method</h3>
                </div>
                <div className="px-4 px-lg-5 mt-5">
                  <form action="">
                    <div className="pay-method-radio">
                      <input
                        id="radio1"
                        name="radio"
                        type="radio"
                        onChange={() => setActive(2)}
                      />
                      <label for="radio1">
                        <span>Pay with Card</span>
                      </label>
                    </div>
                    <div className="pay-method-radio mt-4">
                      <input id="radio2" name="radio" type="radio" />
                      <label for="radio2">
                        <span>Pay with myPurse - Vibe Cash</span>
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
                        href="*"
                        className="au-btn-outline d-flex justify-content-center align-items-center"
                      >
                        Add a Card
                      </a>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-lg-8 mt-5">
                        <div className="d-flex justify-content-between">
                          <div className="col-lg-6 px-0">
                            <button
                              type="button"
                              onClick={() => setActive(1)}
                              className="au-btn iy-btn-secondary text-danger"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col-lg-6 px-0">
                            <a href="*" className="au-btn iy-btn-primary">
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
        </>
      ) : active === 2 ? (
        <>
          <div className="col-lg-6 flex-column flex-grow-1">
            <div className="au-card h-100">
              <div className="au-card-inner">
                <h4 className="text-blue">Pay with bank transfer</h4>
                <div className="small-red-line"></div>

                <div className="mt-50">
                  <div className="payment-selection">
                    <div className="bank-details">
                      <p>Account Name:</p>
                      <h4>{details.accountName}</h4>
                    </div>
                    <div className="bank-details">
                      <p>Account Number:</p>
                      <h3>{details.accountNo}</h3>
                    </div>
                    <div className="bank-details">
                      <p>Bank:</p>
                      <h4>{details.bank}</h4>
                    </div>
                    <div className="row mt-50 align-items-center justify-content-end">
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6">
                            <button
                              className="btn btn-cancel text-danger"
                              onClick={() => setActive(1)}
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <button className="btn login-submit">NEXT</button>
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
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { alert } = state;
  const username = state.authentication.user;
  const { loading } = state.registration;
  return { alert, username, loading };
};

const actionCreators = {
  getDetails: usersActions.getInfo,
  // addCard: usersActions.addCard,
  // getAccounts: usersActions.getAccounts,
};

// export default ;
export default connect(mapStateToProps, actionCreators)(PayModel);
