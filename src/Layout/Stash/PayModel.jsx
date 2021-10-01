import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import PayBank from "./PayBank";
import PayCard from "./PayCard";
const PayModel = ({ transId, getDetails, addCard, payPurse }) => {
  const [active, setActive] = useState(1);
  const [details, setDetails] = useState({});
  useEffect(() => {
    (async function () {
      const data = await getDetails("/api/v1/user/virtual_acct");
      setDetails(data);
    })();
    // eslint-disable-next-line
  }, []);

  const payPurses = async () => {
    const obj = {
      transId,
    };

    // const data =
     await payPurse(obj, "/api/v1/transfer/fundbypurse");
  };

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
                        onClick={() => setActive(3)}
                      />
                      <label for="radio1">
                        <span>Pay with Card</span>
                      </label>
                    </div>
                    <div className="pay-method-radio mt-4">
                      <input
                        id="radio2"
                        name="radio"
                        type="radio"
                        onClick={() => payPurses()}
                      />
                      <label for="radio2">
                        <span>Pay with myPurse - Vibe Cash</span>
                      </label>
                    </div>
                    <div className="pay-method-radio mt-4">
                      <input
                        id="radio3"
                        name="radio"
                        type="radio"
                        onChange={() => setActive(2)}
                      />
                      <label for="radio3">
                        <span>Pay with Bank Transfer</span>
                      </label>
                    </div>

                    <div className="form-group mt-4">
                      <button
                        type="button"
                        onClick={() => addCard()}
                        className="au-btn-outline d-flex justify-content-center align-items-center"
                      >
                        Add a Card
                      </button>
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
          <PayBank details={details} setActive={setActive} />
        </>
      ) : active === 3 ? (
        <>
          <PayCard setActive={setActive} transId={transId} />
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
  payPurse: usersActions.payPurse,
  // addCard: usersActions.addCard,
  // getAccounts: usersActions.getAccounts,
};

// export default ;
export default connect(mapStateToProps, actionCreators)(PayModel);
