import React, { useState, useEffect } from "react";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";

const PayCard = ({ transId, getCards, payCard, setActive }) => {
  const [cards, setCards] = useState([]);
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({ rad: "" });
  const dataInfo = async () => {
    setloading(true);
    const data = await getCards("/api/v1/user/card").then();
    setCards(data);
    setloading(false);
  };

  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      cardId: state.rad,
      transId,
    };

    await payCard(obj, "/api/v1/transfer/accountbycard", "/app/stash/otp");
  };

  return (
    <>
      {loading ? <Loader />:
      <div
        className="col-lg-6 flex-column flex-grow-1"
        style={{ position: "relative" }}
      >
        <div className="au-card h-100">
          <div className="au-card-inner">
            <h4 className="text-blue">Choose a Card to Pay with</h4>
            <div className="small-red-line"></div>
            <div className="mt-50">
              <form onSubmit={handleSubmit}>
                <div
                  className="payment-selection"
                  style={{ height: "100%", overflowY: "scroll" }}
                >
                  {/* {loading? } */}
                  {cards && cards.length > 0 ? (
                    cards.map((single, index) => {
                      return (
                        <div className="checker1" key={index}>
                          <input
                            type="radio"
                            name="select"
                            value={single.id}
                            checked={state.rad === single.id.toString()}
                            onChange={(e) => setState({ rad: e.target.value })}
                            className="opt"
                            id={`option-${index}`}
                          />
                          <label
                            htmlFor={`option-${index}`}
                            className={`option option-2`}
                          >
                            <div className="dot"></div>
                            <span className="px-2">{`${single?.bin}******${single?.pan}`}</span>
                          </label>
                        </div>
                      );
                    })
                  ) : (
                    <p>No cards registered</p>
                  )}
                </div>

                <div className="row mt-50 align-items-center justify-content-end">
                  <div
                    className="col-lg-8"
                    style={{ position: "absolute", bottom: "2rem" }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        {!loading && (
                          <button
                            onClick={() => setActive(1)}
                            className="btn btn-cancel text-danger"
                          >
                            Cancel
                          </button>
                        )}
                      </div>

                      {state?.rad.length > 0 ? (
                        <>
                          <div className="col-lg-6">
                            <button type="submit" className="btn login-submit">
                              NEXT
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>}
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
  getCards: usersActions.getInfo,
  payCard: usersActions.payCard,
};

export default connect(mapStateToProps, actionCreators)(PayCard);

// export default ;
