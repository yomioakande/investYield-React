import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css";
import { addAsterik } from "../../helpers";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import Loader from "../../common/Loader";
// import { useSelector } from "react-redux";
// const numOfCakes = useSelector((state) => state);

const Second = (props) => {
  // const [loading, setloading] = useState(false);
  const [showError, setShowError] = useState(true);
  const getNumber = JSON.parse(sessionStorage.getItem("number")) || null;
  //eslint-disable-next-line
  const [number, setNumber] = useState(addAsterik(getNumber));

  const initialValues = {
    token: "",
  };

  const validationSchema = Yup.object({
    token: Yup.string().required("OTP is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // setloading(true);
    const userID = JSON.parse(sessionStorage.getItem("userReg")).id || null;

    const obj = {
      id: userID,
      token: formik.values.token,
      platform: {
        source: "string",
        id: "string",
      },
    };

   
    props.register2(
      obj,
      "/api/v1/identity/validateregistrationotp",
      "/auth/signup3"
    );
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  // const alert = props.alert;
  const resendOtp = () => {
    const userID = JSON.parse(sessionStorage.getItem("userReg")).id || null;
    const resendObj = {
      id: userID,
      operationType: 1,
    };
 
    props.resend(resendObj, "/api/v1/util/resendotp");
  };
  // eslint-disable-next-line
  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 2500);
  };

  return (
    <>
      {props.loading && <Loader />}
      <main>
        <section className="bg-light-blue reg-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-xl-4">
                <div className="bg-white login-div p-5 shadow mt-5">
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/auth/signup1"
                      className="d-flex no-decor align-items-center"
                    >
                      <img
                        src={leftArrow}
                        className="img-fluid"
                        alt="left-arrow"
                      />
                      <span className="px-2 text-dark">Back</span>
                    </Link>
                    <h5 className="login-div-header">Get Started</h5>
                    <h5 className="step-text">2/4</h5>
                  </div>
                  <div className="mt-5">
                    <h6 className="reg-p mb-3">
                      Please enter the One-Time Password (OTP) that has been
                      sent to the phone number
                      <span className="reg-p-number"> {number} </span>
                    </h6>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-4">
                        {showError
                          ? props.message && (
                              <div
                                className={`font-sm alert ${props.alertType}`}
                              >
                                {props.message}
                              </div>
                            )
                          : null}
                        <input
                          type="text"
                          className="text-field"
                          name="token"
                          {...formik.getFieldProps("token")}
                          placeholder="Enter OTP"
                        />
                        {formik.touched.token && formik.errors.token && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.token}
                          </p>
                        )}
                      </div>
                      <div className="form-group mt-50">
                        <input
                          type="submit"
                          // disabled={!formik.isValid || formik.isSubmitting}
                          className="btn login-submit"
                          value="NEXT"
                        />
                      </div>
                      <div className="mt-4">
                        <h6 className="reg-p text-center">
                          Did not get an OTP?
                        </h6>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => resendOtp()}
                          className="btn btn-resend-otp"
                        >
                          Resend OTP
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message, user } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message, user };
};

const actionCreators = {
  register2: usersActions.register2,
  resend: usersActions.resend,
  //   login: usersActions.login,
};

export default connect(mapStateToProps, actionCreators)(Second);
