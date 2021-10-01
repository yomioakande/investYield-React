import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import leftArrow from "../../assets/images/left-arrow.svg";
import check from "../../assets/images/check.svg";
import "../../assets/css/style.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

import Loader from "../../common/Loader";

const Third = (props) => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // eslint-disable-next-line
  const [state, setState] = useState(initialValues);

  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    const userID = JSON.parse(sessionStorage.getItem("userReg")).id || null;
    const obj = {
      id: userID,
      password: formik.values.password,
      platform: {
        source: "string",
        id: "string",
      },
    };
    console.log(obj);
    props.register3(obj, "/api/v1/identity/createpassword", "/createpin");

    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnMount: true,
  });

  const alert = props.alert;
  console.log(formik.values);

  return (
    <>
      {props.loading && <Loader />}
      <main>
        <section className="bg-light-blue reg-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5">
                <div className="bg-white login-div p-5 shadow mt-5">
                  <div className="d-flex justify-content-between">
                    <a
                      href="/auth/signup2"
                      className="d-flex no-decor align-items-center"
                    >
                      <img
                        src={leftArrow}
                        className="img-fluid"
                        alt="left-arrow"
                      />
                      <span className="px-2 text-dark">Back</span>
                    </a>
                    <h5 className="login-div-header">Get Started</h5>
                    <h5 className="step-text">3/4</h5>
                  </div>
                  <div className="otp-verified px-4 py-3 mt-4 d-flex justify-content-between align-items-center">
                    <p className="mb-0 otp-verified-text">
                      OTP successfully verified
                    </p>
                    <img src={check} className="img-fluid" alt="Check" />
                  </div>
                  <div className="mt-4">
                    <h6 className="reg-p mb-3">
                      Create a password for signing in.
                    </h6>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group mt-3">
                        {alert.message && (
                          <div className={`font-sm alert ${alert.type}`}>
                            {alert.message}
                          </div>
                        )}
                        <input
                          type="password"
                          className="text-field"
                          name="password"
                          {...formik.getFieldProps("password")}
                          placeholder="Create Password"
                        />

                        {formik.touched.password && formik.errors.password && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.password}
                          </p>
                        )}
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="password"
                          className="text-field"
                          name="confirmPassword"
                          {...formik.getFieldProps("confirmPassword")}
                          placeholder="Confirm Password"
                        />

                        {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.confirmPassword}
                            </p>
                          )}
                      </div>
                      <div className="mt-4">
                        <p className="agree-text">
                          By clicking on “Sign Up”, you agree to investYield’s{" "}
                          <a href="/">Terms & Conditions</a> and{" "}
                          <a href="/">Privacy Policy</a>
                        </p>
                      </div>
                      <div className="form-group mt-5">
                        <input
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          className="btn login-submit"
                          value="SIGN UP"
                        />
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
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  register3: usersActions.register3,
};

export default connect(mapStateToProps, actionCreators)(Third);
