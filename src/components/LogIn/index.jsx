import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import invest from "../../assets/images/login-investyield.svg";
import backArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";
import { alertActions } from "../../redux/actions";
import Loader from "../../common/Loader";
const Index = (props) => {
  // const alert = props.alert;

  // eslint-disable-next-line
  const [showError, setShowError] = useState(true);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      email: formik.values.email,
      password: formik.values.password,
      platform: {
        source: "string",
        id: "string",
      },
    };

    props.login(obj);
    show();
    // onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invaild Email Format"),
    password: Yup.string()
      .required("Password is Required")
      .min(5, "Password is too short - should be 5 chars minimum."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  return (
    <>
      {props.loading && <Loader />}
      <>
        <main className="login-bg">
          <section className="login-bg-overlay">
            <div className="container-fluid reg-section-pin">
              <div className="row justify-content-around align-items-center mt-80 mt-resp-sm">
                <div className="col-xl-3 col-lg-4 mt-4">
                  <div className="d-flex flex-column">
                    <img
                      src={invest}
                      className="img-fluid logo-custom-size1"
                      alt="investyieldlogo"
                      style={{ height: "50px", width: "300px" }}
                    />
                    <p className="text-dark mt-4">
                      An automated goal-based savings solution for everyone.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 mt-4">
                  <div className="bg-white login-div p-4 shadow">
                    <div className="d-flex justify-content-between">
                      <a
                        href="/"
                        className="d-flex no-decor align-items-center"
                      >
                        <img
                          src={backArrow}
                          className="img-fluid"
                          alt="leftarrow"
                        />
                        <span className="px-2 text-dark">Back</span>
                      </a>
                      <h5 className="login-div-header">Sign In</h5>
                      <a
                        href="/a"
                        className="d-flex no-decor align-items-center resp-none"
                        style={{ visibility: "hidden" }}
                      >
                        <img
                          src={backArrow}
                          className="img-fluid"
                          alt="left-arrow"
                        />
                        <span className="px-2 text-dark">Back</span>
                      </a>
                    </div>
                    <div className="mt-5">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                          {props.alertType && (
                            <div className={`font-sm alert ${props.alertType}`}>
                              {props.message}
                            </div>
                          )}
                          <input
                            type="email"
                            name="email"
                            {...formik.getFieldProps("email")}
                            className="text-field"
                            placeholder="Email Address"
                          />
                          {formik.touched.email && formik.errors.email && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.email}
                            </p>
                          )}
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="password"
                            name="password"
                            {...formik.getFieldProps("password")}
                            className="text-field"
                            placeholder="Password"
                          />
                          {formik.touched.password &&
                            formik.errors.password && (
                              <p className="text-danger font-sm error1 font-weight-bold">
                                {formik.errors.password}
                              </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          {/* <div className="d-flex align-items-center">
                            <input
                              className="styled-checkbox"
                              type="checkbox"
                              value="value1"
                            />
                            <div className="px-2">
                              <p className="mb-0 login-pp">Remember me</p>
                            </div>
                          </div> */}
                          <div>
                            <Link
                              to="/auth/forgotpassword"
                              className="login-pp no-decor"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <div className="form-group mt-5">
                          <input
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                            className="btn login-submit"
                            value="LOGIN"
                          />
                        </div>
                        <div className="mt-5">
                          <p className="text-dark text-center">
                            Don't have an account?{" "}
                            <span>
                              <Link to="/auth/signup1" className="text-green">
                                Get started here
                              </Link>
                            </span>
                          </p>
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
    </>
  );
};

const mapStateToProps = (state) => {
  const { loggingIn, alertType, message } = state.authentication;
  // const { alert } = state;
  const loading = state.authentication.loading;

  return { loggingIn, message, alertType, loading };
};

const actionCreators = {
  login: usersActions.login,
  clear: alertActions.clear,
};

export default connect(mapStateToProps, actionCreators)(Index);
