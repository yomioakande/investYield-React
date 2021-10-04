import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";

const PayCard = ({ transId, getCards, payCard, setActive }) => {
  const [cards, setCards] = useState([]);
  // eslint-disable-next-line
  //   const [rad, setRad] = useState("");
  const [state, setState] = useState({ rad: "" });
  const dataInfo = async () => {
    const data = await getCards("/api/v1/user/card").then();
    setCards(data);
  };

  useEffect(() => {
    dataInfo();
    // eslint-disable-next-line
  }, []);

  //   const initialValues = {
  //     cardId: "",
  //   };

  //   const validationSchema = Yup.object({
  //     cardId: Yup.string().required("Enter a Plan name"),
  //   });

  //   const onSubmit = (values, onSubmitProps) => {
  //     // setloading(true);
  //     // eslint-disable-next-line
  //     const obj = {
  //       cardId: values.cardId,
  //     };
  //     // sessionStorage.setItem("savingsInfo", JSON.stringify(obj));
  //     // window.location.href = `/app/savings/create3/${useLink}`;
  //     onSubmitProps.resetForm();
  //     onSubmitProps.setSubmitting(false);
  //   };

  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //     validateOnMount: true,
  //   });
  //   console.log(formik.values);
  //   console.log(rad, "rad");
  //   console.log("STATE", state);
  //   console.log("transcorp", cards);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      cardId: state.rad,
      transId,
    };
    // const data =
    await payCard(obj, "/api/v1/transfer/accountbycard", "/app/stash/otp");
    // console.log("submit", obj);
    // console.log("reverse", data);
  };
  return (
    <>
      <div className="col-lg-6 flex-column flex-grow-1">
        <div className="au-card h-100">
          <div className="au-card-inner">
            <h4 className="text-blue">Choose a Card to Pay with</h4>
            <div className="small-red-line"></div>
            <div className="mt-50">
              <form onSubmit={handleSubmit}>
                <div
                  className="payment-selection"
                  style={{ height: "100vh", overflowY: "scroll" }}
                >
                  {cards && cards.length > 0
                    ? cards.map((single, index) => {
                        return (
                          <div className="checker1" key={index}>
                            <input
                              type="radio"
                              name="select"
                              value={single.id}
                              checked={state.rad === single.id.toString()}
                              onChange={(e) =>
                                setState({ rad: e.target.value })
                              }
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
                    : null}
                </div>

                <div className="row mt-50 align-items-center justify-content-end">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6">
                        <button
                          onClick={() => setActive(1)}
                          className="btn btn-cancel text-danger"
                        >
                          Cancel
                        </button>
                      </div>

                      {Object.keys(state).length > 0 ? (
                        <>
                          <div className="col-lg-6">
                            <button
                              type="submit"
                              //   to="/app/savings/otp"
                              className="btn login-submit"
                            >
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
      </div>
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
  //   addCard: usersActions.addCard,
  //   deleteCards: usersActions.deleteData,
};

export default connect(mapStateToProps, actionCreators)(PayCard);

// export default ;
