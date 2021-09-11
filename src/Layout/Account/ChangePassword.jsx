import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../common/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pin from "./ChangePin";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

import Style from "./style";

const ChangePassword = (props) => {
  const initialValues = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };
  const Schema = Yup.object().shape({
    oldPassword: Yup.string().required("Enter your Old Password"),
    password: Yup.string().required("This field is required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const success = () => {
    toast.success("Password successfully changed!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      oldPsswrd: formik.values.oldPassword,
      newPsswrd: formik.values.password,
      platform: {
        source: "string",
        id: "string",
      },
    };
    console.log("reaper", obj);
    // console.log(props.putPassword)
    props.putPassword(obj, "/api/v1/identity/password", success);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
    validateOnMount: true,
  });

  return (
    <>
      {props.loading && <Loader />}
      <ToastContainer autoClose={1000} hideProgressBar />

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="get-started-header title-2">My Portfolio</h5>
              <div className="small-red-line mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 px-0">
                    <p className="text-blue mt-3">
                      My Portfolio / Security Settings
                    </p>
                  </div>
                  <div className="col-lg-5 px-0 d-flex justify-content-between cg-3 ">
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link
                        to="/app/account/transfer"
                        className="btn btn-transfer"
                      >
                        Transfer Funds
                      </Link>
                    </div>
                    <div className="mt-2 flex-grow-1 w-auto">
                      <Link
                        to="/app/account/withdraw"
                        className="btn btn-withdraw"
                      >
                        Withdraw Funds
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="au-card h-100">
                <div className="au-card-inner">
                  <Style>
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Change Password
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Change Pin
                        </a>
                      </li>
                    </ul>
                  </Style>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      {props.message !== null
                        ? props.alertType && (
                            <div className={`font-sm alert ${props.alertType}`}>
                              {props.message}
                            </div>
                          )
                        : null}
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row mt-5">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">
                              Enter Old Password
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="password"
                                    className="text-field-profile2"
                                    placeholder="Password"
                                    name="oldPassword"
                                    {...formik.getFieldProps("oldPassword")}
                                  />
                                </div>
                                {formik.touched.oldPassword &&
                                  formik.errors.oldPassword && (
                                    <p className="text-danger font-sm error1 font-weight-bold">
                                      {formik.errors.oldPassword}
                                    </p>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">
                              Enter New Password
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="password"
                                    className="text-field-profile2"
                                    placeholder="Password"
                                    name="password"
                                    {...formik.getFieldProps("password")}
                                  />
                                </div>
                                {formik.touched.password &&
                                  formik.errors.password && (
                                    <p className="text-danger font-sm error1 font-weight-bold">
                                      {formik.errors.password}
                                    </p>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <h5 className="mb-0 text-blue">
                              Confirm New Password
                            </h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="password"
                                    className="text-field-profile2"
                                    placeholder="Password"
                                    name="confirmPassword"
                                    {...formik.getFieldProps("confirmPassword")}
                                  />
                                </div>
                                {formik.touched.confirmPassword &&
                                  formik.errors.confirmPassword && (
                                    <p className="text-danger font-sm error1 font-weight-bold">
                                      {formik.errors.confirmPassword}
                                    </p>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4 justify-content-end">
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    disabled={
                                      !formik.isValid || formik.isSubmitting
                                    }
                                    className="btn login-submit"
                                    value="UPDATE PASSWORD"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-3">
                            <h5 className="mb-0">Can’t remember Password?</h5>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <button className="btn btn-resend-otp">
                                    RESET PASSWORD
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <Pin />
                    </div>
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

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  putPassword: usersActions.confirmBvnReg,
};

export default connect(mapStateToProps, actionCreators)(ChangePassword);
