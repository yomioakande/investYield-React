import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import invest from "../../assets/images/login-investyield.svg";
import backArrow from "../../assets/images/left-arrow.svg";
import "../../assets/css/style.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux/actions";

const Index = (props) => {
  const alert = props.alert;
  const initialValues = {
    userID: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    const obj = {
      userId: values.userID,
      platform: {
        source: "string",
        id: "string",
      },
    };
  
    props.register(
      obj,
      "/api/v1/identity/resetpasswordtoken",
      "/auth/forgottoken"
    );
    
    alert?.type && onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    userID: Yup.string().required("Email or Phone Number is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
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
                  <Link
                    to="/auth/login"
                    className="d-flex no-decor align-items-center"
                  >
                    <img
                      src={backArrow}
                      className="img-fluid"
                      alt="leftarrow"
                    />
                    <span className="px-2 text-dark">Back</span>
                  </Link>
                  <h5 className="login-div-header">Forgot Password</h5>
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
                      {alert.message && (
                        <div className={`font-sm alert ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}
                      <input
                        type="text"
                        name="userID"
                        {...formik.getFieldProps("userID")}
                        className="text-field"
                        placeholder="Enter your Email Address or Phone number"
                      />
                      {formik.touched.userID && formik.errors.userID && (
                        <p className="text-danger font-sm error1 font-weight-bold">
                          {formik.errors.userID}
                        </p>
                      )}
                    </div>

                    <div className="form-group mt-5">
                      <input
                        type="submit"
                        // disabled={!formik.isValid || formik.isSubmitting}
                        className="btn login-submit"
                        value="NEXT"
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
  );
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { alert } = state;
  return { loggingIn, alert };
};

const actionCreators = {
  register: usersActions.register,
};

export default connect(mapStateToProps, actionCreators)(Index);
