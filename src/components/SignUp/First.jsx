import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import leftArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import { connect } from "react-redux";
import { usersActions } from "../../redux";

const First = (props) => {
  // const [loading, setloading] = useState(false);
  const [showError, setShowError] = useState(true);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    referral: "",
  };
  // eslint-disable-next-line
  const [state, setState] = useState(initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "FirstName is too short!")
      .max(50, "FirstName is too Long!")
      .required("FirstName is Required"),
    lastName: Yup.string()
      .min(2, "LastName is too Short!")
      .max(50, "Last Name is too Long!")
      .required("LastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    phoneNumber: Yup.string()
      .min(2, "Phone Number is too Short!")
      .max(50, "Phone Number is too Long!")
      .required("Phone Number is Required"),
    dob: Yup.string().required("Date of Birth Required"),
    referral: Yup.string().min(
      5,
      "Password is too short - should be 5 chars minimum."
    ),
  });
  // const alert = props.alert;
  const onSubmit = (values, onSubmitProps) => {
    // setloading(true);
    setShowError(true);
    const obj = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      phoneNumber: formik.values.phoneNumber,
      dob: formik.values.dob,
      platform: {
        source: "string",
        id: "string",
      },
      referral: formik.values.referral,
    };
    sessionStorage.setItem("number", JSON.stringify(obj.phoneNumber));
    props.register(obj, "/api/v1/identity/register", "/auth/signup2");

    // onSubmitProps.resetForm();
    show();
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  console.log(props.loading);
  console.log(props);

  const show = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <>
      {props.loading && <Loader />}
      <main>
        <section className="bg-light-blue reg-section">
          <div className="container-fluid px-0">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-xl-4">
                <div className="bg-white login-div p-5 shadow mt-5">
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/auth/login"
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
                    <h5 className="step-text">1/4</h5>
                  </div>
                  <div className="mt-4">
                    <h6 className="reg-p text-center mb-3">
                      Create an account, start saving and yielding.
                    </h6>
                    {showError
                      ? props.alertType && (
                          <div className={`font-sm alert ${props.alertType}`}>
                            {props.message}
                          </div>
                        )
                      : null}
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstName"
                          {...formik.getFieldProps("firstName")}
                          className="text-field"
                          placeholder="First Name"
                        />
                        {formik.touched.firstName &&
                          formik.errors.firstName && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.firstName}
                            </p>
                          )}
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          name="lastName"
                          {...formik.getFieldProps("lastName")}
                          className="text-field"
                          placeholder="Last Name"
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.lastName}
                          </p>
                        )}
                      </div>
                      <div className="form-group mt-3">
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
                          type="text"
                          name="phoneNumber"
                          {...formik.getFieldProps("phoneNumber")}
                          className="text-field"
                          placeholder="+234**********"
                        />
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber && (
                            <p className="text-danger font-sm error1 font-weight-bold">
                              {formik.errors.phoneNumber}
                            </p>
                          )}
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="date"
                          name="dob"
                          {...formik.getFieldProps("dob")}
                          className="text-field"
                          placeholder="Email Address"
                        />
                        {formik.touched.dob && formik.errors.dob && (
                          <p className="text-danger font-sm error1 font-weight-bold">
                            {formik.errors.dob}
                          </p>
                        )}
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          name="referral"
                          {...formik.getFieldProps("referral")}
                          className="text-field"
                          placeholder="Referral Code (Optional)"
                        />
                      </div>
                      <div className="form-group mt-5">
                        <input
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          className="btn login-submit"
                          value="NEXT"
                        />
                      </div>
                      <div className="mt-2">
                        <p>
                          Already have an account?{" "}
                          <span>
                            <Link to="/auth/login" className="text-green">
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
  );
};

const mapStateToProps = (state) => {
  const { loggingIn, loading, alertType, message } = state.registration;
  const { alert } = state;
  return { loggingIn, alert, loading, alertType, message };
};

const actionCreators = {
  register: usersActions.register,
};

export default connect(mapStateToProps, actionCreators)(First);
