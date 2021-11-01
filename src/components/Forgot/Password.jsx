import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/css/style.css";
import { connect } from "react-redux";
import { usersActions } from "../../redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../common/Loader";
const PasswordForgot = (props) => {
  const alert = props.alertType;
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // eslint-disable-next-line
  const [state, setState] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    confirmPassword: Yup.string()
      .required("This field is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
  });

  const success = () => {
    toast.success("Your Password has been successfully saved", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    const getID = JSON.parse(sessionStorage.getItem("userReg")).id || null;
    const forgotToken =
      JSON.parse(sessionStorage.getItem("forgotToken")) || null;
    const obj = {
      id: getID,
      token: forgotToken,
      password: formik.values.password,
      platform: {
        source: "string",
        id: "string",
      },
    };

    props.register(
      obj,
      "/api/v1/identity/resetpassword",
      "/auth/login",
      success
    );
    // onSubmitProps.resetForm();
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
      <main>
        <section className="bg-light-blue reg-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5">
                <div className="bg-white login-div p-5 shadow mt-5">
                  <div className="d-flex justify-content-between">
                    <h5 className="login-div-header">Reset Password</h5>
                  </div>
                  {props.message && (
                    <div className={`font-sm ${alert}`}>{props.message}</div>
                  )}
                  <div className="mt-4">
                    <h6 className="reg-p mb-3">
                      Create a password for signing in.
                    </h6>
                    <form onSubmit={formik.handleSubmit}>
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={`${showPassword ? "type" : "password"}`}
                          className="text-field"
                          name="password"
                          pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}"
                          title="Must contain at least one number, one symbol one uppercase and lowercase letter, and at least 8 or more characters"
                          {...formik.getFieldProps("password")}
                          placeholder="Create Password"
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                          }}
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          className={`fas ${
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          } `}
                        ></i>

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
                          pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}"
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
                      <div className="form-group mt-5">
                        <input
                          type="submit"
                          className="btn login-submit"
                          value="NEXT"
                        />
                      </div>
                    </form>
                    <ToastContainer autoClose={1000} hideProgressBar />
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
  const { alertType, message, loading } = state.registration;
  return { alertType, message, loading };
};

const actionCreators = {
  register: usersActions.register,
};

export default connect(mapStateToProps, actionCreators)(PasswordForgot);
